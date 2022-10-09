import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/UserHomePage.css"
import { Link,useLocation,useNavigate } from 'react-router-dom'
const CompCat = () => {
    const [loading, setloading] = useState(false);
    const [message, setmessage]= useState("");
    const [compArrays, setcompArrays]= useState([]);
    const [messcomp,setmessphone]= useState('')
    const getcompendpoints= "http://localhost:4000/addproducts/getcomps"
    const navigate=useNavigate()
    useEffect(() => {
        getComp()
      }, [])
      const getComp=()=>{
        setmessage("")
        setloading(true);
        axios.get(getcompendpoints).then((result)=>{
          setloading(false);
          setmessphone(result.data.message)
          console.log(result);
          setcompArrays(result.data.comparray.slice(7))
        })
      }
      const goToDetails=(index)=>{
        let filteredArray = compArrays.filter((item, ind) => index == ind);
        let itemcategory=filteredArray[0].productcategory
        let item_id=filteredArray[0]._id
        console.log(itemcategory,item_id)
        navigate(`/homepage/${item_id}` , {state:{filteredArray}})
      }
  return (
    <>
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
                  <div className='phones-img'>
                <img src={comp.productimage} alt="" className='phones-img1'/>
                  </div>
                  <div className='phone-name'>
                <div>{comp.productname}</div>
                  </div>
                <div className='phone-price'>₦{comp.productprice}</div>
                <div className='phones-discount mb-2'>-{comp.productdiscount}</div>
                </center>
              </Link>
              </div>
              <center>
              <button className='btn mb-3 add-to-cart text-light' style={{backgroundColor:"rgb(251,87,3)"}}>Add to cart</button>
              </center>
              </div>
            ))}
            <Link to="/phonecatpage">see more phone product</Link>
          </div>
       }
    </div>
     </div>
    </>
  )
}

export default CompCat;