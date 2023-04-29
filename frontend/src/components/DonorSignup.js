import React, {useState, useEffect} from "react"; 
import { Link } from "react-router-dom";
import {validateEmail} from "../../src/utils";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import '../styles/donorSignup.css'
const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   }; 
function DonorSignup(){
    
    const [name, setName] = useState(""); 
    const [address, setaddress] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phone, setphone] = useState(""); 
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
      setphone(""); 
      setPassword({ 
        value: "", 
        isTouched: false, 
      }); 
      
    }; 
    
    const handleSubmit =  (e) => { 
      e.preventDefault(); 
      const data = { 
        name, 
        address, 
        email, 
        phone, 
        cnic, 
        password: password.value 
      }; 
      
      fetch('/donor-signup', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(data) 
      }) 
      .then(response => {
        console.log(response.json())
        
      }) 
      .then(data => {
        console.log(data) 
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
            <h2>Register as Donor</h2> 
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
              <input type="text"
                 value={cnic} 
                 onChange={(e) => { 
                   setcnic(e.target.value); 
                 }} 
                 placeholder="Cnic-Number"  /> 
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
              <input type="text"
                 value={phone} 
                 onChange={(e) => { 
                   setphone(e.target.value); 
                 }} 
                 placeholder="Number"  /> 
            </div> 
            <div className="Field"> 
              <label>Address</label> 
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
            <p>Already have a Donor account? <Link to='/login'>Login</Link></p>
          </fieldset> 
          
        </form> 
      </div> 
    ); 
} 

export default DonorSignup;