import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import { BiSearch } from "react-icons/bi";
import Card from "../components/Card";
import axios from "axios";
import Cookies from "js-cookie";
import { useGetproductQuery } from "../redux/Api/productApi";
import { concat, indexOf } from "lodash";

const Cashier = () => {
  // const token = Cookies.get(concat("token"));
  const token = Cookies.get("token");
  console.log(token);

  const { data } = useGetproductQuery({ token });
  console.log(data);

  const selected = [
    {
      item: "LipStick",
      qty: 1,
      singlePrice: 1000,
      total: 1000,
    },
    {
      item: "Mango",
      qty: 1,
      singlePrice: 1000,
      total: 1000,
    },
    {
      item: "Beverage",
      qty: 1,
      singlePrice: 1000,
      total: 1000,
    },
    {
      item: "KyayOo",
      qty: 1,
      singlePrice: 1000,
      total: 1000,
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
            {data?.data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Cashier Navbar */}
        <div className="w-[30%] mt-5 ms-5">
          <h1 className="text-2xl ms-5">Receive</h1>
          <ul className="ms-5 mt-5">
            {selected.map((pd, index) => {
              return (
                <div
                  className="flex justify-between p-1 border-b items-center hover:bg-gray-600 duration-200 cursor-pointer"
                  key={index}
                >
                  <div className="">
                    <h1 className="pb-1 text-lg tracking-wide">{pd.item}</h1>
                    <div className="text-sm flex gap-5 items-center text-gray-200 font-semibold ">
                      <p className="">{pd.qty} ku</p>
                      <p className="">{pd.singlePrice} mmk</p>
                    </div>
                  </div>
                  {/*  */}
                  <div className="font-semibold">{pd.total}</div>
                </div>
              );
            })}
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
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                1
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                2
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                3
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150 bg-[#d7dae0] text-[#3f4245]">
                Qty
              </p>
            </div>
            <div className="grid grid-cols-4 bg-[#202124]">
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                4
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                5
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                6
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                DIS
              </p>
            </div>
            <div className="grid grid-cols-4 bg-[#202124]">
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                7
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                8
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                9
              </p>
              <p className="border-[#3f4245] border-2 py-3 text-center cursor-pointer active:bg-gray-600 duration-150">
                PRICE
              </p>
            </div>
            <div className="grid grid-cols-4 bg-[#202124]">
              <p className="border-[#3f4245] border-2 py-3 cursor-pointer active:bg-gray-600 duration-150 text-center">
                +/-
              </p>
              <p className="border-[#3f4245] border-2 py-3 cursor-pointer active:bg-gray-600 duration-150 text-center">
                0
              </p>
              <p className="border-[#3f4245] border-2 py-3 cursor-pointer active:bg-gray-600 duration-150 text-center">
                .
              </p>
              <p className="border-[#3f4245] border-2 py-3 cursor-pointer active:bg-gray-600 duration-150 text-center">
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
