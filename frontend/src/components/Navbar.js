import { Link } from 'react-router-dom'
const Navbar = ()=>{
   
    const toggle = () =>{
        const navBar = document.querySelector('.nav-bar')
        navBar.classList.toggle('active')

    }
    return (

        <header>
            <div className='logo'>
                <Link to='/'>
                     <h1>Helping Hand</h1>
                </Link>
            </div>
            <div className='hamburger' onClick={toggle}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            <nav className='nav-bar'>
                <ul>
                    <li>
                        <Link to='/' className='active'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Donate</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/login'>login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>



        // <header>
        //     <div className='container collapses'>
        //         <Link to='/'>
        //             <h1>Helping Hand</h1>
        //         </Link>
        //         <nav>
        //             <div>
        //             <Link to='/'>Home</Link>
        //             <Link to='/login'>Donate</Link>
        //             <Link to='/about'>About</Link>
        //                 <Link to='/login'>Login</Link>
        //                 <Link to='/signup'>Signup</Link>
        //                 <Link to='/contact'>Contact Us</Link>
        //             </div>
        //         </nav>
        //     </div>
        // </header>
    )
}

export default Navbar