import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to CultivaAI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          CultivaAI: AI-powered farming companion for personalized crop advice, real-time insights, and increased profitability.
        </p>
        <p className="leading-normal text-muted-foreground">
          Introducing CultivaAI, your intelligent farming companion powered by the latest advancements in generative AI and comprehensive agricultural knowledge. CultivaAI is designed to assist farmers like you in making informed decisions and maximizing your crop yields. With its unique combination of GPT-powered natural language understanding and a robust knowledge base, CultivaAI offers personalized advice and recommendations tailored to your specific farming needs.
        </p>
        <p className="leading-normal text-muted-foreground">
        CultivaAI serves as a virtual agricultural expert, capable of answering a wide range of queries related to crop planting, cultivation techniques, and profitability assessments. Whether you're a seasoned farmer or a beginner, CultivaAI will provide you with valuable insights and practical guidance every step of the way.
        </p>
      </div>
    </div>
    <LoginButton></LoginButton>
    
    </div>
  )
}