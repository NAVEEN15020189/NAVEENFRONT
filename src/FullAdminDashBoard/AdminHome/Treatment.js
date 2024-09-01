import React, { useEffect, useState } from 'react';

import modulecss from './Style.module.css';
import Header from './Header';
import Footer from './Footer';
import general from '../Images/general.jpg';
import cardiology  from "../Images/cardiology.jpg";
import xray  from "../Images/x-ray.jpg"
import can  from "../Images/can.webp"
import baby  from "../Images/baby.avif"
import pre  from "../Images/pre.jpg"
import brai  from "../Images/brai.jpg"

import mental  from "../Images/mental.jpg"
import p  from "../Images/p.jpg"
import skin  from "../Images/skin.jpg"
import co19  from "../Images/co19.avif"
import  doc  from "../Images/do.avif"
import axios from 'axios';

const Treatment = () => {


  
  const [treatment1, setTreatment1] = useState([]);
  useEffect(() => {
    axios
      .get('https://naveenhealthcarebackend.onrender.com/treatment')
      .then((res) => {
        setTreatment1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });


  return (
    <div>
      {' '}
      <Header></Header>
      <div>
        <div className={modulecss}>
          <div className={modulecss.breadCrumb}>
            <h3 className="text-white"> Treatment</h3>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h3 className='text-center'>
        
          Our <span className="text-danger">Treatments</span>
        </h3>
      </div>
      <div className='container mb-5'>
      <div className="row">


        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={general} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> General Surgery</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>




        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={cardiology} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Cardiology</h4>
              <p class="card-text">
              Provide information on heart-related treatments, such as angioplasty, 
              heart bypass surgery, and heart disease management. Include details about diagnostic services like ECGs and stress tests.
              </p>
            </div>
          </div>
        </div>












        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={xray} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Orthopedics</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>





        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={can} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Cancer Treatment</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>






        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={baby} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Baby Care</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>






        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={pre} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Pregnaent Surgery</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>








        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={brai} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Nuero Surgery</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>




        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={mental} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Mental Wellness</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>




        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={p} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Phsical Fitness </h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>









        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={skin} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Skin Care</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>









        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={doc} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Doctor Care</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>








        <div className="col-12 col-md-6 col-lg-3">
          <div class={` card my-5 ${modulecss.treatmentcard}`}>
            <img class="card-img-top h-50" src={co19} alt="Title" />
            <div class="card-body">
              <h4 class="card-title"> Covid 19 care</h4>
              <p class="card-text">
                Highlight the types of surgeries performed, including minimally
                invasive procedures, laparoscopic surgeries, and emergency
                surgeries. Mention the expertise of your surgical team and the
                state-of-the-art technology used.
              </p>
            </div>
          </div>
        </div>




        
      </div>
      </div>
      <div>
         <div className="container">
        <div className="row">
          <h1 className="mt-5 mb-5 text-center ">
            Our <span className="text-danger">Treatments</span>
          </h1>
          </div>
          </div>

          <div className={`${modulecss} container table-responsive`}>
            <div className="row">
              <div className="col-lg-12">
                <table
                  className="table table-bordered display hover"
                  id="myTable"
                >
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>TreatmentName</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatment1.map((stu, index) => {
                      return (
                        <tr key={stu.index}>
                          <td>{stu.id}</td>
                          <td>{stu.TreatmentName}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
    
    </div>



      <Footer></Footer>
    </div>
  );
};

export default Treatment;











