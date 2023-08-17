import React from "react";
import Navbar from "../components/Navbar";
import React from 'react'
import User from '../components/User'
import LogOut from './LogOut'
import Overview from './Overview'


const Dashboard = () => {

  return (
    <>
      <Navbar />
    <aside className='w-full flex'>
      <div className='w-[15%] bg-[#161618] h-screen border-r-[0.5px]'>
      <User/>
      <LogOut/>
   </div>
   <div className="w-[85%] bg-[#202124]">
    <Overview/>
   </div>
//      <div className='w-[15%] bg-black h-screen'>
//       <h1 className="text-white text-center">
//       <div className='flex items-center ms-7'>
//       </div>
//       </h1>
//     </div>
    </aside>
   </>
   
  )
}

export default Dashboard;
