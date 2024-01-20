import React from 'react'
import {BiSearch} from "react-icons/bi"
import "../style/glassmorphic.css";

const Search = () => {
  return (
    <form className="flex items-center relative me-5 mt-3">
                <input className="bg-[#ff910030] outline-none text-white blFt py-1 px-8 border bc font-medium rounded-2xl inputID" type="text" placeholder='Search' />
              <BiSearch className='absolute mx-3 text-lg'/>
    </form>
  )
}

export default Search