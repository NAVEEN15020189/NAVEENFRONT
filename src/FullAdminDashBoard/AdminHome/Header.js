import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logohosp.jpg";
import modulecss from "./Style.module.css";

const Header = () => {
  return (
    <>
    <div>
      <div className={`container-fluid ${modulecss.topnav} text-bg-dark  `}>
        <div className="container">
        <div className="row">
          <div className=" col-md-8 col-lg-12">
            <span>
              <i className="bi bi-envelope-fill "></i>
              info@healthcarehospital.com
            </span>
            <span>
              <i className="bi bi-telephone-fill ms-5 "></i>+918143956849
            </span>
        
            <i className="bi bi-facebook p-1 ms-5"></i>
            <i className="bi bi-instagram p-1"></i>
            <i className="bi bi-twitter p-1"></i>
        
        </div>
      </div>
      </div>
      </div>
      </div>

      <nav className={`navbar navbar-expand-md  bg-white  sticky-top top-0  `}>
        <div className="container">
          <img
            className={`navbar-brand  ${modulecss.navbrand}`}
            src={logo}
            alt=""
          />
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center " id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className={`nav-item ${modulecss.navexpand} `}>
                <Link
                  className={`nav-link active ${modulecss.navlink} `}
                  to="/AdminHome"
                  aria-current="page"
                >
                 
                  <h4>Home</h4>
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>

              <li className={`nav-item ${modulecss.navexpand}`}>
                <Link
                  className={`nav-link active ${modulecss.navlink}`}
                  to="/AboutUs"
                  aria-current="page"
                >
                  
                  <h4>About Us</h4>
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className={`nav-item ${modulecss.navexpand}`}>
                <Link
                  className={`nav-link active ${modulecss.navlink}`}
                  to="/Treatment"
                  aria-current="page"
                >
                
                  <h4>Treatment</h4>
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>


              
              <li className={`nav-item ${modulecss.navexpand}`}>
                <Link
                  className={`nav-link active ${modulecss.navlink}`}
                  to="/BookAppointment"
                  aria-current="page"
                >
                  {" "}
                  <h4>Book Appointment </h4>
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className={`nav-item ${modulecss.navexpand}`}>
                <Link
                  className={`nav-link active ${modulecss.navlink}`}
                  to="/ContactUs"
                  aria-current="page"
                >
                  {" "}
                  <h4>Contact Us</h4>
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>

              <li className={`nav-item ${modulecss.navexpand}`}>
                <Link
                  className={`nav-link active ${modulecss.navlink}`}
                  to="/Admin"
                  aria-current="page"
                >
                  {" "}
                  <h4>Admin </h4>
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
  );
};

export default Header;
