import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from  '../assets/logo-.png'
import menu from '../assets/menu_icon.png'


const Navbar = () => {
  const [sticky, setSticy] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticy(true) : setSticy(false)
    })

  },[])

  const [navMenu, setNavMenu] =useState(false)

  const toggleMenu = () =>{
    navMenu ? setNavMenu(false) : setNavMenu(true)
  }
  return (
    
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img className='logo' src={logo} alt="" srcset="" />
            <ul className={navMenu ? '' : "hiddle-nav"}>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
            <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    
  )
}

export default Navbar