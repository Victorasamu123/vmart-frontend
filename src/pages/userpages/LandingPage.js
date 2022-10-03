import React from 'react'
import UserNavBar from '../../components/UserNavBar';
import UserNavBar2 from '../../components/UserNavBar2';
import "../../styles/LandingPage.css"
import img1 from "../gsmarena_001.jpg"
import img2 from "../89990_1548616187.jpg"
import img3 from "../woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.webp"
import img4 from "../../images/378x252_copy_17.jpg"
import img5 from "../../images/Tripple_banner.jpg"
const LandingPage = () => {
  return (
    <>
     <UserNavBar/>
     <UserNavBar2/>
     <div className='landing-page-first-div mt-2'>
       <div className='w-100 row'>
        <div className='col-lg-6 col-md-2 col-sm-12'>
          <h4 className='landing-'>We introduce to you Vmart as</h4>
        </div>
        <div className='col-lg-6 col-md-2 col-sm-12'>nnnn</div>
       </div>
     </div>
    </>
  )
}

export default LandingPage;