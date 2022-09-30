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
           <button className='btn btn-light w-75 mt-5'><Link to="/signin" className='link-btn-for-signup'>Signin</Link></button>
          </div>
          <div className='second-signup-div'>
            <h1 className='create-account'>Create new account</h1>
          </div>
        </div>
     </center>
    </>
  )
}

export default Signup;