import { MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  return (
    <div className='flex-[2] '>
        <div className='flex w-full mb-8'>
            <input type="text" className='border w-full border-r-0 p-2 rounded-l-lg outline-none font-semibold' placeholder='Search...' />
            <div className='p-2 text-white bg-[#ff0336] rounded-r-lg cursor-pointer '>
                <MagnifyingGlassIcon className='h-7' />
            </div>
        </div>

        <div className='bg-gray-200/80 p-3'>
            <h5 className='text-xl font-semibold mb-1'>Categories</h5>
            <div className='h-1 w-12 bg-[#ff0336] mb-5' />

            <div className='text-gray-700 font-medium'>
                <div className='flex items-center justify-between border-b-2 py-4 hover:text-[#ff0336] cursor-pointer '>
                    <div className='flex space-x-3 items-center'>
                    <ChevronRightIcon className='h-5' />
                    <p>
                        Body Building
                    </p>
                    </div>
                    <div>(4)</div>
                </div>
                <div className='flex items-center justify-between border-b-2 hover:text-[#ff0336] cursor-pointer py-4 '>
                    <div className='flex space-x-3 items-center'>
                    <ChevronRightIcon className='h-5' />
                    <p>
                        Boxing
                    </p>
                    </div>
                    <div>(4)</div>
                </div>
                <div className='flex items-center justify-between border-b-2 hover:text-[#ff0336] cursor-pointer py-4 '>
                    <div className='flex space-x-3 items-center'>
                    <ChevronRightIcon className='h-5' />
                    <p>
                        Crossfit
                    </p>
                    </div>
                    <div>(4)</div>
                </div>
                <div className='flex items-center justify-between border-b-2 hover:text-[#ff0336] cursor-pointer py-4 '>
                    <div className='flex space-x-3 items-center'>
                    <ChevronRightIcon className='h-5' />
                    <p>
                        Fitness
                    </p>
                    </div>
                    <div>(4)</div>
                </div>
                <div className='flex items-center justify-between border-b-2 hover:text-[#ff0336] cursor-pointer py-4 '>
                    <div className='flex space-x-3 items-center'>
                    <ChevronRightIcon className='h-5' />
                    <p>
                        Meditation
                    </p>
                    </div>
                    <div>(4)</div>
                </div>
                <div className='flex items-center justify-between border-b-2 hover:text-[#ff0336] cursor-pointer py-4 '>
                    <div className='flex space-x-3 items-center'>
                    <ChevronRightIcon className='h-5' />
                    <p>
                        Yoga
                    </p>
                    </div>
                    <div>(4)</div>
                </div>
            </div>
        </div>

        <div className='bg-gray-200/80 p-3 mt-16'>
            <h5 className='text-xl font-semibold mb-1'>Recent Posts</h5>
            <div className='h-1 w-12 bg-[#ff0336] mb-5' />

            <div className='text-gray-700 font-medium'>
                <div className='flex space-x-3 items-center mb-4 group cursor-pointer'>
                    <img src="https://gymate-iota.vercel.app/static/media/2.0d38659a6a6bcec678dd.jpg" alt="" className='w-32 h-32 object-cover' />
                    <div >
                        <h6 className='text-sm'>March 22, 2022</h6>
                        <h3 className='text-black text-lg font-semibold group-hover:text-[#ff0336]'>
                        Getting Back Into CrossFit
                        </h3>
                    </div>
                </div>
                <div className='flex space-x-3 items-center mb-4 group cursor-pointer'>
                    <img src="https://cdn.pixabay.com/photo/2017/08/02/20/24/woman-2573216_960_720.jpg" alt="" className='w-32 h-32 object-cover' />
                    <div >
                        <h6 className='text-sm'>March 22, 2022</h6>
                        <h3 className='text-black text-lg font-semibold group-hover:text-[#ff0336]'>
                        Yoga For Everyone in 2022
                        </h3>
                    </div>
                </div>
                <div className='flex space-x-3 items-center mb-4 group cursor-pointer'>
                    <img src="https://gymate-iota.vercel.app/static/media/3.63debac42241450ef48e.jpg" alt="" className='w-32 h-32 object-cover' />
                    <div >
                        <h6 className='text-sm'>March 22, 2022</h6>
                        <h3 className='text-black text-lg font-semibold group-hover:text-[#ff0336]'>
                        Meet Fitness Abassador Grace
                        </h3>
                    </div>
                </div>
                <div className='flex space-x-3 items-center mb-4 group cursor-pointer'>
                    <img src="https://gymate-iota.vercel.app/static/media/4.8903aab8d673a9775080.jpg" alt="" className='w-32 h-32 object-cover' />
                    <div >
                        <h6 className='text-sm'>March 22, 2022</h6>
                        <h3 className='text-black text-lg font-semibold group-hover:text-[#ff0336]'>
                        The best are European Meditation Practitioner
                        </h3>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-gray-200/80 p-3 mt-16'>
            <h5 className='text-xl font-semibold mb-1'>Popular Tags</h5>
            <div className='h-1 w-12 bg-[#ff0336] mb-5' />

            <div className='grid grid-cols-3 gap-3 mt-10'>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Crossfit</div>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Fitness</div>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Gym</div>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Meditation</div>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Running</div>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Workout</div>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Yoga</div>
                <div className='bg-white text-gray-700 font-medium text-center p-1 px-3 hover:text-[#ff0336] cursor-pointer '>#Boxing</div>
            </div>
        </div>

        <div className='bg-[url("https://gymate-iota.vercel.app/static/media/sidebar1.939653519595a48bb266.png")] mt-10 h-[100vh] bg-cover relative '>
            <div className='absolute top-5'>
                <div className='bg-white text-2xl font-bold pr-5 p-2'>
                    GYMATE
                </div>
                <div className='p-2 text-white'>
                    <div className='text-7xl font-bold'>
                        34%
                    </div>
                    <p className='text-2xl font-semibold'>
                        Flat Discount
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar