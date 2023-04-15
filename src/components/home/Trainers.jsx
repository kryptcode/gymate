
const Trainers = () => {
  return (
    <div className='py-16'>
        <div className='w-[88%] mx-auto'>
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

            <div>
                <div className="h-[29rem] shadow-xl rounded-lg bg-train group flex flex-col -space-y-24 relative ">
                    <div>
                        <img src="https://gymate-iota.vercel.app/static/media/trainer1.2b262907a2293e42de47.png" alt="" />
                    </div>
                    <div className="h-1/3 bg-white rounded-b-lg  ">
                        <h5>
                            John Lewis
                        </h5>
                        <h6>
                            Yoga Trainer
                        </h6>
                        
                    </div>

                    <div className="absolute h-1 w-8 group-hover:w-full  bg-[#ff0336] bottom-0 " />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trainers