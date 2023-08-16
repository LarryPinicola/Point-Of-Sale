import React from 'react'
import User from '../components/User'
import LogOut from './LogOut'
import Overview from './Overview'


const Dashboard = () => {

  return (
    <aside className='w-full flex'>
      <div className='w-[15%] bg-[#161618] h-screen border-r-[0.5px]'>
      <User/>
      <LogOut/>
   </div>
   <div className="w-[85%] bg-[#202124]">
    <Overview/>
   </div>
    </aside>
   
  )
}

export default Dashboard
