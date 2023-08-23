import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

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
      <tr className="" key={index}>
        <td className="border-t py-3 text-sm">{product.no}</td>
        <td className="border-t py-3 text-sm">{product.name}</td>
        <td className="border-t py-3 text-sm">{product.company}</td>
        <td className="border-t py-3 text-sm">{product.agent}</td>
        <td className="border-t py-3 text-sm">{product.phone}</td>
        <td className="border-t py-3 text-sm">{product.desc}</td>
        <td className="border-t py-3 text-sm">
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
    <>
      <Navbar />
      <div className="w-full flex">
        {/* sidebar */}
        <div className="border-r bg-[#171717] w-[15%] h-screen flex justify-center items-center ">
          <h1 className="text-xl tracking-wide">sidebar</h1>
        </div>
        {/* manage brands parent */}
        <div className="bg-[#202124] w-full">
          {/* adopt parent */}
          <div className="mx-7">
            {/* title n btn */}
            <div className="flex justify-between items-center  mt-5">
              {/* title */}
              <div className="text-white mb-5">
                <h1 className="text-2xl tracking-wide pb-1 font-semibold">
                  Manage Brands
                </h1>
                <p className="text-gray-400 ">Inventory / Manage Brands</p>
              </div>
              {/* btn */}
              <div className="flex items-center gap-5" onClick={handleBrand}>
                <button className="flex items-center px-2 py-1 bg-blue-400 rounded text-black">
                  Add Brand
                </button>
              </div>
            </div>

            {/* search n filters */}
            <h1 className="text-3xl font-semibold">Brand Overview</h1>
            {/*  */}
            <div className="mt-3 flex justify-between">
              {/* search box */}
              <div className="">
                <input
                  type="search"
                  className="rounded-lg py-2 bg-[#202124] px-1 outline-none border border-gray-400 text-white"
                  placeholder="Search"
                />
              </div>
              {/* filters */}
              <div className="flex items-center gap-5">
                <div className="">
                  <label htmlFor="sort" className="text-gray-400">
                    Sort :
                  </label>
                  <select
                    name=""
                    id="sort"
                    className="bg-[#202124] outline-none"
                  >
                    <option value="default">Last</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="filter">Filter :</label>
                  <select
                    name=""
                    id="filter"
                    className="bg-[#202124] outline-none"
                  >
                    <option value="default">All Files</option>
                    <option value="size">Size</option>
                  </select>
                </div>
              </div>
            </div>

            {/* table list */}
            <div className="w-[69rem] mt-5 mx-auto ">
              <table className="border w-full border-gray-400 text-center">
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
            <div className="flex gap-5 items-center border w-36 border-gray-600 mt-5 ml-[85%]   ">
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
            addbrand ? "fixed top-0 right-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            className={
              addbrand
                ? "fixed top-0 right-0 w-[20%] h-screen bg-[#2e2e2e] p-5 ease-in duration-500 "
                : "fixed right-[-100%] top-0 p-10 ease-in-out duration-500"
            }
          >
            {/* sidebar content goes here */}
            <div className="">
              {/* head */}
              <div className="flex items-center justify-between">
                <h1 className="">Add New Brand</h1>
                <div
                  onClick={handleBrand}
                  className="rounded-full bg-gray-600 cursor-pointer hover:bg-gray-400 duration-150 p-1"
                >
                  <AiOutlineClose />
                </div>
              </div>
              {/* upload img */}
              <div className="border border-dashed rounded p-5 flex flex-col gap-2 text-center items-center bg-gray-600 mt-5 cursor-pointer">
                <div className="">
                  <AiOutlinePlus className="" />
                </div>
                <h1 className="tracking-wide">Add Image</h1>
              </div>
              {/* brand name */}
              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor="brandname">Brand Name</label>
                <input
                  type="text"
                  id="brandname"
                  className="bg-[#2e2e2e] border outline-none rounded p-1 w-full border-gray-400 "
                />
              </div>
              {/* company name */}
              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="bg-[#2e2e2e] border outline-none rounded p-1 w-full border-gray-400"
                />
              </div>
              {/* agent */}
              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor="agent">Agent</label>
                <input
                  type="text"
                  id="agent"
                  className="bg-[#2e2e2e] border outline-none rounded p-1 w-full border-gray-400"
                />
              </div>

              {/* phone */}
              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  id="phone"
                  className="bg-[#2e2e2e] border outline-none rounded p-1 w-full border-gray-400"
                />
              </div>

              {/* description */}
              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor="desc">Description</label>
                <input
                  type=""
                  id="desc"
                  className="bg-[#2e2e2e] border outline-none rounded p-1 w-full border-gray-400 h-24"
                />
              </div>
              {/* save btn */}
              <div className="text-center mt-2">
                <button className="uppercase bg-blue-600 py-1 px-10 rounded tracking-wide">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBrands;
