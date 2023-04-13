import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const WWA = () => {
  return (
    <div className='my-10'>
        <div className='w-[94%] mx-auto flex flex-col-reverse md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10 text-center md:text-left'>
            <div className='flex-1 py-3'>
                <h5 className='whowe mx-auto md:mx-0 text-white w-56 p-2 bg-contain font-semibold text-center bg-center mb-5 uppercase'>WHO WE ARE</h5>
                <h2 className='text-4xl font-bold mb-3 '>
                    Take Your Health and Body to the Next Level
                </h2>
                <p className='text-gray-600 font-medium mb-8'>
                Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                </p>

                <div className='text-center flex flex-col md:flex-row items-center justify-between mb-12 '>
                    <div className='flex items-center space-y-5 flex-col px-2 '>
                        <img src="https://gymate-iota.vercel.app/static/media/weightlifter.fdb39166bd9fd960aac2.png" className='w-16 object-contain' alt="" />
                        <div className='text-lg font-bold'>
                            PROFESSIONAL <br /> TRAINERS
                        </div>
                    </div>
                    <div className='flex items-center space-y-5 flex-col px-2'>
                        <img src="https://gymate-iota.vercel.app/static/media/equpments.f102757b82b68f55f831.png" className='w-16 object-contain' alt="" />
                        <div className='text-lg font-bold'>
                            MODERN <br /> EQUIPMENTS
                        </div>
                    </div>
                    <div className='flex items-center space-y-5 flex-col px-2'>
                        <img src="https://gymate-iota.vercel.app/static/media/gym.377b234bd8a2adfc4675.png" className='w-16 object-contain' alt="" />
                        <div className='text-lg font-bold'>
                            FANCY GYM <br /> MACHINES
                        </div>
                    </div>
                </div>

                <div className="relative group w-44 cursor-pointer mx-auto md:mx-0">
                    <div className="flex h-12 w-44 items-center space-x-2 justify-center font-semibold bg-gray-600 group-hover:bg-[#ff0336] text-white cursor-pointer">
                        <span>OUR CLASSES</span>
                        <ArrowRightIcon className="h-4 text-white font-semibold " />
                    </div>
                    <div className="h-12 w-44 border border-gray-900 absolute translate-x-5 -translate-y-3 group-hover:translate-x-0 group-hover:-translate-y-0 top-0 transition-all ease-in duration-300 " />
                </div>

            </div>

            <div className='flex-1 bg-[#ff0336]/60 rounded-full py-1'>
                <img src="https://gymate-iota.vercel.app/static/media/girl-run.2823e00263d26d8f8230.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default WWA