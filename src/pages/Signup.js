import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Signup.css"
const Signup = () => {
  return (
    <>
     <center>
        <div className='signup-general-div'>
          <div className='first-signup-div'>
           <h3 className='signup-text-vmart'>Welcome to Vmart</h3>
           <Link to="/signin" className='link-for-signup'>Already have an account?</Link>
           <Link to="/signin" className='btn btn-light w-75 mt-5'>Signin</Link>
          </div>
          <div className='second-signup-div'>
            <h1 className='create-account-text-h1'>Create new account</h1>
            <input type="text" placeholder='firstname' className='form-control mb-4 w-75'/>
            <input type="text" placeholder='lastname'className='form-control mb-4 w-75'/>
            <input type="email" placeholder='email'className='form-control mb-4 w-75'/>
            <input type="password" placeholder='password'className='form-control mb-4 w-75'/>
            <button className='btn btn-info w-75'>Signup</button>
          </div>
        </div>
     </center>
    </>
  )
}

export default Signup;