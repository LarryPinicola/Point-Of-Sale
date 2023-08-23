import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { BiSolidPhone } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import Dashboard from '../pages/Dashboard';


const Edit = () => {
  return (
   <>
    
  <div className='w-full'>
    <Dashboard/>
    <div className="container mx-auto">
    <div className="grid grid-cols-1 mt-5 ms-28">
    <div className="flex justify-between items-center my-7">
        {/* routes */}
        <div className="text-white mb-5">
          <h1 className="text-2xl tracking-wide">Profile</h1>
          <p className="text-gray-400 text-sm">
            Profile / My Account / Information
          </p>
        </div>
        {/* edit profile btn */}
        <div className="text-black">
          <button className="flex items-center gap-3 bg-blue-400 py-2 px-6 rounded-lg tracking-wide">
            <AiOutlinePlus className="" /> Edit Profile
          </button>
        </div>
      </div>
      <div className="bg-[#171717] p-16 mt-16 w-[84vw] h-[35vh] relative">
        {/* profile pic */}
        <div className="">
          <div className="absolute top-[-50px]">
            <img
              src="https://i.pinimg.com/564x/f1/15/61/f11561bb28b4072846723ffdd8120cec.jpg"
              alt=""
              className="w-32 h-32 rounded-full"
            />
          </div>
          {/* pencil icon */}
          <div className="bg-white rounded-full text-black p-1 w-6 h-6 absolute ms-[6rem] mt-[-1rem] ">
            <AiOutlineEdit />
          </div>
        </div>
        {/* name and icons */}
        <div className="flex justify-between items-center relative top-[-70%]">
          <div className="ms-36">
            <h1 className="text-2xl tracking-wide">Ethan James</h1>
            <p className="text-gray-400 text-sm">
              Sale Executive / Active in previous life
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-lg p-1 rounded-full bg-gray-800">
              <GoHome />
            </div>
            <div className="text-lg p-1 rounded-full bg-gray-800">
              <BiSolidPhone />
            </div>
          </div>
        </div>
        {/* sections */}
        <div className="flex gap-8 mt-7">
          {/* personal */}
          <div className=" flex items-center gap-2 cursor-pointer">
            <div className="text-blue-400">
              <FaStore />
            </div>
            <h1 className="font-semibold text-lg tracking-wide text-gray-400">
              Personal
            </h1>
          </div>
          {/* Login info */}
          <div className=" flex items-center gap-2 cursor-pointer">
            <div className="text-blue-400">
              <FaStore />
            </div>
            <h1 className="font-semibold text-lg tracking-wide text-gray-400">
              Login Information
            </h1>
          </div>
          {/* password */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-blue-400">
              <FaStore />
            </div>
            <h1 className="font-semibold text-lg tracking-wide text-gray-400">
              Password
            </h1>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="border-t border-gray-500 bg-[#1A1A1A] w-[84vw] ">
        <form action="" className="flex flex-col gap-5 mt-7 ms-16 ">
          <div className="">
            <label htmlFor="" className="me-[8rem]">
              Name
            </label>
            <input
              type="text"
              className="p-2 text-sm rounded-lg bg-gray-600 outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="">
            <label htmlFor="" className="me-[7.8rem]">
              Phone
            </label>
            <input
              type="text"
              className="p-2 text-sm rounded-lg bg-gray-600 outline-none"
              placeholder="Your Phone"
            />
          </div>
          <div className="">
            <label htmlFor="" className="me-[4.6rem]">
              Date Of Birth
            </label>
            <input
              type="text"
              className="p-2 text-sm rounded-lg bg-gray-600 outline-none"
              placeholder="Your Date of birth"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="" className="me-[7rem]">
              Gender
            </label>
            <div className="flex gap-5 items-center">
              <input type="radio" className="outline-none" /> Male
              <input type="radio" className="outline-none" /> Female
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="me-[6.6rem]">
              Address
            </label>
            <input
              type="text"
              className="p-2 text-sm rounded-lg bg-gray-600 outline-none"
            />
          </div>
        </form>
      </div>
      {/* footer */}
      <div className="w-full h-16 border-t border-gray-500 bg-[#171717]">
        <div className="mt-5 ms-10">
          <button className="text-gray-600 border-gray-600 border py-1 text-sm px-3 rounded-lg uppercase me-5">
            cancel
          </button>
          <button className="bg-blue-600 py-1 text-sm px-5 rounded-lg uppercase">
            save
          </button>
        </div>
      </div>
    </div>
    </div>
</div>
   </>
  )
}

export default Edit