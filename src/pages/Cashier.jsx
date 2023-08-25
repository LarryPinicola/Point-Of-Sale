import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import { BiSearch } from "react-icons/bi";

const Cashier = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      const items = data.products;
      console.log(items);
    };
    getData();
  }, []);

  const receiveItems = [
    {
      name: "lipstick",
      qty: "၁",
      singlePrice: "၁၀၀၀",
      total: "၁၀၀၀",
    },
    {
      name: "lipstick",
      qty: "၁",
      singlePrice: "၁၀၀၀",
      total: "၁၀၀၀",
    },
    {
      name: "lipstick",
      qty: "၁",
      singlePrice: "၁၀၀၀",
      total: "၁၀၀၀",
    },
    {
      name: "lipstick",
      qty: "၁",
      singlePrice: "၁၀၀၀",
      total: "၁၀၀၀",
    },
    {
      name: "lipstick",
      qty: "၁",
      singlePrice: "၁၀၀၀",
      total: "၁၀၀၀",
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" flex justify-between w-full container mx-auto h-screen">
        {/* Cashier Navbar */}

        <div className="w-[70%] border-r-2">
          <div className="flex justify-between items-center my-5">
            <h1 className="grid grid-cols-1">
              Sale/Cashier/&nbsp;&nbsp;&nbsp;All&nbsp;&nbsp;&nbsp;Drink
              &nbsp;&nbsp;&nbsp;Coffee&nbsp;&nbsp;&nbsp;Dessert&nbsp;&nbsp;&nbsp;Set
            </h1>
            <form className="flex items-center relative me-5">
              <input
                className="bg-[#202124] py-1 px-8 border border-[#3f4245] outline-none font-[500] rounded-2xl"
                type="text"
                placeholder="Search"
              />
              <BiSearch className="absolute mx-3" />
            </form>
          </div>
          <hr className="w-full" />

          <div className="grid grid-cols-4 gap-5 mt-5 me-5">
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                  NIKE AIR
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                alt="NIKE AIR"
              />
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Cashier Navbar */}
        <div className="w-[30%] mt-5 ms-5 ">
          <h1 className="text-2xl ms-5">Receive</h1>
          <ul className="ms-5 mt-5">
            {receiveItems.map((item, index) => {
              return (
                <li
                  className="border-b py-1 cursor-pointer hover:bg-gray-800 duration-300 ease-linear "
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    {/* left */}
                    <div className="flex flex-col text-xl tracking-wide">
                      <h1 className="">{item.name}</h1>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">{item.qty}ခု</p>
                        <p className="text-sm">{item.singlePrice} ကျပ်</p>
                      </div>
                    </div>
                    {/* right */}
                    <div className="">
                      <h1 className="text-lg">{item.total}</h1>
                    </div>
                  </div>
                </li>
              );
            })}
            {/* <div className="border-b">
              <li className="text-xl">LipStick</li>
              <div className="flex justify-between mb-1">
                <li className="text-sm text-[#e8eaed]">၁ခု ၁၀၀၀ကျပ်</li>
                <li className="text-sm">100,000</li>
              </div>
            </div>
            <div className="border-b">
              <li className="text-xl">LipStick</li>
              <div className="flex justify-between mb-1">
                <li className="text-sm text-[#e8eaed]">၁ခု ၁၀၀၀ကျပ်</li>
                <li className="text-sm">100,000</li>
              </div>
            </div>
            <div className="border-b">
              <li className="text-xl">LipStick</li>
              <div className="flex justify-between mb-1">
                <li className="text-sm text-[#e8eaed]">၁ခု ၁၀၀၀ကျပ်</li>
                <li className="text-sm">100,000</li>
              </div>
            </div>
            <div className="border-b">
              <li className="text-xl">LipStick</li>
              <div className="flex justify-between mb-1">
                <li className="text-sm text-[#e8eaed]">၁ခု ၁၀၀၀ကျပ်</li>
                <li className="text-sm">100,000</li>
              </div>
            </div> */}
          </ul>
          <div className="text-end mt-28">
            <p>Total - 400,000</p>
            <p className="text-sm text-[#e8eaed]">Tax-400</p>
          </div>
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
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-300 ease-in-out">
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
    </>
  );
};

export default Cashier;
