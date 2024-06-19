import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="relative top-[5rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
