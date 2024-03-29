import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BiSearch } from "react-icons/bi";
import Card from "../components/Card";
import Cookies from "js-cookie";
import {
  usePaginatePagesQuery,
} from "../redux/Api/productApi";
import { concat, indexOf } from "lodash";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Service/cartSlice";
import "../style/glassmorphic.css";

const Cashier = () => {
  const carts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(carts);

  //Pagination
  const token = Cookies.get("token");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const page = searchParams.get("page")
    ? searchParams.get("page")
    : currentPage;

  const { data: data } = usePaginatePagesQuery(
    { token, page },
    { skip: false }
  );
  const products = data?.data;

  //Pagination
  const totalPages = Math.ceil(data?.meta?.total / data?.meta?.per_page);
  //Pagination

  return (
    <>
      <Navbar />
      <div className=" flex justify-between w-full h-screen">
        {/* Cashier Navbar */}

        <div className="w-[70%]">
          <div className=" relative flex justify-between items-center my-4 px-5">
            <h1 className="grid grid-cols-1 blFt font-medium">
              Sale&nbsp;/&nbsp;Cashier&nbsp;/&nbsp;&nbsp;&nbsp;All&nbsp;&nbsp;&nbsp;Drink
              &nbsp;&nbsp;&nbsp;Coffee&nbsp;&nbsp;&nbsp;Dessert&nbsp;&nbsp;&nbsp;Set
            </h1>
            <form className=" flex items-center relative me-5">
              <input
                className="bg-[#ff910030] outline-none text-white blFt d py-1 px-8 border bc font-medium rounded-2xl"
                type="text"
                placeholder="Search"
              />
              <BiSearch className="absolute mx-3 text-lg" />
            </form>
          </div>
          <hr className="w-full" />

          <div className="grid grid-cols-4 gap-2 mt-5 px-5">
            {data?.data?.map((item) => (
              <Card key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
          <div className="">
            <Pagination
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
        </div>

        {/* Cashier Navbar */}
        <div className=" w-[30%] bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer">
          <div className="mt-5">
            <h1 className="text-2xl ms-5 text-white blFt">Receive</h1>
            {carts.map((cart, i) => (
              <ul
                key={cart.id}
                className={`ms-3 me-3 mt-5 ${
                  i == carts.length - 1 &&
                  "bg-[#ff00f219] backdrop-blur-sm border-t-[rgb(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc rounded-xl py-3"
                }`}
              >
                <div className="border-b px-4">
                  <li className="text-xl text-white blFt font-semibold ">
                    {cart.id}
                  </li>
                  <div className="flex justify-between mb-1">
                    <li className="text-sm text-white blFt font-medium">
                      1ku {cart.sales_price}Ks
                    </li>
                    <li className="text-sm blFt font-medium ">100,000</li>
                  </div>
                </div>
              </ul>
            ))}
            <div className="text-end pr-4 mt-28 fixed right-0 bottom-[310px]">
              <p>Total - 400,000</p>
              <p className="text-sm text-[#e8eaed] mb-2">Tax-400</p>
            </div>

            <div className=" fixed bottom-0 w-[100%]">
              <div className="">
                <div className="grid grid-cols-3 mt-1">
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold glassmorphic">
                    &nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;Note
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold glassmorphic">
                    &nbsp;&nbsp;&nbsp;Note
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold glassmorphic">
                    &nbsp;&nbsp;&nbsp;Note
                  </p>
                </div>
                <div className="grid grid-cols-4">
                  <p
                  // onClick={() => dispatch(incrementQ(1))} 
                  className="calBdr rounded-lg py-3 glassmorphic bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    1
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    2
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    3
                  </p>
                  <p className="bc rounded-lg py-3 text-center cursor-pointer active:bg-[#ff910050] calBdr-301 ease-in-out glassmorphic bg-[#ff00f250] blFt font-semibold">
                    Qty
                  </p>
                </div>
                <div className="grid grid-cols-4">
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    4
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    5
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    6
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    DIS
                  </p>
                </div>
                <div className="grid grid-cols-4">
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    7
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    8
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    9
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    PRICE
                  </p>
                </div>
                <div className="grid grid-cols-4">
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    +/-
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    0
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    .
                  </p>
                  <p className="calBdr rounded-lg py-3 bg-[#ff00f250] blFt font-semibold text-center cursor-pointer active:bg-[#ff910050] duration-100 ease-in-out glassmorphic">
                    X
                  </p>
                </div>
                <div className="grid grid-cols-1 bg-[#ff00f219] active:bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer">
                  <Link to="/sale/cashier/print">
                    <p className="calBdr rounded-lg py-3 text-center font-bold text-[#8ab4f8] blFt">
                      Payment
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashier;
