import logo from './logo.svg';
import './App.css';
import Medical from "./Component/Medical";
import Banner from "./Component/Banner";
import OurService from "./Component/OurService";
function App() {
  return (
    <div className="auto-container">
    <div className="App-header">
      <div className="curve">
        <img src="Oval-Copy.png"></img>
      </div>
      <div className="curve2">
        <img src="Oval.png"></img>
      </div>
    <Medical />
 <Banner />
 <OurService />
    </div>
    </div>
  );
}

export default App;
