import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Search from "../components/Search";
import Cookies from "js-cookie";
import { useGetRecentQuery } from "../redux/Api/RecentApi";
import "../style/glassmorphic.css";

const Recent = () => {
  const token = Cookies.get("token");
  // console.log(token);
  const { data } = useGetRecentQuery({ token });
  console.log(data);

  // real time Date
  const currentDate = new Date();

  // hour and minute
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // date
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // formatted
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedYear = year < 10 ? `0${year}` : year;
  const formattedHour = hour < 10 ? `0${hour}` : hour;
  const formattedMinute = minutes < 10 ? `0${minutes}` : minutes;

  // display date and time
  const date = `${formattedDay}/${formattedMonth}/${formattedYear}`;
  const time = `${formattedHour}:${formattedMinute}`;
  // console.log(time,date);

  const lists = [
    {
      id: 1,
      No: 1,
      Voucher: "09308",
      Cash: "100,000",
      Tax: "100",
      Total: "100,100",
      Date: "12/7/2023",
      Time: "10:00 AM",
    },
    {
      id: 2,
      No: 2,
      Voucher: "09308",
      Cash: "100,000",
      Tax: "100",
      Total: "100,100",
      Date: "12/7/2023",
      Time: "10:00 AM",
    },
    {
      id: 3,
      No: 3,
      Voucher: "09308",
      Cash: "100,000",
      Tax: "100",
      Total: "100,100",
      Date: "12/7/2023",
      Time: "10:00 AM",
    },
    {
      id: 4,
      No: 4,
      Voucher: "09308",
      Cash: "100,000",
      Tax: "100",
      Total: "100,100",
      Date: "12/7/2023",
      Time: "10:00 AM",
    },
  ];

  const row = data?.map((list, index) => {
    return (
      <tr className="border-[0.1px] text-center " key={index}>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">1</td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          32223
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {Math.ceil(list.total_cash)}
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">1.5</td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {Math.ceil(list.total_cost)}
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {date}
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {time}
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="overflow-x-hidden w-full">
        <Dashboard />
        <div className="container mx-auto ">
          <div className="flex items-center justify-between mt-14">
            <h1 className="grid grid-cols-1 ms-48 text-2xl tracking-wide pb-1 font-semibold blFt">
              Recent
            </h1>
            <button className="flex items-center px-2 py-[7px] bg-blue-400 rounded text-white blFt">
              <p className="mx-3">Go To Shop</p>
            </button>
          </div>

          <div className="mt-10">
            <h1 className="ms-48 text-3xl tracking-wide pb-1 font-semibold blFt">
              Sale Overview
            </h1>
          </div>
          <div className="flex items-center justify-between">
            {/* SearchInput */}
            <span className="ms-48 mt-2">
              <Search />
            </span>
            {/* SearchInput */}

            <div className="flex items-center gap-5">
              <div className="">
                <label htmlFor="sort" className="text-white blFt font-semibold">
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
          {/* Table */}
          <div className="container mx-auto ms-48 mt-7">
            <table className="lg:w-[68rem] blFt border-[#ff00f2] 2xl:w-[84rem] divide-y divide-gray-200 dark:divide-gray-700 border-[0.1px] ">
              <thead>
                <tr>
                  <th className="py-3 font-semibold text-lg tracking-wide">
                    NO
                  </th>
                  <th className="py-3 font-semibold text-lg tracking-wide">
                    VOUCHER
                  </th>
                  <th className="py-3 font-semibold text-lg tracking-wide">
                    CASH
                  </th>
                  <th className="py-3 font-semibold text-lg tracking-wide">
                    TAX
                  </th>
                  <th className="py-3 font-semibold text-lg tracking-wide">
                    TOTAL
                  </th>
                  <th className="py-3 font-semibold text-lg tracking-wide">
                    DATE
                  </th>
                  <th className="py-3 font-semibold text-lg tracking-wide">
                    TIME
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">{row}</tbody>
            </table>
          </div>
          {/* Table */}
          <div className="ms-48 mt-28 flex justify-between items-center ">
            <table className="border w-[40%] text-center border-[#ff00f2] blFt">
              <thead className="border-b border-[#ff00f2]">
                <tr className="">
                  <th className="py-1 tracking-wide">Total Vouchers</th>
                  <th className="py-1 tracking-wide">Total Cash</th>
                  <th className="py-1 tracking-wide">Total Tax</th>
                  <th className="py-1 tracking-wide">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-1 tracking-wide">15</td>
                  <td className="py-1 tracking-wide">4,200,000</td>
                  <td className="py-1 tracking-wide">10,000</td>
                  <td className="py-1 tracking-wide">4,210,000</td>
                </tr>
              </tbody>
            </table>
            {/* pagination */}
          </div>
          <div className="flex gap-5 blFt items-center border w-36 mt-5 ml-auto bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc rounded">
            <IoIosArrowBack />
            <p className="">1</p>
            <p className="">2</p>
            <p className="">3</p>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
