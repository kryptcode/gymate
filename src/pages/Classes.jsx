import data from '../constants/classes.json'
import Header from '../components/Header'
import { ClockIcon, UserIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'

const Classes = () => {
  return (
    <div>
        <Header />
        <div className=" bg-black h-56 flex flex-col justify-end pb-8 bg-[url('https://gymate-iota.vercel.app/static/media/banner.6fee27339c0374683aa5.jpg')] bg-contain bg-right bg-no-repeat mb-32 ">
            <h3 className="text-center text-white text-4xl font-bold">
                Classes
            </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 w-[92%] md:w-[80%] mx-auto gap-8 mb-16'>
            {
                data.map((bin) => (
                    <div className='h-[30rem] rounded-lg relative group shadow-lg'>
                        <img src={bin.bg} className='h-full rounded-lg grayscale group-hover:grayscale-0 w-full object-cover object-center' alt="" />

                        <div className='absolute bottom-10 left-4 text-white'>
                            <h2 className='text-3xl font-bold'>{bin.name}</h2>
                            <div className='h-1 w-12 bg-[#ff0336] mb-2 ' />
                            <div className='font-medium flex space-x-4 mb-7'>
                                <div className='flex space-x-2 items-center'>
                                    <UserIcon className='h-5' />
                                    <span>{bin.trainer}</span>
                                </div>

                                <div className='flex space-x-2 items-center'>
                                    <ClockIcon className='h-5' />
                                    <span>{bin.time2}</span>
                                </div>
                            </div>
                            <button className='bg-white text-black font-semibold px-5 p-2 hover:scale-105'>
                                JOIN NOW
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        <Footer />
    </div>
  )
}

export default Classes