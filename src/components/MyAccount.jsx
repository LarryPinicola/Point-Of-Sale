import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BiSolidPhone } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const MyAccount = () => {
  const birthDate = "12/4/1999";
  const gender = "Male";
  const address = "No.2, Baho Street, Bahan, Yangon";

  const phone = "09669777549";
  const position = "Sale Executive";
  const email = "example@gmail.com";

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
      <div className="bg-[#171717] p-16 mt-16 w-[84vw] h-[20vh] relative">
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
        <div className="flex justify-between items-center relative top-[-50%]">
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
      </div>
      {/* down section (TABs)*/}
      <div className="bg-[#171717] py-5 h-56 ">
        <Tabs variant="line">
          <TabList className="flex gap-10 items-center ms-16">
            {/* personal tab */}
            <Tab className="flex items-center gap-2 cursor-pointer">
              <div className="text-blue-400">
                <FaStore />
              </div>
              <h1 className="font-semibold text-lg tracking-wide text-gray-400">
                Personal
              </h1>
            </Tab>
            {/* login information tab */}
            <Tab className="flex items-center gap-2 cursor-pointer">
              <div className="text-blue-400">
                <FaStore />
              </div>
              <h1 className="font-semibold text-lg tracking-wide text-gray-400">
                Login Information
              </h1>
            </Tab>
            {/* password tab */}
            <Tab className="flex items-center gap-2 cursor-pointer">
              <div className="text-blue-400">
                <FaStore />
              </div>
              <h1 className="font-semibold text-lg tracking-wide text-gray-400">
                Password
              </h1>
            </Tab>
          </TabList>

          <TabPanels className="mt-7 border-t border-gray-500">
            {/* personal */}
            <TabPanel>
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
            </TabPanel>
            {/* login info */}
            <TabPanel>
              <div className="flex flex-col gap-3 mt-7 ms-16">
                <div className="flex items-center">
                  <h1 className="me-[6.5rem] text-gray-400 text-lg tracking-wide">
                    Phone
                  </h1>
                  <p className="tracking-wide text-lg">: {phone}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="me-[5.6rem] text-gray-400 text-lg tracking-wide">
                    Position
                  </h1>
                  <p className="tracking-wide text-lg">: {position}</p>
                </div>
                <div className="flex items-center">
                  <h1 className="me-[7rem] text-gray-400 text-lg tracking-wide">
                    Email
                  </h1>
                  <p className="tracking-wide text-lg">: {email}</p>
                </div>
              </div>
            </TabPanel>
            {/* password */}
            <TabPanel>
              <div className="flex flex-col gap-3 mt-7 ms-16">
                <h1 className="text-3xl">Password</h1>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default MyAccount;
