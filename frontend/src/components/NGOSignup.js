import React, {useState} from "react"; 
import {validateEmail} from "../../src/utils";
import './NGOSignup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header'
import { useNavigate, Link } from "react-router-dom";
// import Check from "..Check";
const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   }; 
function NGOSignup(){
    const [ngoName, setNGOName] = useState(""); 
    const [address, setaddress] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [number, setNumber] = useState(""); 
    const [numOfEmployees, setNumOfEmployees] = useState(""); 
    const [NGOType, setNGOType] = useState(""); 
    const [experience, setexperience] = useState(""); 
    const [password, setPassword] = useState({ 
      value: "", 
      isTouched: false, 
    }); 
    const [role, setRole] = useState("role");
    const [website, setwebsite] = useState("no");
    const [websiteUrl, setWebsiteUrl] = useState('')
   
    const navigate = useNavigate()

    const getIsFormValid = () => { 
      return ( 
        ngoName && 
        number &&
        validateEmail(email) && 
        password.value.length >= 8  &&
        NGOType &&
        role
      ); 
    }; 
    
    const clearForm = () => { 
      setNGOName(""); 
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
      
      const data = {
        name:ngoName,
        address:address,
        email,
        password:password.value,
        phone:number,
        numOfEmployees,
        NGOType,
        experience,
        websiteUrl
      }
      fetch('/ngo-signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(response => {response.json()})
      .then(data => {
        alert('Account Created')
        clearForm();
        navigate('/login')
      })
      .catch(err=>console.log(err))
    }; 
    
    return ( 
      <>
      <Header/>
    <Container className="ngo-signup-container">
        <form onSubmit={handleSubmit}> 
            <h2>Register as NGO</h2>
            <hr/> 
        <Row className="m-3">
            <Col sm={4} > 
              <label> 
                NGO Name <sup>*</sup> 
              </label> 
              <input type="text"
                value={ngoName} 
                onChange={(e) => { 
                  setNGOName(e.target.value); 
                }} 
                placeholder="NGO Name" 
              /> 
            </Col> 
            <Col sm={4}> 
              <label> 
                Number <sup>*</sup> 
              </label> 
              <input type="tel"
                 value={number} 
                 onChange={(e) => { 
                   setNumber(e.target.value); 
                 }} 
                 placeholder="Number"  /> 
            </Col> 
            <Col sm={4}> 
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
            </Col>
        </Row> 
        <Row className="m-3">
            <Col sm={4}> 
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
            </Col> 
            <Col sm={4}> 
              <label> 
                Type of Organization <sup>*</sup> 
              </label> 
              <input type="text"
                 value={NGOType} 
                 onChange={(e) => { 
                   setNGOType(e.target.value); 
                 }} 
                 placeholder="Type of Organization"  /> 
            </Col> 
            <Col sm={4}> 
              <label>Address</label> 
              <input 
                value={address} 
                onChange={(e) => { 
                  setaddress(e.target.value); 
                }} 
                placeholder="Address" 
              /> 
            </Col>
          </Row>
          <Row className="m-3">
            <Col sm={4}> 
                  <label> 
                    Are you registered? <sup>*</sup> 
                  </label> 
                  
                  <select value={role} onChange={(e) => setRole(e.target.value)}> 
                    
                    <option value="yes">yes</option> 
                    <option value="no">no</option> 
                  </select>
                </Col>
              <Col sm={4}> 
                <label>Year of Experience?</label> 
                <input 
                  type="number"
                  value={experience} 
                  onChange={(e) => { 
                    setexperience(e.target.value); 
                  }} 
                  placeholder="Experience" 
                /> 
              </Col>
              <Col sm={4}> 
                <label>NO: of employees?</label> 
                <input 
                type="number"
                  value={numOfEmployees} 
                  onChange={(e) => { 
                    setNumOfEmployees(e.target.value); 
                  }} 
                  placeholder="Employees" 
                /> 
              </Col>
            </Row>
            <Row className="m-3">
              <Col sm={5}> 
              <label> 
                Do you have website?
              </label> 
              <select value={website} onChange={(e) => setwebsite(e.target.value)}> 
                <option value="yes">yes</option> 
                <option value="no">no</option> 
              </select>

              {website==='yes' && 
                (<div>
                    <label>Website Url <sup>*</sup></label>
                    <input
                      type="text"
                      value={websiteUrl}
                      onChange={e =>{
                        setWebsiteUrl(e.target.value)
                      }}
                    />
                </div>)
              }
              </Col>
            <Col sm={6}> 
              <label > 
                Which supplies you can distribute ? <sup>*</sup> 
              </label> 

              <label className="cb-label" htmlFor="food">    
              Surplus Food <input type="checkbox" id="food"/>
                </label>
              <label className="cb-label" htmlFor="cloth">
              Clothes<input type="checkbox" id="cloth"/>
                </label>
              <label className="cb-label" htmlFor="money">
              Fund/Money<input type="checkbox" id="money"/>
                </label>
             
                </Col>
                </Row>
            <p className="status">By clicking Sign Up, you agree to our Terms, Privacy 
                            Policy and Cookies Policy. You may receive SMS notifications 
                            from us and can opt out at any time.</p>
            <button type="submit" disabled={!getIsFormValid()}> 
              Create account 
            </button>
            <p>Already have a NGO account? <Link to='/login'>Login</Link></p>
               
        </form> 
        </Container>
        </>
    ); 
   } 
export default NGOSignup