import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/DisplayIcon.css"
const DisplayIcon = () => {
  return (
    <>
      <div className="icon-general-div">
        <div>
            <Link className='home-icon'>
            <i class="fa-solid fa-house-blank"></i>
            </Link>
        </div>
      </div>
    </>
  )
}

export default DisplayIcon;