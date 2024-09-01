import axios from 'axios';
import React, { useState } from 'react'
import modulecss from "../../Style.module.css";
const AddOffer = () => {
 
    const [id,setId]=useState('');
    const [offer,setOffer]=useState('');
    
    let submitHandler=(e)=>{
    e.preventDefault();
  
    axios.post("https://naveenhealthcarebackend.onrender.com/offer",{id,offer})
    .then((res)=>{
        alert("data posted sucessfully")
        setOffer("")
    })
    .catch((err)=>{
     console.log(err);
    })
  }
    return (
      <>
      <h1 className='text-center'>Add <span className='text-danger'>Offer</span></h1>
      <div className="container my-5 ">
  
  <div className="row">
      <div className="col-lg-12">
      <form className={`${modulecss.boxshadow} py-5 px-5 `} onSubmit={submitHandler}>
      <div className="row">
      <div className="col-lg-12">
        <input type='text' name="id"  placeholder="Id" className="form-control mb-5" value={id} onChange={(e)=>setId(e.target.value)}/>
       
      </div>
      <div className="col-md-12 ">
        <textarea name="Message"  placeholder="Add Offer" className="form-control mb-5 " value={offer} onChange={(e)=>setOffer(e.target.value)}/>
        <input type="submit" placeholder="Send " className=" form-control btn btn-success" ></input>
      
      </div>
      </div>
        
      </form>
    </div>
  </div>
  </div>
      </>
  )
}

export default AddOffer