import React from 'react'
import "../../styles/UserHomePage.css"
import img8 from "../../images/202103050842528033.jpg"
import img9 from "../../images/378x252_copy_17.jpg"
import img10 from "../../images/Tripple_banner.jpg"
import img11 from "../../images/Triple-Banner-_-378x252.jpg"
const UserHomePage = () => {
  return (
    <>
     <div className='user-home-page-first-div mt-2 pb-2'>
        <div className='w-100 row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
          <h4 className='userhome-page-h4-first mt-2'>We at vmart gives you</h4>
          <h4 className='userhome-page-h4-second'>10%</h4>
          <h4 className='userhome-page-h4-third'>discount</h4>
          <h4 className='userhome-page-h4-fourth'>on all product</h4>
          </div>
          <div className='col-lg-6 col-md-2 col-sm-12'>
          <img src={img8} alt="" className='img-holder-landing-page-div'/>
        </div>
        </div>
        <div className='col-12 second-sec-in-first-sections mt-3'>
        <center>
          Special offers get this products at 50% free per purchase
        </center>
       </div>
       <div className='col-12 third-sec-in-first-sections mt-3'>
        <center>
        <div className="homepage-carousel-div">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img9} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={img10} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block text-white" id="Thermocool">
                      
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img11} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block  text-white">
                      
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
        </center>
       </div>
     </div>
    </>
  )
}

export default UserHomePage;