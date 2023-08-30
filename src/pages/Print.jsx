import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import BackNav from '../components/BackNav'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useGetproductQuery } from '../redux/Api/productApi'

const Print = () => {
  const token = Cookies.get("token");
  console.log(token);

  const printOut = () => {
    const {data} = useGetproductQuery({token})
    console.log(data);
  } 


  return (
    <div>
        <Navbar/>
        <BackNav/>
        <div className='flex justify-center'>
            <div className='bg-[#161618] my-5 w-[29%] pb-20'>
            <h1 className="text-2xl ms-5">Receive</h1>
        <ul className="mx-5 mt-5">
          <div className='border-b'>
            <li className='text-xl'>
              LipStick
            </li>
           <div className='flex justify-between mb-1'>
           <li className='text-sm text-[#e8eaed]'>
           ၁ခု ၁၀၀၀ကျပ် 
            </li>
            <li className='text-sm'>
              100,000
            </li>
           </div>
          </div>
          <div className='border-b'>
            <li className='text-xl'>
              LipStick
            </li>
           <div className='flex justify-between mb-1'>
           <li className='text-sm text-[#e8eaed]'>
           ၁ခု ၁၀၀၀ကျပ် 
            </li>
            <li className='text-sm'>
              100,000
            </li>
           </div>
          </div>
          <div className='border-b'>
            <li className='text-xl'>
              LipStick
            </li>
           <div className='flex justify-between mb-1'>
           <li className='text-sm text-[#e8eaed]'>
           ၁ခု ၁၀၀၀ကျပ် 
            </li>
            <li className='text-sm'>
              100,000
            </li>
           </div>
          </div>
          <div className='border-b'>
            <li className='text-xl'>
              LipStick
            </li>
           <div className='flex justify-between mb-1'>
           <li className='text-sm text-[#e8eaed]'>
           ၁ခု ၁၀၀၀ကျပ် 
            </li>
            <li className='text-sm'>
              100,000
            </li>
           </div>
          </div>
        </ul>
        <div className='text-end mx-5 mt-28'>
          <p>Total - 400,000</p>
          <p className='text-sm text-[#e8eaed]'>Tax-400</p>
        </div>
       <button className='bg-[#8ab4f8] text-[#202124] font-[500] p-2 w-[50%] block mx-auto mt-20 rounded-xl'>
            Print
        </button>
            </div>
        </div>
    </div>
  )
}

export default Print