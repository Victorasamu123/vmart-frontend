import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/UserHomePage.css"
import { Link,useLocation,useNavigate } from 'react-router-dom'
const LElectCat = () => {
    const [loading, setloading] = useState(false);
    const [message, setmessage]= useState("");
    const [electArrays, setelectArrays]= useState([]);
    const [messelect,setmessphone]= useState('')
    const [messcart,setmesscart]= useState('')
    const getelectendpoints= "https://vmart-backend.vercel.app/addproducts/getelects"
    const addtoendpoints= "https://vmart-backend.vercel.app/cart/addtocart"
    const navigate=useNavigate()
    useEffect(() => {
        getELect()
      }, [])
      const getELect=()=>{
        setmessage("")
        setloading(true);
        axios.get(getelectendpoints).then((result)=>{
          if(result.data.status){
            setloading(false);
            setmessphone(result.data.message);
            console.log(result);
            setelectArrays(result.data.electarray.slice(7))
          }else{
            setmessage("")
            setloading(true);
            setelectArrays([])
          }
        })
      }
      const goToDetails=()=>{
        navigate("/signin")
      }
      const addtocart=()=>{
        navigate("/signin")
      }
  return (
    <>
       <div className='user-home-page-second-div mt-2 pb-2'>
     <div className='w-100 row'>
      <h4 className='ms-3 col-lg-12 col-md-12 col-sm-12'>Top selling electronics Product</h4>
       {messelect==""?<div class="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>:
          <div className='row w-100 ms-2'>
            {electArrays.map((elect,index)=>(
              <div className='col-lg-2 col-md-6 col-sm-6 phone-display-div ms-3 mb-2' key={elect._id}>
                <div onClick={()=>goToDetails(index)}>
                 <Link className='link-phone-details'>
                <center>
                  <div className='comp-img'>
                <img src={elect.productimage} alt="" className='phones-img1 comp-img'/>
                  </div>
                  <div className='phone-name'>
                <div>{elect.productname}</div>
                  </div>
                <div className='phone-price'>₦{elect.productprice}</div>
                <div className='phone-price2'>₦{elect.productprice}</div>
                <div className='comp-discount mb-2'>-{elect.productdiscount}</div>
                </center>
              </Link>
              </div>
              <center>
              <button className='btn mb-3 add-to-cart text-light' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>addtocart(index)}>Add to cart</button>
              </center>
              </div>
            ))}
            <Link to="/signin">see more electronics product</Link>
          </div>
       }
    </div>
     </div>
    </>
  )
}

export default LElectCat