import React from 'react'
import modulecss from './Style.module.css'
const Footer = () => {
  return (
    
         <div>
       <footer className=' '>
      <div className={modulecss} >
      <div className='container'>
        <div className='row '>
            < div className='col-xs-12 col-sm-12 col-md-6 '>
            <p  className={ modulecss.textpara}><i class="bi bi-c-circle"></i> copy  2024 Elearn Infotech</p>
            
            </div>
            < div className='col-md-6 '>
            <p className={`  ${ modulecss.textpara}`}>designed by: Jada Naveen Kumar</p>
            </div>
        </div>
        </div>
      </div>
    </footer>

    </div>
   
  )
}

export default Footer