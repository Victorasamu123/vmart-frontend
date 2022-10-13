import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const CartPage = () => {
  const [loading, setloading] = useState(false);
  const [message, setmessage]= useState("");
  const [cartArray, setcartArray]= useState([]);
  const userId=localStorage.userId
  const cartendpoints="http://localhost:4000/cart/getcart"
  useEffect(() => {
    getcart()
  }, [])
  const getcart=()=>{
    setmessage("");
    setloading(true);
    let getcartpageobj={userId}
    axios.post(cartendpoints,getcartpageobj).then((result)=>{
      console.log(result)
      setloading(false);
      setmessage(result.data.message);
      setcartArray(result.data.cartresult)
    })
  }
  const proceedtopayment=(index)=>{
    alert(index)
  }
  return (
    <>
      {message==""?<div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
          :<div className='general-div-product-details-page'>
            {cartArray.map((cart,index)=>(
              <div className='w-100 row' key={cart._id}>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='fw-bold fs-2'>{cart.productname}</div>
                <img src={cart.productimage} alt="" className='small-img-product-details'/>
                <img src={cart.productimage} alt="" className='big-img-product-details'/>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 div2-product-div'>
              <div className='fs-2 productname'>{cart.productname}</div>
              <div className='productprice'>₦{cart.productprice}</div>
              <div className='fs-2'>Category: {cart.productcategory}</div>
              <div className='fs-5'>Unit-price: <span className='productprice'>₦{cart.productprice}</span></div>
              <div className='fs-4'>{cart.productdescription}</div>
              <button className='btn mt-4 w-75 text-light' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>proceedtopayment(index)}>proceed to payment</button>
              </div>
              </div>
            ))
            }
        </div>
          }
    </>
  )
}

export default CartPage