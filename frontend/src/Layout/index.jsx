import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topnav from "./components/Topnav";

const Layout = () => {
  return (
    <>
    <Topnav/>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
