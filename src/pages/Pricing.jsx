import React from 'react'
import Header from '../components/Header'
import Pricing from '../components/home/Pricing'
import Footer from '../components/Footer'

const PricingPage = () => {
  return (
    <div>
        <Header />
        <div className=" bg-black h-56 flex flex-col justify-end pb-8 bg-[url('https://gymate-iota.vercel.app/static/media/banner.6fee27339c0374683aa5.jpg')] bg-contain bg-right bg-no-repeat mb-32 ">
            <h3 className="text-center text-white text-4xl font-bold">
                Pricing
            </h3>
        </div>
        <Pricing />
        <Footer />
    </div>
  )
}

export default PricingPage