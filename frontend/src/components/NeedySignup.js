import React, {useState} from "react"; 
import { Link, Navigate, useNavigate } from "react-router-dom";
import {validateEmail} from "../../src/utils";
import '../styles/donorSignup.css'
const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   }; 
function NeedySignup(){
    

    const [name, setName] = useState(""); 
    const [address, setaddress] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [cnic, setcnic] = useState(""); 
    const [password, setPassword] = useState({ 
      value: "", 
      isTouched: false, 
    }); 
   
   const navigate = useNavigate()

    const getIsFormValid = () => { 
      return ( 
        name && 
        phone &&
        cnic &&
        validateEmail(email) && 
        password.value.length >= 8         
      ); 
    }; 
    
    const clearForm = () => { 
      setName(""); 
      setaddress(""); 
      setEmail(""); 
      setPhone(""); 
      setPassword({ 
        value: "", 
        isTouched: false, 
      }); 
      
    }; 
    
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      const data = { 
        name, 
        address, 
        email, 
        phone, 
        cnic, 
        password: password.value 
      }; 
      
      fetch('/needy-signup', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(data) 
      }) 
      .then(response => {
        response.json()
        
      }) 
      .then(data => { 
        alert(`Account created!`); 
        clearForm(); 
        navigate('/login')
        
      }) 
      .catch((error) => { 
        console.error('Error:', error); 
      }); 
    }; 
    
    return ( 
      <div className="donorSignup"> 
        <form onSubmit={handleSubmit}> 
          <fieldset> 
            <h2>Register as Needy</h2> 
            <div className="Field"> 
              <label> 
                Full Name <sup>*</sup> 
              </label> 
              <input type="text"
                value={name} 
                onChange={(e) => { 
                  setName(e.target.value); 
                }} 
                placeholder="Full Name" 
              /> 
            </div> 
            <div className="Field"> 
              <label> 
                CNIC Number <sup>*</sup> 
              </label> 
              <input type="tel"
                 value={cnic} 
                 onChange={(e) => { 
                   setcnic(e.target.value); 
                 }} 
                 placeholder="CNIC-Number"  /> 
            </div> 
            <div className="Field"> 
              <label> 
                Email address <sup>*</sup> 
              </label> 
              <input type="email"
                value={email} 
                onChange={(e) => { 
                  setEmail(e.target.value); 
                }} 
                placeholder="Email address" 
              /> 
            </div> 
            <div className="Field"> 
              <label> 
                Password <sup>*</sup> 
              </label> 
              <input 
                value={password.value} 
                type="password" 
                onChange={(e) => { 
                  setPassword({ ...password, value: e.target.value }); 
                }} 
                onBlur={() => { 
                  setPassword({ ...password, isTouched: true }); 
                }} 
                placeholder="Password" 
              /> 
              {password.isTouched && password.value.length < 8 ? ( 
                <PasswordErrorMessage /> 
              ) : null} 
            </div> 
            <div className="Field"> 
              <label> 
                Contact Number <sup>*</sup> 
              </label> 
              <input type="tel"
                 value={phone} 
                 onChange={(e) => { 
                   setPhone(e.target.value); 
                 }} 
                 placeholder="Contact Number"  /> 
            </div> 
            <div className="Field"> 
              <label>
                Address<sup>*</sup> 
                </label> 
              <input 
                value={address} 
                onChange={(e) => { 
                  setaddress(e.target.value); 
                }} 
                placeholder="Address" 
              /> 
            </div> 
            <p className="status">By clicking Sign Up, you agree to our Terms, Privacy 
                            Policy and Cookies Policy. You may receive SMS notifications 
                            from us and can opt out at any time.</p>
            <button type="submit" disabled={!getIsFormValid()}> 
              Create account 
            </button>
            <p>Already have a Needy account? <Link to='/login'>Login</Link></p>
          </fieldset> 
          
        </form> 
      </div> 
    ); 
   } 
export default NeedySignup;