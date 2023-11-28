import React, { useEffect } from 'react'
import { Col, Row, ToastContainer } from 'react-bootstrap';

import { useState } from 'react';



import Modal from 'react-bootstrap/Modal';
import { deletePlot, getPlot } from '../page/services/allApi';
import { toast } from 'react-toastify';

function Projectcard({uploadPlotStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //state to get plot detais
    const [allPlot,setAllPlot]= useState([])

    const plotDetails = async () =>{
      const response = await getPlot()
      const {data}=response
      setAllPlot(data)
}
console.log(allPlot)

const delPlot = async (id)=>{
  const response = await  deletePlot(id)
  console.log(response)
  plotDetails() //refresh cart after deleting an item
  toast.error(' one item deleted successfully')

}



useEffect(()=>{
  plotDetails()
  
},[uploadPlotStatus])
  return (
    <div >


 
 
 
 <Row style={{marginTop:"30px",display:"flex",flexWrap:"wrap",overflowX:"hidden"}}>
  {
    allPlot?.length>0?
    allPlot?.map((item)=>(
      <Col style={{overflowX:"hidden"}} sm={12} md={6} lg={4}xl={3}>

      <div  class="card" style={{width:"100%",height:"550px"  ,display:"flex",flexWrap:"wrap",justifyContent:'space-evenly'}}>
    <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
      <img style={{display:'flex',flexWrap:'wrap',width:"1000px",height:"200px"}} onClick={handleShow} src={item.url} class="img-fluid"/>
      <a href="#!">
        <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
      </a>
    </div>
    <div class="card-body">
      <p id='id1' class="card-title">    <i class="fa-solid fa-building me-2"></i> {item.purpose}</p>
      <p class="card-text">
  <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-evenly"}}>    <p>Specifications</p> <p style={{backgroundColor:"yellowgreen",padding:"5px",borderRadius:"0px"}}>{item.discound} discound</p></div>
           <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
              <p>{item.spe1}</p>
              <p>{item.spe2}</p>
              <p>{item.spe3}</p>
             
           </div>
           <p><i class="fa-solid fa-location-dot" style={{color: "#0a0a0a"}}></i>{item.location}</p>
           <p><b>Rate:</b><span>{item.amount}</span></p>
       
           
      </p>
      <button onClick={()=>delPlot(item?.id)}  style={{justifyContent:"space-between"}} className='btn btn-dark'data-mdb-ripple-init ><i class="fa-solid fa-trash fa-lg" style={{color: "#fbfcfe"}}></i></button>

    <div>  <button style={{border:"0px",backgroundColor:"transparent",color:"blue",textAlign:"center"}} onClick={handleShow}>View more</button></div>
      
    </div>
  </div>
  </Col>
    )): <h2  id='id1' style={{overflowY:"hidden",textAlign:"center"}}>Your Interested page is Empty</h2>
  }

 
</Row> 


{/* modal */}

{allPlot?.length>0?
allPlot?.map((item)=>(
<Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>  <i class="fa-solid fa-building me-2"></i><span color='navy' id='id1'> {item.purpose}</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Row style={{display:'flex',flexWrap:'wrap'}}>
        <Col md={6}>

        <iframe width="100%" height="523" src={`${item.video}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        </Col>
        <Col md={6}>
          <h3 id='id1'>Description</h3>
          <p> {item.dis}</p>

        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
              <p><b>Contact:</b>  <span>  {item.contact}</span></p>
              <p><i class="fa-solid fa-location-dot" style={{color: "#0a0a0a"}}></i>{item.location}</p>

              
          <img style={{display:"flex",flexWrap:"wrap"}} width={"100%"} height={"250px"} src={item.url}/> 
        </div>
         
        </Col>
       </Row>
      
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
)):<p></p>
}
 <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </div>
  )
}

export default Projectcard