import React from "react";
import { NavLink } from "react-router-dom";
 import modulecss from "../Style.module.css";
const AdminSidebar2 = () => {
  return (
    <div>
      <div className={`container  ${modulecss.boxshadow}   `}>
        <div className="row bg-secondary text-center ">
          <div className="col-12 col-lg-12 mt-5  "  >
            <NavLink to="" className="text-white  text-decoration-none">AddTreatment</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="EditTreatment2" className="text-white  text-decoration-none">EditTreatment</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="DeleteTreatment" className="text-white  text-decoration-none">DeleteTreatment</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="AddDoctor" className="text-white  text-decoration-none">AddDoctor</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="EditDoctor" className="text-white  text-decoration-none">EditDoctor</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="DeleteDoctor" className="text-white  text-decoration-none">DeleteDoctor</NavLink>
          </div>


          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="DeleteAppointment" className="text-white  text-decoration-none">DeleteAppointment</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="EditAppointment" className="text-white  text-decoration-none">EditAppointment</NavLink>
          </div>


          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="AddOffer" className="text-white  text-decoration-none">AddOffer</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5">
            <NavLink to="DeleteOffer" className="text-white  text-decoration-none">DeleteOffer</NavLink>
          </div>
          <div className="col-12 col-lg-12 mt-5 mb-5">
            <NavLink to="EditOffer" className="text-white  text-decoration-none">EditOffer</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar2;
