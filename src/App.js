import React, {Component} from 'react';
import detech from './images/detechwin.png';
import './App.css';
import LeftSide from './containers/LeftSide/LeftSide';


function App() {
  return (
    <div className="App">
      <div className="main-div">
        <LeftSide />
        <div id="right" className="right-div">
          <img className="detech" src={detech} /> 
          <p className="main-p">Here lies a list of my favorite destinations from my 2018 Vietnam motorbiking trip. Each destination was unique and interesting in their own way. From landmarks, clubs, food to beaches, Vietnam truly had it all!</p>
          <span className="span1">Click on the destinations to find out more!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
