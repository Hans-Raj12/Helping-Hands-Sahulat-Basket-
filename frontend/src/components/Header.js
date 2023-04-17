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
            <Link to='/'>Home</Link>
          </li>
          <li>
           <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Services</Link>
          </li>
          <li>
            <Link to='/'>Portfolio</Link>
          </li>
          <li>
            <Link to='/'>Team</Link>
          </li>  
          <li>
            <Link to='/'>Contact</Link>
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