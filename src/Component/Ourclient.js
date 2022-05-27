
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

function Ourclient(){

    const [nam1, setNum1]= useState();
    // const [nam1 , setNum1]= useState();
    const [nam2 , setNum2]= useState();
    
  
  
    const [img , setImg]= useState();
    const [img1 , setImg1]= useState();
   
  
    useEffect(()=>{
        // alert("hi")
        async function getData(){
          const res=await axios.get(`https://admin.tomedes.com/api/v1/get-reviews?page=1`)
          console.log(res.data.data[0])
          // console.log(res.data.data.products[1])
          setNum1(res.data.data[0].Name)
          setNum2(res.data.data[1].Name)
      
          setImg(res.data.data[0].Reviews)
          setImg1(res.data.data[1].Reviews)
        
        }
        getData();
      });
    return(
<div>
    <div class="container">
   <h2 style={{color:"#003B79",
   fontFamily: "Source Sans Pro",
   fontSize: "54px",
   fontWeight: "600",
   lineHeight: "78px",
   letterSpacing:"0px",
   textAlign: "Left"
}}>What Our Customers Say</h2>

<div className="row">
    <div className="col-lg-6">
        <div className="box">
          <p className="mb-5">{img}</p>
          <div class="media ">
  <img class="mr-3" src="cus1.png"></img>
  <div class="media-body">
    <h5 class="mt-0">{nam1}</h5>
    Patient
    <img src="group.png" className="ggg"></img>
  </div>
</div>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="box">
          <p className="mb-5">{img1}</p>
          <div class="media ">
  <img class="mr-3" src="cus1.png"></img>
  <div class="media-body">
    <h5 class="mt-0">{nam2}</h5>
    Patient
    <img src="group.png" className="ggg"></img>
  </div>
</div>
        </div>
    </div>



</div>
    </div>
   
</div>
    )
}
export default Ourclient;