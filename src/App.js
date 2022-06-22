import React from 'react';
import './App.css';
import sim from './sim.png';
import cards from './cards.jpg';





function App() {
  return (
    <div className="App">
      <h1>CREDITCARD</h1>
      <img className="simcards" src={sim} alt="logo"/> 
      <div className = "cards">
             <div className="SN">
              <h3>7235 3256 7859 1245</h3>
             <div className="details">
               <h2>5422</h2>
               <div className="validthru"> 
                  <h6>
                  VALID
                  </h6>
                  <h6>
                  THRU 
                  </h6>
               </div>
               <i class="fas fa-angle-right icon"></i>
               <div class="monthyear">
                  <h6>
                  MONTH/YEAR
                  </h6>
                  <span className="title"> 
                 11/50
                  </span>
               </div>   
              </div>
              <span>CARDHOLDER</span>
             </div>    

            <div className="mycards">
               <img className="card" src={cards}/>
               
             </div>   
      </div>
    </div>

  );
}

export default App;
