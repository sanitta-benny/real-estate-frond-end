import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
/* import Buycard from '../components/Buycard' */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { getAllRentals, uploadRentalProps } from './services/allApi';
import Buycard from '../components/Buycard';
function Rent() {

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [rent, setRent] = useState({
    id:"",
    category:"",
    url:"",
    bedrooms:"",
    buildingArea:"",
    plotArea:"",
    location:"",
    discount:"",
    amount:""
})


const handleUpload = async()=>{
  const {id,category,url,bedrooms,buildingArea,plotArea,location,discount,amount} = rent
  if(!id || !category || !url || !bedrooms || !buildingArea|| !plotArea || !location || !discount || !amount){
    toast.warning("Please fill the form completely")
  }
  else{
    const response =  await uploadRentalProps(rent)
    console.log(response);
    if(response.status>=200 && response.status<300){
      toast.success(`${response.data.category} is successfully Uploaded`)
      //to close the modale
      handleClose()
    }
    else{
      console.log(response);
      toast.error("Something went wrong try agtain later")
    }
  }
}

    //*GET THAT DETAILS FROM SERVER

    const [allRent , setAllRent] = useState([]) 


    const getAllUploadedRentals = async()=>{
      const response = await getAllRentals()
      // console.log(response);
      const {data} = response
     /*  setUploadRentDetails(data) */
      
      
      // console.log(data);
      setAllRent(data)  //all rent state il dataye store  
    }
   

    useEffect(()=>{
      getAllUploadedRentals()
   
    },)

  return (
    <div div style={{overflowX:"hidden"}}>
     <div style={{width:'100%',height:'100vh',justifyContent:"space-evenly",flexDirection:"column",overflowX:"hidden"}} className='buy '>
          <Row style={{flexWrap:"wrap",overflowX:"hidden"}}  className=' d-flex justify-content-between'>
              <Col className='mt-5' md={4} sm={12} >
                  <div className='ms-5 me-5'>
                      <h1 className='fw-bold'><span style={{color:'blue'}}>Rent</span> your dream Property with us.</h1>
                      <i className='fs-4' >Add or Book your perfect property is just a click away.</i>
                      <div style={{width:"350px"}} className='bg-warning  mt-2 rounded d-flex justify-content-between align-items-center p-2'>
                          <h6>Click here to Add your Property </h6>
                          <button onClick={handleShow} style={{background:'white'}} className='btn  '><i class="fa-solid fa-upload fa-xl "></i></button>
                      </div>
                  </div>
              </Col>
  
              <Col md={2} sm={12}>
                  <img className='rounded-circle p-3  ' width={'200px'} height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cc44ed72969113.5bfae0c6087d8.gif" alt="" />
              </Col>
  
          </Row>
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{color:'blue'}}>
            <i class="fa-solid fa-building text-black me-2"></i> Add your rental Propery
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please fill the Property details</p>
            <form className="border border-secondary rounded p-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                 
                  type="text"
                  placeholder="Enter property ID" onChange={(e)=>setRent({...rent,id:e.target.value})}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  
                    
                  type="text"
                  placeholder="Enter Property Category"  onChange={(e)=>setRent({...rent,category:e.target.value})}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                 
                  placeholder="Enter property Image Url"  onChange={(e)=>setRent({...rent,url:e.target.value})}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                 
                  type="text"
                  placeholder="No Of Bed Rooms" onChange={(e)=>setRent({...rent,bedrooms:e.target.value})}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                 
                  placeholder="Enter Building area in sq.ft" onChange={(e)=>setRent({...rent,buildingArea:e.target.value})}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                 
                  placeholder="Enter Total Plot area"  onChange={(e)=>setRent({...rent,plotArea:e.target.value})}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                 
                  placeholder=" Enter property Location" onChange={(e)=>setRent({...rent,location:e.target.value})}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                 
                  placeholder="Maximum negotiable amount in %" onChange={(e)=>setRent({...rent,discount:e.target.value})}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
              
                  placeholder="Enter Rent per Month" onChange={(e)=>setRent({...rent,amount:e.target.value})}
                />
              </Form.Group>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button  onClick={handleUpload} style={{background:'green' }}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
  
         <Row>
           { allRent.length>0?
           allRent?.map((rentals)=>(
           < Col sm={12} md={6} lg={4} xl={3}>
                <Buycard  displayRentals ={rentals} />
              </Col> ))
               :
               <h2  id='id1' style={{overflowY:"hidden",textAlign:"center"}}>Your Interested page is Empty</h2>
              }
          </Row> 
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Rent