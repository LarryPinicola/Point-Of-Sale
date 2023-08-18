import React, { useState } from "react";
import Navbar from "../components/Navbar";
import User from '../components/User'
import LogOut from './LogOut'
import Overview from './Overview'
import {AiFillHome} from "react-icons/ai"
import {BsShop} from "react-icons/bs"
import {PiUserCirclePlusBold} from "react-icons/pi"
import {RiArrowDownSLine,RiRecordCircleFill,RiArrowRightSLine} from "react-icons/ri"
import {MdInventory} from "react-icons/md"
import {FcGallery} from "react-icons/fc";
import {CgProfile} from "react-icons/cg"
import {FiLogOut} from "react-icons/fi"
import UserProfile from "./UserProfile";
import { Link, NavLink } from "react-router-dom";
import HomeOverview from "./HomeOverview";

const Dashboard = () => {
  const [show,setShow] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);
  const [show4,setShow4] = useState(false);

  return (
    <>
    <Navbar/>
    <aside className='w-full flex fixed'>
      <div className='w-[15%] bg-[#161618] h-screen border-r-[0.5px]'>
      <User/>
      <LogOut/>
   </div>
   <div className="w-[85%] bg-[#202124]">
    <Overview/>
   
   </div>
        {/* HomeOverView */}
      <div className='border-b-[0.5px]'>
          <div className='flex items-center ms-5 text-white py-5 '>
              <AiFillHome className='text-2xl '/>
              <NavLink to = "/dashboard/home">
              <p className='font-[500] text-xl ms-5'>Overview</p>
              </NavLink>
          </div>
      </div>
        {/* HomeOverView */}

        {/* <Sale>*/}
        <div className='border-b-[0.5px]'>
      <div className='flex items-center ms-7 text-white py-5'>
      <BsShop className='text-2xl'/>
      <h1 className='text-xl ms-5'>Sale</h1>
      {show2 ? <RiArrowDownSLine onClick={()=>setShow2(!show2)} className='ms-auto me-5 text-2xl'/> : <RiArrowRightSLine onClick={()=>setShow2(!show2)} className='ms-auto me-5 text-2xl'/>}
    </div>
   {
    show2 ?  <ul className="ms-[2.45rem] text-white ">
   <Link to = "/User/overview">
   <li className='flex items-center pb-5'>
    <RiRecordCircleFill className='text-sm text-[#404048]'/>
  <Link to="sale/cashier">
  <p className='ms-[2rem]'>Cashier</p>
  </Link>
    </li>
   </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Recent</p>
      </li>
      </Link>
  </ul> : ""
   }
        </div>
        {/*</Sale> */}

        {/* Inventory */}
      <div className='border-b-[0.5px]'>
      <div className='flex items-center ms-7 text-white py-5'>
      <MdInventory className='text-2xl'/>
      <h1 className='text-xl ms-5'>Inventory</h1>
      {show ? <RiArrowDownSLine onClick={()=>setShow(!show)} className='ms-auto me-5 text-2xl'/> : <RiArrowRightSLine onClick={()=>setShow(!show)} className='ms-auto me-5 text-2xl'/>}
    </div>

   {
    show ?  <ul className="ms-[2.45rem] text-white ">
   <Link to = "/User/overview">
   <li className='flex items-center pb-5'>
    <RiRecordCircleFill className='text-sm text-[#404048]'/>
    <p className='ms-[2rem]'>Product</p>
    </li>
   </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Add Product</p>
      </li>
      </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Recent</p>
      </li>
      </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Recent</p>
      </li>
      </Link>
  </ul> : ""
   }
      </div>
        {/* Inventory */}

        {/* User */}
        <div className='border-b-[0.5px]'>
      <div className='flex items-center ms-7 text-white py-5'>
      <PiUserCirclePlusBold className='text-2xl'/>
      <h1 className='text-xl ms-5'>User</h1>
      {show3 ? <RiArrowDownSLine onClick={()=>setShow3(!show3)} className='ms-auto me-5 text-2xl'/> : <RiArrowRightSLine onClick={()=>setShow3(!show3)} className='ms-auto me-5 text-2xl'/>}
    </div>

   {
    show3 ?  <ul className="ms-[2.45rem] text-white ">
   <Link to = "/User/overview">
   <li className='flex items-center pb-5'>
    <RiRecordCircleFill className='text-sm text-[#404048]'/>
    <p className='ms-[2rem]'>Overview</p>
    </li>
   </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Create User</p>
      </li>
      </Link>
  </ul> : ""
   }
        </div>
        {/* User */}

        {/* <Media> */}
        <div className='border-b-[0.5px]'>
          <div className='flex items-center ms-7 text-white py-5'>
            <FcGallery className='text-2xl'/>
            <h1 className='text-xl ms-5'>Media</h1>
          </div>
        </div>
        {/* </Media> */}

        {/* <Profile> */}
        <div className='border-b-[0.5px]'>
            <div className='flex items-center ms-7 text-white py-5'>
          <CgProfile className='text-2xl'/>
          <h1 className='text-xl ms-5'>UserProfile</h1>
          {show4 ? <RiArrowDownSLine onClick={()=>setShow4(!show4)} className='ms-auto me-5 text-2xl'/> : <RiArrowRightSLine onClick={()=>setShow4(!show4)} className='ms-auto me-5 text-2xl'/>}
            </div>
   {
    show4 ?  <ul className="ms-[2.45rem] text-white ">
   <Link to = "/User/overview">
   <li className='flex items-center pb-5'>
    <RiRecordCircleFill className='text-sm text-[#404048]'/>
    <p className='ms-[2rem]'>My Account</p>
    </li>
   </Link>

      <Link to = "/User/createuser">
      <li className='flex items-center pb-5'>
      <RiRecordCircleFill className='text-sm text-[#404048]'/>
      <p className='ms-[2rem]'>Edit</p>
      </li>
      </Link>
  </ul> : ""
   }
        </div>
        {/* </Profile> */}

        {/* <Logout> */}
    <div className='flex items-center ms-7 text-white pt-5 pb-5'>
      <FiLogOut className='text-white ms-2 text-2xl'/>
      <h1 className='text-xl ms-4'>Logout</h1>
    </div>
        {/* </Logout> */}
   </div>
    </aside>
   </>
   
  )
}

export default Dashboard;
