import React, {useState} from "react"; 
import {validateEmail} from "../../src/utils";
const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   }; 
function DonorSignup(){
    
    const [firstName, setFirstName] = useState(""); 
    const [address, setaddress] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [number, setNumber] = useState(""); 
    const [cnic, setcnic] = useState(""); 
    const [password, setPassword] = useState({ 
      value: "", 
      isTouched: false, 
    }); 
   
   
    const getIsFormValid = () => { 
      return ( 
        firstName && 
        number &&
        cnic &&
        validateEmail(email) && 
        password.value.length >= 8         
      ); 
    }; 
    
    const clearForm = () => { 
      setFirstName(""); 
      setaddress(""); 
      setEmail(""); 
      setNumber(""); 
      setPassword({ 
        value: "", 
        isTouched: false, 
      }); 
      
    }; 
    
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      alert("Account created!"); 
      clearForm(); 
    }; 
    
    return ( 
      <div className="App"> 
        <form onSubmit={handleSubmit}> 
          <fieldset> 
            <h2>Register as Donor</h2> 
            <div className="Field"> 
              <label> 
                Full Name <sup>*</sup> 
              </label> 
              <input type="text"
                value={firstName} 
                onChange={(e) => { 
                  setFirstName(e.target.value); 
                }} 
                placeholder="Full Name" 
              /> 
            </div> 
            <div className="Field"> 
              <label> 
                CNIC Number <sup>*</sup> 
              </label> 
              <input type="number"
                 value={cnic} 
                 onChange={(e) => { 
                   setcnic(e.target.value); 
                 }} 
                 placeholder="Cnic-number"  /> 
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
              <input type="number"
                 value={number} 
                 onChange={(e) => { 
                   setNumber(e.target.value); 
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
            <p>Already have a Donor account? Login</p>
          </fieldset> 
          
        </form> 
      </div> 
    ); 
   } 
export default DonorSignup;