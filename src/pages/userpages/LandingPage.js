import React, { useEffect, useState } from 'react'
import UserNavBar from '../../components/UserNavBar';
import UserNavBar2 from '../../components/UserNavBar2';
import "../../styles/LandingPage.css"
import img1 from "../gsmarena_001.jpg"
import img2 from "../89990_1548616187.jpg"
import img3 from "../woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.webp"
import img4 from "../../images/378x252_copy_17.jpg"
import img5 from "../../images/Tripple_banner.jpg"
import img6 from "../../images/get_it_on_google_image.svg"
import img7 from "../../images/download_on_app_store_image.svg"
import img8 from "../../images/202103050842528033.jpg"
import img9 from "../../images/378x252_copy_17.jpg"
import img10 from "../../images/Tripple_banner.jpg"
import img11 from "../../images/Triple-Banner-_-378x252.jpg"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LCompCat from '../../components/LCompCat';
import LElectCat from '../../components/LElectCat';
import LGameCat from '../../components/LGameCat';
import Footer from '../../components/Footer';
const LandingPage = () => {
  const [loading, setloading] = useState(false);
  const [message, setmessage]= useState("");
  const [phoneArrays, setphoneArrays]= useState([]);
  const [messphone,setmessphone]= useState('')
  const [messcart,setmesscart]= useState('')
  const navigate=useNavigate()
  const getphonesendpoints= "https://vmart-backend.vercel.app/addproducts/getphones"
  const addtoendpoints= "https://vmart-backend.vercel.app/cart/addtocart"
  useEffect(() => {
    getPhones()
  }, [])
  
  const getPhones=()=>{
    setmessage("")
    setloading(true);
    axios.get(getphonesendpoints).then((result)=>{
      if(result.data.status==true){
        setloading(false);
        setmessphone(result.data.message)
        setphoneArrays(result.data.phonearray.slice(10))
      }else{
        setmessage("")
        setloading(true);
        setphoneArrays([])
      }
    })
  }
  const goToDetails=(index)=>{
    navigate("/signin")
  }
  const addtocart=()=>{
    navigate("/signin")
  }
  return (
    <>
     <UserNavBar/>
     <UserNavBar2/>
     <div className='landing-page-first-div mt-2 pb-4'>
       <div className='w-100 row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h4 className='landing-page-h4-first mt-2'>We introduce to you Vmart as</h4>
          <h4 className='landing-page-h4-second'>AFRICA'S</h4>
          <h4 className='landing-page-h4-third'>Largest</h4>
          <h4 className='landing-page-h4-fourth'>Indigneous online market space</h4>
          <div className='landing-page-h4-fifth'>
            <Link to="/signin"><img src={img6} alt="" width={130} className="me-2"/></Link>
            <Link to="/signin"><img src={img7} alt="" width={130} /></Link>
          </div>
        </div>
        <div className='col-lg-6 col-md-2 col-sm-12'>
          <img src={img8} alt="" className='img-holder-landing-page-div'/>
        </div>
       </div>
       <div className='col-12 second-sec-in-first-sections mt-3'>
        <center>
          <span className='vmart-in'>Vmart</span> discount.quality.variety.online
        </center>
       </div>
       <div className='col-12 third-sec-in-first-sections mt-3'>
        <center>
          <h1 className='text-light'>We are Now taking orders</h1>
          <h1 style={{color:"black"}}>BUY Anything, Anytime, Anywhere</h1>
          <h3 className='text-light'>At lowest price</h3>
        </center>
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
            <Link to="/signin">see more phone product</Link>
          </div>
       }
    </div>
     </div>
     <LCompCat/>
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
      <LElectCat/>
      <LGameCat/>
      <Footer/>
    </>
  )
}

export default LandingPage;