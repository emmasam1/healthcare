import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow relative top-[6.4rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
