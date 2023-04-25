import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
        <Header />
        <div className=" bg-black h-56 flex flex-col justify-end pb-8 bg-[url('https://gymate-iota.vercel.app/static/media/banner.6fee27339c0374683aa5.jpg')] bg-contain bg-right bg-no-repeat mb-32 ">
            <h3 className="text-center text-white text-4xl font-bold">
                Contact Us  
            </h3>
        </div>

        <div className='w-[85%] mx-auto my-6 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0'>
            <div className='flex-[1.5] pt-5'>
                <h2 className='text-3xl font-bold mb-3'>We are here for help you! To Shape Your Body.</h2>
                <p className='text-gray-700 font-medium mb-8'>
                At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.
                </p>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-xl font-semibold'>New York City, USA</h2>
                        <div className='h-1 w-10 bg-[#ff0336] mb-6' />
                        <div className='font-medium text-gray-700'>
                        85 Briston Mint Street, <br /> London, E1 8LG, USA
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Open Hours</h2>
                        <div className='h-1 w-10 bg-[#ff0336] mb-6' />
                        <div className='font-medium text-gray-700'>
                        8Mon to Fri: 7:30 am — 1:00 am <br /> Mon to Fri: 7:30 am — 1:00 am
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-1 bg-gray-200/80 p-5'>
                <h2 className='text-2xl font-bold mb-1'>Leave Us Your Info</h2>
                <div className='h-1 w-10 bg-[#ff0336] mb-8' />
                <input type="text" placeholder='Full Name *' className='w-full p-2 bg-white border border-gray-400 text-sm font-medium' />
                <input type="text" placeholder='Email Address *' className='w-full p-2 bg-white border border-gray-400 text-sm my-5 font-medium' />
                <select name="" id="" className='w-full p-2 bg-gray-300 font-medium'>
                    <option value="Select">Select Class</option>
                    <option value="Select">Boxing</option>
                    <option value="Select">Yoga</option>
                    <option value="Select">Bodybuilding</option>
                    <option value="Select">Meditation</option>
                    <option value="Select">Weight Lifting</option>
                    <option value="Select">Crossfit</option>
                </select>
                <textarea name="" id="" className='w-full p-2 bg-white border border-gray-400 text-sm my-5 font-medium' placeholder='Comment...' rows={6} ></textarea>
                <button className='text-center p-2 font-semibold text-white block mx-auto w-3/5 md:w-1/3 bg-[#ff0336] '>Submit Now</button>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact