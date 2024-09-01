import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import modulecss from "../../Style.module.css";

const DeleteOffer = () => {
  const [offer, setOffer] = useState([]);
  useEffect(() => {
    axios
      .get("https://naveenhealthcarebackend.onrender.com/offer")
      .then((res) => {
        setOffer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  let deleteData=(id)=>{
  axios.delete(`https://naveenhealthcarebackend.onrender.com/offer/${id}`)
  .then(()=>{
  alert("deleted record sucessfully....")
  })
  .catch((err)=>{
  console.log(err)
  })
  }
  return (
    <>
    <h1 className='text-center'> Delete <span className='text-danger'>Offer</span></h1>




    <div className={`${modulecss}container`} >
<div className="row table-responsive">
<div className="col-lg-12">
  <table className='table table-bordered display hover ' id="myTable" >
 
      <thead>
        <tr >
          <th>id</th>
          <th>Doctor Names</th>
          <th></th>
        
        </tr>
      </thead>
      <tbody>
        {offer.map((stu) => {
          return (
          
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.offer}</td>

                <td className="d-flex">
                  <button
                    className="btn btn-danger bi bi-trash"
                    onClick={() => {
                      deleteData(stu.id);
                    }}
                  ></button>
                  &nbsp;
                  <NavLink to={`/EditOffer/${stu.id}`}>
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
export default DeleteOffer