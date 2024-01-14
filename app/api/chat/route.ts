import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json
  const userId = (await auth())?.user.id

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401
    })
  }

  if (previewToken) {
    configuration.apiKey = previewToken
  }
  // Modify the initial system message (prompt) that only the AI model sees.
  const initialPrompt = {
    role: 'system',
    content: `You are a seasoned software developer specializing in financial analysis. Your task is to write Python code for analyzing stock data, including calculations for various financial metrics. YOU WRITE FULL CODE, NOT A PLACEHOLDERS, FULL CODE. Additionally, debug any potential errors in the provided code and make improvements where necessary. So, let's start with your question:`,
  };
  // Add the initial system message to the messages array
  messages.unshift(initialPrompt);
  const res = await openai.createChatCompletion({
    model: 'gpt-4',
    messages,
    temperature: 0.2,
    stream: true
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[1].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
      await kv.hmset(`chat:${id}`, payload)
      await kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`
      })
    }
  })

  return new StreamingTextResponse(stream)
}