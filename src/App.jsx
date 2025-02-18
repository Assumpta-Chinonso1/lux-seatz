import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Products/>
      </div>
  
    </div>
  )
}

export default App
