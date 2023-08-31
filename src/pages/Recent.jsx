import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Breadcrumbs from "../components/Breadcrumbs";
import Search from "../components/Search";
import Cookies from "js-cookie";
import { useGetRecentQuery } from "../redux/Api/RecentApi";

const Recent = () => {
  try {
    const token = Cookies.get("token");
    console.log(token);
    const { data } = useGetRecentQuery(token);

    console.log(data);
  } catch (error) {
    console.log(error, "error");
  }

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

  const row = lists.map((list, index) => {
    return (
      <tr className="border-[0.1px] text-center " key={index}>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {list.No}
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {list.Voucher}
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {list.Cash}
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {list.Tax}
        </td>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {list.Total}
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
      <div className="overflow-x-hidden">
        <Dashboard />
        <div className="container mx-auto ">
          <div className="flex items-center justify-between mt-5">
            <h1 className="grid grid-cols-1 ms-48 text-xl">Recent</h1>
            <button className="bg-[#8ab4f8] text-[#161618] p-2 flex items-center rounded-md font-[600]">
              <p className="mx-3">Go To Shop</p>
            </button>
          </div>

          <div className="mt-16">
            <h1 className="ms-48 text-2xl">Sale Overview</h1>
          </div>
          <div className="flex items-center justify-between">
            {/* SearchInput */}
            <span className="ms-48">
              <Search />
            </span>
            {/* SearchInput */}

            <div className="flex">
              <p className="text-[#7e7f80]">Sort : </p> <p>&nbsp;Last</p>
              <RiArrowDropDownLine className="text-2xl text-[#8ab4f8]" />
              <p className="text-[#7e7f80]">Filter : </p> <p>&nbsp;All File</p>
              <RiArrowDropDownLine className="text-2xl text-[#8ab4f8]" />
            </div>
          </div>
          {/* Table */}
          <div className="container mx-auto ms-48 mt-7">
            <table className="lg:w-[68rem] 2xl:w-[84rem] divide-y divide-gray-200 dark:divide-gray-700 border-[0.1px] ">
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
          <div className="ms-48 mt-28 flex justify-between items-center">
            <h1>Total sale this month : 1,200,000</h1>
            <div className="flex gap-5 items-center border w-36 border-gray-600 mt-5 ml-auto">
              <IoIosArrowBack />
              <p className="">1</p>
              <p className="">2</p>
              <p className="">3</p>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
