import React from 'react'
import '../styles/Footer.css'

import { FaFacebookF,FaLinkedinIn,FaTwitter } from 'react-icons/fa';


// import { ImLinkedin } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';
const Footer = () =>{
    return(
        <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Products</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Resources</h1>
            <ul>
              <li>Webmail</li>
              <li>Redeem code</li>
              <li>WHOIS lookup</li>
              <li>Site map</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
          <div className="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
          <div className="col social">
            <h1>Social</h1>
            <ul>
              <li>
                    <FaFacebookF/>
              </li>
              <li>
              <FaLinkedinIn/>
              </li>
              <li>
              <FaTwitter/>
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