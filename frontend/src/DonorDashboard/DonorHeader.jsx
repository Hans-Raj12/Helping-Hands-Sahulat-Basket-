import React from 'react'
import { FaSignOutAlt, FaBell, FaEnvelope } from 'react-icons/fa';
import "./DonorHeader.css";
import person from '../assets/DonorImages/person.jpg'
const DonorHeader = () => {
  return (
    <div className='donor-header'>
      <header>
        <div className="logo">
        </div>
        <div style={{display:'inline-flex'}}>
        <img src={person} alt="profile" width={"40px"} style={{borderRadius:'40px'}}/>kashish</div>
        <div className="icons">
       
        
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
          
        </div>
        <button className="signout-btn">
          <FaSignOutAlt className="iconsign" />
          Sign Out
        </button>
      </header>
    </div>
  )
}

export default DonorHeader
