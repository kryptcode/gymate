import { ArrowRightIcon } from "@heroicons/react/24/outline"

const ChooseUs = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row text-center md:text-left md:space-x-24 items-center md:items-end  md:h-48 mt-10 text-white mx-auto bg-[url('https://gymate-iota.vercel.app/static/media/cta-bg.0bd0c066aa8b6eac570c.png')] bg-cover pt-16 space-y-6 md:space-y-0 pb-10 md:pl-10 leading-loose ">
            <div className="text-xl md:text-4xl font-bold">
            We Are Always Providing Best <br /> Fitness Service For You
            </div>
            
            <div className="relative group w-44 cursor-pointer md:mx-0">
                <div className="flex h-10 w-44 items-center space-x-2 justify-center font-semibold bg-white text-black cursor-pointer">
                    <span>OUR CLASSES</span>
                    <ArrowRightIcon className="h-4 text-[#ff0336] font-semibold " />
                </div>
                <div className="h-10 w-44 border absolute translate-x-5 -translate-y-3 group-hover:translate-x-0 group-hover:-translate-y-0 top-0 transition-all ease-in duration-300 " />
            </div>
        </div>

        <div className="bg-[url('https://gymate-iota.vercel.app/static/media/choose-bg.a67baa2e570e11a494d3.jpg')] py-10">
            <div className="w-[88%] mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 text-center md:text-left md:space-x-24 ">
                <div className="flex-1 relative">
                    <img src="https://gymate-iota.vercel.app/static/media/main-img.dc4a3b692a7f198eb88b.png" alt="" />
                    <div className="h-[22rem] w-3 bg-[#ff0336] absolute top-6 right-2 md:right-7 -rotate-6" />
                </div>
                <div className="pt-10 flex-1 ">
                    <h5 className='whowe mx-auto md:mx-0 text-white w-72 p-2 text-center bg-contain font-semibold bg-center mb-5 uppercase'>
                        WHY CHOOSE US
                    </h5>
                    <h2 className="text-white text-4xl font-bold">
                    We Can Give A Shape Of Your Body Here!
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg font-medium mb-10">
                    At <b>Gymate</b>, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.
                    </p>

                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-8">
                        <div className="flex space-x-4 text-white text-xl font-semibold">
                            <div className="h-16 w-16 bg-gray-800/50 rounded-full hover:bg-[#ff0336]/50 " />
                            <div>
                                Free Fitness <br /> Training
                            </div>
                        </div>
                        <div className="flex space-x-4 text-white text-xl font-semibold">
                            <div className="h-16 w-16 bg-gray-800/50 rounded-full hover:bg-[#ff0336]/50 " />
                            <div>
                                Modern Gym  <br /> Equipments
                            </div>
                        </div>
                        <div className="flex space-x-4 text-white text-xl font-semibold">
                            <div className="h-16 w-16 bg-gray-800/50 rounded-full hover:bg-[#ff0336]/50 " />
                            <div>
                                Gym Bag <br /> Equipments
                            </div>
                        </div>
                        <div className="flex space-x-4 text-white text-xl font-semibold">
                            <div className="h-16 w-16 bg-gray-800/50 rounded-full hover:bg-[#ff0336]/50 " />
                            <div>
                                Fresh Bottle <br /> Water
                            </div>
                        </div>
                    </div>

                    <div className="relative group w-44 cursor-pointer mx-auto md:mx-0 mt-12">
                        <div className="flex h-12 w-44 items-center space-x-2 justify-center font-semibold bg-gray-500 text-white cursor-pointer">
                            <span>OUR CLASSES</span>
                            <ArrowRightIcon className="h-4 text-white font-semibold " />
                        </div>
                        <div className="h-12 w-44 border border-gray-800 absolute translate-x-5 -translate-y-3 group-hover:translate-x-0 group-hover:-translate-y-0 top-0 transition-all ease-in duration-300 " />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ChooseUs