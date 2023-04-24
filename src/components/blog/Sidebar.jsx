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
    </div>
  )
}

export default Sidebar