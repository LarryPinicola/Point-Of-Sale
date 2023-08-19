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
import Sale from "../pages/Sale";
import Products from "../pages/Products";
import AddProducts from "../pages/AddProducts";
import AddProductsStepTwo from "../pages/AddProductsStepTwo";
import AddProductsStepThree from "../pages/AddProductsStepThree";
import AddedProduct from "../pages/AddedProduct";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/home" element={<HomeOverview />} />
      <Route path="/dashboard/sale/cashier" element={<Sale />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/media" element={<Media />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/editpage" element={<EditFromMyAcc />} />
      <Route path="/User/overview" element={<Overview />} />
      <Route path="/User/createuser" element={<CreateUser />} />
      {/* inventory */}
      <Route path="/products" element={<Products />} />
      <Route path="/addproducts" element={<AddProducts />} />
      <Route path="/addproducts/step2" element={<AddProductsStepTwo />} />
      <Route path="/addproducts/step3" element={<AddProductsStepThree />} />
      <Route path="/addproducts/addedproduct" element={<AddedProduct />} />
    </Routes>
  );
};

export default Paths;
