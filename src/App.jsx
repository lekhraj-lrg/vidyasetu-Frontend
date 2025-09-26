import React from 'react'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import  Navbar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import WhyChoose from './components/whychoose.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Navbar />
    <Hero/>
    <WhyChoose />
    <Routes >
      {/* <Route path="/" element = {<Hero />} />  */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App