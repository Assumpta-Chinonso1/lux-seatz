import React from 'react'
import './Products.css'
import product1 from '../assets/Product1.jpg'
import product2 from '../assets/Product2.jpg'
import product3 from '../assets/Product3.jpg'
import product4 from '../assets/Product4.jpg'
import product5 from '../assets/Product5.jpg'
import product6 from '../assets/Product6.jpg'

const Products = () => {
  return (
    <div className='products'>
        <div className="product">
            <img src={product1} alt="" srcset="" />
        </div>
       {/**  <div className="product">
            <img src={product2} alt="" srcset="" />
        </div>*/}
        {/** <div className="product">
            <img src={product3} alt="" srcset="" />
        </div>*/}
        <div className="product">
            <img src={product4} alt="" srcset="" />
        </div>
      <div className="product">
            <img src={product5} alt="" srcset="" />
        </div>
          {/**<div className="product">
            <img src={product6} alt="" srcset="" />
        </div>*/}

    </div>
  )
}

export default Products