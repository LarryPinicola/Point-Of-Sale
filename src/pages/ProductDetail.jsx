import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductDetail = () => {
  const salePrice = 10000;
  const actualPrice = 8000;

  const name = "Watermelon";
  const brand = "USA";
  const stock = 120;
  const unit = "$";
  const moreInfo = "Fresh Fruits";

  const stocks = [
    {
      no: 1,
      name: "Water Melon",
      qty: "melon",
      create: 200,
    },
    {
      no: 2,
      name: "Water Melon",
      qty: "melon",
      create: 400,
    },
    {
      no: 3,
      name: "Water Melon",
      qty: "melon",
      create: 100,
    },
  ];

  const sales = [
    {
      no: 1,
      sQty: "Water Melon",
      price: "Melon",
      sale: 200,
    },
    {
      no: 2,
      sQty: "Water Melon",
      price: "Melon",
      sale: 100,
    },
    {
      no: 3,
      sQty: "Water Melon",
      price: "Melon",
      sale: 400,
    },
  ];

  const stockRow = stocks.map((stock, index) => {
    return (
      <tr className="" key={index}>
        <td className="border-t py-2 text-sm">{stock.no}</td>
        <td className="border-t py-2 text-sm">{stock.name}</td>
        <td className="border-t py-2 text-sm">{stock.qty}</td>
        <td className="border-t py-2 text-sm">{stock.create}</td>
      </tr>
    );
  });

  const saleRow = sales.map((sale, index) => {
    return (
      <tr className="" key={index}>
        <td className="border-t py-2 text-sm">{sale.no}</td>
        <td className="border-t py-2 text-sm">{sale.sQty}</td>
        <td className="border-t py-2 text-sm">{sale.price}</td>
        <td className="border-t py-2 text-sm">{sale.sale}</td>
      </tr>
    );
  });

  return (
    <>
      <Navbar />
      <div className="w-full flex">
        {/* sidebar */}
        <div className="border-r bg-[#171717] w-[15%] h-screen flex justify-center items-center ">
          <h1 className="text-xl tracking-widest">sidebar</h1>
        </div>
        {/* product detail parent */}
        <div className="bg-[#202124] w-full">
          {/* adopt parent */}
          <div className="mx-7">
            {/* title n btn */}
            <div className="flex justify-between items-center mt-5">
              {/* title */}
              <div className="text-white mb-5">
                <h1 className="text-2xl tracking-wide pb-1 font-semibold">
                  Products
                </h1>
                <p className="text-gray-400">
                  Inventory / Product / Product Detail
                </p>
              </div>
              {/* btn */}
              <div className="">
                <button className="px-2 py-1 bg-blue-400 rounded-lg text-black">
                  Product List
                </button>
              </div>
            </div>
            {/* created product information */}
            <div className="mt-3 flex gap-5 items-center">
              {/* information form */}
              <div className="bg-[#171717] p-5 w-[50%]">
                {/* above section */}
                <div className="flex items-center gap-20">
                  {/* product pic */}
                  <div className="relative">
                    <img
                      src="https://i.pinimg.com/564x/f1/15/61/f11561bb28b4072846723ffdd8120cec.jpg"
                      alt=""
                      className="w-32 h-32 rounded-full"
                    />
                    <div className="bg-white rounded-full text-black p-1 w-6 h-6 absolute ms-[6rem] mt-[-2rem] ">
                      <AiOutlineEdit />
                    </div>
                  </div>
                  {/* name n etc */}
                  <div className="">
                    <h1 className="text-3xl mb-3 tracking-wide font-semibold">
                      watermelon
                    </h1>
                    <div className="">
                      <p className="text-gray-400 pb-1">
                        Sale price :{" "}
                        <span className="text-white ">{salePrice} MMK</span>
                      </p>
                      <p className="text-gray-400">
                        Actual price :{" "}
                        <span className="text-white">{actualPrice} MMK</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* tab */}
                <div className="border-b mt-10 flex items-center gap-2 pb-3">
                  <FaStore className="text-blue-400" />
                  <h1 className="text-lg font-semibold tracking-wide text-gray-400">
                    Information
                  </h1>
                </div>

                {/* filled information */}
                <div className="bg-gray-900 flex flex-col gap-3 mt-7 p-5">
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-lg tracking-wide">
                      Name
                    </h1>
                    <p className="tracking-wide text-lg"> : {name}</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-lg tracking-wide">
                      Brand
                    </h1>
                    <p className="tracking-wide text-lg"> : {brand}</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-lg tracking-wide">
                      Stock
                    </h1>
                    <p className="tracking-wide text-lg"> : {stock}</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-lg tracking-wide">
                      Units
                    </h1>
                    <p className="tracking-wide text-lg"> : {unit}</p>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-lg tracking-wide">
                      More information
                    </h1>
                    <p className="tracking-wide text-lg"> : {moreInfo}</p>
                  </div>
                </div>
              </div>

              {/* stock history n sale history tables */}
              <div className="w-[47%] grid grid-cols-1 gap-5">
                {/* stock history */}
                <div className="">
                  <div className="border py-1 bg-[#171717]">
                    <h1 className="text-lg pb-2 px-3 border-b tracking-wide">
                      Stock History
                    </h1>
                    {/* table */}
                    <table className="w-full text-center">
                      <thead className="">
                        <tr className="">
                          <td className="py-2">NO</td>
                          <td className="py-2">USER NAME</td>
                          <td className="py-2">ADDED QUANTITY</td>
                          <td className="py-2">CREATED AT</td>
                        </tr>
                      </thead>
                      <tbody>{stockRow}</tbody>
                    </table>
                  </div>
                  {/* pagination */}
                  <div className="mt-1 border w-[7rem] ms-auto flex items-center gap-3">
                    <IoIosArrowBack className="cursor-pointer" />
                    <p className="">1</p>
                    <p className="">2</p>
                    <p className="">3</p>
                    <IoIosArrowForward className="cursor-pointer" />
                  </div>
                </div>
                {/* sale history */}
                <div className="">
                  <div className="border py-1 bg-[#171717]">
                    <h1 className="text-lg pb-2 px-3 border-b tracking-wide">
                      Sale History
                    </h1>
                    {/* table */}
                    <table className="w-full text-center">
                      <thead>
                        <tr>
                          <td className="py-2">NO</td>
                          <td className="py-2">SALE QUANTITY</td>
                          <td className="py-2">SALE PRICE</td>
                          <td className="py-2">SALE DATE</td>
                        </tr>
                      </thead>
                      <tbody>{saleRow}</tbody>
                    </table>
                  </div>
                  {/* pagination */}
                  <div className="mt-1 border w-[7rem] ms-auto flex items-center gap-3">
                    <IoIosArrowBack className="cursor-pointer" />
                    <p className="">1</p>
                    <p className="">2</p>
                    <p className="">3</p>
                    <IoIosArrowForward className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
