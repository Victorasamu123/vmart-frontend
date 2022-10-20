import React from 'react'
import "../styles/Footer.css"
import icon1 from "../images/images__1_-removebg-preview.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className='footer-general-div'>
        <div className='d-flex'>
      <h3 className='vmart-class-logo pt-3 vmart-class-logo2 text-light pt-5'>Vmart<img src={icon1} alt="" className='admin-logo-img' width={50}/></h3>
      <div className='mt-5'><a href="https://www.linkedin.com/in/victor-asamu-44961723a/"><i class="fa-brands fa-linkedin"></i></a></div>
      <div className='mt-5'><a href="https://github.com/Victorasamu123/vmart-frontend"><i class="fa-brands fa-square-github"></i></a></div>
      <div className='mt-5'><a href="https://twitter.com/VictorAsamu"><i class="fa-brands fa-twitter"></i></a></div>
      <div className='mt-5'><a href="https://www.facebook.com/asamu.victorjuwon"><i class="fa-brands fa-facebook"></i></a></div>
        </div>
        <div className='copyright-div'>
          <center>
          Copyright © 2022 Vmart All right reserved
          </center>
        </div>
      </div>
    </>
  )
}

export default Footer;