import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import {BiSearch} from "react-icons/bi"
import Card from '../components/Card';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useGetproductQuery, usePaginatePagesQuery } from '../redux/Api/productApi';
import { concat, indexOf } from 'lodash';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQ } from '../redux/Service/cartSlice';


const Cashier = () => {
  const carts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(carts);


  //Pagination
  const [searchParams, setSearchParams] = useSearchParams();
  const token = Cookies.get(("token"));
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const page = searchParams.get("page")
    ? searchParams.get("page")
    : currentPage;
  //Pagination

  const { data : data } = usePaginatePagesQuery({ token, page }, { skip: false });
  const products = (data?.data);

  //Pagination
  const totalPages = Math.ceil(data?.meta?.total / data?.meta?.per_page);
  //Pagination



  return (
   <>
   <Navbar/>
<div className=" flex justify-between w-full h-screen">
      {/* Cashier Navbar */}
   
   <div className="w-[70%] border-r-2">
           <div className="flex justify-between items-center my-5 px-5">
              <h1 className="grid grid-cols-1">Sale/Cashier/&nbsp;&nbsp;&nbsp;All&nbsp;&nbsp;&nbsp;Drink
                  &nbsp;&nbsp;&nbsp;Coffee&nbsp;&nbsp;&nbsp;Dessert&nbsp;&nbsp;&nbsp;Set
              </h1>
              <form className="flex items-center relative me-5">
                <input className="bg-[#202124] py-1 px-8 border border-[#3f4245] outline-none font-[500] rounded-2xl" type="text" placeholder='Search' />
              <BiSearch className='absolute mx-3'/>
              </form>
      </div>
    <hr className='w-full' />

    <div className='grid grid-cols-4 gap-2 mt-5 px-5'>
      {
       data?.data?.map(item=>(
          <Card key={item.id} item={item} dispatch={dispatch}/>  
        ))
      }    
    </div>
    <Pagination
  totalPages = {totalPages}
  setCurrentPage={setCurrentPage}
  currentPage={currentPage}
  setSearchParams={setSearchParams}
  searchParams={searchParams}
/>
  </div>

      {/* Cashier Navbar */}
      <div className='w-[30%] mt-5'>
        <h1 className="text-2xl ms-5">Receive</h1>
       {
        carts.map((cart,i)=>(
          <ul key={cart.id} className={`ms-5 mt-5 ${i == (carts.length-1) &&"bg-slate-800 py-3"}`}
          >
          <div className='border-b'>
            <li className='text-xl'>
              {cart.name}
            </li>
           <div className='flex justify-between mb-1'>
           <li className='text-sm text-[#e8eaed]'>
          {cart.quantity}ku {cart.sales_price}Ks 
            </li>
            <li className='text-sm'>
              100,000
            </li>
           </div>
          </div>
        </ul>
        ))
       }
       <div className='text-end mt-28 fixed right-0 bottom-[310px]'>
        <p>Total - 400,000</p>
        <p className='text-sm text-[#e8eaed]'>Tax-400</p>
      </div>
        
        <div className='fixed bottom-0 w-[30%]'>
        <div className="">
            <div className="grid grid-cols-3 mt-1 bg-[#202124]">
              <p className="border-[#3f4245] border-2 py-3">
                &nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;Note
              </p>
              <p className="border-[#3f4245] border-2 py-3">
                &nbsp;&nbsp;&nbsp;Note
              </p>
              <p className="border-[#3f4245] border-2 py-3">
                &nbsp;&nbsp;&nbsp;Note
              </p>
            </div>
            <div className="grid grid-cols-4 bg-[#202124]">
              <p onClick={()=>dispatch(incrementQ(1))} className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                1
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                2
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                3
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out bg-[#d7dae0] text-[#3f4245]">
                Qty
              </p>
            </div>
            <div className="grid grid-cols-4 bg-[#202124]">
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                4
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                5
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                6
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                DIS
              </p>
            </div>
            <div className="grid grid-cols-4 bg-[#202124]">
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                7
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                8
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                9
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                PRICE
              </p>
            </div>
            <div className="grid grid-cols-4 bg-[#202124]">
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                +/-
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                0
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                .
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
                X
              </p>
            </div>
            <div className="grid grid-cols-1">
              <Link to="/sale/cashier/print">
                <p className="border-[#3f4245] border-2 py-3 text-center font-[500] text-[#8ab4f8]">
                  Payment
                </p>
              </Link>
            </div>
          </div>
      </div>
      </div>
</div>



   </>
  )
}

export default Cashier
