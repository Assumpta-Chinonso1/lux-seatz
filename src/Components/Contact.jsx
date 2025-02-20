import React from 'react'
import './contact.css'
import logo from  '../assets/logo-.png'

const Contact = () => {
  return (
    <div className='contact'>
     <div className="contact-col">
     <h3>Send Us a Dm Today! <img src={logo} alt="" /></h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Pariatur asperiores atque nesciunt <br />dicta eos laborum inventore
         iusto ducimus. <br />Ab omnis mollitia
         sequi iusto ea odit dolor eveniet libero quis aperiam!</p>
       
         <ul>
            <li> ✉ Email: assumptachinonso42@gmail.com</li>
            <li>📍 Address: Lorem ipsum dolor sit amet </li>
            <li> 📞Phone Number: +234 2899 i882</li>
          </ul> 
          </div>
          <div className="contact-col">
            <form>
              <label>Your Name</label>
              <input type="text" name='name' placeholder='Enter Your Name' />
              <label>Phone Number</label>
              <input type="tel" name="phone number" placeholder="Enter Your Phone Number" required />
              <label> Write Your message Here.</label>
              <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
              <button type='submit' className="btn dark-btn">Submit Now</button>
              </form>
          
     </div>
    </div>
  )
}

export default Contact