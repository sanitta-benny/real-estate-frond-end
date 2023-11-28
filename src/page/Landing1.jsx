import React from 'react'

import '../App.css';


import { Link } from 'react-router-dom';

function Landing1() {
  
  return (
    <div style={{backgroundColor:"white",overflowX:"hidden"}}>

      <div id='home'  style={{height:"600px",width:"100%"}}>

        
    <h1 style={{paddingTop:"5%",paddingLeft:'60%',color:"white"}} id='id1'>Uncover Your ideal<br></br> Sanctuary With Our Expert<br></br> Support </h1>
      </div>

      <div className="adv3" style={{display: "flex",flexWrap: "wrap",justifyContent: "center",paddingBottom: "5%"}}>
        <div class="adv4">
            <div className="adv6">
                <div className="adv7">
                    <img class="class1" src="https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=600"
                        height="200pc" width="250px" alt=""/>
                </div>
                <div className="adv8">
                    <img className="class1"
                        src="https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=600"
                        height="200px" width="250px" alt=""/>
                </div>
            </div>
            <div className="adv9">
                <div className="adv10">
                    <img className="class1"
                        src="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=600"
                        height="200px" width="250px" alt=""/>
                </div>
                <div className="adv11">
                    <img className="class1" src="https://images.pexels.com/photos/2194399/pexels-photo-2194399.jpeg?auto=compress&cs=tinysrgb&w=600"
                        height="200px" width="250px" alt=""/>
                </div>
            </div>

        </div>
        <div style={{margin: "3%"}} className="adv5">
            <h2 id='id1'><b> Buy Plots With Us  </b></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur officia voluptatum sequi quae aspernatur culpa deleniti recusandae eos neque? Autem expedita dolore facilis provident veritatis repellendus ex quaerat facere.<br/><br/>
            <button style={{width:"200px"}} className="adv-btn form-control"><Link to={"/buy"} style={{color:"black",textDecoration:"none"}}>Buy Now</Link></button>
            </p>
          
             

          

        </div>
    </div>






<div style={{marginTop:"20px"}}>
  <h1 id='id1' style={{color:"navy"}}>Popular Residences</h1>
  
     <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",marginBottom:"20px"}}>

{/* first */}
        <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img height={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJP_yGr8W_t3M4SeWOQ80g2khnPjDpLcKYZ_-iB9nWvhXUX23ciEgcHhmfyzcMtYqS2Y&usqp=CAU" alt="Avatar" style={{width:"300px",height:"300px"}}/>
        </div>
        <div class="flip-card-back"  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
        <h4><i class="fa-solid fa-location-dot" style={{color: "white"}}></i>  Kochi, Kerala</h4>
          <p>5 Bedroom</p>
          <p>5500 sqft</p>
          <p><span>₹</span> 79,00909</p>
          <p>contact: <span style={{color:"yellow"}}>09087656</span></p>
        </div>
      </div>
    </div>
    {/* second */}
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img height={"300px"} src="https://img.freepik.com/premium-photo/luxury-modern-house-ai-generated-image_645578-1389.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais" alt="Avatar" style={{width:"300px",height:"300px"}}/>
        </div>
        <div class="flip-card-back"  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
        <h4><i class="fa-solid fa-location-dot" style={{color: "white"}}></i>  Trivandrum, Kerala</h4>
          <p>4 Bedroom</p>
          <p>5500 sqft</p>
          <p><span>₹</span> 62,00909</p>
          <p>contact: <span style={{color:"yellow"}}>09087656</span></p>
        </div>
      </div>
    </div>
    {/* third */}
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front"  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
          <img height={"300px"} src="https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg" alt="Avatar" style={{width:"300px",height:"300px"}}/>
        </div>
        <div class="flip-card-back" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>

          <h4><i class="fa-solid fa-location-dot" style={{color: "white"}}></i>  Delhi, India</h4>
          <p>5 Bedroom</p>
          <p>5500 sqft</p>
          <p><span>₹</span> 79,00909</p>
          <p>contact: <span style={{color:"yellow"}}>09087656</span></p>
        </div>
      </div>
    </div>
    {/* fourth */}
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front" >
          <img height={"300px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkTE5E2eJlMLM6oAME_l7I0n-IfMKZznToLGrcsk20oIo1qEMxc7WqSNOB88UG3MMNlE&usqp=CAU" alt="Avatar" style={{width:"300px",height:"300px"}}/>
        </div>
        <div class="flip-card-back"  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
        <h4><i class="fa-solid fa-location-dot" style={{color: "white"}}></i>  Ernakulam , India</h4>
          <p>7 Bedroom</p>
          <p>6500 sqft</p>
          <p><span>₹</span> 89,00909</p>
          <p>contact: <span style={{color:"yellow"}}>09087656</span></p>
        </div>
      </div>
    </div>

     </div>
</div>


<div className="adv3" style={{display: "flex",flexWrap: "wrap",justifyContent: "center",paddingBottom: "5%",marginTop:"10%"}}>
        <div class="adv4">
            <div className="adv6">
                <div className="adv7">
                    <img class="class1" src="https://images.pexels.com/photos/5071177/pexels-photo-5071177.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        height="200pc" width="250px" alt=""/>
                </div>
                <div className="adv8">
                    <img className="class1"
                        src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=600"
                        height="200px" width="250px" alt=""/>
                </div>
            </div>
            <div className="adv9">
                <div className="adv10">
                    <img className="class1"
                        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                        height="200px" width="250px" alt=""/>
                </div>
                <div className="adv11">
                    <img className="class1" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
                        height="200px" width="250px" alt=""/>
                </div>
            </div>

        </div>
        <div style={{margin: "3%"}} className="adv5">
            <h2 id='id1'><b>Sell Plots With Us </b></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur officia voluptatum sequi quae aspernatur culpa deleniti recusandae eos neque? Autem expedita dolore facilis provident veritatis repellendus ex quaerat facere.<br/><br/>
            <button style={{width:"200px"}} className="adv-btn form-control"><Link to={"/sell"} style={{color:"black",textDecoration:"none"}}>Sell Now</Link></button>
            </p>
          
             

          

        </div>
    </div>
    </div>
  )
}

export default Landing1