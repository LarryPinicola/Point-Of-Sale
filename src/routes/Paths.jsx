import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginForm from "../pages/LoginForm";
import LogOut from "../pages/LogOut";
import Media from "../pages/Media";
import Overview from "../pages/Overview";
import CreateUser from "../pages/CreateUser";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/media" element={<Media />} />
      <Route path="/User/overview" element={<Overview />} />
      <Route path="/User/createuser" element={<CreateUser/>} />
    </Routes>
  );
};

export default Paths;
