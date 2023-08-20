import React from "react";
import MyAccount from "../components/MyAccount";
import Edit from "../components/Edit";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex">
        <div className="border-r bg-[#171717] w-[15%] h-screen flex justify-center ">
          <h1 className="tracking-widest text-xl">sidebar</h1>
        </div>
        <div className="bg-[#202124] px-5 w-full ">
          <MyAccount />
          {/* <Edit/> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
