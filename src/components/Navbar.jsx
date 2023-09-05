import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import "../style/glassmorphic.css";

const Navbar = () => {
  return (
    <nav className="z-10 flex justify-between items-center py-2 pr-2 bg-[#ffffff19] backdrop-blur-sm glassmorphic cursor-pointer sticky top-0">
      {/* brand name */}
      <div className="w-full flex justify-between items-center px-5">
        <h1 className="text-2xl tracking-tight font-semibold ">
          <span className=" text-[50px] mmsNav text-[#E8EAED]">mms</span>
          <span className=" ml-2 dkNav text-cyan-500">DARK</span>
        </h1>

        {/* icons */}
        <div className="flex justify-around gap-3 items-center">
          {/* bell icon */}
          <div className="text-xl">
            <MdNotificationsNone />
          </div>
          {/* theme icon */}
          <div className="text-xl">
            <IoIosMoon />
          </div>
          {/* account icon */}
          <div className="text-xl">
            <RiAccountCircleLine />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
