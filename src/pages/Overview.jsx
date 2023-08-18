import React, { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Navbar from "../components/Navbar";
import User from '../components/User'
import LogOut from './LogOut'
import HomeOverview from "./HomeOverview";
import Sale from "./Sale";
import Inventory from "./Inventory";
import Gallery from "./Gallery";
import UserProfile from "./UserProfile";
import Table from "../components/Table";
import Breadcrumbs from "../components/Breadcrumbs";
import Dashboard from "./Dashboard";

const Overview = () => {

  const [show,setShow] = useState(true);
 
  return (
    <>
<Dashboard/>

</>
    
  )
}

export default Overview