import React from 'react'
import { Button } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function Header({}) {
  return (
    <div>

<div >
<Navbar style={{color:"white",backgroundColor:"black"}}>
      <Container>
        <Link style={{textDecoration:"none",color:"white"}} to={'/'}><b>Elite Luxury Realty <img style={{height:"100px",width:"100px"}} src="https://as1.ftcdn.net/v2/jpg/02/82/15/72/1000_F_282157231_6nDvDp8QnOfWn64jBO2x3Z1fdK6JYVFV.jpg" alt="" /></b></Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color:"white"}}>
        <Link style={{color:"white",textDecoration:"none"}} to={'/sell'}><b>SELL <i class="fa-solid fa-plus fa-beat" style={{color: "#f4f7fa"}}></i></b></Link>

         <Link className='ps-4'  style={{color:"white",textDecoration:"none"}} to={'/buy'}><b>BUY <i class="fa-solid fa-bag-shopping fa-beat" style={{color: "#f1f4f8"}}></i></b></Link>

         <Link className='ps-4' style={{color:"white",textDecoration:"none"}} to={'/rent'}><b>RENT  <i class="fa-solid fa-thumbtack fa-beat" style={{color: "#ffffff"}}></i></b></Link>

         <Link className='ps-4' style={{color:"white",textDecoration:"none"}} to={'/cart'}><b>CART  <i class="fa-solid fa-cart-shopping fa-beat" style={{color: "#f2f6fd"}}></i></b></Link>

         <Link className='ps-4' style={{color:"white",textDecoration:"none"}} to={'/interested'}><b>INTERESTED <i class="fa-solid fa-heart fa-beat" style={{color: "#f3f4f7"}}></i></b></Link>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  )
}

export default Header