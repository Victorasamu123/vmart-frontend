import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Signup.css"
const Signin = () => {
  return (
    <>
     <center>
        <div className='signup-general-div'>
          <div className='second-signup-div'>
            <h1 className='create-account-text-h1'>Welcome Back</h1>
            <input type="email" placeholder='email'className='form-control mb-4 w-75'/>
            <input type="password" placeholder='password'className='form-control mb-4 w-75'/>
            <button className='btn btn-info w-75'>Signin</button>
          </div>
          <div className='first-signup-div'>
           <h3 className='signup-text-vmart'>Welcome to Vmart</h3>
           <Link to="/signup" className='link-for-signup'>Do not have an account?</Link>
           <Link to="/signup" className='btn btn-light w-75 mt-5'>Signup</Link>
          </div>
        </div>
     </center>
    </>
  )
}

export default Signin;