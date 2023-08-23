import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Stepper } from "@mantine/core";

const AddProducts = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
  <div className='w-full'>
  <Dashboard/>
    <div className="container mx-auto">
    <div className="mt-5 ms-48">
    <div className="bg-[#202124] w-full">
          {/* adopt parent */}
          <div className="">
            {/* title n btn */}
            <div className="flex justify-between items-center  mt-5">
              {/* title */}
              <div className="text-white mb-5">
                <h1 className="text-2xl tracking-wide pb-1 font-semibold">
                  Products
                </h1>
                <p className="text-gray-400 ">Inventory / Add Product</p>
              </div>
              {/* btn */}
              <div className="">
                <button className="px-2 py-1 bg-blue-400 rounded-lg text-black">
                  Product List
                </button>
              </div>
            </div>
            {/* form and stepper */}
            <div className="mt-6 flex justify-between gap-20 items-center">
              {/* form */}
              <div className="border border-gray-400 rounded-lg bg-[#171717] p-5 w-[70%]">
                <form action="" className=" flex flex-col gap-5">
                  {/* name */}
                  <div className="flex items-center justify-between px-20">
                    <label htmlFor="" className="text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="outline-none border border-gray-400 rounded p-1 bg-[#1a1a1a]"
                    />
                  </div>
                  {/* brand */}
                  <div className="flex items-center justify-between px-20">
                    <label htmlFor="" className="text-lg">
                      Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      className="outline-none border border-gray-400 rounded p-1 bg-[#1a1a1a]"
                    />
                  </div>
                  {/* stock */}
                  <div className="flex items-center justify-between px-20">
                    <label htmlFor="" className="text-lg">
                      Stock
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="outline-none border border-gray-400 rounded p-1 bg-[#1a1a1a]"
                    />
                  </div>
                  {/* unit */}
                  <div className="flex items-center justify-between px-20">
                    <label htmlFor="" className="text-lg">
                      Unit
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="outline-none border border-gray-400 rounded p-1 bg-[#1a1a1a]"
                    />
                  </div>
                  {/* more info */}
                  <div className="flex items-center justify-between px-20">
                    <label htmlFor="" className="text-lg">
                      More Info
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols=""
                      rows="5"
                      className="outline-none border border-gray-400 rounded p-1 bg-[#1a1a1a] w-[20.5rem]"
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
                    className="border border-gray-400 text-gray-400 py-1 px-4 rounded"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <Link to={"/addproducts/step2"}>
                    <button
                      className="bg-blue-400 text-black py-1 px-4 rounded"
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
