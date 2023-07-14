import { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'; 
import LoginImage from '../assets/login.jpg'
import '../styles/Login.css'
import RightsReservedFooter from '../components/RightsReservedFooter';
import Header from '../components/Header';
const Login = () => {

  const { setCredentials } = useContext(AuthContext)

  const [form,setForm] = useState({
    email:'',
    password:''
  })
  
  const [attempts, setAttempts] = useState(0);
  const [timer, setTimer] = useState(false);
  const [counter, setCounter] = useState(30);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    if (timer) {
      alert("Please wait for 30 seconds before attempting to log in again.");
      return;
    }

      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        alert("Welcome "+data.user.name+" role: "+data.role);
        setCredentials({user:data.user, role:data.role})
        navigate(data.redirect);
      } else {
        if (attempts < 2) {
          alert(data.message);
          setAttempts(attempts + 1);
        } else {
          alert("You have entered the wrong password three times. Please wait for 30 seconds before attempting to log in again.");
          setAttempts(0);
          setTimer(true);
          setCounter(30);
    
          const countdown = setInterval(() => {
            setCounter((prevCounter) => {
              if (prevCounter === 1) {
                clearInterval(countdown);
                setTimer(false);
              }
              return prevCounter - 1;
            });
          }, 1000);
          // setAttempts(0);
          // setTimer(true);
    
          // setTimeout(() => {
          //   setTimer(false);
          //   setCounter((prevCounter) => {
          //     if (prevCounter === 1) {
          //       clearInterval(countdown);
          //       setTimer(false);
          //     }
          //     return prevCounter - 1;
          //   });
          // }, 30000);

      }
    }
  
  }
  
  return (
    <>
    <div className='login'>
    <Header/>
      <div className='login-container'>      
        <div className='login-image'>
          <img src={LoginImage} alt='login' width={500} height={500}/>
        </div>
      
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label htmlFor="email" className="form-label">Email: </label>
            <input
              type='email'
              value={form.email}
              onChange={e => {
                setForm({
                  ...form,
                  email: e.target.value
                })
              }}
              id='email'
              placeholder='Enter your email here'
            />
            <label htmlFor='password' className="form-label">Password: </label>
            <input
              type='password'
              value={form.password}
              onChange={e => {
                setForm({
                  ...form,
                  password: e.target.value
                })
              }}
              id="password"
              placeholder='Enter password'
            />
            <input
              id='cbox'
              type='checkbox'
              className=""
            />
            <label>Remember Me</label>
            <button type='submit'>Log In</button>
          </form>
          <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
          {timer && <p>Please wait for {counter} seconds before attempting to log in again.</p>}

        </div>
      </div>
      <RightsReservedFooter/>
      
    </div>
    
    </>
  );
}

export default Login;