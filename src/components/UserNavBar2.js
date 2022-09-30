import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/UserNavBar.css"
import icon3 from "../images/person-outline.svg"
import icon4 from "../images/file-tray-stacked-outline.svg"
import icon5 from "../images/heart-outline.svg"
const UserNavBar2 = () => {
  return (
    <>
      <div className='general-navbar2-div'>
      <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" className="fa-soli mt-4" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
     <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
     <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Select category</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    <div>
      <ul>
        <li>category
            <ul>
                <li><Link to="/admindashboard/addphones" className='link-category-admin-dash'>Phones</Link></li>
                <li><Link to="/admindashboard/addelectronics" className='link-category-admin-dash'>Electronics</Link></li>
                <li><Link to="/admindashboard/addcomputing" className='link-category-admin-dash'>Computing</Link></li>
                <li><Link to="/admindashboard/addgames" className='link-category-admin-dash'>Games</Link></li>
            </ul>
        </li>
      </ul>
    </div>
    </div>
    </div>
    <div>
    </div>
    <Link to="/signin">
    <svg xmlns="http://www.w3.org/2000/svg"className="fa-solids" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
    </Link>
    <div class="ps-3 account">
                <img src={icon3} alt="" width="30"/>
                <div class="dropdown ps-2 fs-5">
                    <div class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </div>
                    <ul class="dropdown-menu">
                        <li><Link to="/signin" class="dropdown-item" ><button class="btn btn-info w-75 ms-3">Sign In</button></Link></li>
                      <li><Link to="/signin" class="dropdown-item" ><img src={icon3} alt="" width="30" class="me-2"/> My Account</Link></li>
                      <li><Link to="/signin" class="dropdown-item" ><img src={icon4} alt="" width="30"class="me-2"/>Orders</Link></li>
                      <li><Link to="/signin" class="dropdown-item" ><img src={icon5} alt="" width="30"class="me-2"/>Save items</Link></li>
                    </ul>
                  </div>
            </div>
            <Link to="/signin">
            <svg xmlns="http://www.w3.org/2000/svg"className="fa-solidss" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            </Link>
      </div>
    </>
  )
}

export default UserNavBar2;