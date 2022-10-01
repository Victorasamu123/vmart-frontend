import React from 'react'
import UserNavBar from '../../components/UserNavBar';
import UserNavBar2 from '../../components/UserNavBar2';
import "../../styles/LandingPage.css"
import img1 from "../gsmarena_001.jpg"
import img2 from "../89990_1548616187.jpg"
import img3 from "../woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.webp"
const LandingPage = () => {
  return (
    <>
     <UserNavBar/>
     <UserNavBar2/>
     <div></div>
     <div></div>
     <center>
     <div className="second-half">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Samsung Galaxy s22 Ultra</h5>
                      <p>Now available at any vmart mall across Nigeria with 20% discount</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={img2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block text-white" id="Thermocool">
                      <h5>Thermocool Showroom</h5>
                      <p>Now Available in every vmart stores</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block  text-white">
                      <h5>Checkout Our Best Female Designer Dress</h5>
                      <p>Get Free Female Designer Dress for Every customer</p>
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
    </>
  )
}

export default LandingPage;