import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import Home from './components/homeComp';
// import Land from './components/landingComp';
import bodyComp from './components/bodyComp';
import colorComp from './components/colorComp';
// import Wheels from './components/wheelComp';
// import styled from "styled-components";



class App extends Component {
  
  // function colorSelect(params) {
    
  //   let colorSelect = new colorSelect(".colorSelect", {
      
  //     width: 300,
  //     color: "rgb(255, 0, 0)",
  //   borderWidth: 1,
  //   borderColor: "#fff",
  // });
  
  // let values = document.getElementById("values");
  
  // colorSelect.on(["color:init", "color:change"], function(color){
    
  //   values.innerHTML = [
  //     "hex: " + color.hexString,
  //     "rgb: " + color.rgbString,
  //     "hsl: " + color.hslString,
  //   ].join("<br>");
  // });
  // }
    


  
  render () {
    
    return (
      <Router>
        <div>
        
           { <Switch>
            {/* <Route exact path="/landing" component={Land}/>
            <Route exact path="/home" component={Home}/>  */}
             <Route exact path="/body" component={bodyComp}/> 
            <Route exact path="/color" component={colorComp}/>
            {/* <Route exact path="/wheel/:id" component={Wheels}/>  */}
            
            
          </Switch> }
            <title>Stanced World</title>
        </div>
      </Router>
    )
}


}

export default App;
