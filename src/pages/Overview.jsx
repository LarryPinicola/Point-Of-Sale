import React, { useState } from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import Breadcrumbs from '../components/Breadcrumbs'
import Table from '../components/Table'

const Overview = () => {

  const [show,setShow] = useState(false);
 
  return (
<div className='bg-[#202124] h-screen pt-5'>

    <div className='mx-10  flex justify-between text-white font-[500]'>
    <h1 className='text-xl'>User</h1>

    {/* Creat User button */}
    {
      show ? <button className='bg-[#8ab4f8] text-[#161618] p-2 flex items-center'>
      <AiOutlinePlus className='ms-1'/>
          <p className='mx-3'>Create User</p>
      </button> : <button className='bg-[#8ab4f8] text-[#161618] p-2 flex items-center'>
          <p className='mx-3'>Update User</p>
      </button>
    }
    {/* Creat User button */}

    </div>
    {/* BreadCrumbs */}
    <Breadcrumbs/>
    {/* BreadCrumbs */}
   <Table show={show} setShow={setShow}/>
</div>
    
  )
}

export default Overview