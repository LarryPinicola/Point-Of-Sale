import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LogOut from "../pages/LogOut";
import Media from "../pages/Media";
import Profile from "../pages/Profile";
import Edit from "../components/Edit";
import EditFromMyAcc from "../pages/EditFromMyAcc";
import Overview from "../pages/Overview";
import CreateUser from "../pages/CreateUser";
import HomeOverview from "../pages/HomeOverview";
import AddProductsStepTwo from "../pages/AddProductsStepTwo";
import AddProductsStepThree from "../pages/AddProductsStepThree";
import AddedProduct from "../pages/AddedProduct";
import ProductDetail from "../pages/ProductDetail";
import ManageBrands from "../pages/ManageBrands";
import Cashier from "../pages/Cashier";
import Recent from "../pages/Recent";
import Products from "../pages/Products";
import AddProducts from "../pages/AddProducts";
import StockControl from "../pages/StockControl";
import Print from "../pages/Print";
import BackNav from "../components/BackNav";
import CheckoutPage from "../pages/CheckoutPage";
import Guard from "../pages/Guard";
import LoginUi from "../components/LoginUi";
// import Guard from "../pages/Guard";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Guard><LoginUi/></Guard>}/>
      <Route path="/dashboard/home" element={<HomeOverview />} />
      <Route path="/sale/cashier" element={<Cashier/>} />
      <Route path="/sale/cashier/print" element={<Print/>} />
      <Route path="/sale/cashier/print/checkout" element={<CheckoutPage/>} />
      <Route path="/sale/cashier" element={<BackNav/>} />
      <Route path="/sale/recent" element={<Recent/>} />

      <Route path="/inventory/products" element={<Products/>} />
      <Route path="/inventory/addproducts" element={<AddProducts/>} />
      <Route path="/inventory/stockcontrol" element={<StockControl/>} />
      <Route path="/inventory/managebrands" element={<ManageBrands/>} />

      <Route path="/User/overview" element={<Overview />} />
      <Route path="/User/createuser" element={<CreateUser />} />
      {/* inventory */}
      {/* <Route path="/inventory/products" element={<Products />} />
      <Route path="/inventory/addproducts" element={<AddProducts />} /> */}
      <Route path="/addproducts/step2" element={<AddProductsStepTwo />} />
      <Route path="/addproducts/step3" element={<AddProductsStepThree />} />
      <Route path="/addproducts/addedproduct" element={<AddedProduct />} />
      <Route path="/products/detail" element={<ProductDetail />} />
      {/* <Route path="/inventory/stockcontrol" element={<StockControl />} />
      <Route path="/inventory/managebrands" element={<ManageBrands />} /> */}
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
