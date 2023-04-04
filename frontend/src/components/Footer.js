import React from 'react'
import '../styles/Footer.css'

import { FaFacebookF,FaLinkedinIn,FaTwitter,FaRegUserCircle,FaRegEnvelope } from 'react-icons/fa';


// import { ImLinkedin } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';
const Footer = () =>{
    return(
        <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Logo</h1>
            
          </div>
          <div className="col details">
            <h2>Airport Road Sukkur, Sukkur, Sindh, Pakistan</h2>
            <ul>
              <li><FaRegUserCircle size={25}/>03043458660</li>
              <li><FaRegEnvelope size={22}/>info@sahulat.com</li>
            </ul>
          </div>
          {/* <div className="col">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div> */}
          <div className="col">
            <h1>Services</h1>
            <ul>
              <li>Extra food waste</li>
              <li>Cloth reuse</li>
              <li>Fundraise</li>
            </ul>
          </div>
          <div className="col">
            <h1>About Us</h1>
            <ul>
              <li>Our Story</li>
              <li>Manifesto</li>
              <li>Problem</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="col social">
            <h1>Social</h1>
            <ul>
              <li>
                    <FaFacebookF size={25}/>
              </li>
              <li>
              <FaLinkedinIn size={25}/>
              </li>
              <li>
              <FaTwitter size={25}/>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
        
        <div className='contain'>
            <hr/>
            <p className='copyright'>
                &copy;{new Date().getFullYear()} Helping Hands | All rights reserved | Terms of Service | Privacy
            </p>
        </div>
      </div>
    )
}

export default Footer