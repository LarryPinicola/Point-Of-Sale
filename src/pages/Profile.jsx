import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import MyAccount from "../components/MyAccount";
import Edit from "../components/Edit";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
   <>
    
  <div className='w-full'>
    <Dashboard/>
    <div className="container mx-auto">
    <div className="mt-5 ms-48">
      <MyAccount/>
    </div>
    </div>
</div>
   </>
  )
}

export default Profile