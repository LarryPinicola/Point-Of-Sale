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
    <>
      <div className="btn-group mt-3 mx-5">
        <button
          className="btn"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
              setSearchParams(`?page=${currentPage - 1}`);
            }
          }}
        >
          PREV
        </button>
        {pages?.map((page) => {
          return (
            <button
              className={` btn ${isActive == page && "bg-blue-700"}`}
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
        <button
          className="btn"
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
              setSearchParams(`?page=${currentPage + 1}`);
            }
          }}
        >
          NEXT
        </button>
      </div>
    </>
  )
}

export default Pagination