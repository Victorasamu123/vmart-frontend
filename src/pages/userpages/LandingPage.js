import React from 'react'
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
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
     <UserNavBar/>
     <UserNavBar2/>
     <div className='landing-page-first-div mt-2 pb-4'>
       <div className='w-100 row'>
        <div className='col-lg-6 col-md-2 col-sm-12'>
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
     
    </>
  )
}

export default LandingPage;