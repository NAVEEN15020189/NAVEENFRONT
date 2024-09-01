import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import modulecss from "../../Style.module.css";
const EditAppointment = () => {
  const{sno}=useParams()
  const [id,setId]=useState('');
  const [patientname,setPatientName]=useState('');
  const [TreatmentName,setTreatment]=useState('');
  const [BookingDate,setDate]=useState('');
  const [status,setStatus]=useState('');
    const navigate= useNavigate();

    useEffect(() => {
      axios
        .get(`https://naveenhealthcarebackend.onrender.com/Appointment/${sno}`)
        .then((res) => {
          setId(res.data.id);
          setPatientName(res.data.patientname);
          setTreatment(res.data.TreatmentName)
          setDate(res.data.BookingDate)
          setStatus(res.data.status)
        })
        .catch((err) => {
          console.log(err);
        });
    },[sno]);



    
    let submitHandler=(e)=>{
     
     e.preventDefault();

     axios.put(`https://naveenhealthcarebackend.onrender.com/Appointment/${sno}`,{id,patientname,TreatmentName,BookingDate,status})
     .then((res)=>{
    alert('student updated  sucessfully.......')
   
   navigate('/AdminDashboard')
     })
     .catch((e)=>{
    console.log(e);
     })
     
    }  




  return (
    <>
    <h1 className='text-center'>Edit <span className='text-danger' >Appointment</span> </h1>
    
 <div className="container my-5 ">

<div className="row my-5">
<div className="col-lg-3"></div>
    <div className="col-lg-6">
    <form className={`${modulecss.boxshadow} py-5 px-5 `}  onSubmit={submitHandler} >
    <div className="row">
    <div className="col-lg-12">
      <input type='text' name="id"  placeholder="Id" className="form-control mb-5" value={id} onChange={(e)=>setId(e.target.value)}/>
     
    </div>
    <div className="col-md-12">
      <textarea name="Message"  placeholder="patientname" className="form-control mb-5" value={patientname} onChange={(e)=>setPatientName(e.target.value)}/>
   
    </div>
    </div>
    <div className="col-md-12">
      <textarea name="Message"  placeholder="treatment" className="form-control mb-5" value={TreatmentName} onChange={(e)=>setTreatment(e.target.value)}/>
  
    </div>
    <div className="col-md-12">
      <input  type="text" name="Message"  placeholder="BookingDate" className="form-control mb-5" value={BookingDate} onChange={(e)=>setDate(e.target.value)}/>
  
    </div>
    <div className="col-md-12">
      <textarea name="Message"  placeholder="status" className="form-control mb-5" value={status} onChange={(e)=>setStatus(e.target.value)}/>
  
    </div>
    <input type="submit" placeholder="Send Message" className=" form-control btn btn-success" ></input>
    </form>
  </div>
</div>
</div>
 

    
    </>
 
  )
}

export default EditAppointment