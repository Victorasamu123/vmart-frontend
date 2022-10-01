import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import "../styles/Signup.css"
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstnameerror, setfirstnameerror] = useState("");
  const [lastnameerror, setlastnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const signup=()=>{
    let regexForFirstName=/^[\w]{3,}$/
    let regexForLastName=/^[\w]{3,}$/
    let regexForEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    let regexForPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if (firstname==""||lastname==""||email==""||password==""&&!regexForFirstName.test(firstname)||!regexForLastName.test(lastname)||!regexForEmail.test(email)||!regexForPassword.test(password)
    ) {
      if(firstname==""){
        setfirstnameerror("please this field is required !!")
      }else if(!regexForFirstName.test(firstname)){
        setfirstnameerror("firstname must be at least 3 character and space is not allowed !!") 
      }else if(!firstname==""||regexForFirstName.test(firstname)){
        setfirstnameerror("")
      }
      if(lastname==""){
        setlastnameerror("please this field is required !!")
      }else if(!regexForLastName.test(lastname)){
        setlastnameerror("lastname must be at least 3 character and space is not allowed !!") 
      }else if(!lastname==""||regexForLastName.test(firstname)){
        setlastnameerror("")
      }
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
      setfirstnameerror("")
      setlastnameerror("")
      setemailerror("")
      setpassworderror("")
      // let signUpObj={firstname,lastname,email,password,status:false}
      // axios.post(endPoints,signUpObj).then((result)=>{
      //   console.log(result)
      // }).catch((err)=>{
      //   console.log(err)
      // });
      alert("correct login")
  }
  }
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
            <input type="text" placeholder='firstname' className='form-control mb-4 w-75' onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
            <div className='text-danger'>{firstnameerror}</div>
            <input type="text" placeholder='lastname'className='form-control mb-4 w-75' onChange={(e)=>setlastname(e.target.value)} value={lastname}/>
            <div className='text-danger'>{lastnameerror}</div>
            <input type="email" placeholder='email'className='form-control mb-4 w-75' onChange={(e)=>setemail(e.target.value)} value={email}/>
            <div className='text-danger'>{emailerror}</div>
            <input type="password" placeholder='password'className='form-control mb-4 w-75' onChange={(e)=>setpassword(e.target.value)} value={password}/>
            <div className='text-danger'>{passworderror}</div>
            <button className='btn btn-info w-75' onClick={signup}>Signup</button>
          </div>
        </div>
     </center>
    </>
  )
}

export default Signup;