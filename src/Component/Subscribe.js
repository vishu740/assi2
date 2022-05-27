import React from 'react';
import "../App.css";

function Subscribe(){
    return(
<div>
    <div className="container mt-5">
    <section className="subs">
        <h2>Subscribe to Newsletter</h2>
        <p>We have a wide experience in experience design and strategy</p>
<form>
<div className="form-group">
   
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <button type="submit" class="btn btn-primary" >Submit</button>
  </div>
</form>
    </section>
    </div>
   
</div>
    )
}
export default Subscribe;