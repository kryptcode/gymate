import React from 'react'

const prices = [
    {
        id: 1,
        name: "Beginners",
        img: "https://cdn.pixabay.com/photo/2017/04/25/20/18/woman-2260736__340.jpg",
        price: "9.99",
    },
    {
        id: 2,
        name: "Intermediate",
        img: "https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926__340.jpg",
        price: "29.99",
    },
    {
        id: 3,
        name: "Advanced",
        img: "https://cdn.pixabay.com/photo/2017/04/20/08/35/sport-2245029__340.jpg",
        price: "44.99",
    },
]

const Pricing = () => {
  return (
    <div className='bg-[url("https://gymate-iota.vercel.app/static/media/background.83bcfae77cd8ae9f6a48.jpg")] py-16 bg-cover '>
        <div className='w-[85%] mx-auto '>
            <div className='text-center mb-24'>
                <h5 className='whowe mx-auto  text-white w-72 p-2 text-center bg-contain font-semibold bg-center mb-5 uppercase'>
                    PRICING CHART
                </h5>
                <h2 className='font-bold text-3xl mb-2'>
                    Exclusive Pricing Plan
                </h2>
                <p className='text-lg font-medium text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, nihil.
                </p>
            </div>

            <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6'>
                {
                    prices.map((tier) => (
                        <div className='h-screen shadow-lg hover:shadow-2xl transition-all ease-in-out duration-500 bg-white'>
                            <div >
                                <img src={tier.img} alt="" />
                            </div>
                            <div className='relative'>
                            <div className='inline-block absolute w-36 right-1/2 bg-white -top-10 text-center font-semibold p-1.5'>
                                {tier.name}
                            </div>
                            </div>
                            <div className='mt-6'>
                                <div className='font-medium text-center text-xl text-gray-600'>
                                    $ <span className='text-5xl font-bold text-[#ff0336]'>{tier.price}</span> monthly
                                </div>

                                <div className='mt-6 mb-12 space-y-3 text-center text-gray-700 font-medium'>
                                    <div>Free Hand</div>
                                    <div>Gym Fitness</div>
                                    <div>Weight Loss</div>
                                    <div>Personal Trainer</div>
                                    <div>Cycling</div>
                                </div>

                                <div className='w-44 mx-auto text-center text-white font-semibold cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 p-3 bg-[#ff0336] '>
                                    Purchase Now
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Pricing