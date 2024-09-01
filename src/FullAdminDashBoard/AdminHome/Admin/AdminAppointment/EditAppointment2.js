import axios from "axios";
import React, { useEffect, useState } from "react";
import modulecss from "../../Style.module.css";

const EditAppointment2 = () => {
    const [id, setId] = useState([]);
  const [treatmenttext, setTreatmentText] = useState([]);
  const [patientname,setPatientName]=useState('');
  const [TreatmentName,setTreatment]=useState('');
  const [BookingDate,setDate]=useState('');
  const [status,setStatus]=useState('');

  useEffect(() => {
    axios
      .get(`https://naveenhealthcarebackend.onrender.com/Appointment`)
      .then((res) => {  
     setTreatmentText(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editData = (id) => {
    axios
      .get(`https://naveenhealthcarebackend.onrender.com/Appointment/${id}`)
      .then((res) => {
        setId(res.data.id);
        setPatientName(res.data.patientname);
        setTreatment(res.data.TreatmentName);
        setDate(res.data.BookingDate)
        setStatus(res.data.status)
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`https://naveenhealthcarebackend.onrender.com/Appointment/${id}`, {id,patientname,TreatmentName,BookingDate,status})
      .then((res) => {
        alert("student updated  sucessfully.......");
       
        setId("");
        setPatientName("");
        setTreatment("");
        setDate("")
        setStatus("")

      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1 className='text-center'>
        Edit <span className="text-danger">Appointment</span>{" "}
      </h1>

      <div className="container my-5 ">
        <div className="row my-5">
          
          <div className="col-lg-12">
            <form
              className={`${modulecss.boxshadow} py-5 px-5 `}
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="id"
                    placeholder="Id"
                    className="form-control mb-5"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>

                <div className="col-lg-12">
                  <input
                    type="text"
                    name="id"
                    placeholder="patientname"
                    className="form-control mb-5"
                    value={patientname}
                    onChange={(e) =>  setPatientName(e.target.value)}
                  />
                </div>
                
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="id"
                    placeholder="TreatmentName"
                    className="form-control mb-5"
                    value={TreatmentName}
                    onChange={(e) => setTreatment(e.target.value)}
                  />
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    name="id"
                    placeholder="BookingDate"
                    className="form-control mb-5"
                    value={BookingDate}
                    onChange={(e) =>  setDate(e.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="Message"
                    placeholder="patientname"
                    className="form-control mb-5"
                    value={patientname}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
    <div className="col-lg-12">
                  <input
                    type="text"
                    name="id"
                    placeholder="status"
                    className="form-control mb-5"
                    value={status}
                    onChange={(e) =>  setStatus(e.target.value)}
                  />
                </div>
                  
                  <input
                    type="submit"
                    placeholder="Send Message"
                    className=" form-control btn btn-success"
                  ></input>
                </div>
                <div className={`${modulecss}container mt-5 table-responsive`}>
                  <div className="row ">
                    <div className="col-lg-12">
                      <table className="table table-bordered display hover "  id='myTable'>
                        <thead>
                          <tr>
                            <th>id</th>
                            <th>patientname</th>
                            <th>TreatmentName</th>
                            <th>BookingDate</th>
                            <th>status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {treatmenttext.map((stu) => {
                            return (
                              <tr key={stu.id}>
                                <td>{stu.id}</td>
                                <td>{stu.patientname}</td>
                                <td>{stu.TreatmentName}</td>
                                <td>{stu.BookingDate}</td>
                                <td>{stu.status}</td>
                                

                                <td className="d-flex">
                                  <button
                                    className="btn btn-warning"
                                    onClick={() => editData(stu.id)}
                                  >
                                    <i className="bi bi-pencil"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAppointment2;
