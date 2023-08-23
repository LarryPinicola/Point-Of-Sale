import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import {BiSearch} from "react-icons/bi"
import {RiArrowDropDownLine} from "react-icons/ri"
import {AiOutlineMinusCircle} from "react-icons/ai"
import {RiEditCircleFill} from "react-icons/ri"
import {BsArrowRightCircleFill} from "react-icons/bs"
import Breadcrumbs from '../components/Breadcrumbs';
import Table from '../components/Table';


const Recent = () => {
  const lists = [
    {id : 1 , No : 1 , Vouncher : "09308" , Cash : "100,000" , Tax : "100", Total : "100,100", Date : "12/7/2023", Time : "10:00 AM"},
    {id : 2 , No : 2 , Vouncher : "09308" , Cash : "100,000" , Tax : "100", Total : "100,100", Date : "12/7/2023", Time : "10:00 AM"},
    {id : 3 , No : 3 , Vouncher : "09308" , Cash : "100,000" , Tax : "100", Total : "100,100", Date : "12/7/2023", Time : "10:00 AM"},
    {id : 4 , No : 4 , Vouncher : "09308" , Cash : "100,000" , Tax : "100", Total : "100,100", Date : "12/7/2023", Time : "10:00 AM"},
]
  return (
   <>
  <div className='overflow-x-hidden'>
    <Dashboard/>
    <div className="container mx-auto ">
      <div className='flex items-center justify-between mt-5'>
      <h1 className="grid grid-cols-1 ms-48 text-xl">Recent</h1>
      <button className='bg-[#8ab4f8] text-[#161618] p-2 flex items-center rounded-md font-[600]'>
      <p className='mx-3'>Go To Shop</p>
      </button>
      </div>

      <div className="mt-16">
      <h1 className='ms-48 text-2xl'>Sale Overview</h1>
    </div>
    <div className='flex items-center justify-between'>
    <form className="flex items-center relative me-5 ms-48 mt-3">
                <input className="bg-[#202124] py-1 px-8 border border-[#3f4245] outline-none font-[500] rounded-md" type="text" placeholder='Search' />
              <BiSearch className='absolute mx-3'/>
    </form>
      <div className='flex'>
        <p className='text-[#7e7f80]'>Sort : </p> <p>&nbsp;Last</p><RiArrowDropDownLine className='text-2xl text-[#8ab4f8]'/>
        <p className='text-[#7e7f80]'>Filter : </p> <p>&nbsp;All File</p><RiArrowDropDownLine className='text-2xl text-[#8ab4f8]'/>
      </div>
    </div>
    {/* Table */}
  <div className='container mx-auto ms-48 mt-7'>
  <table className="lg:w-[68rem] 2xl:w-[84rem] divide-y divide-gray-200 dark:divide-gray-700  border-[0.1px] ">
      <thead className=" border-[0.1px]">
        <tr className='w-full hover:bg-slate-800'>
          <th scope="col" className="py-3.5 text-sm text-left font-normal w-[10%]">
              <span className='ms-5 '>NO</span>
          </th>
          <th scope="col" className="py-3.5 text-sm text-left font-normal">
            <span className=''>VOUCHER</span>
          </th>
          <th scope="col" className="py-3.5 text-sm text-center font-normal">
            <span className=''>CASH</span>
          </th>
          <th scope="col" className="py-3.5 text-sm font-normal">
            <span className=''>TAX</span>
          </th>
          <th scope="col" className="py-3.5 text-sm font-normal">
            <span className="">TOTAL</span>
          </th>
          <th scope="col" className="py-3.5 text-sm font-normal">
            <span className="">DATE</span>
          </th>
          <th scope="col" className="py-3.5 text-sm font-normal">
            <span className="">TIME</span>
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
           <span>{list.Vouncher}</span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center w-[200px]">
            <span>
              {list.Cash}
            </span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Tax}
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
         <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Total}
            </span>
          </td>
          <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Date}
            </span>
          </td> <td className="py-4 text-sm whitespace-nowrap text-center">
            <span>
              {list.Time}
            </span>
          </td>
        </tr>
        ))
      }
      </tbody>
    </table>
  </div>
    {/* Table */}
    <div className='ms-48 mt-10'>
      <h1>Total sale this month : 1,200,000</h1>
    </div>
    </div>
    
</div>
   </>
  )
}

export default Recent