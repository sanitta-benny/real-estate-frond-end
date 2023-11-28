import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  


<div style={{display:"flex",flexWrap:"wrap",overflowX:"hidden"}} >


  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331",width:"100%",overflowX:"hidden"}}
          
 >
    <section 
             class="d-flex justify-content-between p-4"
             style={{backgroundColor: "ef3a50",overflowX:"hidden"}}
             >
     
      <div style={{overflowX:'hidden'}}>
        <span>Get connected with us on social networks:</span>
      </div>
    

     
      <div style={{overflowX:"hidden"}}>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>

    </section>
 


    <section style={{display:"flex",flexWrap:'wrap',width:"100%",justifyContent:"space-evenly"}}>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}} class="container text-center text-md-start mt-5">
       
        <div class="row mt-3">
        
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px" ,backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
        

   
          <div  class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
            <h6 class="text-uppercase fw-bold">Links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff" ,height: "2px"}}
                />
           
            <p>
              <Link style={{textDecoration:"none",color:"white"}} to={'/buy'}>Buy</Link>
             
            </p>
            <p>
             <Link style={{textDecoration:"none",color:"white"}} to={"/sell"}>Sell</Link>
            </p>
            <p>
            <Link style={{textDecoration:"none",color:"white"}} to={"/rent"}>Rent</Link>
            </p>
          
          </div>
         

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
                  <p>
              <Link style={{textDecoration:"none",color:"white"}} to={'/'}>Home</Link>
            
            </p>
              <p><Link style={{textDecoration:"none",color:"white"}} to={"/cart"}>Cart</Link></p>
              <p><Link style={{textDecoration:"none",color:"white"}} to={"/interested"}>Interested</Link></p>
           
          </div>
         

      
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
     
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
       
          </div>
    
        </div>
      
      </div>
    </section>


  
    <div
         class="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
   
  </footer>
 

</div>
   





  )
}

export default Footer