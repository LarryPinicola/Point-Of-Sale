import React, { useState } from 'react'
import {AiOutlineMinusCircle} from "react-icons/ai"
import {RiEditCircleFill} from "react-icons/ri"
import {BsArrowRightCircleFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import OverviewDetails from '../pages/OverviewDetails'
import "../style/glassmorphic.css";

const Table = () => {

  const [show,setShow] = useState(true);
 
    const lists = [
        {id : 1 , No : 1 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com", Createat : "12/03/2023"},
        {id : 2 , No : 2 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com", Createat : "10/04/2022"},
        {id : 3 , No : 3 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com", Createat : "07/03/2023"},
        {id : 4 , No : 4 , Name : "Mauk" , Position : "Admin" , Email : "mgmauktheinkha@gmail.com", Createat : "05/03/2023"},
    ]
  return (
    <div className='text-white pt-16'>
    {
      show ?   <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700  border-[0.1px]">
      <thead className=" border-[0.1px] border-[#ff00f2]">
        <tr className='w-full'>
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
          <th scope="col" className="py-3.5 text-sm font-normal">
            <span className=''>CREATE AT</span>
          </th>
          <th scope="col" className="py-3.5">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
        
      </thead>
      <tbody className="divide-y ">
      {
        lists.map(list=>(
          <tr key={list.id}className='border-[0.1px] border-[#ff00f2] hover:bg-[#ff910030] hover:backdrop-blur-sm cursor-pointer blFt'>
          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap border-b border-b-[#ff00f2]">
            <span>
             {list.No}
            </span>
          </td>
          <td className="py-4 text-sm font-medium whitespace-nowrap border-b border-b-[#ff00f2]">
           <span>{list.Name}</span>
          </td>
          <td className="px-4 py-4 text-sm whitespace-nowrap text-center border-b border-b-[#ff00f2]">
            <span>
              {list.Position}
            </span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center border-b border-b-[#ff00f2]">
            <span>
              {list.Email}
            </span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center border-b border-b-[#ff00f2]">
            <span>
              {list.Createat}
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
    
            <button className="py-1 text-gray-600 transition-colors duration-200 rounded-lg dark:text-gray-[#3f4245] hover:bg-[#ff00f250] hover:backdrop-blur-sm cursor-pointer flex items-center hover:rounded-2xl">
            <AiOutlineMinusCircle className='text-2xl hover:text-gray-300 blFt'/>
            </button>
    
            <button className=" py-1 text-gray-600 transition-colors duration-200 rounded-lg dark:text-gray-[#3f4245] hover:bg-[#ff00f250] hover:backdrop-blur-sm cursor-pointer flex items-center hover:rounded-2xl">
            <RiEditCircleFill className='text-2xl hover:text-gray-300 blF'/>
            </button>
    
           <button className=" py-1 text-gray-600 transition-colors duration-200 rounded-lg dark:text-gray-[#3f4245] hover:bg-[#ff00f250] hover:backdrop-blur-sm cursor-pointer flex items-center hover:rounded-2xl">
            <BsArrowRightCircleFill className='text-2xl hover:text-gray-300 blF'/>
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