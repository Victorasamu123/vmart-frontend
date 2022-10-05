import React from 'react'
import "../styles/HomeNav.css"
import icon1 from "../images/images__1_-removebg-preview.png"
import icon6 from "../images/menu_open_FILL0_wght200_GRAD0_opsz48.svg"
import { Link } from 'react-router-dom'
const HomeNav = () => {
   const tryMe=()=>{
    document.getElementById("sideNavBar").style.width="250px"
   }
   const close=()=>{
    document.getElementById("sideNavBar").style.width="0px"
   }
  return (
    <>
      <div className='general-div-home-nav'>
        <div onClick={tryMe} className="side-nav-btn"><img src={icon6} alt="" /></div>
        <div id='sideNavBar'>
          <div onClick={close} className="side-nav-btn-close">&times;</div>
          <h3 className='vmart-class-logo pt-3 vmart-class-logo2'>Vmart<img src={icon1} alt="" className='admin-logo-img' width={50}/></h3>
          <div>
            <ul>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Home</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Categories</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Cart</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Account</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Help</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeNav;