import React from 'react'
import "../styles/HomeNav.css"
import icon1 from "../images/images__1_-removebg-preview.png"
import icon6 from "../images/menu_FILL0_wght400_GRAD0_opsz40.svg"
import { Link } from 'react-router-dom'
const HomeNav = ({homecol}) => {
   const tryMe=()=>{
    document.getElementById("sideNavBar").style.width="250px"
   }
   const close=()=>{
    document.getElementById("sideNavBar").style.width="0px"
   }
  return (
    <>
      <div className='general-div-home-nav'>
        <span onClick={tryMe} className="side-nav-btn"><img src={icon6} alt=""/></span>
        <div id='sideNavBar'>
          <div onClick={close} className="side-nav-btn-close">&times;</div>
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
              <li className='mb-2'><Link to="/cart" className='link-sidenav-li mb-3'>Cart</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Account</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Help</Link></li>
              <li className='mb-2'><Link to="/" className='link-sidenav-li mb-3'>Logout</Link></li>
            </ul>
          </div>
        </div>
        <span>
          {/* <Link to="/homepage" className="bg-success">
            <i class="fa-solid fa-house"></i>
          </Link> */}
        </span>
      </div>
    </>
  )
}

export default HomeNav;