import React, { useState } from 'react'
import {BsShop} from "react-icons/bs"
import {RiArrowDownSLine,RiRecordCircleFill,RiArrowRightSLine} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import { Link } from 'react-router-dom';


const UserProfile = () => {
const [show,setShow] = useState(false);
  return (
    <div className='border-b-[0.5px]'>
      <div className='flex items-center ms-7 text-white py-5'>
      <CgProfile className='text-2xl'/>
      <h1 className='text-xl ms-5'>UserProfile</h1>
      {show ? <RiArrowDownSLine onClick={()=>setShow(!show)} className='ms-auto me-5 text-2xl'/> : <RiArrowRightSLine onClick={()=>setShow(!show)} className='ms-auto me-5 text-2xl'/>}
    </div>

   {
    show ?  <ul className="ms-[2.45rem] text-white ">
   <Link to = "/User/overview">
   <li className='flex items-center pb-5'>
    <RiRecordCircleFill className='text-sm text-[#404048]'/>
    <p className='ms-[2rem]'>My Account</p>
    </li>
   </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Edit</p>
      </li>
      </Link>
  </ul> : ""
   }
  </div>
  )
}

export default UserProfile