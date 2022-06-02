import React from 'react';
import "../App.css"

function Medical(){
    return(
<div ClassName="App-header1">
    <div className="auto-container">
    <section>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <a className="navbar-brand d-lg-none " href="#"><img src="Medicare+.png"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand d-none d-lg-block ml-5" href="#"><img src="Medicare+.png"></img></a>
    <ul className="navbar-nav ml-auto mt-2 p-0 mr-5 ">
      <li className="nav-item ">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
     
    </ul>
    
        <a className="nav-link text-white contect" href="#">Contact</a>
     
  </div>
</nav>
    </section>
    </div>

</div>
    )
}
export default Medical;