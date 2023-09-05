import React from 'react'
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"

const Pagination = ({totalPages,setCurrentPage,currentPage,setSearchParams,searchParams}) => {

const pages = [];
if (totalPages < 10) {
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
} else {
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }
}
const isActive = searchParams.get("page");

  return (
    <div className='flex items-center space-x-5 mt-5 justify-center fixed bottom-0 left-[18%]'>
          <IoIosArrowBack 
              className=''
               onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  setSearchParams(`?page=${currentPage - 1}`);
                }
              }}
              />
        {pages?.map((page) => {
          return (
            <button
              className={`${isActive == page && "bg-[#ff00f219] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer"} p-5`}
              key={page}
              onClick={() => {
                setSearchParams(`?page=${page}`);
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
        {/* <p className="btn">page {currentPage}</p> */}
        <IoIosArrowForward 
               onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                  setSearchParams(`?page=${currentPage + 1}`);
                }
              }}
              />
    </div>
  )
}

export default Pagination