import React from 'react'
import { FaSignOutAlt, FaBell,  FaEnvelope, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import  "./NeedyHeader.css";
import {useRef, useContext} from 'react'
const NeedyHeader = () => {
  const navRef = useRef();
    const navigate = useNavigate()
  const { credentials } = useContext(AuthContext)

  
  return (
    <div className='needy-header'>
        
        <header>  
        <div className="logo">
            Needy Dashboard
        </div>
       
        <div className="icons">
       
        
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
          
        </div>
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

export default NeedyHeader;