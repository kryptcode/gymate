import Footer from "../components/Footer"
import Header from "../components/Header"
import WWA from "../components/home/WWA"
import his from '../assets/his.png'

const About = () => {
  return (
    <div>
        <Header />
        <div className=" bg-black h-56 flex flex-col justify-end pb-8 bg-[url('https://gymate-iota.vercel.app/static/media/banner.6fee27339c0374683aa5.jpg')] bg-contain bg-right bg-no-repeat mb-32 ">
            <h3 className="text-center text-white text-4xl font-bold">
                About Us
            </h3>
        </div>

        <WWA />

        <div className="my-6">
            <div className="md:w-[80%] mx-auto ">
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="flex-1 py-2 flex flex-col items-center space-y-3 text-center justify-center" >
                    <img src="https://gymate-iota.vercel.app/static/media/target.da971912c971d7fe3fbe.png" alt="" className="w-24 " />
                    <h3 className="text-2xl font-semibold">
                        Our History
                    </h3>
                    <p className="w-3/4 font-medium text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti, iure necessitatibus assumenda consequatur vero doloremque maxime pariatur illum praesentium molestias?
                    </p>
                    </div>
                    <div className="flex-1">
                    <img  src="https://cdn.pixabay.com/photo/2016/12/04/22/15/fitness-1882721_960_720.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                    <img  src="https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_960_720.jpg" alt="" />
                    </div>
                    <div className="flex-1 py-2 flex flex-col items-center space-y-3 text-center justify-center" >
                    <img src={his} alt="" className="w-24 " />
                    <h3 className="text-2xl font-semibold">
                        Our History
                    </h3>
                    <p className="w-3/4 font-medium text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti, iure necessitatibus assumenda consequatur vero doloremque maxime pariatur illum praesentium molestias?
                    </p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default About