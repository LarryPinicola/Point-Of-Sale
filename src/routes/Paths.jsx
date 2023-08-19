import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginForm from "../pages/LoginForm";
import LogOut from "../pages/LogOut";
import Media from "../pages/Media";
import Profile from "../pages/Profile";
import Edit from "../components/Edit";
import MyAccount from "../components/MyAccount";
import EditFromMyAcc from "../pages/EditFromMyAcc";
import Overview from "../pages/Overview";
import CreateUser from "../pages/CreateUser";
import HomeOverview from "../pages/HomeOverview";
import Cashier from "../pages/Cashier";
import Recent from "../pages/Recent";
import Products from "../pages/Products";
import AddProducts from "../pages/AddProducts";
import StockControl from "../pages/StockControl";
import ManageBrands from "../pages/ManageBrands";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/home" element={<HomeOverview />} />
      <Route path="/sale/cashier" element={<Cashier/>} />
      <Route path="/sale/recent" element={<Recent/>} />

      <Route path="/inventory/products" element={<Products/>} />
      <Route path="/inventory/addproducts" element={<AddProducts/>} />
      <Route path="/inventory/stockcontrol" element={<StockControl/>} />
      <Route path="/inventory/managebrands" element={<ManageBrands/>} />

      <Route path="/User/overview" element={<Overview />} />
      <Route path="/User/createuser" element={<CreateUser/>} />

      <Route path="/media" element={<Media />} />

      <Route path="/profile/myaccount/information" element={<Profile />} />
      <Route path="/profile/myaccount/edit" element={<Edit />} />


      <Route path="/logout" element={<LogOut />} />
      
      <Route path="/editpage" element={<EditFromMyAcc />} />
    </Routes>
  );
};

export default Paths;
