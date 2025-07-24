import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-white text-black min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
