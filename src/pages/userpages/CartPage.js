import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import deleteicon from "../../images/delete_FILL0_wght400_GRAD0_opsz48.svg"
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
      setcartArray(result.data.cartresult.reverse())
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
          :
          <div className='user-home-page-second-div mt-2 pb-2'>
            <div className='w-100 row'>
              <h1 className='col-lg-12 col-md-12 col-sm-12'>
               <center>Cart Page</center>
               </h1>
            </div>
          <div className='general-div-product-details-page'>
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
              <button type="button" class="btn mt-4 w-75 text-light mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{backgroundColor:"rgb(251,87,3)"}}>
              <img src={deleteicon} alt="" style={{color:"white"}}/><i class="fa-solid fa-trash"></i> Remove item
             </button>
              <button className='btn mt-4 w-75 text-light mb-3' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>proceedtopayment(index)}>proceed to payment</button>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
           </div>
         </div>
     </div>
         </div>
              </div>
              </div>
            ))
            }
        </div>
        </div>
          }
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CartPage