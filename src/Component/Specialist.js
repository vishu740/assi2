import React from 'react';
import "../App.css";

function Specialist(){
    return (
        <div>
            <section className="Specialist ">
                <div className='specal'>
                    <h1 >We Have The Best Specialist</h1>
                    <p>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 cpl-md-6">
                    <div class="card" >
  <img class="card-img-top" src="spe1.jpg" alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text  text-left">Dr. Awaatif Al.</p>
    <small className="text-left">Dental Care</small>
  </div>
</div>
                    </div>
                    <div className="col-lg-3 cpl-md-6">
                    <div class="card" >
  <img class="card-img-top" src="spe2.jpg" alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text text-left">Dr. Filipa Gaspar</p>
 <small className="text-left">Cardiology</small>
  </div>
</div>
                    </div>
                    <div className="col-lg-3 cpl-md-6">
                    <div class="card" >
  <img class="card-img-top" src="spe3.jpeg" alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text text-left">Dr. Sukhmeet Gorae</p>
    <small className="text-left">Neurological</small>
  </div>
</div>
                    </div>
                    <div className="col-lg-3 cpl-md-6">
                    <div class="card" >
  <img class="card-img-top" src="spe4.jpg" alt="Card image cap"></img>
  <div class="card-body">
    <p class="card-text text-left">Dr. Siri Jakobsson</p>
    <small className="text-left">Prediatrics</small>
  </div>
</div>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Specialist;