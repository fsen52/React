import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Preloader from './components/Preloader'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div>

      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      
    </div>
  )
}

export default App
