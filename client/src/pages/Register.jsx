import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register-container'>
    <h1>Sign Up</h1>
    <form >  
        <input type="text"  placeholder='username'/>
        <input type="text"  placeholder='email'/>
        <input type="password" placeholder='password' />
        <button>Sign Up</button>
        <span>Do you have an account? <Link to='/login'>Login here</Link></span>
    </form>

</div>
  )
}

export default Register