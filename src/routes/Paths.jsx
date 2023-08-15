import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import LoginForm from "../components/LoginForm";
import LogOut from "../components/LogOut";
import Media from "../components/Media";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/media" element={<Media />} />
    </Routes>
  );
};

export default Paths;
