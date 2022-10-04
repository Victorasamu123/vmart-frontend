import React from 'react'
import "../styles/HomeNav.css"
import icon1 from "../images/images__1_-removebg-preview.png"
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
        <button onClick={tryMe} className="btn btn-info">tryy</button>
        <div id='sideNavBar'>
          <button onClick={close} className="btn btn-info side-nav-btn">close</button>
          <h3 className='vmart-class-logo pt-3 vmart-class-logo2'>Vmart<img src={icon1} alt="" className='admin-logo-img' width={50}/></h3>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default HomeNav;