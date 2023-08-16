import React from "react";

const OverView = () => {
  return (
    <div className="">
      {/* user's nav */}
      <div className="flex justify-between p-3 items-center">
        <div className="">
          <h1 className="text-2xl">User</h1>
          <p className="text-gray-400 text-sm">User / Overview</p>
        </div>
        <div className="">
          <button className="bg-blue-300 text-black py-2 px-5">
            Update User
          </button>
        </div>
      </div>
      {/* User's information */}
      <div className="w-[60%] bg-[#171717] flex justify-between px-2">
        {/* img and userName */}
        <div className="">
          {/* img */}
          <div className=""></div>
          {/* name */}
          <div className="">
            <h1 className="text-xl tracking-wide">Ethan James</h1>
            <p className="text-gray-500 text-sm">Sale Executive</p>
          </div>
        </div>
        {/* email and phone icons */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default OverView;
