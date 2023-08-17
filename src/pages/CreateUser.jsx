import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import User from '../components/User'
import LogOut from './LogOut'
import Overview from './Overview'
import Form from '../components/Form'

const CreateUser = () => {
  return (
<>
<aside className='w-full flex'>
      <div className='w-[15%] bg-[#161618] h-screen border-r-[0.5px]'>
      <User/>
      <LogOut/>
   </div>
   <div className="w-[85%] bg-[#202124]">
   <div className='bg-[#202124] h-screen pt-5'>

<div className='mx-10  flex justify-between text-white font-[500]'>
<h1 className='text-xl'>User

</h1>
{/* Creat User button */}
 <button className='bg-[#8ab4f8] text-[#161618] p-2 flex items-center'>
      <p className='mx-3'>User List</p>
  </button>
{/* Creat User button */}
</div>
<Breadcrumbs/>
<Form/>

</div>
   </div>
    </aside>
</>
   
  )
}

export default CreateUser