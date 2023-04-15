import data from '../../constants/classes.json'
import karate from '../../assets/home/karate-master.svg'
import cyc from '../../assets/home/cycling.svg'
import dumbell from '../../assets/home/dumbell-gym-healthy-life.svg'
import meditation from '../../assets/home/meditation.svg'
import boxing from '../../assets/home/boxing-fight.svg'
import arm from '../../assets/home/arm-dumbbell.svg'

const styles = {
    "cardContainer": "text-white h-72 flex flex-col justify-end py-8 relative cursor-pointer rounded-md ",
    "imgContainer": "mb-9 flex justify-center items-center bg-white w-20 h-20 rounded-r-full",

}

const Classes = () => {
  return (
    <div className='my-10'>
        <div className='w-[94%] mx-auto'>
        <h5 className='whowe mx-auto text-white w-72 p-2 bg-contain font-medium text-center bg-center mb-5 uppercase'>OUR FEATURED CLASSES</h5>
        <h2 className='text-4xl font-bold text-center mb-10'>
            We are Offering Best Flexible Classes
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 my-6'>
            {/* {
                data.map(foo => (
                    <div key={foo.id} className={`bg-green-500 text-white ${foo.span && 'col-span-2'} h-72 flex flex-col justify-end p-8 relative bg-cyc `}>
                        <div className='mb-12 flex justify-center items-center bg-white w-20 h-20 rounded-full '>
                            <img src={svggg} className='h-12' alt="" />
                        </div>

                        <div>
                            <h4>{foo.name}</h4>
                            <div>{foo.time}</div>
                        </div>
                    </div>
                ))
            } */}

                <div className={`${styles.cardContainer} bg-cyc bg-class md:col-span-2 `}>
                    <div className='card-inside'>
                        <div className={styles.imgContainer}>
                        <img src={cyc} className='h-12' alt="" />
                        </div>

                        <div className='px-5'>
                            <h4 className='text-3xl font-semibold mb-1'>
                                Cycling
                            </h4>
                            <div className='bg-[#ff0336] inline-block px-2 text-sm font-medium '>
                            Wednesday: 9:00am - 10:00am
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.cardContainer} bg-karate md:col-span-1 `}>
                    <div className='card-inside'>
                        <div className={styles.imgContainer}>
                        <img src={karate} className='h-12' alt="" />
                        </div>

                        <div className='px-5'>
                            <h4 className='text-3xl font-semibold mb-1'>
                                Karate
                            </h4>
                            <div className='bg-[#ff0336] inline-block px-2 text-sm font-medium '>
                            Friday: 10:00am - 11:00am
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${styles.cardContainer} bg-weight-lift md:col-span-1 `}>
                    <div className='card-inside'>
                        <div className={styles.imgContainer}>
                        <img src={dumbell} className='h-12' alt="" />
                        </div>

                        <div className='px-5'>
                            <h4 className='text-3xl font-semibold mb-1'>
                                Power
                            </h4>
                            <div className='bg-[#ff0336] inline-block px-2 text-sm font-medium '>
                            Friday: 10:00am - 11:00am
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.cardContainer} bg-meditation md:col-span-1 `}>
                    <div className='card-inside'>
                        <div className={styles.imgContainer}>
                        <img src={meditation} className='h-12' alt="" />
                        </div>

                        <div className='px-5'>
                            <h4 className='text-3xl font-semibold mb-1'>
                                Meditation
                            </h4>
                            <div className='bg-[#ff0336] inline-block px-2 text-sm font-medium '>
                            Friday: 10:00am - 11:00am
                            </div>
                        </div>
                    </div>
                </div>

                

                <div className={`${styles.cardContainer} bg-workout md:col-span-1 `}>
                    <div className='card-inside'>
                        <div className={styles.imgContainer}>
                        <img src={arm} className='h-12' alt="" />
                        </div>

                        <div className='px-5'>
                            <h4 className='text-3xl font-semibold mb-1'>
                                Workout
                            </h4>
                            <div className='bg-[#ff0336] inline-block px-2 text-sm font-medium '>
                            Monday: 4:00pm - 5:00pm
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.cardContainer} bg-martial md:col-span-2 `}>
                    <div className='card-inside'>
                        <div className={styles.imgContainer}>
                        <img src={boxing} className='h-12' alt="" />
                        </div>

                        <div className='px-5'>
                            <h4 className='text-3xl font-semibold mb-1'>
                                Martial Arts
                            </h4>
                            <div className='bg-[#ff0336] inline-block px-2 text-sm font-medium '>
                            Sunday: 6:00pm - 7:00pm
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </div>
    </div>
  )
}

export default Classes