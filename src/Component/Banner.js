import React from 'react';
import "../App.css";


function Banner(){
    return(
        <div>
            <div className='container'>
                <div className='row mt-5'>
                <div className='col-lg-6'>
                    <div className="bannerpara">
                    <p>Welcome to MediCare+ Clinic</p>
                    <h1>Best Specialists</h1>
                    <p className="specialists">We are on the leading edge of cancer care. Providing
                         the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
                    </div>
                  
                </div>
                <div className="col-lg-6">
                    <div className="bannerimg">

                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Banner;