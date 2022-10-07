import axios from 'axios'
import React, { useState } from 'react'

const PhonesAdmin = () => {
  const [productimage, setproductimage] = useState("")
  const [productname, setproductname] = useState("")
  const [productcategory, setproductcategory] = useState("")
  const [productdescription, setproductdescription] = useState("")
  const [productprice, setproductprice] = useState("")
  const [productdiscount, setproductdiscount] = useState("")
  const endpoints="http://localhost:4000/addproducts/addphones"
  const filechange=(e)=>{
    let myImage = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(myImage)
    reader.onload = ()=>{
        setproductimage(reader.result)
    }
  }
  const addproduct=()=>{
    let phoneObj={productimage,productname,productcategory,productdescription,productprice,productdiscount}
    axios.post(endpoints,phoneObj).then((result)=>{
      console.log(result)
      alert(result.data.message)
    })
  }
  return (
    <>
     <center>
        <h1 className='mt-3'>Add phone product</h1>
        <input type="file" className='form-control w-25 mb-3' placeholder='product' onChange={(e)=>filechange(e)}/>
        <input type="text" className='form-control w-25 mb-3' placeholder='product name' onChange={(e)=>setproductname(e.target.value)}/>
        <input type="text" className='form-control w-25 mb-3' placeholder='product category' onChange={(e)=>setproductcategory(e.target.value)}/>
        <input type="text" className='form-control w-25 mb-3' placeholder='product description' onChange={(e)=>setproductdescription(e.target.value)}/>
        <input type="number" className='form-control w-25 mb-3' placeholder='product price' onChange={(e)=>setproductprice(e.target.value)}/>
        <input type="number" className='form-control w-25 mb-3' placeholder='product discount' onChange={(e)=>setproductdiscount(e.target.value)}/>
        <button className='btn btn-info w-25' onClick={addproduct}>Add Products</button>
     </center>
    </>
  )
}

export default PhonesAdmin;