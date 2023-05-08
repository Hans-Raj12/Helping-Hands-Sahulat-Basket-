import React from 'react'
import { FaSignOutAlt, FaBell, FaEnvelope } from 'react-icons/fa';
import "./NGOHeader.css";
import { Link } from 'react-router-dom';

const NGOHeader = () => {
  return (
    <div className='ngo-header'>
      <header>
      <h1 className="logo">
            <Link to="/" style={{color:'#fff'}}>
              NGO Dashboard<span>.</span>
            </Link>
          </h1>
        <div className="icons">
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
        </div>
        <Link to='/'>
        <button className="signout-btn">
          <FaSignOutAlt className="iconsign" />
          Sign out
        </button>
        </Link>
      </header>
    </div>
  )
}

export default NGOHeader
