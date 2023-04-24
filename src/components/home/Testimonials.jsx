import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import quote from '../../assets/home/quote-svgrepo-com.png'

const Testimonials = () => {
  return (
    <div className='my-32'>
        <div className='w-[87%] mx-auto border-8 relative md:h-[22rem] flex flex-col items-center py-4 md:py-0 '>
            <div className='md:-top-36 md:left-6 w-[95%] md:absolute flex items-end text-white'>
                <img src="https://gymate-iota.vercel.app/static/media/testimonial-new.4d49a58e5ec2cf3ec91a.jpg" alt="" className='rounded-tr-[10rem] w-0 md:w-96' />
                <div className=' p-9 px-5 bg-testi'>
                    <img src={quote} className='h-16 w-16 opacity-70 mb-3' alt="" />
                    <p className='font-medium italic mb-2'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita ab veniam enim modi totam soluta reprehenderit, dolor eaque adipisci, minima ratione aliquam laudantium a beatae voluptatibus voluptatum incidunt optio!"
                    </p>
                    <div className='flex justify-between items-center'>
                        <div className='font-medium'>
                            <h5 className='text-xl'>
                                Daji Veni
                            </h5>
                            <p>
                                Ventriloquist
                            </p>
                        </div>
                        <div className='flex space-x-4 items-center'>
                            <div className='bg-white text-black p-1 px-2.5 hover:bg-[#ff0336] hover:text-white cursor-pointer transition-all ease-in-out duration-500'><ArrowLeftIcon className='h-6 ' /></div>
                            <div className='bg-white text-black p-1 px-2.5 hover:bg-[#ff0336] hover:text-white cursor-pointer transition-all ease-in-out duration-500'><ArrowRightIcon className='h-6' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials