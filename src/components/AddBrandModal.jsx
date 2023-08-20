import React from "react";
import { MdDone } from "react-icons/md";

const AddBrandModal = ({ isOpen, onClose }) => {
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
            <p className="text-2xl font-bold">Add Stock</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="mt-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Quantity</h1>
                <input type="text" className="p-2 rounded outline-none bg-[#202124]" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">more</h1>
                <input type="text" className="p-2 rounded outline-none bg-[#202124]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrandModal;
