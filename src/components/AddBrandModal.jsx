import React from "react";
import { MdDone } from "react-icons/md";
import "../style/glassmorphic.css";

const AddBrandModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-10 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute inset-0 bg-[#ff910030] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer opacity-50"></div>
      <div className="p-3 modal-container 50 overflow-y-auto bg-[#ff00f230] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer w-5/12 mx-auto rounded-lg shadow-lg z-50 bc">
        <div className="modal-content py-4 text-left px-5">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold blFt tracking-wide">Add Stock</p>
            <button
              className="modal-close cursor-pointer z-50 text-2xl"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="mt-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold blFt tracking-wide">Quantity</h1>
                <input type="text" className="p-2 blFt outline-none bg-[#ff910040] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer rounded-2xl bc" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold blFt tracking-wide">more</h1>
                <input type="text" className="p-2 blFt outline-none bg-[#ff910040] backdrop-blur-sm border-t-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.5)] border-solid glassmorphic border-t border-l cursor-pointer rounded-2xl bc" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrandModal;
