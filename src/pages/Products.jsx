import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import ProductsPics from "../components/ProductsPics";
import { BsPencil } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Navbar from "../components/Navbar";
import AddBrandModal from "../components/AddBrandModal";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Search from "../components/Search";
import "../style/glassmorphic.css";

const Products = () => {
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
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
  ];

  // modal box intention
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const rows = productLists.map((product, index) => {
    return (
      <tr className="px-2 hover:bg-[#ff910030] hover:backdrop-blur-sm cursor-pointer blFt" key={index}>
        <td className="py-4 ps-10 text-sm font-medium border-t border-[#ff00f2]">{product.no}</td>
        <td className="py-4 ps-10 text-sm font-medium border-t border-[#ff00f2]">
          {product.name}
        </td>
        <td className="py-4 ps-10 text-sm font-medium border-t border-[#ff00f2]">
          {product.brand}
        </td>
        <td className="py-4 ps-10 text-sm font-medium border-t border-[#ff00f2]">
          {product.unit}
        </td>
        <td className="py-4 ps-10 text-sm font-medium border-t border-[#ff00f2]">
          {product.price}
        </td>
        <td className="py-4 ps-10 text-sm font-medium border-t border-[#ff00f2]">
          {product.total}
        </td>
        <td className="py-4 ps-10 text-sm font-medium border-t border-[#ff00f2]">
          <div className="flex gap-3 items-center">
            <div
              className="bg-gray-600 rounded-full p-1 cursor-pointer"
              onClick={openModal}
            >
              <AiOutlinePlus className="text-sm" />
            </div>
            <div className="bg-gray-600 rounded-full p-1 cursor-pointer">
              <BsPencil className="text-sm" />
            </div>
            <Link to={"/products/detail"}>
              <div className="bg-gray-600 rounded-full p-1 cursor-pointer">
                <FiArrowRight className="text-sm" />
              </div>
            </Link>
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
          <div className="bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer w-full py-10 px-3">
            {/* adopt parent */}
            <div className="mx-7">
              {/* title and btns */}
              <div className="flex justify-between items-center mt-5">
                {/* title */}
                <div className="text-white mb-5">
                  <h1 className="text-2xl tracking-wide pb-1 font-semibold blFt">
                    Products
                  </h1>
                  <p className="text-gray-300 blFt font-medium">
                    Inventory / Products
                  </p>
                </div>
                {/* btns */}
                <div className="flex items-center gap-5">
                  <button className="text-white rounded bc px-[16px] py-1 bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer blFt">
                    Go to Shop
                  </button>
                  <button className="flex items-center px-2 py-[7px] bg-blue-400 rounded text-white blFt">
                    <AiOutlinePlus className=" mr-1" />
                    Add Product
                  </button>
                </div>
              </div>

              {/* search n filters n icons */}
              <h1 className="text-3xl tracking-wide pb-1 font-semibold blFt">
                Products Overview
              </h1>
              {/*  */}
              <div className="mt-1 flex justify-between">
                {/* search box */}
                <Search />
                {/* filters n icons */}
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
                  {/* icons */}
                  <div className="">
                    <div className="flex items-center gap-2 rounded p-1 bc text-white blFt bg-[#ff910050] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer">
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

              {/* pics list and table list */}
              {table ? (
                <div className="grid grid-cols-5 gap-5 justify-center mt-7 mx-auto">
                  {productPics.map((product) => {
                    return <ProductsPics key={product.id} pd={product} />;
                  })}
                </div>
              ) : (
                <div className="mt-7 mx-auto blFt">
                  <table className="w-full">
                    <thead className="">
                      <tr className="">
                        <th className="py-3 px-2 tracking-wide">NO</th>
                        <th className="py-3 px-2 tracking-wide">NAME</th>
                        <th className="py-3 px-2 tracking-wide">BRAND</th>
                        <th className="py-3 px-2 tracking-wide">UNIT</th>
                        <th className="py-3 px-2 tracking-wide">SALE PRICE</th>
                        <th className="py-3 px-2 tracking-wide">TOTAL STOCK</th>
                      </tr>
                    </thead>
                    <tbody className="">{rows}</tbody>
                  </table>
                </div>
              )}
              {/* pagination ui */}
              <div className="flex gap-5 blFt items-center border w-36 mt-12 ml-auto bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc rounded">
                <IoIosArrowBack />
                <p className="">1</p>
                <p className="">2</p>
                <p className="">3</p>
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          {/* add brand modal */}
          <div className="flex items-center justify-center">
            <AddBrandModal isOpen={modalOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
