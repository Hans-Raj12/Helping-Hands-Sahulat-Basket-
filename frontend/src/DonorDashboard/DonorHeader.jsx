import React from 'react'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaSignOutAlt, FaBell, FaEnvelope } from 'react-icons/fa';
import "./DonorHeader.css";
import person from '../assets/DonorImages/person.jpg'
const DonorHeader = () => {
  const [name, setName] = useState('Name')
  const { credentials } = useContext(AuthContext)
  const navigate = useNavigate()
//  console.log(credentials)
  return (
    <div className='donor-header'>
      <header>  
        <div className="logo">
          Donor Dashboard
        </div>
        <div style={{display:'inline-flex'}}>
        <img src={person} alt="profile" width={"40px"} style={{borderRadius:'40px'}}/><span style={{alignItems:'center',color:"#fff",margin:"8px"}}>{credentials ? credentials?.user?.name: 'Donor'}</span></div>
        {/* <div className="icons">
       
        
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
          
        </div> */}
        <button className="signout-btn" onClick={()=>{
          navigate('/login')          
        }}>
          <FaSignOutAlt className="iconsign" />
          Sign Out
        </button>
      </header>
    </div>
  )
}

export default DonorHeader
