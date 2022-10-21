import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../styles/DisplayIcon.css"
const Account = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [loading, setloading] = useState(false)
    const getusersendpoints="https://vmart-backend.vercel.app/auth/users"
    useEffect(() => {
     getusers()
    }, [])
    
    const getusers=()=>{
        setmessage("");
        setloading(true);
        let userId=localStorage.userId
        let getobj={userId}
        axios.post(getusersendpoints,getobj).then((result)=>{
            if(result.data.status==true){
              setloading(false);
              setmessage(result.data.message);
              console.log(result)
              setfirstname(result.data.result.firstname)
              setlastname(result.data.result.lastname)
              setemail(result.data.result.email)
              }else{
                setmessage("");
                setloading(true);
              }
        })
    }
  return (
    <>
      {message==""?<div className="d-flex justify-content-center" style={{height:"400px"}}>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
          :
          <div className='account-general-div'>
            <center>
              <h3>Hello {firstname}</h3>
              <div className='firstname-container'>
               <h3>Firstname:</h3>
               <div className='h3-account'>{firstname}</div>
              </div>
              <div className='firstname-container'>
               <h3>Lastname:</h3>
               <div className='h3-account'>{lastname}</div>
              </div>
              <div className='firstname-container'>
               <h3>Email:</h3>
               <div className='h3-account'>{email}</div>
              </div>
            </center>
        </div>
            }
    </>
  )
}

export default Account;