
const Footer = () => {
  return (
    <div className="py-10">
        <div className="w-[85%] mx-auto font-medium text-gray-700 flex flex-col md:flex-row space-y-6 items-center md:items-start justify-between text-center md:text-left md:space-x-10 ">
            <div className="flex-[2] ">
                <div className="mb-4 flex justify-center md:justify-start">
                    <img src={'https://gymate-iota.vercel.app/static/media/logo-footer.afc20655e23e1a696de404d17ac1d465.svg'} alt="" />
                </div>

                <div className="md:w-3/4 mb-8">
                Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                </div>

                <div>
                Privacy Policy | © 2023 Gymate 
                </div>
            </div>
            <div className="flex-1">
                <h5 className="text-black text-xl font-semibold">
                    Our Classes
                </h5>
                <div className="h-1 w-16 bg-[#ff0336] " />

                <div className="space-y-2 mt-1">
                    <p>Fitness Classes</p>
                    <p>Aerobics Classes</p>
                    <p>Power Yoga</p>
                    <p>Learn Machines</p>
                    <p>Full-body Strength</p>
                </div>
            </div>
            <div className="flex-1">
                <h5 className="text-black text-xl font-semibold">Working Hours</h5>
                <div className="h-1 w-16 bg-[#ff0336] " />

                <div className="space-y-2 mt-1">
                    <h6>Monday - Friday:</h6>
                    <p>7:00am - 21:00pm</p>
                    <h6>Saturday:</h6>
                    <h6>7:00am - 19:00pm</h6>
                    <h6>Sunday - Closed</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer