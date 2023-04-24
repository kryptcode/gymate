import { useState } from "react"

const BMI = () => {
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [bmi, setBmi] = useState(null)
    

  return (
    <div className="bg-black text-white flex flex-col md:space-x-36 md:flex-row">
        <div className="flex-[5] md:pl-10 px-5 pt-8">
            <div>
                <h2 className="text-3xl font-semibold mb-3 text-center md:text-left">
                    Let's Calculate Your <span className="text-[#ff0336] ">BMI</span>
                </h2>
                <p className="text-gray-500 text-center md:text-left md:w-4/5 text-lg font-medium mb-6">
                Easily determine your body mass index with our accurate calculation tool.
                </p>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 items-center mb-5">
                    <input type="number" name="" id="" placeholder="Weight/kg" className="p-2 bg-black outline-none border-[2px] rounded-lg border-gray-800 text-gray-700 w-full "  onChange={(e) => setWeight(e.target.value)}/>
                    <input type="number" name="" id="" placeholder="Height/cm" className="p-2 bg-black outline-none border-[2px] rounded-lg border-gray-800 text-gray-700 w-full" onChange={(e) => setHeight(e.target.value)}  />
                </div>
                <div>
                    <div>
                        {
                            bmi && (
                                <div className="flex justify-between text-lg mb-5">
                                    <div className="font-medium">
                                        Your BMI is: <span className="text-[#ff0336]">{bmi.toFixed(2)}</span>
                                    </div>
                                    <div className="font-medium">
                                        {
                                            bmi < 18.5 ? (
                                                <div>
                                                    Your weight is:  <span className="text-[#ff0336]">underweight</span>
                                                </div>
                                            ) : (bmi < 24.9 && bmi > 18.5) ? (
                                                <div>
                                                    Your weight is:  <span className="text-[#ff0336]">Normal</span>
                                                </div>
                                            ) : (bmi < 29.9 && bmi > 24.5) ? (
                                                <div>
                                                    Your weight is:  <span className="text-[#ff0336]">overweight</span>
                                                </div>
                                            ) : (
                                                <div>
                                                    Your weight is:  <span className="text-[#ff0336]">obese</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <button onClick={() => setBmi(weight*100/((height*height)/100))} className="mb-3 p-2 px-5 bg-gray-900/75 font-medium">
                    CALCULATE
                </button>
            </div>

        </div>
        <img src="https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247__340.jpg" alt="" className="flex-1 object-contain hidden md:flex" />
    </div>
  )
}

export default BMI