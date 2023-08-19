import React from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const Modal = ({ isOpen, onClose }) => {
  const pics = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/77/1d/bd/771dbdb52f7b3b035711b9fd392c5269.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/eb/58/09/eb58095d9d4ffd7c41f39ce50951634d.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/51/52/99/5152995016e4653beb6b6b6a9ddb0cc1.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/2c/0d/70/2c0d70ff3d9c69daa11713236ba1bd65.jpg",
    },
  ];

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-10 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-50"></div>
      <div className="modal-container bg-gray-600 w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-5">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Select Photo</p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="">
            <div className="grid grid-cols-5 gap-3">
              <div className="bg-gray-800 p-5 rounded-lg justify-center flex items-center w-20 cursor-pointer border-dashed border-blue-400 border">
                <MdOutlineAddPhotoAlternate className="text-3xl" />
              </div>
              {pics.map((pic) => {
                return (
                  <img
                    src={pic.url}
                    alt=""
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                );
              })}
            </div>
            {/* insert btn */}
            <div className="justify-end flex mt-4">
              <button className="py-1 px-3 rounded-lg bg-gray-300 text-blue-600">
                Insert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
