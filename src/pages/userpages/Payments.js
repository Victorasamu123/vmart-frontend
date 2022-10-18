import React, { useEffect, useState } from 'react'
import PaystackPop from "@paystack/inline-js"
import { useLocation } from 'react-router-dom'
const Payments = () => {
    const location = useLocation()
    const email=localStorage.email
    const userId = localStorage.userId
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [amount, setamount] = useState("")
    useEffect(() => {
     getValue()
    }, [])
    const getValue=()=>{
        console.log(location.state)
    }
    const makepayment=(e)=>{
        let email=localStorage.email
        let userId = localStorage.userId
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key:"pk_test_8450d0b1f1e6e0c8b67fb020e21d4802a6d8c4dd",
            amount:amount*100,
            email:email,
            firstname:firstname,
            lastname:lastname,
            onSucess(transaction){
                let message=`Payment Complete! Reference ${transaction.reference}`
                alert(message)
            },
            onCancel(){
                window.confirm("are you sure you want to cancel this transaction")
            }
        })
    }
  return (
    <>
     <div className="container-fluid">
        <div className="row">
            <div className="col-lg-5 col-sm-10 shadow-sm mx-auto card">
                <h1 className="text-center btn btn-primary w-100 mt-2">Make Payment</h1>
                <input type="number" className="form-control my-2" value={amount} placeholder='Enter amount' onChange={(e)=>setamount(e.target.value)}/>
                <input type="text" className="form-control my-2" value={firstname} placeholder='Firstname' onChange={(e)=>setfirstname(e.target.value)}/>
                <input type="text" className="form-control my-2" value={lastname} placeholder='Lastname' onChange={(e)=>setlastname(e.target.value)}/>
                <button className="btn btn-primary w-100 mb-2" onClick={(e)=>makepayment(e)}>Pay</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Payments;