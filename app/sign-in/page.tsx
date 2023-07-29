import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { LoginButtonGoogle } from '@/components/login-button-google'

import { redirect } from 'next/navigation'
import bg from '../../public/bg.jpg'
import logo from '../../public/lg.png'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="h-screen bg-cover bg-no-repeat xs:bg-center xs:bg-contain" style={{ backgroundImage: `url(${bg.src})`, marginTop: -64 }}>
      <div className="relative bg-white px-6 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl xl:rounded-lg opacity-[.9] mt-24" >
        <div className="mx-auto max-w-xl">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
              <div className="">
                <div className='animate-fade-up'
                  style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                >
                  <img className='mx-auto xs:w-40 sm:w-48 md:w-56' src={logo.src} alt="CultivaAI logo" />
                  <div className='font-bold text-3xl xs:text-4xl sm:text-5xl md:text-5xl text-center pt-4'>
                    Ваш интеллектуальный ассистент в сельском хозяйстве
                  </div>
                </div>
                <p
                  className="mt-6 animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                  style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                  Работает на основе передового искусственного интеллекта. Получайте индивидуальные рекомендации, данные о погоде в режиме реального времени и оптимизируйте свои методы ведения сельского хозяйства для достижения максимальной урожайности и рентабельности.
                </p>
              </div>
              <div className='flex flex-col items-center mx-auto xs:mt-4'>
                <LoginButtonGoogle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}