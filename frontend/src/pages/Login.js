const Login = () => {

  
  return (
    <div className="form-container">
      <form>
        <h3>Log In</h3>
        <label htmlfor="email" className="form-label">Email: </label>
        <input
          type='email'
          onChange={e => e.target.value}
          id='email'
          placeholder='Enter your email here'
        />
        <label htmlfor='password' className="form-label">Password: </label>
        <input
          type='password'
          onChange={e => e.target.value}
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