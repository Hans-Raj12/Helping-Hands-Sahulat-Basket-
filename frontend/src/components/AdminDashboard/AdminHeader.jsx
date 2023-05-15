import React from 'react'
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaBell, FaEnvelope } from 'react-icons/fa';
import "./Header.css";

const AdminHeader = () => {
  return (
    <>
      <header id="header" className="fixed-top " style={{background: 'black'}}>
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <Link to="/">
              Admin Dashboard<span>.</span>
            </Link>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
         
          <li>
            <Link to='/'><FaBell className="icon" size={26}/></Link>
          </li>
          <li>
            <Link to='/'><FaEnvelope className="icon" size={25}/></Link>

          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
        <Link to='/' className="signout-btn"><FaSignOutAlt  size={18}/>  Sign Out</Link>
    </div>
  </header>
        {/* <div className="logo">
        </div>
        <div className="icons">
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
        </div>
        <button className="signout-btn">
          <FaSignOutAlt className="iconsign" />
          Sign Out
        </button> */}
    </>
  )
}

export default AdminHeader
