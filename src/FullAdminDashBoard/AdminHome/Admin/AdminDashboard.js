import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import modulecss from "../Style.module.css";
import { Outlet } from "react-router-dom";
import AdminSidebar2 from "./AdminSidebar2";
const AdminDashboard = () => {
  return (
    <>
      <Header></Header>

      <div>
        <div className={modulecss}>
          <div className={modulecss.breadCrumb}>
            <h3 className="text-white">Welcome To Admin DashBoard</h3>
          </div>
        </div>
      </div>

      <div className="container my-5 ">
        <div className="row ">
          <div className="col-12 col-lg-4 ">
            <AdminSidebar2></AdminSidebar2>
          </div>
          <div className="col-12 col-lg-7">
            <Outlet></Outlet>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AdminDashboard;
