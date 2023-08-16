import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BiSolidPhone } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { FaStore } from "react-icons/fa";

const MyAccount = () => {
  const birthDate = "12/4/1999";
  const gender = "Male";
  const address = "No.2, Baho Street, Bahan, Yangon";

  return (
    <div>
      {/* profile nav */}
      <div className="flex justify-between items-center my-7">
        {/* routes */}
        <div className="text-white mb-5">
          <h1 className="text-2xl tracking-wide">Profile</h1>
          <p className="text-gray-400 text-sm">
            Profile / My Account / Information
          </p>
        </div>
        {/* edit profile btn */}
        <div className="text-black">
          <button className="flex items-center gap-3 bg-blue-400 py-2 px-6 rounded-lg tracking-wide">
            <AiOutlinePlus className="" /> Edit Profile
          </button>
        </div>
      </div>
      {/* myAcc information */}
      {/* above section */}
      <div className="bg-[#171717] p-16 mt-16 w-[84vw] h-[30vh] relative">
        {/* profile pic */}
        <div className="">
          <div className="absolute top-[-50px]">
            <img
              src="https://i.pinimg.com/564x/f1/15/61/f11561bb28b4072846723ffdd8120cec.jpg"
              alt=""
              className="w-32 h-32 rounded-full"
            />
          </div>
          {/* pencil icon */}
          <div className="bg-white rounded-full text-black p-1 w-6 h-6 absolute ms-[6rem] mt-[-1rem] ">
            <AiOutlineEdit />
          </div>
        </div>
        {/* name and icons */}
        <div className="flex justify-between items-center relative top-[-70%]">
          <div className="ms-36">
            <h1 className="text-2xl tracking-wide">Ethan James</h1>
            <p className="text-gray-400 text-sm">
              Sale Executive / Active in previous life
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-lg p-1 rounded-full bg-gray-800">
              <GoHome />
            </div>
            <div className="text-lg p-1 rounded-full bg-gray-800">
              <BiSolidPhone />
            </div>
          </div>
        </div>
        {/* sections */}
        <div className="flex gap-8 mt-7">
          {/* personal */}
          <div className=" flex items-center gap-2 cursor-pointer">
            <div className="text-blue-400">
              <FaStore />
            </div>
            <h1 className="font-semibold text-lg tracking-wide text-gray-400">
              Personal
            </h1>
          </div>
          {/* Login info */}
          <div className=" flex items-center gap-2 cursor-pointer">
            <div className="text-blue-400">
              <FaStore />
            </div>
            <h1 className="font-semibold text-lg tracking-wide text-gray-400">
              Login Information
            </h1>
          </div>
          {/* password */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-blue-400">
              <FaStore />
            </div>
            <h1 className="font-semibold text-lg tracking-wide text-gray-400">
              Password
            </h1>
          </div>
        </div>
      </div>
      {/* below section */}
      <div className="border-t border-gray-500 bg-[#1A1A1A] w-[84vw] h-[30vh] ">
        {/*  */}
        <div className="flex flex-col gap-3 mt-7 ms-16">
          <div className="flex items-center">
            <h1 className="me-[6.5rem] text-gray-400 text-lg tracking-wide">
              Date Of Birth
            </h1>
            <p className="tracking-wide text-lg">: {birthDate}</p>
          </div>
          <div className="flex items-center">
            <h1 className="me-[9.5rem] text-gray-400 text-lg tracking-wide">
              Gender
            </h1>
            <p className="tracking-wide text-lg">: {gender}</p>
          </div>
          <div className="flex items-center">
            <h1 className="me-[9.1rem] text-gray-400 text-lg tracking-wide">
              Address
            </h1>
            <p className="tracking-wide text-lg">: {address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
