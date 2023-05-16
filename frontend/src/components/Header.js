import { Link } from "react-router-dom"
import './AdminDashboard/Header.css'
const Header = () => {

    return(
        <>
       <header id="header" className="fixed-top " style={{background: '#151515'}}>
        <div className="container">
          <div className="logo">
            <h1 >
            <Link to='/'>Helping Hands<span>.</span></Link>
            </h1>
          </div>
          {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
       <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a href="#hero">Home</a>
              {/* <Link to='/'>Home</Link> */}
            </li>
            <li>
            <a href="#about">About</a>
            {/* <Link to='/'>About</Link> */}
            </li>
            <li>
            <a href="#services">Services</a>

              {/* <Link to='/'>Services</Link> */}
            </li>
            
            <li>
            <a href="#team">Team</a>
              {/* <Link to='/'>Team</Link> */}
            </li>  
            <li>
            <a href="#contact">Contact</a>
              {/* <Link to='/'>Contact</Link> */}
            </li>
            <li>
              <Link to='/login'>Sign In</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>

            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        <Link to='/login' className="get-started-btn">Donate</Link>
  
        
    </div>
  </header>
        </>
    ) 

}

export default Header