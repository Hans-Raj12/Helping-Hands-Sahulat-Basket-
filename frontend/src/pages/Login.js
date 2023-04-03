import { useState } from 'react'
const Login = () => {

  const [form,setForm] = useState({
    email:'',
    password:''
  })
  
  return (
    <div className="form-container">
      <form>
        <h3>Log In</h3>
        <label htmlfor="email" className="form-label">Email: </label>
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
        <label htmlfor='password' className="form-label">Password: </label>
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
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;