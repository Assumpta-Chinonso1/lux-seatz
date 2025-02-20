import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import Title from './Components/Title'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='OUR PRODUCTS' title='What We Offer'/>
        
      <Products/>
      <About/>
      <Title subtitle='CONTACT' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
  
    </div>
  )
}

export default App
