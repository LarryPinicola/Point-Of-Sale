import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 border-b  border-stone-200 ">
      {/* brand name */}
      <div className="">
        <h1 className="text-2xl tracking-tight font-semibold ">VendVortex</h1>
      </div>

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
  );
};

export default Navbar;
