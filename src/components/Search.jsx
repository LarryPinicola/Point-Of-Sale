import React from 'react'
import {BiSearch} from "react-icons/bi"
import "../style/glassmorphic.css";

const Search = () => {
  return (
    <form className="flex items-center relative me-5 mt-3">
                <input className="bg-[#202124] bc py-1 px-8 border border-[#3f4245] outline-none font-[500] rounded-md" type="text" placeholder='Search' />
              <BiSearch className='absolute mx-3'/>
    </form>
  )
}

export default Search