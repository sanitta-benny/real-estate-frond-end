import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { uploadPlot } from '../page/services/allApi';

import { ToastContainer, toast } from 'react-toastify';
import { Toast } from 'react-bootstrap';


function Add({setUploadPlotStatus1}) {
  
 const [show, setShow] = useState(false);


  const [plot,setPlot] =useState({
  
    id:"",
    purpose:"",
    url:"",
    spe1:"",
    spe2:"",
    spe3:"",
    location:"",
    contact:"",
    dis:"",
    amount:"",
    discound:"",
    video:""
  
  })
  const youtube =(e)=>{
   const {value} =e.target
   const link = `https://www.youtube.com/embed/${value.slice(-11)}`
   setPlot({...plot,video:link})
  }
  console.log(plot)
 
  const handleUpload= async ()=>{
    const{id,purpose ,url,spe1,spe2,spe3,location,contact,dis,amount,discound,video}=plot
    if(!id || !url || !spe1 || !spe2 || !spe3 || !location || !contact || !dis || !purpose || !amount || !discound || !video){
      toast.warning("please fill the details completely")
    }
    else{
     const response = await uploadPlot(plot)
     console.log(response)
     if(response.status>=200 && response.status<300){
      toast.success(`${response.data.id} is successfully uploaded`)

     setUploadPlotStatus1(response.data)
      setPlot({
        id:"",
        purpose:"",
        url:"",
        spe1:"",
        spe2:"",
        spe3:"",
        location:"",
        contact:"",
        dis:"",
        amount:"",
        discound:"" 
      })

     }
     else{
      toast.error("something went wrong try again later")
     }

    }
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  }

  return (
    <div>

        <div style={{display:'flex',flexWrap:"wrap",borderRadius:"30px"}}>
        <button   type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{width:"200px",height:"50px",color:'black',color:"white"}} ><p>Upload new plot<span style={{paddingLeft:"10px"}}><i class="fa-solid fa-cloud-arrow-up" style={{color: "white"}}></i></span></p></button>
        </div>





     {/* modal */}

     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4  class="modal-title fs-5" id="exampleModalLabel"> <i style={{color:"orange"}} class="fa-solid fa-building me-2 fa-lg"></i>  <span id='id1'style={{color:"navy"}}>Upload Plot</span></h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

         <h5 id='id1'>Please fill the following details</h5>
          <form className='border border-secondary rounded p-2' >

          <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setPlot({...plot,id:e.target.value})}  type="text" placeholder="Enter Plot ID" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setPlot({...plot,purpose:e.target.value})}  type="text" placeholder="Enter purpose" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setPlot({...plot,url:e.target.value})} type="text" placeholder="Enter Plot Image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setPlot({...plot,spe1:e.target.value})}  type="text" placeholder="Enter Plot Specification 1" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setPlot({...plot,spe2:e.target.value})}    type="text" placeholder="Enter Plot Specification 2" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control  onChange={(e)=>setPlot({...plot,spe3:e.target.value})}   type="text" placeholder="Enter Plot Specification 3" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"> 
          <Form.Control  onChange={(e)=>setPlot({...plot,discound:e.target.value})}   type="text" placeholder="Enter Plot discound" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setPlot({...plot,location:e.target.value})}    type="text" placeholder="Enter Plot Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control onChange={(e)=>setPlot({...plot,contact:e.target.value})}    type="text" placeholder=" Enter Contact Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"> {/* form group from react bootstrap */}
          <Form.Control  onChange={(e)=>setPlot({...plot,dis:e.target.value})}   type="text" placeholder="Enter Plot Description" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail"> 
          <Form.Control  onChange={(e)=>setPlot({...plot,amount:e.target.value})}   type="text" placeholder="Enter Plot amount" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> 
          <Form.Control  onChange={youtube}   type="text" placeholder="Enter Plot video" />
      </Form.Group>
      

          </form>
        

        
     </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleUpload} type="button" class="btn btn-dark">Upload</button>
      </div>
    </div>
  </div>
</div> 
<ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </div>
  )
}

export default Add