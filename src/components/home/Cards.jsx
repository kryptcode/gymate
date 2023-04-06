import data from '../../constants/hero.json'

const Cards = () => {
  return (
    <div className='bg-white'>
        <div className='w-[94%] mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-6 justify-between'>
            {
                data.map(card => (
                    <div className={`bg-white h-80 rounded-tl-[35px] rounded-br-[35px] shadow-xl -translate-y-16 flex flex-col justify-center items-center space-y-4 p-6 hover:bg-[url("https://i.ibb.co/pdRyWHg/pexels-photo-841130.jpg")] bg-center bg-cover cursor-pointer hover:text-white transition-all ease-in-out duration-300 `}>
                        <img src={card.img} alt="" />
                        <h3 className='text-2xl font-semibold uppercase'>
                            {card.title}
                        </h3>
                        <p className='texts-m font-medium text-center '>
                            {card.details}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards