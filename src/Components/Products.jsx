import React from 'react'
import './Products.css'
import product1 from '../assets/Product1.jpg'
import product4 from '../assets/Product4.jpg'
import product6 from '../assets/Product6.jpg'
import logo from '../assets/logo-.png'

const Products = () => {
  return (
    <div className='products'>
        <div className="product">
            <img src={product1} alt="" srcset="" />
            <div className="image-caption">
              <img src={logo} alt="" />
              <p>Salad</p>
            </div>
        </div>
     
        <div className="product">
            <img src={product4} alt="" srcset="" />
            <div className="image-caption">
              <img src={logo} alt="" />
              <p>Tech set-up</p>
            </div>
        </div>
      
          <div className="product">
            <img src={product6} alt="" srcset="" />
            <div className="image-caption">
              <img src={logo} alt="" />
              <p>Breakfast</p>
            </div>
        </div>

    </div>
  )
}

export default Products