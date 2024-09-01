import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import modulecss from "../../Style.module.css";

const DeleteAppointment = () => {
   
    
    const [Appointment,setAppointment]=useState([]);
    
  useEffect(() => {
    axios
      .get("https://naveenhealthcarebackend.onrender.com/Appointment")
      .then((res) => {
     
        setAppointment(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  let deleteData=(id)=>{
  axios.delete(`https://naveenhealthcarebackend.onrender.com/Appointment/${id}`)
  .then(()=>{
  alert("deleted record sucessfully....")
  })
  .catch((err)=>{
  console.log(err)
  })
  }
  return (
    <>
    <h1 className='text-center'> Delete <span className='text-danger'>Appointment</span></h1>




    <div className={`${modulecss}container table-responsive`} >
<div className="row">
<div className="col-lg-12">
  <table className='table table-bordered display hover overflow-scroll' id='myTable'  >
 
      <thead>
        <tr >
          <th>id</th>
          <th>patientname</th>
        <th> treatment</th>
        <th>BookingDate</th>
        <th>status</th>
        <th></th>
        </tr>
      </thead>
      <tbody>
        {Appointment.map((stu) => {
          return (
          
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.patientname}</td>
                <td>{stu.TreatmentName}</td>
                <td>{stu.BookingDate}</td>
                <td>{stu.status}</td>
                

                <td className="d-flex">
                  <button
                    className="btn btn-danger bi bi-trash"
                    onClick={() => {
                      deleteData(stu?.id);
                    }}
                  ></button>
                  &nbsp;
                  <NavLink to={`/EditAppointment/${stu.id}`}>
                    <button className="btn btn-warning">
                      <i className="bi bi-pencil"></i>
                    </button>
                  </NavLink>
                </td>
              </tr>
            
          );
        })}
      </tbody>
  
  </table>
</div>
</div>
</div>

</>
  )
}


export default DeleteAppointment