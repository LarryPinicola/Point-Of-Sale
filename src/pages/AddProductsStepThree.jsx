import React from "react";
import { useState } from "react";
import { Stepper } from "@mantine/core";
import { Link } from "react-router-dom";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import Modal from "../components/Modal";

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
    <div className="w-full flex">
      {/* sidebar */}
      <div className="border-r bg-[#171717] w-[15%] h-screen flex justify-center items-center">
        <h1 className="text-xl tracking-widest">sidebar</h1>
      </div>
      {/* step 3 parent */}
      <div className="bg-[#202124] w-full">
        {/* adopt parent */}
        <div className="mx-7">
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
          {/* upload img n stepper */}
          <div className="mt-6 flex gap-20 items-center">
            {/* upload section */}
            <div className="border border-gray-400 rounded-lg bg-[#171717] p-5 w-[70%]">
              <div className="flex flex-col items-center gap-16">
                <h1 className="">Upload Photo</h1>
                <div
                  className="bg-gray-800 p-14 rounded-full cursor-pointer border-dashed border-blue-400 border"
                  onClick={openModal}
                >
                  <MdOutlineAddPhotoAlternate className="text-5xl" />
                </div>
                <button className="bg-blue-400 text-black py-1 px-4 rounded">
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
                    className="border border-gray-400 text-gray-400 py-1 px-4 rounded"
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
  );
};

export default AddProductsStepThree;
