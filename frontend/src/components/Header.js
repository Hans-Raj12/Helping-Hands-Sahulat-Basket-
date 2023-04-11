import { Link } from "react-router-dom"
const Header = () => {

    return(
        <>
            <header id="header" className="fixed-top " style={{background: 'black'}}>
    <div className="container d-flex align-items-center justify-content-lg-between">
      <h1 className="logo me-auto me-lg-0">
        <a href="index.html">
          Helping Hands<span>.</span>
        </a>
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link scrollto " href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#team">
              Team
            </a>
          </li>
          
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <Link to='/login'>Sign In</Link>
            {/* <a className="nav-link scrollto" href="#contact">
              Sign In
            </a> */}
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Sign Up
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      <a href="#about" className="get-started-btn scrollto">
        Donate
      </a>
    </div>
  </header>
        </>
    ) 

}

export default Header