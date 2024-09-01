import React, { useState } from 'react'
import modulecss from  './Style.module.css'
import Header from './Header'
import banner4 from '../Images/bookAppointment.avif'
import Footer from './Footer'
import axios from 'axios'
const BookAppointment = () => {
  const [id,setId]=useState('');
  const [patientname,setPatientName]=useState('');
  const [TreatmentName,setTreatment]=useState('');
  const [BookingDate,setDate]=useState('');
  







  const submitHandler=(e)=>{
  

    axios.post(`https://naveenhealthcarebackend.onrender.com/Appointment`,{id,patientname,TreatmentName,BookingDate})
    .then((res)=>{
      setId("")
      setPatientName("")
      setTreatment("")
      setDate("")
      alert("data posted sucess fully")
    })
    .catch((error)=>{
      console.log(error)
    })

  }



  return (
    <div>
       <Header></Header>

<div>
   <div className={modulecss}>
     <div className={modulecss.breadCrumb}>
       <h3 className='text-white'> BookAppointment</h3>
     </div>
   </div>
  </div>

  <div className='container'>
        <div className='row'>
         <h1 className='mt-5 mb-5 '>Book  <span className='text-danger'>Appointment</span></h1>
         <div className='co-12 col-lg-6  mb-5'>
        <img src={banner4} alt=''className='mb-5 w-100'></img>
         </div>
      


         <div className='co-12 col-lg-6 mb-5 mt-5'>
          <input type='text' className='form-control mb-3 mb-3'  placeholder='Id'value={id} onChange={(e)=>setId(e.target.value)} ></input>
          <input type='text' className='form-control mb-3' placeholder='PatientName'value={patientname}  onChange={(e)=> setPatientName(e.target.value)}></input>
          <input type='text' className='form-control mb-3' placeholder='Treatment Name' value={TreatmentName} onChange={(e)=>setTreatment(e.target.value)} ></input>
          <input type='Date' className='form-control mb-3' placeholder='Choose Date of Appointment' value={BookingDate} onChange={(e)=>setDate(e.target.value)}></input>

         <input type='button' value="submit" className=' form-control mb-3 text-bg-success' onClick={submitHandler}></input>
         </div>
         </div>
      </div>
<Footer></Footer>
      </div>
  )
}

export default BookAppointment