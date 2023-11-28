import React from 'react'
import Buycom from '../components/Buycom'
import '../App.css';
import { Col, Row } from 'react-bootstrap';

function Buy() {
  
  return (
    <div style={{overflowX:"hidden"}}>
<div>
  <Row className='d-flex justify-content-between'>
    <Col className='mt-5' md={10} sm={12}>
    <div className='ms-5 me-5'>
                      <h1 className='fw-bold'><span style={{color:'blue'}}>BUY</span> your dream Property with us.</h1>
                      <i className='fs-4' >Add or Book your perfect property is just a click away.</i>
                    
                  </div>
    </Col>
    <Col md={2} sm={12}>
                  <img className='rounded-circle p-3  ' width={'200px'} height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cc44ed72969113.5bfae0c6087d8.gif" alt="" />
              </Col>
  </Row>

</div>

      <div>< Buycom/></div>
            
    </div>
  )
}

export default Buy