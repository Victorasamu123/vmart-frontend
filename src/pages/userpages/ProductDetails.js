import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../../styles/ProductDetails.css"
const ProductDetails = () => {
    const location = useLocation()
    const [loading, setloading] = useState(false);
    const [message, setmessage]= useState("");
    const [productimage, setproductimage]= useState("");
    const [productname, setproductname]= useState("");
    const [productcategory, setproductcategory]= useState("");
    const [productdescription, setproductdescription]= useState("");
    const [productprice, setproductprice]= useState("");
    const [productdiscount, setproductdiscount]= useState("");
    const [productArray,setproductArray]=useState([])
    const [messcart,setmesscart]= useState('')
    const productdetailendpoints= "http://localhost:4000/addproducts/productdetails"
    const addtoendpoints= "http://localhost:4000/cart/addtocart"
    useEffect(() => {
     console.log(location.state.filteredArray)
     getdetails()
    }, [])
    
    const getdetails=()=>{
      setmessage("");
      setloading(true);
      setproductArray(location.state.filteredArray)
      const item_id=location.state.filteredArray[0]._id;
      const itemcategory=location.state.filteredArray[0].productcategory;
      console.log(itemcategory,item_id)
      let Productdetails={item_id,itemcategory};
      axios.post(productdetailendpoints,Productdetails).then((result)=>{
        if(result.data.status==true){
          console.log(result)
          setloading(false);
          setmessage(result.data.message);
          setproductimage(result.data.product.productimage)
          setproductname(result.data.product.productname)
          setproductcategory(result.data.product.productcategory)
          setproductdescription(result.data.product.productdescription)
          setproductprice(result.data.product.productprice)
          setproductdiscount(result.data.product.productdiscount)
        }else{
          setmessage("");
          setloading(true);
          setproductimage("")
          setproductname("")
          setproductcategory("")
          setproductdescription("")
          setproductdiscount("")
        }
        
      })
    }
    const addtocart=()=>{
      let filteredArray=location.state.filteredArray
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
      {message==""?<div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
          :<div className='general-div-product-details-page'>
            <div className='w-100 row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='fw-bold fs-2'>{productname}</div>
              <img src={productimage} alt="" className='small-img-product-details'/>
              <img src={productimage} alt="" className='big-img-product-details'/>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 div2-product-div'>
            <div className='fs-2 productname'>{productname}</div>
            <div className='productprice'>₦{productprice}</div>
            <div className='fs-2'>Category: {productcategory}</div>
            <div className='fs-5'>Unit-price: <span className='productprice'>₦{productprice}</span></div>
            <div className='fs-4'>{productdescription}</div>
            <button className='btn mt-4 w-75 text-light' style={{backgroundColor:"rgb(251,87,3)"}} onClick={addtocart}>Add to cart</button>
            </div>
            </div>
          </div>}
    </>
  )
}

export default ProductDetails;