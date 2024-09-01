
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import modulecss from "../../Style.module.css";
const DeleteTreatment = () => {
  const [treatment, setTreatment] = useState([]);
  useEffect(() => {
    axios
      .get("https://naveenhealthcarebackend.onrender.com/treatment")
      .then((res) => {
        setTreatment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let deleteData=(id)=>{
  axios.delete(`https://naveenhealthcarebackend.onrender.com/treatment/${id}`)
  .then(()=>{
  alert("deleted record sucessfully....")
  })
  .catch((err)=>{
  console.log(err)
  })
  }
  return (
    <>
    <h1 className='text-center'> Delete <span className='text-danger'>Treatment</span></h1>




    <div className={`${modulecss}container table-responsive`} >
<div className="row">
<div className="col-lg-12">
  <table className='table table-bordered display hover'id="myTable" >
 
      <thead>
        <tr >
          <th>id</th>
          <th>lnews</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {treatment.map((stu) => {
          return (
          
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.TreatmentName}</td>

                <td className="d-flex">
                  <button
                    className="btn btn-danger bi bi-trash"
                    onClick={() => {
                      deleteData(stu.id);
                    }}
                  ></button>
                  &nbsp;
                  <NavLink to={`/EditTreatment/${stu.id}`}>
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

export default DeleteTreatment






