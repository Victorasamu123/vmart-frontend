import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/UserHomePage.css"
import { Link,useLocation,useNavigate } from 'react-router-dom'

const LGameCat = () => {
    const [loading, setloading] = useState(false);
    const [message, setmessage]= useState("");
    const [gameArrays, setgameArrays]= useState([]);
    const [messgame,setmessphone]= useState('')
    const [messcart,setmesscart]= useState('')
    const getgameendpoints= "https://vmart-backend.vercel.app/addproducts/getgames"
    const addtoendpoints= "https://vmart-backend.vercel.app/cart/addtocart"
    const navigate=useNavigate()
    useEffect(() => {
        getGame()
      }, [])
      const getGame=()=>{
        setmessage("")
        setloading(true);
        axios.get(getgameendpoints).then((result)=>{
          if(result.data.status==true){
            setloading(false);
            setmessphone(result.data.message)
            console.log(result);
            setgameArrays(result.data.gamearray.slice(8))
          }else{
            setmessage("")
            setloading(true);
            setgameArrays([])
          }
        })
      }
      const goToDetails=()=>{
        navigate("/signin")
      }
      const addtocart=()=>{
        navigate("/signin")
      }
  return (
    <>
       <div className='user-home-page-second-div mt-2 pb-2 mb-5'>
     <div className='w-100 row'>
      <h4 className='ms-3 col-lg-12 col-md-12 col-sm-12'>Top selling comp Product</h4>
       {messgame==""?<div class="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>:
          <div className='row w-100 ms-2'>
           {gameArrays.map((game,index)=>(
              <div className='col-lg-2 col-md-6 col-sm-6 phone-display-div ms-3 mb-2' key={game._id}>
                <div onClick={()=>goToDetails(index)}>
                 <Link className='link-phone-details'>
                <center>
                  <div className='comp-img'>
                <img src={game.productimage} alt="" className='phones-img1 comp-img'/>
                  </div>
                  <div className='phone-name'>
                <div>{game.productname}</div>
                  </div>
                <div className='phone-price'>₦{game.productprice}</div>
                <div className='phone-price2'>₦{game.productprice}</div>
                <div className='comp-discount mb-2'>-{game.productdiscount}</div>
                </center>
              </Link>
              </div>
              <center>
              <button className='btn mb-3 add-to-cart text-light' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>addtocart(index)}>Add to cart</button>
              </center>
              </div>
            ))}
            <Link to="/signin">see more gaming product</Link>
          </div>
       }
    </div>
     </div>
    </>
  )
}

export default LGameCat;