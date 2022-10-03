import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios" 
import "../styles/Signup.css"
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const [user_id, setuser_id] = useState("");
  const endpointsignin = "http://localhost:4000/auth/signin"
  const signin=()=>{
    let regexForEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    let regexForPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if (email==""||password==""&&!regexForEmail.test(email)||!regexForPassword.test(password)
    ) {
      if(email==""){
        setemailerror("please this field is required !!")
      }else if(!regexForEmail.test(email)){
        setemailerror("please enter a correct email format !!") 
      }else if(!email==""||regexForEmail.test(email)){
        setemailerror("")
      }
      if(password==""){
        setpassworderror("please this field is required !!")
      }else if(!regexForPassword.test(password)){
        setpassworderror("password must contain uppercase,lowercase and numbers !!") 
      }else if(!password==""||regexForPassword.test(password)){
        setpassworderror("")
      }
   }
    else{
      setemailerror("")
      setpassworderror("")
      setmessage('')
      setloading(true);
      let signIpObj={email,password}
      axios.post(endpointsignin,signIpObj).then((result)=>{
        console.log(result)
        setloading(false);
        setmessage(result.data.message);
      }).catch((err)=>{
        console.log(err)
      });
  }
  }
  return (
    <>
     <center>
        <div className='signup-general-div'>
          <div className='second-signup-div'>
            <h1 className='create-account-text-h1'>Welcome Back</h1>
            <input type="email" placeholder='email'className='form-control mb-4 w-75' onChange={(e)=>setemail(e.target.value)} value={email}/>
            <div className='text-danger'>{emailerror}</div>
            <input type="password" placeholder='password'className='form-control mb-4 w-75' onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <div className='text-danger'>{passworderror}</div>
            {loading ? (
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
            ) : (
              ""
            )}
            {message !== "" ? (
              <div className="alert alert-danger">{message}</div>
            ) : (
              ""
            )}
            <button className='btn btn-info w-75' onClick={signin} style={{backgroundColor:"rgb(251,87,3)"}}>Signin</button>
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