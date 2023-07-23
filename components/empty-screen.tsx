import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Crop Recommendations',
    message: `Which crops are suitable for Almaty region?`
  },
  {
    heading: 'Pest Control',
    message: 'What are the most effective organic methods for pest control in agriculture? \n'
  },
  {
    heading: 'Soil Health',
    message: `How can farmers improve soil health and fertility to increase crop yields? \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to CultivaAI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          CultivaAI: AI-powered farming companion for personalized crop advice, real-time insights, and increased profitability.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}