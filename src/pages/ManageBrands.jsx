import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Dashboard from "./Dashboard";
import Search from "../components/Search";
import "../style/glassmorphic.css";

const ManageBrands = () => {
  const productLists = [
    {
      no: 1,
      name: "lemon",
      company: "VendVortex",
      agent: "cody",
      phone: "09337444652",
      desc: "beverage",
    },
    {
      no: 2,
      name: "lemon",
      company: "VendVortex",
      agent: "cody",
      phone: "09337444652",
      desc: "beverage",
    },
    {
      no: 3,
      name: "lemon",
      company: "VendVortex",
      agent: "cody",
      phone: "09337444652",
      desc: "beverage",
    },
    {
      no: 4,
      name: "lemon",
      company: "VendVortex",
      agent: "cody",
      phone: "09337444652",
      desc: "beverage",
    },
    {
      no: 5,
      name: "lemon",
      company: "VendVortex",
      agent: "cody",
      phone: "09337444652",
      desc: "beverage",
    },
  ];

  const [addbrand, setAddBrand] = useState(false);

  const handleBrand = () => {
    setAddBrand(!addbrand);
  };

  const row = productLists.map((product, index) => {
    return (
      <tr className="hover:bg-[#ff910030] hover:backdrop-blur-sm cursor-pointer blFt" key={index}>
        <td className="border-t py-3 text-sm border-[#ff00f2]">{product.no}</td>
        <td className="border-t py-3 text-sm border-[#ff00f2]">
          {product.name}
        </td>
        <td className="border-t py-3 text-sm border-[#ff00f2]">
          {product.company}
        </td>
        <td className="border-t py-3 text-sm border-[#ff00f2]">
          {product.agent}
        </td>
        <td className="border-t py-3 text-sm border-[#ff00f2]">
          {product.phone}
        </td>
        <td className="border-t py-3 text-sm border-[#ff00f2]">
          {product.desc}
        </td>
        <td className="border-t py-3 text-sm border-[#ff00f2]">
          <div className="flex gap-3 items-center">
            <div className="bg-gray-600 rounded-full p-1 cursor-pointer">
              <BiMinus className="text-sm" />
            </div>
            <div className="bg-gray-600 rounded-full p-1 cursor-pointer">
              <BsPencil className="text-sm" />
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="w-full">
      <Dashboard />
      <div className="container mx-auto">
        <div className="my-5 ms-48">
          <div className="bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer w-full py-10 px-6">
            {/* adopt parent */}
            <div className="">
              {/* title n btn */}
              <div className="flex justify-between items-center  mt-5">
                {/* title */}
                <div className="text-white mb-5">
                  <h1 className="text-2xl tracking-wide pb-1 font-semibold blFt">
                    Manage Brands
                  </h1>
                  <p className="text-gray-300 blFt font-medium">
                    Inventory / Manage Brands
                  </p>
                </div>
                {/* btn */}
                <div className="flex items-center gap-5" onClick={handleBrand}>
                  <button className="flex items-center px-2 py-[7px] bg-blue-400 rounded text-white blFt">
                    Add Brand
                  </button>
                </div>
              </div>

              {/* search n filters */}
              <h1 className="text-3xl tracking-wide pb-1 font-semibold blFt">
                Brand Overview
              </h1>
              {/*  */}
              <div className="mt-1 flex justify-between">
                {/* search box */}
                <Search />
                {/* filters */}
                <div className="flex items-center gap-5">
                  <div className="">
                    <label
                      htmlFor="sort"
                      className="text-white blFt font-semibold"
                    >
                      Sort :&nbsp;
                    </label>
                    <select
                      name=""
                      id="sort"
                      className="bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc rounded blFt"
                    >
                      <option className=" bg-gray-700" value="default">
                        Last
                      </option>
                      <option className=" bg-gray-700" value="name">
                        Name
                      </option>
                      <option className=" bg-gray-700" value="date">
                        date
                      </option>
                    </select>
                  </div>
                  <div className="">
                    <label
                      htmlFor="filter"
                      className="text-white blFt font-semibold"
                    >
                      Filter :&nbsp;
                    </label>
                    <select
                      name=""
                      id="filter"
                      className="bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc rounded blFt"
                    >
                      <option className="bg-gray-700" value="default">
                        All Files
                      </option>
                      <option className="bg-gray-700" value="size">
                        Size
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* table list */}
              <div className=" mt-6 mx-auto ">
                <table className="border w-full border-[#ff00f2] text-center blFt">
                  <thead>
                    <tr>
                      <th className="py-3 tracking-wide">NO</th>
                      <th className="py-3 tracking-wide">BRAND NAME</th>
                      <th className="py-3 tracking-wide">COMPANY NAME</th>
                      <th className="py-3 tracking-wide">AGENT</th>
                      <th className="py-3 tracking-wide">PHONE</th>
                      <th className="py-3 tracking-wide">DESCRIPTION</th>
                    </tr>
                  </thead>
                  <tbody>{row}</tbody>
                </table>
              </div>

              {/* pagination ui */}
              <div className="flex gap-5 blFt items-center border w-36 mt-10 ml-auto bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc rounded">
                <IoIosArrowBack />
                <p className="">1</p>
                <p className="">2</p>
                <p className="">3</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          {/* brand side bar */}
          <div
            className={
              addbrand
                ? "z-50 fixed top-0 right-0 w-full h-screen bg-[#ff910020] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer opacity-100"
                : ""
            }
          >
            <div
              className={
                addbrand
                  ? "fixed top-0 right-0 w-[20%] h-screen bg-[#ff00f260] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer p-5 ease-in duration-500 "
                  : "fixed right-[-100%] top-0 p-10 ease-in-out duration-500"
              }
            >
              {/* sidebar content goes here */}
              <div className="">
                {/* head */}
                <div className="flex items-center justify-between blFt text-xl">
                  <h1 className="">Add New Brand</h1>
                  <div
                    onClick={handleBrand}
                    className="rounded-full bg-[#ff00f210] backdrop-blur-sm glassmorphic cursor-pointer hover:bg-[#ff910050] duration-150 p-1 text-lg"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                {/* upload img */}
                <div className="border border-dashed rounded p-7 flex flex-col gap-2 text-center items-center bg-[#ff910030] backdrop-blur-sm cursor-pointer mt-5">
                  <div className="">
                    <AiOutlinePlus className=" text-xl" />
                  </div>
                  <h1 className="tracking-wide blFt">Add Image</h1>
                </div>
                {/* brand name */}
                <div className="flex flex-col gap-1 mt-3 blFt">
                  <label htmlFor="brandname">Brand Name</label>
                  <input
                    type="text"
                    id="brandname"
                    className="bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l cursor-pointer border outline-none p-1 w-full bc blFt text-white rounded-2xl"
                  />
                </div>
                {/* company name */}
                <div className="flex flex-col gap-1 mt-2 blFt">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l cursor-pointer border outline-none p-1 w-full bc blFt text-white rounded-2xl"
                  />
                </div>
                {/* agent */}
                <div className="flex flex-col gap-1 mt-2 blFt">
                  <label htmlFor="agent">Agent</label>
                  <input
                    type="text"
                    id="agent"
                    className="bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l cursor-pointer border outline-none p-1 w-full bc blFt text-white rounded-2xl"
                  />
                </div>

                {/* phone */}
                <div className="flex flex-col gap-1 mt-2 blFt">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    id="phone"
                    className="bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l cursor-pointer border outline-none p-1 w-full bc blFt text-white rounded-2xl"
                  />
                </div>

                {/* description */}
                <div className="flex flex-col gap-1 mt-2 blFt">
                  <label htmlFor="desc">Description</label>
                  <textarea
                    type=""
                    id="desc"
                    rows="3"
                    className="bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid border-t border-l cursor-pointer border outline-none p-1 w-full bc blFt text-white rounded-2xl"
                  />
                </div>
                {/* save btn */}
                <div className="text-center mt-3">
                  <button className="uppercase bg-blue-600 py-1 px-10 tracking-wide blFt rounded-lg">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBrands;
