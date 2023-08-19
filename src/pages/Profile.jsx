import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import MyAccount from "../components/MyAccount";

const Profile = () => {
  return (
   <>
    
  <div className='w-full'>
    <Dashboard/>
    <div className="container mx-auto">
    <div className="grid grid-cols-1 mt-5 ms-28">
      <MyAccount/>
    </div>
    </div>
</div>
   </>
  )
}

export default Profile