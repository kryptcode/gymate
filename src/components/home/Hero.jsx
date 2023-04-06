import { ArrowRightIcon } from "@heroicons/react/24/outline"

const Hero = () => {
  return (
    <div className="h-[95vh] bg-hero bg-center bg-cover w-full flex justify-center md:justify-end items-center text-white ">
        <div className="w-4/5 md:w-1/2 flex justify-between text-white md:pr-16 text-center md:text-left ">
            <div>
                <h5 className="hero-title mx-auto md:mx-0 text-black w-56 p-2 bg-contain font-semibold text-center bg-center mb-5 uppercase">Find your energy </h5>
                <h2 className="text-5xl font-bold">
                    MAKE YOUR BODY
                </h2>
                <h3 className="text-5xl font-medium my-5 mb-10">
                    FIT AND PERFECT
                </h3>
                <div className="relative group w-44 cursor-pointer mx-auto md:mx-0">
                    <div className="flex h-10 w-44 items-center space-x-2 justify-center font-semibold bg-white text-black cursor-pointer">
                        <span>OUR CLASSES</span>
                        <ArrowRightIcon className="h-4 text-[#ff0336] font-semibold " />
                    </div>
                    <div className="h-10 w-44 border absolute translate-x-5 -translate-y-3 group-hover:translate-x-0 group-hover:-translate-y-0 top-0 transition-all ease-in duration-300 " />
                </div>
            </div>

            <div className="hidden md:flex flex-col space-y-10 items-center">
                <div className="-rotate-90 font-semibold">
                    SHARE
                </div>

                <div className="bg-[#ff0336] h-16 w-[1px] " />

                <div className="flex flex-col space-y-3 ">
                    <i className="fa-brands fa-twitter text-xl hover:text-[#ff0336] cursor-pointer"></i>
                    <i className="fa-brands fa-linkedin text-xl hover:text-[#ff0336] cursor-pointer"></i>
                    <i className="fa-brands fa-facebook text-xl hover:text-[#ff0336] cursor-pointer"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero