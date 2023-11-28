import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap';

import { useState } from 'react';



import Modal from 'react-bootstrap/Modal';
import { buyPlot } from '../page/services/allApi';

function Buycom() {

 const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [getPlots,SetGetPlots]=useState({})


    const buyDetails = async () =>{
      const response = await buyPlot()
      const {data}=response
      SetGetPlots(data)
}
console.log(getPlots)

useEffect(()=>{
  buyDetails()
},[])


  return (
    <div >


 
 
 
    <Row style={{marginTop:"40px",display:"flex",flexWrap:"wrap",overflowX:"hidden"}}>

{getPlots?.length>0?
getPlots?.map((item)=>(
  <Col sm={12} md={6} lg={4}xl={4}>
   
  <div  class="card" style={{display:"flex",flexWrap:"wrap",justifyContent:'space-evenly',margin:"20px"}}>
<div style={{display:"flex"}}>
    <div    class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
      <img style={{height:"100%", display:'flex',flexWrap:'wrap',width:"300px"}} onClick={handleShow} src={item.url} class="img-fluid"/>
      <a href="#!">
        <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
      </a>
    </div>
    <div class="card-body">
      <p id='id1' class="card-title">  <i class="fa-solid fa-building me-2"></i> BUY</p>
      <p class="card-text">
      <p>Specifications</p>
      
              <p>{item.spe1}</p>
              <p>{item.spe2}</p>
              <p>{item.spe3}</p>
             
          
           <p><i class="fa-solid fa-location-dot" style={{color: "#0a0a0a"}}></i>{item.location}</p>
       
           
      </p>
     
  

      

      <Button  className='mt-2 form-control' variant="outline-danger">{item.discound} Discound</Button>{' '}


      
    </div>
</div>
</div>
</Col>
)):<h2  id='id1' style={{overflowY:"hidden",textAlign:"center"}}>Your Interested page is Empty</h2>
}
   
   
   </Row> 
   
   
   {/* modal */}
   {getPlots?.length>0?
getPlots?.map((item)=>(
   <Modal 
           show={show}
           onHide={handleClose}
           backdrop="static"
           keyboard={false}
           size='lg'
         >
           <Modal.Header closeButton>
             <Modal.Title>  <i class="fa-solid fa-building me-2"></i><span id='id1' style={{color:'navy'}}>Buy</span></Modal.Title>
           </Modal.Header>
           <Modal.Body>
          <Row style={{display:'flex',flexWrap:'wrap'}}>
           <Col md={6}>
           <iframe width="100%" height="523" src={`${item.video}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           
           </Col>
           <Col md={6}>
             <h4 id='id1'>Description</h4>
             <p>{item.dis}</p>
   
           <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                 <p><b>Contact:</b>  <span>  {item.contact}</span></p>
                 <p><i class="fa-solid fa-location-dot" style={{color: "#0a0a0a"}}></i>{item.location}</p>
           </div>
           <img style={{display:"flex",flexWrap:"wrap"}} width={"100%"} height={"250px"} src={item.url}/>
            
           </Col>
          </Row>
          
           </Modal.Body>
           <Modal.Footer>
           
           </Modal.Footer>
         </Modal>)):<p></p>
}
   
       </div>
  )
}

export default Buycom