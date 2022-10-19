import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import deleteicon from "../../images/delete_FILL0_wght400_GRAD0_opsz48.svg"
const CartPage = () => {
  const [loading, setloading] = useState(false);
  const [message, setmessage]= useState("");
  const [cartArray, setcartArray]= useState([]);
  const [saveitems,setsaveitems]= useState("");
  const [saveitemsArray,setsaveitemsArray]= useState([]);
  const userId=localStorage.userId
  const cartendpoints="http://localhost:4000/cart/getcart"
  const saveitemendpoints = "http://localhost:4000/cart/saveitem"
  const deleteitemendpoints = "http://localhost:4000/cart/removeitem"
  const getsaveitendpoints = "http://localhost:4000/cart/getsaveitem"
  const addtoendpoints2= "http://localhost:4000/cart/addtocart2"
  const navigate=useNavigate()
  useEffect(() => {
    getcart()
    getsaveitem()
  }, [])
  const getcart=()=>{
    setmessage("");
    setloading(true);
    let getcartpageobj={userId}
    axios.post(cartendpoints,getcartpageobj).then((result)=>{
      if(result.data.status==true){
        console.log(result)
        setloading(false);
        setmessage(result.data.message);
        setcartArray(result.data.cartresult.reverse())
      }else{
        setmessage("");
        setloading(true);
        setcartArray([])
      }
    })
  }
  const getsaveitem=()=>{
    let getsaveitemObj={userId}
    axios.post(getsaveitendpoints,getsaveitemObj).then((result)=>{
      if(result.data.status){
        setsaveitemsArray(result.data.saveitemresult)
      }else{
        setsaveitemsArray([])
      }
    })
  }
  const proceedtopayment=(index)=>{
    let filteredArray= cartArray.filter((item,ind)=>index == ind)
    navigate("/homepage/payment",{state:{filteredArray}})
  }
  const saveitem=(index)=>{
    let filteredArray = cartArray.filter((item, ind) => index == ind);
    console.log(filteredArray)
    let productimage=filteredArray[0].productimage
    let productname=filteredArray[0].productname
    let productcategory=filteredArray[0].productcategory
    let productdescription=filteredArray[0].productdescription
    let productprice=filteredArray[0].productprice
    let productdiscount=filteredArray[0].productdiscount
    let userId=localStorage.userId
    let cartObj={productimage,productname,productcategory,productdescription,productprice,productdiscount,userId}
    axios.post(saveitemendpoints,cartObj).then((result)=>{
      console.log(result.data.message);
      setsaveitems(result.data.message);
      getcart()
      getsaveitem()
    })
  }
  const removeitem=(index)=>{
    let filteredArray = cartArray.filter((item, ind) => index == ind);
    console.log(filteredArray)
    let productimage=filteredArray[0].productimage
    let productname=filteredArray[0].productname
    let productcategory=filteredArray[0].productcategory
    let productdescription=filteredArray[0].productdescription
    let productprice=filteredArray[0].productprice
    let productdiscount=filteredArray[0].productdiscount
    let userId=localStorage.userId
    let cartObj={productimage,productname,productcategory,productdescription,productprice,productdiscount,userId}
    axios.post(deleteitemendpoints,cartObj).then((result)=>{
      console.log(result.data.message);
      setsaveitems(result.data.message);
      getcart()
      getsaveitem()
    })
  }
  const addtocart2=(index)=>{
    let filteredArray = saveitemsArray.filter((item, ind) => index == ind);
    console.log(filteredArray)
    let productimage=filteredArray[0].productimage
    let productname=filteredArray[0].productname
    let productcategory=filteredArray[0].productcategory
    let productdescription=filteredArray[0].productdescription
    let productprice=filteredArray[0].productprice
    let productdiscount=filteredArray[0].productdiscount
    let userId=localStorage.userId
    let cartObj={productimage,productname,productcategory,productdescription,productprice,productdiscount,userId}
    axios.post(addtoendpoints2,cartObj).then((result)=>{
      console.log(result.data.message);
      getcart()
      getsaveitem()
    })
  }
  return (
    <>
      {message===""?<div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
          :
          <div>
          <div className='user-home-page-second-div mt-2 pb-2'>
            <div className='w-100 row'>
              <h1 className='col-lg-12 col-md-12 col-sm-12'>
               <center>Cart Page</center>
               </h1>
            </div>
        </div>

            {cartArray==""?<div className='fs-1'><center>cart page is currently empty, add product to view in cart page</center></div>
              :
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
              <button type="button" className="btn mt-4 w-75 text-light mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{backgroundColor:"rgb(251,87,3)"}}>
              <i className="fa-solid fa-trash" style={{fontSize:"20px"}}></i> Remove item
             </button>
              <button className='btn mt-4 w-75 text-light mb-3' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>proceedtopayment(index)}>proceed to payment</button>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Remove item</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <button className='btn mt-4 w-75 text-light mb-3' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>saveitem(index)} data-bs-dismiss="modal"><i className="fa-solid fa-heart"style={{fontSize:"20px"}} ></i>Save Item</button>
      <button className='btn mt-4 w-75 text-light mb-3' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>removeitem(index)} data-bs-dismiss="modal"><i className="fa-solid fa-trash" style={{fontSize:"20px"}}></i>Remove item</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn " style={{backgroundColor:"rgb(251,87,3)"}}>vmart</button>
           </div>
         </div>
     </div>
         </div>
              </div>
              </div>
            ))
            }
        </div>
            }
           <div className='user-home-page-second-div mt-5 pb-2'>
     <div className='w-100 row'>
      <h4 className='ms-3 col-lg-12 col-md-12 col-sm-12'>Saved Items</h4>
          <div className='row w-100 ms-2'>
            {saveitemsArray==""?<div className='fs-1'><center>No Saved Items</center></div>:
              <div>
                {saveitemsArray.map((saveitem,index)=>(
              <div className='col-lg-2 col-md-6 col-sm-6 phone-display-div ms-3 mb-2' key={saveitem._id}>
                <div>
                 <Link className='link-phone-details'>
                <center>
                  <div className='comp-img'>
                <img src={saveitem.productimage} alt="" className='phones-img1 comp-img'/>
                  </div>
                  <div className='phone-name'>
                <div>{saveitem.productname}</div>
                  </div>
                <div className='phone-price'>₦{saveitem.productprice}</div>
                <div className='phone-price2'>₦{saveitem.productprice}</div>
                <div className='comp-discount mb-2'>-{saveitem.productdiscount}</div>
                </center>
              </Link>
              </div>
              <center>
              <button className='btn mb-3 add-to-cart text-light' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>addtocart2(index)}>Add to cart</button>
              </center>
              </div>
            ))}
              </div>
            }
           
          </div>
    </div>
     </div>
        </div>
          }
    </>
  )
}

export default CartPage