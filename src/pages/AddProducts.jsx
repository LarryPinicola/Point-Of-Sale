import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Stepper } from "@mantine/core";
import "../style/glassmorphic.css";

const AddProducts = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <div className="w-full">
        <Dashboard />
        <div className="container mx-auto">
          <div className="my-5 ms-48">
            <div className="bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer w-full p-10">
              {/* adopt parent */}
              <div className="">
                {/* title n btn */}
                <div className="flex justify-between items-center  mt-5">
                  {/* title */}
                  <div className="text-white mb-5">
                    <h1 className="text-2xl tracking-wide pb-1 font-semibold blFt">
                      Products
                    </h1>
                    <p className="text-gray-300 blFt font-medium">Inventory / Add Product</p>
                  </div>
                  {/* btn */}
                  <div className="">
                    <button className="px-3 py-2 bg-blue-400 rounded-lg text-white blFt font-semibold">
                      Product List
                    </button>
                  </div>
                </div>
                {/* form and stepper */}
                <div className="mt-6 flex justify-between gap-20 items-center">
                  {/* form */}
                  <div className=" rounded-lg bg-[#ff00f219] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer w-full bc p-5">
                    <form action="" className=" flex flex-col gap-5">
                      {/* name */}
                      <div className="flex items-center justify-between px-20">
                        <label
                          htmlFor=""
                          className="text-lg text-white font-semibold blFt"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Product Name"
                          className="outline-none text-white blFt font-semibold border-gray-400 rounded p-1 bc bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer"
                        />
                      </div>
                      {/* brand */}
                      <div className="flex items-center justify-between px-20">
                        <label
                          htmlFor=""
                          className="text-lg text-white font-semibold blFt"
                        >
                          Brand
                        </label>
                        <input
                          type="text"
                          placeholder="Brand Name"
                          className="outline-none text-white blFt font-semibold border-gray-400 rounded p-1 bc bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer"
                        />
                      </div>
                      {/* stock */}
                      <div className="flex items-center justify-between px-20">
                        <label
                          htmlFor=""
                          className="text-lg text-white font-semibold blFt"
                        >
                          Stock
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="outline-none text-white blFt font-semibold border-gray-400 rounded p-1 bc bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer"
                        />
                      </div>
                      {/* unit */}
                      <div className="flex items-center justify-between px-20">
                        <label
                          htmlFor=""
                          className="text-lg text-white font-semibold blFt"
                        >
                          Unit
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="outline-none text-white blFt font-semibold border-gray-400 rounded p-1 bc bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer"
                        />
                      </div>
                      {/* more info */}
                      <div className="flex items-center justify-between px-20">
                        <label
                          htmlFor=""
                          className="text-lg text-white font-semibold blFt"
                        >
                          More Info
                        </label>
                        <textarea
                          name=""
                          id=""
                          cols=""
                          rows="5"
                          className="outline-none text-white blFt font-semibold border-gray-400 rounded p-1 bc bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer w-[20.5rem]"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  {/* stepper */}
                  <div className="flex flex-col items-center">
                    <Stepper
                      active={active}
                      onStepClick={setActive}
                      breakpoint={"sm"}
                      orientation="vertical"
                      className=""
                    >
                      <Stepper.Step
                        label="Information"
                        className="items-center text-white "
                      ></Stepper.Step>
                      <Stepper.Step
                        label="Price"
                        className="items-center text-white "
                      ></Stepper.Step>
                      <Stepper.Step
                        label="Photo"
                        className="items-center text-white "
                      ></Stepper.Step>
                    </Stepper>
                    {/* submit btns */}
                    <div className="mt-20 flex gap-5">
                      <button
                        className="border bg-[#ff00f219] bc backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer border-gray-400 text-white py-1 px-[14px] font-semibold blFt rounded"
                        onClick={prevStep}
                      >
                        Back
                      </button>
                      <Link to={"/addproducts/step2"}>
                        <button
                          className="bg-blue-400 text-white py-[6px] font-semibold blFt px-[18px] rounded"
                          onClick={nextStep}
                        >
                          Next
                        </button>
                      </Link>
                    </div>
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

export default AddProducts;
