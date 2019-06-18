import React, { Component } from "react";
import { Link } from "react-router-dom";

class homeComp extends Component {
    state = {
        home: [],
        
        }


render() {
    return (
        <div className="homePic">
        <h1 className="head">Stanced World</h1>
        <div className="sta">
    <Link className="link" to="/body">Start</Link>
    </div>
    </div>
    
    )}

}

export default homeComp;