import React, { useEffect, useState } from 'react'
import "../../styles/UserHomePage.css"
import img8 from "../../images/202103050842528033.jpg"
import img9 from "../../images/378x252_copy_17.jpg"
import img10 from "../../images/Tripple_banner.jpg"
import img11 from "../../images/Triple-Banner-_-378x252.jpg"
import axios from 'axios'
import { Link,useLocation,useNavigate } from 'react-router-dom'
const UserHomePage = () => {
  const [loading, setloading] = useState(false);
  const [message, setmessage]= useState("");
  const [phoneArrays, setphoneArrays]= useState([]);
  const navigate=useNavigate()
  // const [user_id, setuser_id] = useState("");
  const location=useLocation()
  const endpoints = "http://localhost:4000/auth/dashboard"
  const getphonesendpoints= "http://localhost:4000/addproducts/getphones"
  const user_id=localStorage.userId
  useEffect(() => {
    getdashboard()
    getPhones()
  }, [])

  const getdashboard=()=>{
    setmessage("");
    setloading(true);
    // setuser_id(location.state.user_id);
    console.log(user_id);
    let getDashboard={user_id}
    axios.post(endpoints,getDashboard).then((result)=>{
      setloading(false);
      setmessage(result.data.message);
      console.log(result)
    })
  }
  const getPhones=()=>{
    setloading(true);
    axios.get(getphonesendpoints).then((result)=>{
      setloading(false);
      console.log(result);
      setphoneArrays(result.data.phonearray.slice(10))
    })
  }
  const goToDetails=(index)=>{
    let filteredArray = phoneArrays.filter((item, ind) => index == ind);
    let itemcategory=filteredArray[0].productcategory
    let item_id=filteredArray[0]._id
    console.log(itemcategory,item_id)
    navigate(`/homepage/${item_id}` , {state:{item_id:item_id,itemcategory:itemcategory}})
  }
  const move=()=>{
    navigate("/signin")
  }
  return (
    <>
    {message==""?<div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
          :
          <div>
          <div className='user-home-page-first-div mt-2 pb-2'>
        <div className='w-100 row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
          <h4 className='userhome-page-h4-first mt-2'>We at vmart gives you</h4>
          <h4 className='userhome-page-h4-second'>10%</h4>
          <h4 className='userhome-page-h4-third'>discount</h4>
          <h4 className='userhome-page-h4-fourth'>on all product</h4>
          </div>
          <div className='col-lg-6 col-md-2 col-sm-12'>
          <img src={img8} alt="" className='img-holder-landing-page-div'/>
        </div>
        </div>
     </div>
     <div className='user-home-page-second-div mt-2 pb-2'>
     <div className='w-100 row'>
      <h4 className='ms-3 col-lg-12 col-md-12 col-sm-12'>Top selling Phone Product</h4>
       {loading==true?<div class="d-flex justify-content-center">
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
                <div className='phones-discount mb-2'>-{phones.productdiscount}</div>
                </center>
              </Link>
              </div>
              <center>
              <button className='btn mb-3 add-to-cart' style={{backgroundColor:"rgb(251,87,3)"}}>Add to cart</button>
              </center>
              </div>
            ))}
            <Link to="/phonecatpage">see more phone product</Link>
          </div>
       }
    </div>
     </div>
     </div>
    }
     
    </>
  )
}

export default UserHomePage;