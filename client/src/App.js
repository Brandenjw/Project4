import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './components/homeComp';
import Land from './components/landingComp';
// import Bodies from './components/bodyComp';
import Colors from './components/colorComp';
import Wheels from './components/wheelComp';

// import styled from "styled-components";

// const Title = styled.h1`
// color: black;
// text-align: center;
// font-size: 38px;
// `



class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/landing" component={Land}/>
            <Route exact path="/home" component={Home}/> 
            {/* <Route exact path="/body/id" component={Bodies}/> */}
            <Route exact path="/color/:id" component={Colors}/>
            <Route exact path="/wheel/:id" component={Wheels}/>
            
            <title>Stanced World</title>
            
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
