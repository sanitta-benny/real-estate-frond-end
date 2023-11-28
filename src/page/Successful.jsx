import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Successful() {
  return (
    <div    className='w-100 rounded' style={{height:"100vh",width:'100%',background:'#5799db',overflowX:"hidden"}}>
    <Row style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        <Col md={4}></Col>
        <Col  md={4}>
            <div style={{height:'300px', width:'400px',marginTop:'230px'}} className='d-flex border border shadow justify-content-center flex-column bg-light align-items-center text-center rounded-4'>
                <div style={{marginTop:'-100px'}}>
                    <img  width={'100px'} src="https://th.bing.com/th/id/R.85c14dfeb8edd88f62b5bbfe671f0108?rik=T38yCB6ZWsrEdA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgreen-checkmark-transparent%2fgreen-checkmark-transparent-17.png&ehk=XzHgRYQ3s7cSIB3YzfqPKv4s787lzN9vDBRhCfmVfH0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className='container' style={{marginTop:'30px'}}>
                    <h4 className='text-center '>Thank You!</h4>
                    <p className='mt-4'>Your Order has been successfully submitted.Visit again</p>
                    <Link to={"/"} ><button style={{background:'green'}}  className='btn btn-success rounded w-75'>Ok</button></Link>
                </div>
            </div>
        </Col>
        <Col  md={4}></Col>
    </Row>
</div>

  )
}

export default Successful