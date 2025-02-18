import React from 'react'
import './Navbar.css'
import logo from  '../assets/logo-.png'


const Navbar = () => {
  return (
    
        <nav className='container'>
            <img className='logo' src={logo} alt="" srcset="" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    
  )
}

export default Navbar