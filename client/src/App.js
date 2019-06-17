import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import homeComp from './components/homeComp';
// import Land from './components/landingComp';
import bodyComp from './components/bodyComp';
import colorComp from './components/colorComp';
import wheelComp from './components/wheelComp';
// import styled from "styled-components";



class App extends Component {
  
 
    


  
  render () {
    
    return (
      <Router>
        <div>
        
           { <Switch>
            {/* <Route exact path="/landing" component={Land}/> */}
            {/* <Route exact path="/" component={homeComp}/>  */}
            <Route exact path="/body" component={bodyComp}/> 
            <Route exact path="/color" component={colorComp}/>
            <Route exact path="/wheel" component={wheelComp}/>  
            
            
          </Switch> }
            <title>Stanced World</title>
        </div>
      </Router>
    )
}


}

export default App;
