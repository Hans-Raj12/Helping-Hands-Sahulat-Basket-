import { Link } from "react-router-dom"
import image from '../assets/clouds.jpg'

const Signup = () => {
    return (
       <div className="signup-container">
        <h1>Welcome to Helping Hands (Sahulat Basket)</h1>
        <h4>Sign up as...</h4>
        <div className="signup-as">
            <div className="signup-item">
                <Link to='/'>
                    <figure >
                        <img src={image} alt="donor" style={{width:'200px',height:'200px'}}/>
                    </figure>
                </Link>
            </div>
            <div className="signup-item">
                <Link to='/'>
                    <img src="frontend\public\NGO.jpg" alt="ngo"/>
                </Link>
            </div>
        </div>
       </div>
    )
}

export default Signup