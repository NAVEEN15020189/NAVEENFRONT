import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import modulecss from './Style.module.css';
import banner1 from '../Images/banner1.jpg';
import banner2 from '../Images/Healthcare4.jpg';
import banner3 from '../Images/baneerr4.webp';
import banner4 from '../Images/bookAppointment.avif';
import axios from 'axios';

const AdminHome = () => {
  const [id, setId] = useState('');
  const [patientname, setPatientName] = useState('');
  const [TreatmentName, setTreatment] = useState('');
  const [BookingDate, setDate] = useState('');

  const [doctor, setDoctor] = useState([]);

  

  useEffect(() => {
    axios
      .get('https://naveenhealthcarebackend.onrender.com/doctor')
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const submitHandler = (e) => {
    axios
      .post(`https://naveenhealthcarebackend.onrender.com/Appointment`, {
        id,
        patientname,
        TreatmentName,
        BookingDate,
      })
      .then((res) => {
        setId('');
        setPatientName('');
        setTreatment('');
        setDate('');
        alert('data posted sucess fully');
      })
      .catch((error) => {
        console.log(error);
      },[]);
  };
  return (
    <div className={modulecss}>
      <Header></Header>
      <div className="m-0">
        <div className={modulecss}>
          <div className={modulecss.breadCrumb}>
            <h3 className="text-white m-0"> Welcome To Health Care Hospital</h3>
          </div>
        </div>
      </div>

      <section className="container-fluid p-0 m-0">
        <div className="carousel slide" id="mainslide" data-bs-ride="carousel">
          <ol class="carousel-indicators list-unstyled">
            <li
              data-bs-target="#mainslide"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li data-bs-target="#mainslide" data-bs-slide-to="1"></li>
            <li data-bs-target="#mainslide" data-bs-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} alt="" className={modulecss.banner}></img>
            </div>
            <div className="carousel-item">
              <img src={banner2} alt="" className={modulecss.banner}></img>
            </div>
            <div className="carousel-item">
              <img src={banner3} alt="" className={modulecss.banner}></img>
            </div>
          </div>
          <button
            className={`carousel-control-prev`}
            data-bs-target="#mainslide"
            data-bs-slide="prev"
          >
            <span
              className={`carousel-control-prev-icon ${modulecss.carouseliconprev} `}
            ></span>
          </button>
          <button
            className={`carousel-control-next `}
            data-bs-target="#mainslide"
            data-bs-slide="next"
          >
            <span
              className={`carousel-control-next-icon ${modulecss.carouselcontrolnext}`}
            ></span>
          </button>
        </div>
      </section>
      <div className="container mt-5 mb-5 ">
        <h1>
          Our <span className="text-danger">Procedures</span>
        </h1>
        <ul>
          <h6>1.Cardiology Procedures</h6>

          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>

          <h6>2.Cardiology Procedures</h6>

          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>

          <h6>3.Cardiology Procedures</h6>

          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>

          <h6>4.Cardiology Procedures</h6>

          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>

          <h6>5.Cardiology Procedures</h6>

          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>

          <h6>6.Cardiology Procedures</h6>

          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>

          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>
          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>
          <h6>Angioplasty</h6>

          <p>
            Description: A procedure used to open clogged heart arteries. It
            involves temporarily inserting and inflating a tiny balloon where
            your artery is clogged to help widen the artery. Benefits: Restores
            blood flow to the heart, reduces chest pain, and can improve the
            chances of surviving a heart attack. Duration: 1-2 hours.
          </p>
        </ul>
      </div>
      <div className="container mt-5 mb-5">
        <h1>
          Latest <span className="text-danger">News </span>
        </h1>
        <ul>
          <h6>COVID-19 Updates</h6>
          <p>
            Vaccination Information: Share the latest guidelines on COVID-19
            vaccinations, including availability, eligibility, and booking
            details. Safety Protocols: Inform about the hospital’s ongoing
            safety measures, visitor restrictions, and testing facilities.
          </p>
          <h6> New Medical Services and Departments</h6>
          <p>
            New Departments: Announce the opening of new departments, such as
            cardiology, oncology, or pediatric units. Specialized Treatments:
            Highlight any new specialized treatments or procedures that the
            hospital is now offering.
          </p>

          <h6>Medical Staff Achievements</h6>
          <p>
            Doctor Awards: Announce any recent awards or recognitions received
            by the hospital’s doctors or medical staff. Publications and
            Research: Share information about recent publications, research
            findings, or participation in medical conferences by your staff.
          </p>

          <h6>Community Outreach Programs</h6>
          <p>
            Health Camps: Announce upcoming free health camps or vaccination
            drives organized by the hospital. Awareness Programs: Promote
            awareness campaigns for health issues such as diabetes,
            hypertension, or mental health.
          </p>

          <h6>Patient Testimonials</h6>
          <p>
            Success Stories: Feature stories of patients who have recovered
            successfully from critical illnesses, especially after undergoing
            unique or complex treatments at your hospital.
          </p>

          <h6>Infrastructure Updates</h6>
          <p>
            New Facilities: Inform visitors about any new facilities, such as a
            new wing, updated emergency room, or advanced medical equipment.
          </p>

          <h6> Health Tips</h6>
          <p>
            Seasonal Health Advice: Provide tips related to seasonal health
            concerns, such as flu prevention in winter or heatstroke prevention
            in summer. General Wellness Tips: Share advice on general wellness
            topics like nutrition, exercise, and mental health.
          </p>

          <h6>Upcoming Events</h6>
          <p>
            Health Workshops: Announce upcoming workshops, webinars, or seminars
            that the hospital is hosting or participating in. Charity Events:
            Highlight any charity events or fundraisers the hospital is involved
            in.
          </p>

          <h6>COVID-19 Updates</h6>
          <p>
            Vaccination Information: Share the latest guidelines on COVID-19
            vaccinations, including availability, eligibility, and booking
            details. Safety Protocols: Inform about the hospital’s ongoing
            safety measures, visitor restrictions, and testing facilities.
          </p>
        </ul>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="mt-5 mb-5 text-center ">
            Book <span className="text-danger">Appointment</span>
          </h1>
          <div className="co-12 col-lg-6  mb-5">
            <img src={banner4} alt="" className="mb-5 w-100"></img>
          </div>

          <div className="co-12 col-lg-6 mb-5 mt-5">
            <input
              type="text"
              className="form-control mb-3 mb-3"
              placeholder="Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="PatientName"
              value={patientname}
              onChange={(e) => setPatientName(e.target.value)}
            ></input>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Treatment Name"
              value={TreatmentName}
              onChange={(e) => setTreatment(e.target.value)}
            ></input>
            <input
              type="Date"
              className="form-control mb-3"
              placeholder="Choose Date of Appointment"
              value={BookingDate}
              onChange={(e) => setDate(e.target.value)}
            ></input>

            <input
              type="button"
              value="submit"
              className=" form-control mb-3 text-bg-success"
              onClick={submitHandler}
            ></input>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="mt-5 mb-5 text-center ">
            Our <span className="text-danger">Doctors</span>
          </h1>

          <div className={`${modulecss}container table-responsive`}>
            <div className="row">
              <div className="col-lg-12">
                <table
                  className="table table-bordered display hover table-responsive"
                  id="myTable"
                >
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Doctor Names</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctor.map((stu) => {
                      return (
                        <tr key={stu.id}>
                          <td>{stu.id}</td>
                          <td>{stu.doctor}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <Footer></Footer>
    </div>
  );
};

export default AdminHome;
