import Footer from "./components/Footer"
import Header from "./components/Header"
import BMI from "./components/home/BMI"
import Cards from "./components/home/Cards"
import ChooseUs from "./components/home/ChooseUs"
import Classes from "./components/home/Classes"
import Hero from "./components/home/Hero"
import Pricing from "./components/home/Pricing"
import Testimonials from "./components/home/Testimonials"
import Trainers from "./components/home/Trainers"
import WWA from "./components/home/WWA"


function App() {

  return (
    <div>
        <Header />
        <Hero />
        <Cards />
        <WWA />
        <Classes />
        <ChooseUs />
        <Trainers />
        <Testimonials />
        <BMI />
        <Pricing />
        <Footer />
    </div>
  )
}

export default App
