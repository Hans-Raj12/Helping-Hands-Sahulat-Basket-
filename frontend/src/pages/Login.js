import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const [form,setForm] = useState({
    email:'',
    password:''
  })

 const handleSubmit = (e)=>{
  e.preventDefault()
 }
  
  return (
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
    </div>
  );
}

export default Login;