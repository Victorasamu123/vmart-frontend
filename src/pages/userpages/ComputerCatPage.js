import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import img9 from "../../images/computing/Artboard_1.png"
import img10 from "../../images/computing/Artboard_1_copy.png"
import img11 from "../../images/computing/Artboard_1_copy_2.png"
const ComputerCatPage = () => {
    const [loading, setloading] = useState(false);
    const [message, setmessage]= useState("");
    const [compArrays, setcompArrays]= useState([]);
    const [messcomp,setmessphone]= useState('')
    const [messcart,setmesscart]= useState('')
    const navigate=useNavigate()
    const getcompendpoints= "http://localhost:4000/addproducts/getcomps"
    const addtoendpoints= "http://localhost:4000/cart/addtocart"
    useEffect(() => {
        getComp()
      }, [])
      const getComp=()=>{
        setmessage("")
        setloading(true);
        axios.get(getcompendpoints).then((result)=>{
          if(result.data.status==true){
            setloading(false);
            setmessphone(result.data.message)
            console.log(result);
            setcompArrays(result.data.comparray)
          }else{
            setmessage("")
            setloading(true);
            setcompArrays([]);
          }
        })
      }
      const goToDetails=(index)=>{
        let filteredArray = compArrays.filter((item, ind) => index == ind);
        let itemcategory=filteredArray[0].productcategory
        let item_id=filteredArray[0]._id
        console.log(itemcategory,item_id)
        navigate(`/homepage/${item_id}` , {state:{filteredArray}})
      }
      const addtocart=(index)=>{
        let filteredArray = compArrays.filter((item, ind) => index == ind);
        console.log(filteredArray)
        let productimage=filteredArray[0].productimage
        let productname=filteredArray[0].productname
        let productcategory=filteredArray[0].productcategory
        let productdescription=filteredArray[0].productdescription
        let productprice=filteredArray[0].productprice
        let productdiscount=filteredArray[0].productdiscount
        let userId=localStorage.userId
        let cartObj={productimage,productname,productcategory,productdescription,productprice,productdiscount,userId}
        axios.post(addtoendpoints,cartObj).then((result)=>{
          console.log(result.data.message);
          setmesscart(result.data.message);
        })
      }
  return (
    <>
     <div className='user-home-page-second-div mt-2 pb-2'>
     <div className='w-100 row'>
        <h1 className='col-lg-12 col-md-12 col-sm-12'>
           <center>Computing and accessories</center>
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
      <h4 className='ms-3 col-lg-12 col-md-12 col-sm-12'>Top selling comp Product</h4>
       {messcomp==""?<div class="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>:
          <div className='row w-100 ms-2'>
            {compArrays.map((comp,index)=>(
              <div className='col-lg-2 col-md-6 col-sm-6 phone-display-div ms-3 mb-2' key={comp._id}>
                <div onClick={()=>goToDetails(index)}>
                 <Link className='link-phone-details'>
                <center>
                  <div className='comp-img'>
                <img src={comp.productimage} alt="" className='phones-img1 comp-img'/>
                  </div>
                  <div className='phone-name'>
                <div>{comp.productname}</div>
                  </div>
                <div className='phone-price'>₦{comp.productprice}</div>
                <div className='phone-price2'>₦{comp.productprice}</div>
                <div className='comp-discount mb-2'>-{comp.productdiscount}</div>
                </center>
              </Link>
              </div>
              <center>
              <button className='btn mb-3 add-to-cart text-light' style={{backgroundColor:"rgb(251,87,3)"}} onClick={()=>addtocart(index)}>Add to cart</button>
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

export default ComputerCatPage