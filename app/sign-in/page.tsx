import { auth } from '@/auth'
import Landing from '@/components/landing'
import { LoginButton } from '@/components/login-button'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="mb-8"> {/* Add margin to the top and bottom */}
        <Landing />
      </div>
      <div>
        <LoginButton />
      </div>
    </div>
  )
}