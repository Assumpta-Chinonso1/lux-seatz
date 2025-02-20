import React from 'react'
import './About.css'
import logo from  '../assets/logo-.png'
import product6 from '../assets/good at it.jpg'
const About = () => {
  return (
    <div className='about'>
       <div className="right-column">
        <img src={product6} alt=""  className='about-img' />
        <img src={logo} alt="" className='about-imga' />
       </div>
       <div className="left-column">
        <h2>About Us</h2>
        <h3>Presenting to you the best of our best products and very durable</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ducimus aperiam minima repellendus provident error,
              vel rem officia, alias atque dolore ipsum delectus a sed iste 
              voluptatum? 
            Facere magni fuga iusto?</p>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Velit molestiae possimus quis pariatur,
                 atque laboriosam iste quibusdam ipsum aliquam 
                 accusamus vel omnis voluptates voluptatum dolorem aspernatur 
                voluptatem excepturi distinctio officiis.
            </p>
       </div>

    </div>
  )
}

export default About