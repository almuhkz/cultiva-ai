import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import bg from '../../public/back10.gif'
import { NdviButton } from '@/components/ndvi-button'
import { LoginButtonGoogle } from '@/components/login-button-google'
import { PredictButton } from '@/components/predict-button'



export default async function SignInPage() {
  const session = await auth()

  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat xs:bg-green" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="relative bg-white mt-4 px-6 shadow-xl ring-1 ring-gray-900/5 mx-auto xl:max-w-2xl xl:rounded-lg opacity-[.9]" >
        <div className="mx-auto max-w-xl">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
              <div className="">
                <div className='animate-fade-up'
                  style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                >
                  <div className='font-bold text-4xl text-center pt-4'>
                    CultivaAI
                  </div>
                </div>
                <p
                  className="mt-2 animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                  style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                  Ваш интеллектуальный набор инструментов для сельского хозяйства
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-4'>
        <div className="flex-auto p-4 sm:w-1/3">
          <div className="relative bg-white mt-10 px-6 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl xl:rounded-lg opacity-[.9]" >
            <div className="mx-auto max-w-xl">
              <div className="divide-y divide-gray-300/50">
                <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
                  <div className="">
                    <div className='animate-fade-up'
                      style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                    >
                      <div className='font-bold text-4xl text-center pt-4'>
                        Чат-Бот
                      </div>
                    </div>
                    <p
                      className="mt-2 animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                      style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                    >
                      CultivaAI - продвинутый помощник для фермеров в Казахстане. Он предоставляет точные ответы на вопросы о сельском хозяйстве, помогает с выбором культурных растений и борьбой с вредителями, а также предоставляет информацию о рынке и рекомендации для оптимизации вашего сельскохозяйственного бизнеса. Цель - поддержать вас в принятии обоснованных решений и успешном ведении предприятия.
                    </p>
                    <div className='grid justify-items-center p-4' >
                      <LoginButtonGoogle></LoginButtonGoogle>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4 sm:w-1/3">
          <div className="relative bg-white mt-10 px-6 pb-2 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl xl:rounded-lg opacity-[.9]" >
            <div className="mx-auto max-w-xl">
              <div className="divide-y divide-gray-300/50">
                <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
                  <div className='animate-fade-up'
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                  >

                    <div className='font-bold text-4xl text-center pt-4'>
                      Карта NDVI
                    </div>
                  </div>
                  <p
                    className="mt-2 animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                  >

                    Используйте уникальную интерактивную карту вегетативности всего мира! Она предоставляет актуальные данные о растительности в реальном времени на разных участках земли. Воспользуйтесь индексом NDVI для оценки плотности и здоровья растительности на территории с помощью спутниковых данных. Этот мощный инструмент поможет вам в исследованиях, принятии решений и анализе в областях, связанных с растительностью.
                  </p>
                  <div className='grid justify-items-center' >
                    <NdviButton></NdviButton>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4 sm:w-1/3">
          <div className="relative bg-white mt-10 px-6 pb-2 shadow-xl ring-1 ring-gray-900/5 xl:mx-auto xl:max-w-2xl xl:rounded-lg opacity-[.9]" >
            <div className="mx-auto max-w-xl">
              <div className="divide-y divide-gray-300/50">
                <div className="space-y-6 py-5 text-base leading-7 text-gray-600">
                  <div className='animate-fade-up'
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
                  >

                    <div className='font-bold text-4xl text-center pt-4'>
                      Болезни Растений
                    </div>
                  </div>
                  <p
                    className="mt-2 animate-fade-up text-center text-gray-500 opacity-75 xs:text-sm sm:text-base md:text-lg"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                  >

                    Этот инструмент анализирует фото растений и может предположить название возможных болезней. Он станет полезным помощником в уходе за растениями, позволяя вам своевременно реагировать на проблемы на ваших полях.
                  </p>
                  <div className='grid justify-items-center' >
                    <PredictButton></PredictButton>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}