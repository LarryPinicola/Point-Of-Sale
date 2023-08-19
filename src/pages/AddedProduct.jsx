import { Stepper } from "@mantine/core";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalSuccessful from "../components/ModalSuccessful";

const AddedProduct = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const salePrice = 10000;
  const actualPrice = 8000;

  const name = "Watermelon";
  const brand = "USA";
  const stock = 120;
  const unit = "$";
  const moreInfo = "Fresh Fruits";

  // modal box intention
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full flex">
      {/* sidebar */}
      <div className="border-r bg-[#171717] w-[15%] h-screen flex justify-center items-center">
        <h1 className="text-xl tracking-widest">sidebar</h1>
      </div>
      {/* added product parent */}
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
              <p className="text-gray-400 ">Inventory / Add Product</p>
            </div>
            {/* btn */}
            <div className="">
              <button className="px-2 py-1 bg-blue-400 rounded-lg text-black">
                Product List
              </button>
            </div>
          </div>
          {/* finish product information */}
          <div className="mt-3 flex gap-20 items-center">
            {/* information form */}
            <div className="bg-[#171717] p-5 w-[70%]">
              {/* above section */}
              <div className="flex items-center gap-20">
                {/* product pic  */}
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
                  <h1 className="text-gray-400 text-lg tracking-wide">Name</h1>
                  <p className="tracking-wide text-lg"> : {name}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="text-gray-400 text-lg tracking-wide">Brand</h1>
                  <p className="tracking-wide text-lg"> : {brand}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="text-gray-400 text-lg tracking-wide">Stock</h1>
                  <p className="tracking-wide text-lg"> : {stock}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="text-gray-400 text-lg tracking-wide">Units</h1>
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
                  className="bg-blue-400 text-black py-1 px-4 rounded"
                  onClick={openModal}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal successful created */}
      <div className="min-h-screen flex items-center justify-center">
        <ModalSuccessful isOpen={modalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default AddedProduct;
