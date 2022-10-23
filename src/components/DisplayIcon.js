import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/DisplayIcon.css"
import home from "../images/house-solid.svg"
import cart from "../images/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" 
const DisplayIcon = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="icon-general-div">
        <div className='home-icon'>
            <Link to="/homepage">
            <img src={home} alt="" width={40}/>
            </Link>
        </div>
        <div className='cart-icon'>
            <Link to="/homepage/cart">
            <img src={cart} alt="" width={40}/>
            </Link>
        </div>
      </div>
    </>
  )
}

export default DisplayIcon;