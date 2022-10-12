import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import img9 from "../../images/phones/ptb-android-phones_378x252.png"
import img10 from "../../images/phones/ptb-iphones_378x252.png"
import img11 from "../../images/phones/ptb-top-brands_378x252.png"
const PhoneCatPage = () => {
  const [loading, setloading] = useState(false);
  const [message, setmessage]= useState("");
  const [phoneArrays, setphoneArrays]= useState([]);
  const [messphone,setmessphone]= useState('')
  const navigate=useNavigate()
  const getphonesendpoints= "http://localhost:4000/addproducts/getphones"
  const addtoendpoints= "http://localhost:4000/cart/addtocart"
    useEffect(() => {
      getPhones()
    }, [])
    const getPhones=()=>{
        setmessage("")
        setloading(true);
        axios.get(getphonesendpoints).then((result)=>{
          setloading(false);
          setmessphone(result.data.message)
          console.log(result);
          setphoneArrays(result.data.phonearray)
        })
      }
      const goToDetails=(index)=>{
        let filteredArray = phoneArrays.filter((item, ind) => index == ind);
        let itemcategory=filteredArray[0].productcategory
        let item_id=filteredArray[0]._id
        console.log(itemcategory,item_id)
        navigate(`/homepage/${item_id}` , {state:{filteredArray}})
      }
      const addtocart=(index)=>{
        let filteredArray = phoneArrays.filter((item, ind) => index == ind);
        console.log(filteredArray)
        axios.post(addtoendpoints,filteredArray)
      }
  return (
    <>
     <div className='user-home-page-second-div mt-2 pb-2'>
     <div className='w-100 row'>
        <h1 className='col-lg-12 col-md-12 col-sm-12'>
           <center>Phones</center>
        </h1>
     </div>
     </div>
     <div className='user-home-page-third-div mt-2 pb-2'>
        <div className='w-100 row'>
        <h4 className='col-lg-12 col-md-12 col-sm-12 Dont-Miss-Out-On-These'>
          <center>
          Don't Miss Out On These!!!
          </center>
        </h4>
        <div className='row w-100'>
          <div className='col-lg-12 col-sm-12 col-md-12 ms-2'>
            <center>
             <img src={img9} alt="" className='col-lg-3 col-md-6 col-sm-6 dont-miss-image me-3 mb-2'/>
             <img src={img10} alt="" className='col-lg-3 col-md-6 col-sm-6 dont-miss-image me-3 mb-2'/>
             <img src={img11} alt="" className='col-lg-3 col-md-6 col-sm-6 dont-miss-image me-3 mb-2'/>
            </center>
          </div>
        </div>
        </div>
      </div>
      <div className='user-home-page-second-div mt-2 pb-2'>
     <div className='w-100 row'>
      <h4 className='ms-3 col-lg-12 col-md-12 col-sm-12'>Top selling Phone Product</h4>
       {messphone==""?<div class="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>:
          <div className='row w-100 ms-2'>
            {phoneArrays.map((phones,index)=>(
              <div className='col-lg-2 col-md-6 col-sm-6 phone-display-div ms-3 mb-2' key={phones._id}>
                <div onClick={()=>goToDetails(index)}>
                 <Link className='link-phone-details'>
                <center>
                  <div className='phones-img'>
                <img src={phones.productimage} alt="" className='phones-img1'/>
                  </div>
                  <div className='phone-name'>
                <div>{phones.productname}</div>
                  </div>
                <div className='phone-price'>₦{phones.productprice}</div>
                <div className='phone-price2'>₦{phones.productprice}</div>
                <div className='phones-discount mb-2'>-{phones.productdiscount}</div>
                </center>
              </Link>
              </div>
              <center>
              <button className='btn mb-3 add-to-cart text-light' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>addtocart(index)}>Add to cart</button>
              </center>
              </div>
            ))}
          </div>
       }
    </div>
     </div>
    </>
  )
}

export default PhoneCatPage;