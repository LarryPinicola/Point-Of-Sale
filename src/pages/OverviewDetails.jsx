import React from 'react'
import naruto from "../image/naruto.png"
import {FaEdit} from "react-icons/fa"
import {AiOutlineShop} from "react-icons/ai"
import {HiOutlineMailOpen,HiPhone} from "react-icons/hi"

const OverviewDetails = () => {
  return (
  <div className='bg-[#171717] w-[65%]'>
      <div className='text-white mt-28 relative border-b-2'>
        <img src={naruto} className='w-32 h-32 rounded-full absolute top-[-56px] left-[50px]' alt="" />
        <FaEdit className='absolute left-[150px] top-[50px]'/>

        <div className="ms-[220px]">
            <h1 className='text-2xl mt-5'>Mauk Thein Kha</h1>
        <div className='flex justify-between'>
        <p className='text-sm text-start'>Front-end Developer</p>
         <div className="flex space-x-5 text-2xl me-10">
          <HiOutlineMailOpen/>
          <HiPhone/>
          </div>
        </div>
        </div>
        
        <div className="flex items-center justify-between mx-16 pt-5 my-5 ">
            <h1 className='flex items-center gap-2'>
            <AiOutlineShop className='text-3xl text-[#88b1f4]' />
            Personal
            </h1>
            <h1 className='flex items-center gap-2'>
            <AiOutlineShop className='text-3xl text-[#88b1f4]'/>
            Login Information
            </h1>
            <h1 className='flex items-center gap-2'>
            <AiOutlineShop className='text-3xl text-[#88b1f4]'/>
            Password
            </h1>
        </div>
    </div>

    {/* <div className="container mx-auto">
    <div className="flex justify-between text-2xl mx-20">
       <p className=''>
            Mail 
        </p>
        <p className=''>
            mgmauktheinkha@gmail.com 
        </p>
    </div>

    <div className="flex justify-between text-2xl mx-20">
       <p className=''>
            Phone 
        </p>
        <p className='ms-auto text-start'>
            09962255530
        </p>
    </div>
    <div className="flex justify-between text-2xl mx-20">
       <p className=''>
            Address 
        </p>
        <p className='ms-auto text-left'>
            No.(509),Bago,Myanmar
        </p>
    </div>
    </div> */}
    <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="flex justify-center">
            <h1>Phone</h1>
        </div>
        <div className="flex">
            <h1>:959962255530</h1>
        </div>
        <div className="flex justify-center">
            <h1>Mail</h1>
        </div>
        <div className="flex">
            <h1>:mgmauktheinkha@gmail.com</h1>
        </div>
        <div className="flex justify-center">
            <h1>Address</h1>
        </div>
        <div className="flex">
            <h1>:No.(509),Bago,Myanmar</h1>
        </div>
        <div className="flex justify-center">
            <h1>Gender</h1>
        </div>
        <div className="flex">
            <h1>:Male</h1>
        </div>
        <div className="flex justify-center mb-5">
            <h1>Date of Birth</h1>
        </div>
        <div className="flex">
            <h1>:05.04.1998</h1>
        </div>
    </div>
    {/* <div className="flex text-2xl">
       <p className=''>
            Mail 
        </p>
        <p className=''>
            maukthinkha@gmail.com 
        </p>
    </div>

    <div className=" text-2xl">
       <p className=''>
            Address 
        </p>
        <p className='me-6'>
            No.(509)Bago,Myanmar
        </p>
    </div>

    <div className=" text-2xl">
       <p className=''>
            Gender 
        </p>
        <p className='me-64'>
            Male
        </p>
    </div> */}
   
  </div>
  )
}

export default OverviewDetails
