import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");

  return (
    
    <div className='container'>
    <form className='login-container'>
    <h2 >Login Form</h2>
        <input className='input' type='text'  placeholder='username'/>
        <input className='input' type='text' placeholder='email'/>
        <input className='input' name='password' placeholder='password'/>
        <input className='input-btn' type='submit' value="Login" />
    </form>
    </div>
    
  )
}

export default Login