import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import Projectcard from '../components/Projectcard'
import { Col, Row } from 'react-bootstrap'




function Sell({}) {
  const [uploadPlotStatus,setUploadPlotStatus1]= useState({})




  return (
    <div style={{overflowX:"hidden"}}>
       <Row className='d-flex justify-content-between'>
    <Col className='mt-5' md={10} sm={12}>
    <div className='ms-5 me-5'>
                      <h1 className='fw-bold'><span style={{color:'blue'}}>SELL</span> your dream Property with us.</h1>
                      <i className='fs-4' >Add or Book your perfect property is just a click away.</i>
                    
                  </div>
    </Col>
    <Col md={2} sm={12}>
                  <img className='rounded-circle p-3  ' width={'200px'} height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cc44ed72969113.5bfae0c6087d8.gif" alt="" />
              </Col>
  </Row>
       <div style={{marginTop:"20px",marginLeft:"5%"}}>
        <Add setUploadPlotStatus1={setUploadPlotStatus1}/> 
      </div>
      <div className='p-3'  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evently",width:"100%" }}>
  <div className='ms-5 mt-3 me-5 '>
    <Projectcard uploadPlotStatus={uploadPlotStatus} />
    </div>
   
        </div>
     
    </div>
  )
}

export default Sell