import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiGrid } from "react-icons/fi";
import ProductsPics from "../components/ProductsPics";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Dashboard from "./Dashboard";
import Search from "../components/Search";

const StockControl = () => {
  const [table, setTable] = useState(true);

  const productPics = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/77/1d/bd/771dbdb52f7b3b035711b9fd392c5269.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/eb/58/09/eb58095d9d4ffd7c41f39ce50951634d.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/51/52/99/5152995016e4653beb6b6b6a9ddb0cc1.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/2c/0d/70/2c0d70ff3d9c69daa11713236ba1bd65.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/55/b4/87/55b487609107bacbe3693ec6dc5ff36d.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 7,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 8,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 9,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 10,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
  ];

  const productLists = [
    {
      no: 1,
      name: "Watermelon",
      user: "Sam",
      addedQty: "10",
      crateDate: "12/7/2023",
    },
    {
      no: 2,
      name: "pear",
      user: "Sam",
      addedQty: "6",
      crateDate: "12/7/2023",
    },
    {
      no: 3,
      name: "mango",
      user: "Sam",
      addedQty: "2",
      crateDate: "12/7/2023",
    },
    {
      no: 4,
      name: "apple",
      user: "Sam",
      addedQty: "13",
      crateDate: "12/7/2023",
    },
    {
      no: 5,
      name: "dragon fruit",
      user: "Sam",
      addedQty: "4",
      crateDate: "12/7/2023",
    },
    {
      no: 6,
      name: "orange",
      user: "Sam",
      addedQty: "9",
      crateDate: "12/7/2023",
    },
  ];

  const row = productLists.map((product, index) => {
    return (
      <tr className="" key={index}>
        <td className="border-t py-3 text-sm">{product.no}</td>
        <td className="border-t py-3 text-sm">{product.name}</td>
        <td className="border-t py-3 text-sm">{product.user}</td>
        <td className="border-t py-3 text-sm">{product.addedQty}</td>
        <td className="border-t py-3 text-sm">{product.crateDate}</td>
      </tr>
    );
  });

  return (
    <>
<div className='w-full'>
    <Dashboard/>
    <div className="container mx-auto">
      <div className="mt-5 ms-48">
          

  <div className="bg-[#202124] w-full">
          {/* adopt parent */}
          <div className="">
            {/* title */}
            <div className="mt-5">
              {/* title */}
              <div className="text-white mb-5 ">
                <h1 className="text-2xl tracking-wide pb-1 font-semibold">
                  Stock Control
                </h1>
                <p className="text-gray-400">Inventory / Stock Control</p>
              </div>
            </div>

            {/* search n filters n icons */}
            <h1 className="text-3xl font-semibold">Products Overview</h1>
            {/*  */}
            <div className="mt-3 flex justify-between">
              {/* search box */}
             <Search/>
              {/* filters n icons */}
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
                {/* icons */}
                <div className="">
                  <div className="flex items-center gap-2 border rounded p-1 text-gray-400 border-gray-600">
                    <div
                      className="cursor-pointer"
                      onClick={() => setTable(true)}
                    >
                      <FiGrid className="" />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => setTable(false)}
                    >
                      <TfiMenuAlt className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* pics list n table list */}
            {table ? (
              <div className="grid grid-cols-5 gap-5 justify-center mt-5 mx-auto">
                {productPics.map((product) => {
                  return <ProductsPics key={product.id} pd={product} />;
                })}
              </div>
            ) : (
              <div className="w-[69rem] mt-5 mx-auto">
                <table className="border w-full border-gray-400 text-center">
                  <thead>
                    <tr>
                      <th className="py-3 tracking-wide">NO</th>
                      <th className="py-3 tracking-wide">PRODUCT NAME</th>
                      <th className="py-3 tracking-wide">USER NAME</th>
                      <th className="py-3 tracking-wide">ADDED QUANTITY</th>
                      <th className="py-3 tracking-wide">CREATED AT</th>
                    </tr>
                  </thead>
                  <tbody>{row}</tbody>
                </table>
              </div>
            )}

            {/* pagination ui */}
            <div className="flex gap-5 items-center border w-36 border-gray-600 mt-5 ml-auto   ">
              <IoIosArrowBack />
              <p className="">1</p>
              <p className="">2</p>
              <p className="">3</p>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
        {/* stock control page parent */}
      
    </>
  );
};

export default StockControl;