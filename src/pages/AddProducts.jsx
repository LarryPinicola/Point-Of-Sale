import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';


const AddProducts = () => {
  const [show,setShow] = useState(false);
  return (
   <>
    
  <div className='w-full'>
    <div className=""><Dashboard/></div>
    <div className="container mx-auto">
    <h1 className="grid grid-cols-1 mt-5 ms-48">Add Products</h1>
    </div>
</div>
   </>
  )
}

export default AddProducts