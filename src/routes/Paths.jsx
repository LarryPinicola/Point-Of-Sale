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

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/media" element={<Media />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/editpage" element={<EditFromMyAcc />} />
    </Routes>
  );
};

export default Paths;
