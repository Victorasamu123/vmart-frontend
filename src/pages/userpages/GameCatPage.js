import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import img9 from "../../images/games/Game-Controllers-378x252-copy.jpg"
import img10 from "../../images/games/Game-Controllers-378x252-copy-2.jpg"
import img11 from "../../images/games/Game-Controllers-378x252-copy-3.jpg"
const GameCatPage = () => {
    const [loading, setloading] = useState(false);
    const [message, setmessage]= useState("");
    const [gameArrays, setgameArrays]= useState([]);
    const [messgame,setmessphone]= useState('')
    const navigate=useNavigate()
    const getgameendpoints= "http://localhost:4000/addproducts/getgames"
    useEffect(() => {
        getGame()
      }, [])
      const getGame=()=>{
        setmessage("")
        setloading(true);
        axios.get(getgameendpoints).then((result)=>{
          setloading(false);
          setmessphone(result.data.message)
          console.log(result);
          setgameArrays(result.data.gamearray)
        })
      }
      const goToDetails=(index)=>{
        let filteredArray = gameArrays.filter((item, ind) => index == ind);
        let itemcategory=filteredArray[0].productcategory
        let item_id=filteredArray[0]._id
        console.log(itemcategory,item_id)
        navigate(`/homepage/${item_id}` , {state:{filteredArray}})
      }
  return (
    <>
      <div className='user-home-page-second-div mt-2 pb-2'>
     <div className='w-100 row'>
        <h1 className='col-lg-12 col-md-12 col-sm-12'>
           <center>Gaming</center>
        </h1>
     </div>
     </div>
     <div className='user-home-page-third-div mt-2 pb-2'>
        <div className='w-100 row'>
        <h4 className='col-lg-12 col-md-12 col-sm-12 Dont-Miss-Out-On-These'>
          <center>
          Don't Miss Out On These!!!
          </center>
        </h4>
        <div className='row w-100'>
          <div className='col-lg-12 col-sm-12 col-md-12 ms-2'>
            <center>
             <img src={img9} alt="" className='col-lg-3 col-md-6 col-sm-6 dont-miss-image me-3 mb-2'/>
             <img src={img10} alt="" className='col-lg-3 col-md-6 col-sm-6 dont-miss-image me-3 mb-2'/>
             <img src={img11} alt="" className='col-lg-3 col-md-6 col-sm-6 dont-miss-image me-3 mb-2'/>
            </center>
          </div>
        </div>
        </div>
      </div>
      <div className='user-home-page-second-div mt-2 pb-2'>
     <div className='w-100 row'>
      <h4 className='ms-3 col-lg-12 col-md-12 col-sm-12'>Top selling gaming Product</h4>
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
              <button className='btn mb-3 add-to-cart text-light' style={{backgroundColor:"rgb(251,87,3)"}}>Add to cart</button>
              </center>
              </div>
            ))}
          </div>
       }
    </div>
     </div>
    </>
  )
}

export default GameCatPage;