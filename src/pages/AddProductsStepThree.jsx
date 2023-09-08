import React from "react";
import { useState } from "react";
import { Stepper } from "@mantine/core";
import { Link } from "react-router-dom";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";

const AddProductsStepThree = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // modal box intention
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="w-full">
        {/* sidebar */}
        <Dashboard/>
        {/* step 3 parent */}
        <div className="container mx-auto">
          {/* adopt parent */}
          <div className="mt-5 ms-48 p-10 bg-[#ffffff19] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l rounded-lg cursor-pointer">
            {/* title n btn */}
            <div className="flex justify-between items-center mt-5">
              {/* title */}
              <div className="text-white mb-5">
                <h1 className="text-2xl tracking-wide pb-1 font-semibold blFt">
                  Products
                </h1>
                <p className="text-gray-300 blFt font-medium ">Inventory / Add Product</p>
              </div>
              {/* btn */}
              <div className="">
                <button className="px-3 py-2 bg-blue-400 rounded-lg text-white blFt font-semibold">
                  Product List
                </button>
              </div>
            </div>
            {/* upload img n stepper */}
            <div className="mt-6 flex gap-20 items-center">
              {/* upload section */}
              <div className="rounded-lg bg-[#ff00f219] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer bc p-7 w-[70%]">
                <div className="flex flex-col items-center gap-16">
                  <h1 className="text-white blFt font-semibold">Upload Photo</h1>
                  <div
                    className="bg-[#ff910050] backdrop-blur-sm  glassmorphic border-2 cursor-pointer border-dashed rounded-full p-14"
                    onClick={openModal}
                  >
                    <MdOutlineAddPhotoAlternate className="text-5xl" />
                  </div>
                  <button className="bg-blue-400 text-white py-[6px] font-semibold blFt px-[18px] rounded">
                    Remove
                  </button>
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
                  <Link to={"/addproducts/step2"}>
                    <button
                      className="border bg-[#ff00f219] bc backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer border-gray-400 text-white py-1 px-[14px] font-semibold blFt rounded"
                      onClick={prevStep}
                    >
                      Back
                    </button>
                  </Link>
                  <Link to={"/"}>
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

        {/* img uploader modal box */}
        <div className="min-h-screen flex items-center justify-center">
          <Modal isOpen={modalOpen} onClose={closeModal} />
        </div>
      </div>
    </>
  );
};

export default AddProductsStepThree;
