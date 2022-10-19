import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../../styles/Transactions.css"
const TransactionPage = () => {
  const [amount, setamount] = useState("")
  const [productname, setproductname] = useState("")
  const [ref, setref] = useState("")
  const [date, setdate] = useState("")
  const [loading, setloading] = useState(false);
  const [message, setmessage]= useState("");
  const [transactionArray,settransactionArray]=useState([])
  const gettransactionsendpoints ="http://localhost:4000/cart/gettransactions"
  const userId = localStorage.userId
  useEffect(() => {
    gettransactions()
  }, [])
  
  const gettransactions=()=>{
    setmessage("");
    setloading(true);
    let userId=localStorage.userId
    let transObj={userId}
    axios.post(gettransactionsendpoints,transObj).then((result)=>{
      console.log(result)
      if(result.data.status==true){
        setloading(false);
        setmessage(result.data.message);
        settransactionArray(result.data.resulttrans)
      }else{
        setmessage("");
        setloading(true);
        settransactionArray([])
      }
    })
  }
  return (
    <>
     {message===""?<div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>:
          <div>
            {transactionArray==""?<h1><center>No transactions</center></h1>
             :
             <table className="table">
             <thead>
               <tr>
                 <th scope="col">Amount</th>
                 <th scope="col">Product</th>
                 <th scope="col">Reference</th>
                 <th scope="col">Date</th>
               </tr>
             </thead>
             <tbody className="table-group-divider">
              {
                transactionArray.map((item,index)=>(
               <tr key={item._id}>
                 <td className='transa-td'>₦{item.amount}</td>
                 <td className='transa-td'>{item.productname2}</td>
                 <td className='transa-td'>{item.ref}</td>
                 <td className='transa-td'>{item.date}</td>
               </tr>
                ))
              }
             </tbody>
           </table>
            }
          </div>
    }
    </>
  )
}

export default TransactionPage;