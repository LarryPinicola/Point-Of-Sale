import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { AiFillHome } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { PiUserCirclePlusBold } from "react-icons/pi";
import {
  RiArrowDownSLine,
  RiRecordCircleFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import { MdInventory } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "../style/glassmorphic.css";
import { ScrollArea } from "@mantine/core";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <>
      <Navbar />
      <aside className="w-full flex fixed">
        <div className=" w-[15%] bg-[#ffffff19] backdrop-blur-sm glassmorphic cursor-pointer h-screen">
          {/* HomeOverView */}
          <ScrollArea h={600} type="never" scrollbarSize={2} scrollHideDelay={0}>
          <div className="">
            <div className="flex items-center ms-4 text-white py-5 blFt">
              <AiFillHome className="text-2xl " />
              <NavLink to="/dashboard/home">
                <p className="font-[500] text-xl ms-[14px] text-white blFt">Overview</p>
              </NavLink>
            </div>
          </div>
          {/* HomeOverView */}

          {/* <Sale>*/}
          <div className="">
            <div className="flex items-center ms-4 text-white py-5 blFt">
              <BsShop className="text-2xl" />
              <h1 className="text-xl ms-[14px]">Sale</h1>
              {show2 ? (
                <RiArrowDownSLine
                  onClick={() => setShow2(!show2)}
                  className="ms-auto me-3 text-2xl"
                />
              ) : (
                <RiArrowRightSLine
                  onClick={() => setShow2(!show2)}
                  className="ms-auto me-3 text-2xl"
                />
              )}
            </div>
            {show2 ? (
              <ul className="ms-[2.45rem] text-white blFt">
                <li className="flex items-center pb-5">
                  <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                  <Link to="/sale/cashier">
                    <p className="ms-[2rem]">Cashier</p>
                  </Link>
                </li>

                <Link to="/sale/recent">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Recent</p>
                  </li>
                </Link>
              </ul>
            ) : (
              ""
            )}
          </div>
          {/*</Sale> */}

          {/* Inventory */}
          <div className="">
            <div className="flex items-center ms-4 text-white py-5 blFt">
              <MdInventory className="text-2xl" />
              <h1 className="text-xl ms-[14px]">Inventory</h1>
              {show ? (
                <RiArrowDownSLine
                  onClick={() => setShow(!show)}
                  className="ms-auto me-3 text-2xl"
                />
              ) : (
                <RiArrowRightSLine
                  onClick={() => setShow(!show)}
                  className="ms-auto me-3 text-2xl"
                />
              )}
            </div>

            {show ? (
              <ul className="ms-[2.45rem] text-white blFt">
                <Link to="/inventory/products">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Products</p>
                  </li>
                </Link>

                <Link to="/inventory/addproducts">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Add Products</p>
                  </li>
                </Link>

                <Link to="/inventory/stockcontrol">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Stock Control</p>
                  </li>
                </Link>

                <Link to="/inventory/managebrands">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Manage Brands</p>
                  </li>
                </Link>
              </ul>
            ) : (
              ""
            )}
          </div>
          {/* Inventory */}

          {/* User */}
          <div className="">
            <div className="flex items-center ms-4 text-white py-5 blFt">
              <PiUserCirclePlusBold className="text-2xl" />
              <h1 className="text-xl ms-[14px]">User</h1>
              {show3 ? (
                <RiArrowDownSLine
                  onClick={() => setShow3(!show3)}
                  className="ms-auto me-3 text-2xl"
                />
              ) : (
                <RiArrowRightSLine
                  onClick={() => setShow3(!show3)}
                  className="ms-auto me-3 text-2xl"
                />
              )}
            </div>

            {show3 ? (
              <ul className="ms-[2.45rem] text-white blFt">
                <Link to="/User/overview">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Overview</p>
                  </li>
                </Link>

                <Link to="/User/createuser">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Create User</p>
                  </li>
                </Link>
              </ul>
            ) : (
              ""
            )}
          </div>
          {/* User */}

          {/* <Media> */}
          <div className="">
            <div className="flex items-center ms-4 text-white py-5 blFt">
              <FcGallery className="text-2xl" />
              <Link to="/media">
                <h1 className="text-xl ms-[14px]">Media</h1>
              </Link>
            </div>
          </div>
          {/* </Media> */}

          {/* <Profile> */}
          <div className="">
            <div className="flex items-center ms-4 text-white py-5 blFt">
              <CgProfile className="text-2xl" />
              <h1 className="text-xl ms-[14px]">UserProfile</h1>
              {show4 ? (
                <RiArrowDownSLine
                  onClick={() => setShow4(!show4)}
                  className="ms-auto me-3 text-2xl"
                />
              ) : (
                <RiArrowRightSLine
                  onClick={() => setShow4(!show4)}
                  className="ms-auto me-3 text-2xl"
                />
              )}
            </div>
            {show4 ? (
              <ul className="ms-[2.45rem] text-white blFt">
                <Link to="/profile/myaccount/information">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">My Account</p>
                  </li>
                </Link>

                <Link to="/profile/myaccount/edit">
                  <li className="flex items-center pb-5">
                    <RiRecordCircleFill className="text-sm text-cyan-500 dkNav" />
                    <p className="ms-[2rem]">Edit</p>
                  </li>
                </Link>
              </ul>
            ) : (
              ""
            )}
          </div>
          {/* </Profile> */}

          {/* <Logout> */}
          <div className="flex items-center text-white pt-5 pb-5 blFt">
            <FiLogOut className="text-white ms-4 text-2xl" />
            <h1 className="text-xl ms-4">Logout</h1>
          </div>
          {/* </Logout> */}
          </ScrollArea>
        </div>
      
        {/* </div> */}
      </aside>
    </>
  );
};

export default Dashboard;
