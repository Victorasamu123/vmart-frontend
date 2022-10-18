import React from 'react'
import PaystackPop from "@paystack/inline-js"
const Payments = () => {
  return (
    <>
     <div className=''>
       <form action="" id='paymentForm' className=''>
        <div className="form-group">
            <label htmlFor="Amount">Amount</label>
            <input type="tel" id='amount' />
        </div>
        <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id='first-name' />
        </div>
        <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id='last-name' />
        </div>
        <button>Pay</button>
       </form>
     </div>
    </>
  )
}

export default Payments;