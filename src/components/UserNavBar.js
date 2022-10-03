import React from 'react'
import icon1 from "../images/images__1_-removebg-preview.png"
import "../styles/UserNavBar.css"
import icon2 from "../images/information-circle-outline.svg"
import icon11 from"../images/search-outline.svg"
import { Link } from 'react-router-dom'

const UserNavBar = () => {
  return (
    <>
     <nav className='user-page-navbar1 sticky-top bg-light'>
     <h3 className='vmart-class-logo pt-3 vmart-class-logo2'>Vmart<img src={icon1} alt="" className='admin-logo-img' width={50}/></h3>
     <div className='nav-search-input-div'>
        <input type="text" className='form-control nav-search-input' placeholder='Search products,brand etc'/>
        <button className='btn btn-info ms-2  bbb' style={{backgroundColor:"rgb(251,87,3)"}}><img src={icon11} alt="" width={20} /></button>
        <div class="ps-5 ms-5 pt-1 help">
                <img src={icon2} alt="" width="30"/>
                <div class="dropdown ps-2 fs-5">
                    <div class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Help
                    </div>
                    <ul class="dropdown-menu">
                        <li><Link to="/signin" class="dropdown-item" ><button class="btn btn-info w-75 ms-3" style={{backgroundColor:"rgb(251,87,3)"}}>Help</button></Link></li>
                      <li><Link to="/signin" class="dropdown-item" href="">Orders Cancillation</Link></li>
                      <li><Link to="/signin" class="dropdown-item" href="">Returns and Refunds</Link></li>
                      <li><Link to="/signin" class="dropdown-item" href="">Vmart payment</Link></li>
                    </ul>
                  </div>
            </div>
     </div>
     </nav>
    </>
  )
}

export default UserNavBar;