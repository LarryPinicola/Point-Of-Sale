import React from "react";
import { MdDone } from "react-icons/md";

const ModalSuccessful = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-10 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-50"></div>
      <div className="modal-container 50 overflow-y-auto bg-gray-600 w-5/12 mx-auto rounded shadow-lg z-50">
        <div className="modal-content py-4 text-left px-5">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Create Product</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="">
            <div className="">
              <div className="flex flex-col items-center gap-7">
                <div className="border rounded-full p-5 bg-gray-700 border-dashed text-green-500 text-4xl">
                  <MdDone />
                </div>
                <p className="text-lg tracking-wide">
                  Successfully created the product
                </p>
                <button className="py-1 px-4 bg-blue-400 rounded text-black uppercase">
                  See all products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccessful;
