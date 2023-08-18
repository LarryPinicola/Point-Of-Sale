import React from 'react'
import {FiLogOut} from "react-icons/fi"

const LogOut = () => {
  return (
    <div>
      <div className='flex items-center ms-7 text-white pt-5 pb-5'>
      <FiLogOut className='text-white ms-2 text-2xl'/>
      <h1 className='text-xl ms-4'>Logout</h1>
    </div>
    </div>
  )
}

export default LogOut
