import React from 'react'

const ElectronicsAdmin = () => {
  return (
    <>
     <center>
        <h1 className='mt-3'>Add electronics product</h1>
        <input type="file" className='form-control w-25 mb-3' placeholder='product'/>
        <input type="text" className='form-control w-25 mb-3' placeholder='product name'/>
        <input type="text" className='form-control w-25 mb-3' placeholder='product description'/>
        <input type="number" className='form-control w-25 mb-3' placeholder='product price'/>
        <input type="number" className='form-control w-25 mb-3' placeholder='product discount'/>
        <button className='btn btn-info w-25'>Add Products</button>
     </center>
    </>
  )
}

export default ElectronicsAdmin;