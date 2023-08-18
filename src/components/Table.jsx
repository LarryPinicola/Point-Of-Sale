import React, { useState } from 'react'
import {AiOutlineMinusCircle} from "react-icons/ai"
import {RiEditCircleFill} from "react-icons/ri"
import {BsArrowRightCircleFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import OverviewDetails from '../pages/OverviewDetails'

const Table = () => {
 
    const lists = [
        {id : 1 , No : 1 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com"},
        {id : 2 , No : 2 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com"},
        {id : 3 , No : 3 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com"},
        {id : 4 , No : 4 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com"},
    ]
  return (
    <div className='text-white ms-5 pt-16 me-10'>
    {
      show ?   <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700  border-[0.1px]">
      <thead className=" border-[0.1px]">
        <tr className='w-full hover:bg-slate-800'>
          <th scope="col" className="py-3.5 text-sm text-left font-normal w-[10%]">
              <span className='ms-5 '>NO</span>
          </th>
          <th scope="col" className="py-3.5 text-sm text-left font-normal">
            <span className=''>NAME</span>
          </th>
          <th scope="col" className="py-3.5 text-sm text-center font-normal">
            <span className=''>POSITION</span>
          </th>
          <th scope="col" className="py-3.5 text-sm font-normal">
            <span className=''>EMAIL</span>
          </th>
          <th scope="col" className="py-3.5">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
        
      </thead>
      <tbody className="divide-y ">
      {
        lists.map(list=>(
          <tr key={list.id}className='border-[0.1px] hover:bg-slate-800'>
          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
            <span>
             {list.No}
            </span>
          </td>
          <td className="py-4 text-sm font-medium whitespace-nowrap ">
           <span>{list.Name}</span>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Position}
            </span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Email}
            </span>
          </td>
          {/* <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Address}
            </span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Email}
            </span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Email}
            </span>
          </td> */}
          <td className="px-4 py-4 text-sm whitespace-nowrap flex items-center justify-center space-x-1">
    
            <button className="py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-[#3f4245] hover:bg-gray-100 flex items-center">
            <AiOutlineMinusCircle className='text-2xl hover:text-[#3f4245]'/>
            </button>
    
            <button className=" py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-[#3f4245] hover:bg-gray-100 flex items-center">
            <RiEditCircleFill className='text-2xl hover:text-[#3f4245]'/>
            </button>
    
           <button className=" py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-[#3f4245] hover:bg-gray-100 flex items-center">
            <BsArrowRightCircleFill className='text-2xl hover:text-[#3f4245]'/>
            </button>
          </td>
        </tr>
        ))
      }
      </tbody>
    </table> : <OverviewDetails/>
    }

    </div>
  )
}

export default Table