import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

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
    const productdetailendpoints= "http://localhost:4000/addproducts/productdetails"
    useEffect(() => {
     console.log(location.state)
     getdetails()
    }, [])
    
    const getdetails=()=>{
      setmessage("");
      setloading(true);
      let itemcategory=location.state.itemcategory;
      let item_id=location.state.item_id;
      let Productdetails={item_id,itemcategory};
       axios.post(productdetailendpoints,Productdetails).then((result)=>{
        console.log(result)
        setloading(false);
        setmessage(result.data.message);
        setproductimage(result.data.product.productimage)
        setproductname(result.data.product.productname)
        setproductcategory(result.data.product.productcategory)
        setproductdescription(result.data.product.productdescription)
        setproductprice(result.data.product.productprice)
        setproductdiscount(result.data.product.productdiscount)
       })
    }
  return (
    <>
      {message==""?<div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
          :<div>
            
          </div>}
    </>
  )
}

export default ProductDetails;