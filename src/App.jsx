import Header from "./components/Header"
import Cards from "./components/home/Cards"
import ChooseUs from "./components/home/ChooseUs"
import Classes from "./components/home/Classes"
import Hero from "./components/home/Hero"
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
    </div>
  )
}

export default App
