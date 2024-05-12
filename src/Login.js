import React from 'react'

function Login() {
  return (
    <div>
      <div className= 'm-auto flex items-center justify-center'>
        <h1>Login</h1>
        <div className=''>
          <p>Sign in</p>
          <p>Email</p>
          <input placeholder='Enter your email address'></input>
          <p>Password</p>
          <div>
            <input placeholder='Enter your password'></input>
            <button></button>
          </div>
          <button></button>
          <p>Keep me signed in for 30 days</p>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Login