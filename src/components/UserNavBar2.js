import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/UserNavBar.css"
import icon1 from "../images/images__1_-removebg-preview.png"
import icon3 from "../images/person-outline.svg"
import icon4 from "../images/file-tray-stacked-outline.svg"
import icon5 from "../images/heart-outline.svg"
import icon6 from "../images/menu_FILL0_wght400_GRAD0_opsz40.svg"
const UserNavBar2 = () => {
  const tryMe=()=>{
    document.getElementById("sideNavBar").style.width="250px"
   }
   const close=()=>{
    document.getElementById("sideNavBar").style.width="0px"
   }
  return (
    <>
      <div className='general-navbar2-div'>
      <img src={icon6}  className="fa-soli mt-4" alt=""  onClick={tryMe}/>
      <div id='sideNavBar'>
          <div onClick={close} className="side-nav-btn-close" style={{cursor:"pointer"}}>&times;</div>
          <h3 className='vmart-class-logo pt-3 vmart-class-logo2'>Vmart<img src={icon1} alt="" className='admin-logo-img' width={50}/></h3>
          <div>
            <ul>
              <li className='mb-2'><Link to="/homepage" className='link-sidenav-li mb-3'>Home</Link></li>
              <li className='mb-2'><Link to="/homepage" className='link-sidenav-li mb-3'>Categories</Link>
              <ul>
              <li className='mb-2'><Link to="/homepage/phonecategory" className='link-sidenav-li mb-3'>phones</Link></li>
              <li className='mb-2'><Link to="/homepage/computercategory" className='link-sidenav-li mb-3'>computers</Link></li>
              <li className='mb-2'><Link to="/homepage/electronicscategory" className='link-sidenav-li mb-3'>electronics</Link></li>
              <li className='mb-2'><Link to="/homepage/gamecategory" className='link-sidenav-li mb-3'>gaming</Link></li>
              </ul>
              </li>
              <li className='mb-2'><Link to="/homepage/cart" className='link-sidenav-li mb-3'>Cart</Link></li>
              <li className='mb-2'><Link to="/homepage/account" className='link-sidenav-li mb-3'>Account</Link></li>
              <li className='mb-2'><Link to="/homepage/transactionpage" className='link-sidenav-li mb-3'>Transaction History</Link></li>
              <li className='mb-2'><Link to="/signin" className='link-sidenav-li mb-3'>Logout</Link></li>
            </ul>
          </div>
        </div>
    <svg xmlns="http://www.w3.org/2000/svg"className="fa-solids" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
    <button className='btn btn-light signup-btn-landing'><Link to="/signin" style={{textDecoration:"none",color:"black"}}>Signin</Link></button>
    <button className='btn btn-light signin-btn-landing'><Link to="/signup" style={{textDecoration:"none",color:"black"}}>Signup</Link></button>
      </div>
    </>
  )
}

export default UserNavBar2;