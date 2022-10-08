import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
    const location = useLocation()
    // const [item_id, setitem_id] = useState('')
    // const [itemcategory, setitemcategory] = useState('')
    const productdetailendpoints= "http://localhost:4000/addproducts/productdetails"
    useEffect(() => {
     console.log(location.state)
     setitem_id()
     setitemcategory(location.state.itemcategory);
     let item_id=location.state.item_id
     getdetails()
    }, [])
     
    const getdetails=()=>{
      let Productdetails={item_id,itemcategory};
       axios.post(productdetailendpoints,Productdetails).then((result)=>{
        console.log(result)
       })
    }
  return (
    <>
     <div>{item_id}</div>
     <div>{itemcategory}</div>
    </>
  )
}

export default ProductDetails;