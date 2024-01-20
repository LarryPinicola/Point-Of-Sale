import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Table from "../components/Table";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiGrid } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Breadcrumbs from "../components/Breadcrumbs";
import Dashboard from "./Dashboard";
import Search from "../components/Search";
import "../style/glassmorphic.css";

const Overview = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="w-full">
        <Dashboard />
        <div className="container mx-auto">
          <div className="my-5 ms-48">
            <div className="bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer w-full py-10 px-3">
              <div className="mx-7">
                <div className="flex justify-between text-white mb-4">
                  <h1 className="text-2xl tracking-wide font-semibold blFt">
                    User
                  </h1>

                  {/* Creat User button */}
                  <button className="flex items-center px-2 py-[7px] bg-blue-400 rounded text-white blFt">
                    <AiOutlinePlus className="ms-1" />
                    <p className="mx-3">Create User</p>
                  </button>

                  {/* Creat User button */}
                </div>
                <h1 className="text-3xl tracking-wide pb-1 font-semibold blFt">
                  Staff Overview
                </h1>
                {/*  */}
                <div className="mt-3 flex justify-between">
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
                <Table />
              </div>
              <div className="flex gap-5 blFt items-center border w-36 mt-10 ml-auto bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc rounded">
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
    </>
  );
};

export default Overview;
