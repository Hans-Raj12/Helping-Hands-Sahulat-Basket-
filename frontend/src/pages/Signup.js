import { Link } from "react-router-dom"
import ngo from '../assets/ngo.jpg'
import donor from '../assets/donor.jpg'
import needy from '../assets/needy.jpg'
import '../styles/signup.css'
const Signup = () => {
    return (
       <div className="signup-container">
        <h1>Welcome to Helping Hands (Sahulat Basket)</h1>
        <h4>Sign up as...</h4>
        <div className="signup-as">
            <div className="signup-item">
                <Link to='/donor-signup'>
                    <img src={donor} alt="donor" />
                    <p>Donor</p>
                </Link>
            </div>
            <div className="signup-item">
                <Link to='/'>
                    <img src={ngo} alt="ngo"/>
                    <p>NGO</p>

                </Link>
            </div>
            <div className="signup-item">
                <Link to='/needy-signup'>
                    <img src={needy} alt="needy"/>
                    <p>Needy</p>

                </Link>
            </div>
        </div>
       </div>
    )
}

export default Signup