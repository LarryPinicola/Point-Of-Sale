import React, { useState } from 'react'
import {BsShop} from "react-icons/bs"
import {RiArrowDownSLine,RiRecordCircleFill,RiArrowRightSLine} from "react-icons/ri"
import {FcGallery} from "react-icons/fc";
import { Link } from 'react-router-dom';


const Gallery = () => {
  return (
    <div className='border-b-[0.5px]'>
      <div className='flex items-center ms-7 text-white py-5'>
      <FcGallery className='text-2xl'/>
      <h1 className='text-xl ms-5'>Media</h1>
    </div>
  </div>
  )
}

export default Gallery