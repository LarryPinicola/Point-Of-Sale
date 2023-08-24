import React, { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Table from "../components/Table";
import {TfiMenuAlt} from "react-icons/tfi"
import {FiGrid} from "react-icons/fi"
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import Breadcrumbs from "../components/Breadcrumbs";
import Dashboard from "./Dashboard";
import Search from "../components/Search";


const Overview = () => {
  const [show,setShow] = useState(true);
  return (
   <>
    
  <div className='w-full'>
    <Dashboard/>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 mt-5 ms-48">
        <div className="bg-[#202124]">
      <div className='bg-[#202124] pt-5'>
    <div className='flex justify-between text-white font-[500]'>
    <h1 className='text-xl'>User</h1>

    {/* Creat User button */}
     <button className='bg-[#8ab4f8] text-[#161618] p-2 flex items-center'>
      <AiOutlinePlus className='ms-1'/>
          <p className='mx-3'>Create User</p>
      </button>
    
    {/* Creat User button */}
    </div>
    <h1 className="text-xl font-semibold my-10">Staff Overview</h1>
            {/*  */}
            <div className="mt-3 flex justify-between">
              {/* search box */}
              <Search/>
              {/* filters n icons */}
              <div className="flex items-center gap-5">
                <div className="">
                  <label htmlFor="sort" className="text-gray-400">
                    Sort :
                  </label>
                  <select
                    name=""
                    id="sort"
                    className="bg-[#202124] outline-none"
                  >
                    <option value="default">Last</option>
                    <option value="name">Name</option>
                    <option value="date">date</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="filter" className="text-gray-400">
                    Filter :
                  </label>
                  <select
                    name=""
                    id="filter"
                    className="bg-[#202124] outline-none"
                  >
                    <option value="default">All Files</option>
                    <option value="size">Size</option>
                  </select>
                </div>
                {/* icons */}
                <div className="">
                  <div className="flex items-center gap-2 border rounded p-1 text-gray-400 border-gray-600">
                    <div
                      className="cursor-pointer"
                      onClick={() => setTable(true)}
                    >
                      <FiGrid className="" />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => setTable(false)}
                    >
                      <TfiMenuAlt className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    <Table/>
    </div>
      </div>
      <div className="flex  gap-5 items-center border w-36 border-gray-600 mt-5 ml-auto">
              <IoIosArrowBack />
              <p className="">1</p>
              <p className="">2</p>
              <p className="">3</p>
              <IoIosArrowForward />
            </div>
      </div>
    </div>
</div>
   </>
  )
}

export default Overview