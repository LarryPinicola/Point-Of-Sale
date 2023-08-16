import React, { useState } from 'react'
import {PiUserCirclePlusBold} from "react-icons/pi"
import {RiArrowDownSLine,RiRecordCircleFill,RiArrowRightSLine} from "react-icons/ri"

const User = () => {
  const [show,setShow] = useState(false);
  return (
  <div className='border-b-[0.5px]'>
      <div className='flex items-center ms-7 text-white py-5'>
      <PiUserCirclePlusBold className='text-4xl'/>
      <h1 className='text-2xl ms-5'>User</h1>
      {show ? <RiArrowDownSLine onClick={()=>setShow(!show)} className='ms-16 text-2xl'/> : <RiArrowRightSLine onClick={()=>setShow(!show)} className='ms-16 text-2xl'/>}
    </div>

   {
    show ?  <ul className="ms-[2.45rem] text-white ">
    <li className='flex items-center pb-5'>
    <RiRecordCircleFill className='text-sm text-[#404048]'/>
    <p className='ms-[2rem]'>Overview</p>
    </li>
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Create User</p>
      </li>
  </ul> : ""
   }
  </div>

  )
}

export default User