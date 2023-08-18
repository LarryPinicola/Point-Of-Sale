import React, { useState } from 'react'
import {BsShop} from "react-icons/bs"
import {RiArrowDownSLine,RiRecordCircleFill,RiArrowRightSLine} from "react-icons/ri"
import {MdInventory} from "react-icons/md"
import { Link } from 'react-router-dom';


const Inventory = ({show,setShow}) => {
  return (
    <div className='border-b-[0.5px]'>
      <div className='flex items-center ms-7 text-white py-5'>
      <MdInventory className='text-2xl'/>
      <h1 className='text-xl ms-5'>Inventory</h1>
      {show ? <RiArrowDownSLine onClick={()=>setShow(!show)} className='ms-auto me-5 text-2xl'/> : <RiArrowRightSLine onClick={()=>setShow(!show)} className='ms-auto me-5 text-2xl'/>}
    </div>

   {
    show ?  <ul className="ms-[2.45rem] text-white ">
   <Link to = "/User/overview">
   <li className='flex items-center pb-5'>
    <RiRecordCircleFill className='text-sm text-[#404048]'/>
    <p className='ms-[2rem]'>Product</p>
    </li>
   </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Add Product</p>
      </li>
      </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Recent</p>
      </li>
      </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Recent</p>
      </li>
      </Link>
  </ul> : ""
   }
  </div>
  )
}

export default Inventory