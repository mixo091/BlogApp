import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-container'>
        <h1>Login</h1>
        <form >
            
            <input type="text"  placeholder='username'/>
            <input type="password" placeholder='password' />
            <button>Login</button>
            <span>Don't you have an account? <Link to='/register'>Register here</Link></span>
        </form>

    </div>
  )
}

export default Login