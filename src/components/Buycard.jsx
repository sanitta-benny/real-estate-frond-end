import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { addToCart, addToInterest, deleteRentals } from '../page/services/allApi';

function Buycard({displayRentals , setDeleteRentStatus}) {
  
  
  const [isClicked, setIsClicked] = useState(false);

  const handleHeartClick = async() => {
    setIsClicked(!isClicked);

   const {category,url,bedrooms,buildingArea,plotArea,location,discount,amount} = displayRentals

   let rentalDetails = {
    category,
    url,
    bedrooms,
    buildingArea,
    plotArea,
    location,
    discount,
    amount
   }
   await addToInterest(rentalDetails)
   toast.success("Succeessfully added to Interests")

  }

  const handleCart = async()=>{
 const {category,url,discount,amount} = displayRentals

 let cartDetails ={
  category,
  url,
  discount,
  amount
 }
 await addToCart(cartDetails)
 
  }
  
  
  
        

  const removeRentals = async(id)=>{
    const response = await deleteRentals(id)
    console.log(response);
  /*   setDeleteRentStatus(true) */
    toast.error("Successfully Deleted ")
  }

 
  
  return (
    <div className='mt-5 ms-5 '>
         <Card className='shadow' style={{ width: '17rem' ,height:'auto',borderTopLeftRadius:'35px'}}>
     <div style={{position:'relative'}}> 
      <Card.Img width={'200px'} height={'180px'} variant="top" src={displayRentals.url} style={{borderTopLeftRadius:'35px', borderBottomRightRadius:'35px'}} />
      <div style={{position:'absolute' ,marginTop:'-155px' ,background:'blue',width:'110px',height:'25px', fontSize:"14px" }}  className='   text-white ms-2 rounded  '>
        <p className='ms-2'>Discount <span className='fw-bold fs-6'><i>{displayRentals.discount}%</i></span></p>

      </div>
      <div style={{position:'absolute' ,marginTop:'-60px' , fontSize:"14px",marginLeft:'210px'}} >
      <button style={{border:'none', background:'none',cursor:'pointer'}}  onClick={handleHeartClick} className=' btn'><span style={{ color: isClicked ? '#ff0000': "white"}}><i class="fa-solid fa-heart fa-2x  "></i></span></button>

      </div>
      </div>
      <Card.Body>
        <Card.Title style={{fontSize:"13px"}}>
          <i class="fa-solid fa-building me-2"></i>{displayRentals.category}
          </Card.Title>
        
        <Card.Text>
        <div>
            <p style={{fontSize:'14px'}}><span className='fw-bold fs-5'>₹ {displayRentals.amount} </span>Per Month</p>
          </div>

          <div style={{marginTop:'-10px'}} className='d-flex justify-content-between'>
                <div>
                <p style={{fontSize:'12px'}}><span className='fw-bold'>{displayRentals.bedrooms}</span> Bedroom</p>
                </div>

                <div>
                <p style={{fontSize:'12px'}}><span className='fw-bold'>{displayRentals.buildingArea}</span> sq.ft</p>
                </div>

                <div>
                <p style={{fontSize:'12px'}}><span className='fw-bold'>{displayRentals.plotArea}</span> sqft.plot</p>
                </div>

          </div>
          <div>
            <p className='fw-bold' style={{fontSize:'13px'}}><i class="fa-solid fa-location-dot me-2"></i>{displayRentals.location}</p>
          </div>
          <Row  style={{marginTop:'-10px'}}>
            <Col md={8}>
               <Link to={'/cart'}> <button onClick={handleCart} style={{background:'blue'}} className='btn text-light rounded w-100  mt-2 '>Book Now</button></Link>
            </Col>

            <Col md={4}>
            <button onClick={()=>removeRentals(displayRentals?.id)} style={{backgroundColor:"blue"}} className='btn  rounded w-100  mt-2'><i class="fa-solid fa-trash fa-lg text-warning" style={{backgroundColor:'blue'}}></i></button>
            </Col>
          </Row>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Buycard