
const Trainers = () => {
  return (
    <div className='py-16'>
        <div className='w-[75%] mx-auto'>
            <h5 className='whowe mx-auto  text-white w-72 p-2 text-center bg-contain font-semibold bg-center mb-5 uppercase'>
                GYM TRAINERS
            </h5>

            <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold mb-3'>
                    Team of Expert Coaches
                </h2>
                <p className='font-medium text-gray-800'>
                Expert team of coaches helps you succeed in any goal, <br /> personalized guidance and motivation provided!
                </p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                <div className="p-2 shadow-lg flex group flex-col items-center flex-1 rounded-lg">
                    <div className="p-2 bg-train bg-contain flex items-center justify-center">
                        <img src="https://gymate-iota.vercel.app/static/media/trainer1.2b262907a2293e42de47.png" alt="" className="w-48 h-72 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                    </div>
                    <div className="text-center mb-5">
                        <h5 className="text-2xl font-semibold text-gray-800">John Lewis</h5>
                        <p className="text-lg font-medium text-gray-500">
                            Personal Trainer
                        </p>
                    </div>
                    <div className="h-1 w-10 group-hover:w-full bg-[#ff0336] transition-all ease-in-out duration-500 rounded-lg" />
                </div>
                <div className="p-2 shadow-lg flex group flex-col items-center flex-1 rounded-lg">
                    <div className="p-2 bg-train bg-contain flex items-center justify-center">
                        <img src="https://gymate-iota.vercel.app/static/media/trainer2.e1fe210e1c836343c1fe.png" alt="" className="w-48 h-72 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                    </div>
                    <div className="text-center mb-5">
                        <h5 className="text-2xl font-semibold text-gray-800">Jonathan Doe</h5>
                        <p className="text-lg font-medium text-gray-500">
                            Crossfit Trainer
                        </p>
                    </div>
                    <div className="h-1 w-10 group-hover:w-full bg-[#ff0336] transition-all ease-in-out duration-500 rounded-lg" />
                </div>
                <div className="p-2 shadow-lg flex group flex-col items-center flex-1 rounded-lg">
                    <div className="p-2 bg-train bg-contain flex items-center justify-center">
                        <img src="https://gymate-iota.vercel.app/static/media/trainer3.8b049fcaa3d9d0a3f143.png" alt="" className="w-48 h-72 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                    </div>
                    <div className="text-center mb-5">
                        <h5 className="text-2xl font-semibold text-gray-800">Ana June</h5>
                        <p className="text-lg font-medium text-gray-500">
                            Yoga Trainer
                        </p>
                    </div>
                    <div className="h-1 w-10 group-hover:w-full bg-[#ff0336] transition-all ease-in-out duration-500 rounded-lg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trainers