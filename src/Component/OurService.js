import React from 'react';
import "../App.css"
function OurService(){
    return(
        <div>
<section ClassName="OurService">
    <div className="text-center mt-5 OurService1">
        <h1 className="pt-5">Our Services</h1>
        <p className="servicepara">We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>

    </div>
    <div className="container">
        <div className="row">
        <div className="col-lg-3 col-sm-6 col-md-6">
        <div class="card cardcolor1 mb-3">
  <div class="medicalimg">
      <img src="Shape.png"></img>
      <p className="mt-4">Dantel Care</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
        <div class="card cardcolor mb-3">
  <div class="medicalimg">
      <img src="4.png"></img>
      <p className="mt-4">Pulmonary</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
        <div class="card cardcolor1 mb-3">
  <div class="medicalimg">
      <img src="2.png"></img>
      <p className="mt-4">Neurological</p>
  </div>
</div>
        </div>
        <div className="col-lg-3 col-sm-6 col-md-6">
        <div class="card">
  <div class="medicalimg cardcolor1 mb-3">
      <img src="medical-file.png"></img>
      <p className="mt-4">Prediatrics</p>
  </div>
</div>
        </div>
        </div>

    </div>
</section>
        </div>
    )
}
export default OurService;