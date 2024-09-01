import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
// import modulecss from '../Style.module.css'
import { useNavigate } from 'react-router-dom';

import modulecss from '../Style.module.css';

const AdminHomeMain = () => {
  const [uname, setUname] = useState('');
  const [pswd, setPswd] = useState('');
  const navigate = useNavigate('');
  let submitHandler = (e) => {
    e.preventDefault();
    if (uname === 'Admin' && pswd === '12345') {
      // alert("valid user")
      // window.location('/Admindashboard')
      navigate('/AdminDashboard');
    } else {
      alert(' invalid user');
      setUname('');
      setPswd('');
    }
  };
  return (
    <div>
      <Header></Header>
      <div>
        <div className={modulecss}>
          <div className={modulecss.breadCrumb}>
            <h3 className="text-white">Login To Admin DashBoard</h3>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5 p-5">
        <div className="row mb-5">
          <div className=" col-md-0 col-lg-3 "></div>
          <div className="col-12 col-lg-6 ">
            <form
              className={`${modulecss.boxshadowadmin} `}
              onSubmit={submitHandler}
            >
            
            
                <input
                  type="text"
                  name="uname"
                  placeholder="UserName"
                  className="form-control mb-3"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                ></input>
             

             
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control mb-3"
                  value={pswd}
                  onChange={(e) => setPswd(e.target.value)}
                ></input>
          
          
                <input
                  type="submit"
                  placeholder="Login"
                  className=" form-control btn btn-success"
                ></input>
          
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AdminHomeMain;
