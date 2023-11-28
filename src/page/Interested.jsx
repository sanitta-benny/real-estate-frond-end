import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { deleteInterest, getInterested } from './services/allApi';
import { Link } from 'react-router-dom';

function Interested({uploadRentDetails}) {
    const [interest , setInterest] = useState([])
  // gett interested data
  const getInterestedList = async()=>{
    const {data } = await getInterested()
    // console.log(data);
    setInterest(data)
  }
  // console.log(interest);

  
 

  const handleDelete = async(id)=>{
   
    await deleteInterest(id)
    getInterestedList()
    toast.error("Deleted Successfully")

  }

  


  useEffect(()=>{
    getInterestedList()
    
  },[uploadRentDetails])
 
  return (
    <div style={{overflowX:"hidden"}}>

    <div style={{width:'100%',height:'100%'}} className='container interested'>
     <div style={{display:"flex", justifyContent:"space-between"}}>
    <div>
          <h2 className='mt-5 fw-bold'>Here is your <span style={{color:'#ff0000'}}>Interested</span> Property lists.</h2>
          <div><span  style={{color:'blue',fontSize:'23px'}}>Choose your dream property with us.</span></div>
    </div>
        <div>
                    <img className='rounded-circle p-3  ' width={'200px'} height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cc44ed72969113.5bfae0c6087d8.gif" alt="" />
                </div>
     </div>

      <Row  className='mt-5 '>
      {interest.length>0?
      interest.map((item)=>(
        <Col className='mt-5
        ' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow' style={{ width: '17rem' ,height:'24rem',borderTopLeftRadius:'35px'}}>
          <div style={{position:'relative'}}> 
           <Card.Img width={'200px'} height={'180px'} variant="top" src={item.url} style={{borderTopLeftRadius:'35px', borderBottomRightRadius:'35px'}} />
           <div style={{position:'absolute' ,marginTop:'-155px' ,background:'blue',width:'110px',height:'25px', fontSize:"14px" }}  className='   text-white ms-2 rounded  '>
             <p className='ms-2'>Discount <span className='fw-bold fs-6'><i>{item.discount}%</i></span></p>
     
           </div>
           <div style={{position:'absolute' ,marginTop:'-60px' , fontSize:"14px",marginLeft:'210px'}} >
           <button style={{border:'none', background:'none',cursor:'pointer'}}  onClick={()=>handleDelete(item?.id)} className=' btn'><span ><i class="fa-solid fa-heart fa-2x  " style={{color:'#ff0000'}}></i></span></button>
     
           </div>
           </div>
           
             <Card.Body>
             <Card.Title style={{fontSize:"13px"}}>
               <i class="fa-solid fa-building me-2"></i>{item.category}
               </Card.Title>
             
             <Card.Text>
             <div>
                 <p style={{fontSize:'14px'}}><span className='fw-bold fs-5'>₹{item.amount}  </span>Per Year</p>
               </div>
     
               <div style={{marginTop:'-10px'}} className='d-flex justify-content-between'>
                     <div>
                     <p style={{fontSize:'12px'}}><span className='fw-bold'>{item.bedrooms}</span> Bedroom</p>
                     </div>
     
                     <div>
                     <p style={{fontSize:'12px'}}><span className='fw-bold'>{item.buildingArea}</span> sq.ft</p>
                     </div>
     
                     <div>
                     <p style={{fontSize:'12px'}}><span className='fw-bold'>{item.plotArea}</span> sqft.plot</p>
                     </div>
     
               </div>
               <div>
                 <p className='fw-bold' style={{fontSize:'13px'}}><i class="fa-solid fa-location-dot me-2"></i>{item.location}</p>
               </div>
               <Row  style={{marginTop:'-10px'}}>
                 <Col md={12}>
                  <Link to={"/rent"}>   <button style={{background:'blue'}} className='btn text-light rounded w-100  mt-2 '>Book Now</button></Link>
                 </Col>
     
               </Row>
             </Card.Text>
             
           </Card.Body>
         </Card>
        </Col>
      ))
       :
     

<h2  id='id1' style={{overflowY:"hidden",textAlign:"center"}}>Your Interested page is Empty</h2>
       
    }

    
      </Row>
      
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </div>
  )
}

export default Interested