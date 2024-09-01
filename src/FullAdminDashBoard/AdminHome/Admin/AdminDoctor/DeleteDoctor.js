import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import modulecss from "../../Style.module.css";

const DeleteDoctor = () => {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    axios
      .get("https://naveenhealthcarebackend.onrender.com/doctor")
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let deleteData=(id)=>{
  axios.delete(`https://naveenhealthcarebackend.onrender.com/doctor/${id}`)
  .then(()=>{
  alert("deleted record sucessfully....")
  })
  .catch((err)=>{
  console.log(err)
  })
  }
  return (
    <>
    <h1 className='text-center'> Delete <span className='text-danger'>Doctor</span></h1>




    <div className={`${modulecss}container table-responsive`} >
<div className="row">
<div className="col-lg-12">
  <table className='table table-bordered display hover table-responsive' id="myTable" >
 
      <thead>
        <tr >
          <th>id</th>
          <th>Doctor Names</th>
          <th></th>
        
        </tr>
      </thead>
      <tbody>
        {doctor.map((stu) => {
          return (
          
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.doctor}</td>

                <td className="d-flex">
                  <button
                    className="btn btn-danger bi bi-trash"
                    onClick={() => {
                      deleteData(stu.id);
                    }}
                  ></button>
                  &nbsp;
                  <NavLink to={`/EditDoctor/${stu.id}`}>
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


export default DeleteDoctor