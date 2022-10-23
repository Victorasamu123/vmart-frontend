import React from 'react'
import "../../images/animatedcss.mp4"
import vid from "../../styles/DisplayIcon.css"
const NotFoundPage = () => {
  return (
    <>
      <div>
    <video autoPlay muted loop className="video" style={{width:"100px",height:"100px"}}>
            <source src="animatedcss.mp4" type="video/mp4" />
        </video>
    </div> 
    <center>
        <br /><br /><br />
        <div className="first">
      404 Page Not Found <br />
        </div>
        <div className="second">
        The link you followed may be broken, or the page may have been removed. Go back to a valid page.
        </div>
    </center>
    </>
  )
}

export default NotFoundPage;