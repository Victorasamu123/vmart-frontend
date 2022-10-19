import React, { useEffect, useState } from 'react'
import PaystackPop from "@paystack/inline-js"
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import "../../styles/ProductDetails.css"
const Payments = () => {
    const location = useLocation()
    const email=localStorage.email
    const userId = localStorage.userId
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [amount, setamount] = useState("")
    const [message,setmessage]=useState("")
    const transactionsendpoints ="http://localhost:4000/cart/transactions"
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
        let productname2=location.state.filteredArray[0].productname
        console.log(productname2)
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key:"pk_test_8450d0b1f1e6e0c8b67fb020e21d4802a6d8c4dd",
            amount:amount*100,
            email:email,
            firstname:firstname,
            lastname:lastname,
            onSuccess(transaction){
                let message=`Payment Complete! Reference ${transaction.reference}`
                alert(message)
                let ref=transaction.reference
                let date = new Date()
                
                let transactionObj={firstname,lastname,amount,email,userId,productname2,ref}
                console.log(transactionObj);
                setmessage("")
                axios.post(transactionsendpoints,transactionObj).then((result)=>{
                    setmessage(result.data.message)
                    console.log(result);
                    setTimeout(() => {
                        setmessage("")
                    }, 1500);
                })
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
        <center>
            {message==""?<div></div>
             :
             <div className='message-display alert alert-success fs-1'>{message}</div>
            }
        </center>
      </div>
    </>
  )
}

export default Payments;