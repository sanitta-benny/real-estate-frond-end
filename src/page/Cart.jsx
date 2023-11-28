import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { deleteCart, getCart } from './services/allApi'
import { Link, useNavigate } from 'react-router-dom'


function Cart() {
  const navigate = useNavigate() 
     //getcartdata
  const [cartdata , setCartData]=useState([])
  const getCartData = async()=>{
    const {data} = await getCart()
    setCartData(data)
  }
  // console.log(cartdata);

   const removeCartData = async(id)=>{
      await deleteCart(id)
      getCartData()

   }
    const removecart =(id)=>{
   setCartData(" ")
   

   navigate("/successful") 

   

   }

  
 

  useEffect(()=>{
    getCartData()
    
  },[])
  return (
    <div style={{overflowX:"hidden"}}>
    
    <div style={{width:'100%',height:'auto',overflowX:"hidden",margin:"40px"}} className='container cart'>
       <div style={{display:"flex",justifyContent:"space-between"}}>
           <div className='mt-5'>
              <h2>Your<span style={{color:'green'}}> Cart</span></h2>
              <h6 style={{color:'blue'}}>You are about to there, yor dream property is just a click away.</h6>
            </div>
            <div>
                      <img className='rounded-circle p-3  ' width={'200px'} height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cc44ed72969113.5bfae0c6087d8.gif" alt="" />
                  </div>
       </div>
          <Row style={{flexWrap:"wrap",alignItems:"center",display:'flex'}}>
            <Col style={{textAlign:"center"}} md={6} >
             {cartdata.length>0?
             cartdata?.map((item)=>(
              <Row  className=' border border-3 border-dark rounded mt-4'>
                <Col  md={6}>
                  <div >

                    <div >
                      <img src={item.url} width={'100%'} height={'195px'}   alt="" />
                      </div>
                      
                    
                    </div>
                </Col>
                <Col md={6} className=''>
                  <div>
                    <h4 className='text-center mt-2'  style={{color:'green'}}>Property</h4>
                    </div>

                    <div className='mt-4' style={{lineHeight:'25px'}}>
                     <p> Building Category: <span className='fw-bold' style={{color:'blue'}}>{item.category}</span></p>
                     <p> Discount: <span className='fw-bold' style={{color:'Orange'}}> {item.discount}%</span></p>
                     <p> Amount: <span className='fw-bold' style={{color:'blue'}}>₹{(item.amount)-((item.discount)*(item.amount))/100}</span><sub className='ms-3 fw-bold text-danger'><del>₹{item.amount}</del></sub></p>
                     <div style={{ marginTop:'-50px' , fontSize:"14px",marginLeft:'260px'}} >
                      <button onClick={()=>removeCartData(item.id)} style={{border:'none', background:'none',cursor:'pointer'}}   className=' btn'><span ><i class="fa-solid fa-trash fa-2x  " style={{color:'red'}}></i></span></button>
                
                      </div>
                    </div>
                    
                 

                </Col>
              </Row>
             ))
               :
              
           <h1 id='id1' style={{overflowY:"hidden"}}>Your Cart is Empty</h1> }
            </Col>
            
            <Col md={6} >
              {cartdata?.length>0?
              cartdata.map((item)=>(
                <div style={{width:"80%",height:"200px"}} className='d-flex justify content-center border border-2 rounded rounded border-warning  align-items-center flex-column mt-4 ms-5'>
                <div  className='border shadow   w-100 d-flex justify content-center align-items-center flex-column d-flex'>
                  <h3  style={{color:"green"}}>Payment Details</h3>
                  <h4>Number of Property : <span style={{color:"orange"}} className='fw-bold '>{cartdata.length}</span></h4>
                  <h5>Amount :₹ <span style={{color:"orange"}} className='fw-bold '>{(item.amount)-((item.discount)*(item.amount))/100}</span> </h5>
              <button onClick={removecart}  style={{background:'green',alignItems:'center'}} className='btn  rounded mt-3 '><span className='text-white'>Proceed To Pay</span></button>
                </div>
              </div>
              ))
                : 
              <p></p> }
            </Col>
          </Row>
   
     </div>
    </div>
  )
}

export default Cart