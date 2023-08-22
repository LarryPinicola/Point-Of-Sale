import React from 'react'
import Navbar from '../components/Navbar'
import BackNav from '../components/BackNav'
import {BiSearch} from "react-icons/bi"
import { Link } from 'react-router-dom';
import {PiCoinsDuotone} from "react-icons/pi"
import {AiFillCreditCard,AiFillWallet,AiOutlineCheckCircle} from "react-icons/ai"


const CheckoutPage = () => {
  return (
    <>
        <Navbar/>
        <BackNav/>
    <div className='container mx-auto flex justify-between h-screen'>
        <div className="w-[70%] border-r-2">
      
           <div className=" flex justify-between items-center my-5">
              <h1 className='text-2xl'>Payment Method</h1>
           </div>
        <ul className='flex space-x-10 my-7'>
          <li className='flex items-center space-x-3 border border-blue-400 py-3 ps-3 pe-[2.27rem] rounded-xl relative'>
          <AiOutlineCheckCircle className='absolute bg-blue-400 rounded-full bottom-7 right-[14px]'/>
          <PiCoinsDuotone/>
            <p>Cash</p>
          </li>
          <li className='flex items-center space-x-3 border hover:border-blue-400 py-3 px-7 rounded-xl'>
          <AiFillCreditCard/>
            <p>Credit Card</p>
          </li>
          <li className='flex items-center space-x-3 border hover:border-blue-400 py-3 px-7 rounded-xl'>
          <AiFillWallet/>
            <p>Other</p>
          </li>
        </ul>
        <hr className='w-[95%]'/>
        <div className='pt-10'>
          <h1 className="text-4xl font-[500]">Shipping</h1>
        </div>
        <div className='pt-10 flex  space-x-6'>
          <li className='flex items-center text-2xl'>
            <p>Pick Up</p>
          </li>
          <li className='flex items-center text-2xl'>
            <p>Order</p>
          </li>
        </div>
   </div>

   <div className='w-[30%] mt-5 '>
        <h1 className="text-2xl ms-5">Receive</h1>
        <ul className="ms-5 mt-5">
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
        <div className='text-end mt-28'>
          <p>Total - 400,000</p>
          <p className='text-sm text-[#e8eaed]'>Tax-400</p>
        </div>
        <Link to = "/sale/cashier">
       <button className='bg-[#8ab4f8] text-[#202124] font-[500] p-2 w-[50%] block mx-auto mt-20 rounded-xl'>
            Print
        </button>
       </Link>
      </div>
        </div>
    </>
  )
}

export default CheckoutPage