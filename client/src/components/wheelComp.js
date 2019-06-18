import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 70px;
  text-decoration: underline;
  font-family: 'cars';
  /* box-shadow: 0px 0px 80px white; */
`;
const Title1 = styled.h1`
  color: red;
  text-align: center;
  font-size: 34px;
`;

const Content = styled.div`
  background-repeat: no-repeat;
  padding-right: 90px;
  margin-left: 90px;
  text-align: center;
`;

const Content2 = styled.section`
 
  height: 100%;
  width: 100%;
  text-align: center;
  color: black;
  font-size: 30px;
`;

const Content5 = styled.section`
  display: flex;
  height: 50px;
  width: 100vw;
color: black;
`;


const Div1 = styled.div`
color:black;
padding-top: 10px;
`;
const Div2 = styled.div`
color:black;
padding-top: 10px;
`;
const Div3 = styled.div`
color:black;
padding-top: 10px;
padding-bottom:15px;
`;





class wheelComp extends Component {
  state = {
    wheels: [],
    newWheel: {
      Id: "",
      Name: "",
      Price: "",
      Image: ""
    },
    weather: null,
    isWheelsFormDisplayed: false
  };
 getWeather = () => {
    axios.get("/api/weather").then(res => {
    console.log(res.data);
    this.setState({weather: res.data });
})};
  getAllWheels = () => {
    axios.get("/api/wheel").then(res => {
      console.log(res.data);
      this.setState({ wheels: res.data });
    });
  };
  componentDidMount = () => {
    this.getAllWheels();
    this.getWeather();
  };
  toggleWheelsForm = () => {
    this.setState((state, props) => {
      return { isWheelsFormDisplayed: !state.isWheelsFormDisplayed };
    });
  };
  handleChange = e => {
    const cloneNewWheels = { ...this.state.newWheel };
    cloneNewWheels[e.target.name] = e.target.value;
    console.log(cloneNewWheels);
    this.setState({ newWheel: cloneNewWheels });
  };

  createWheel = e => {
    e.preventDefault();
    axios.post("/api/wheel", this.state.newWheel);
    this.getAllWheels();
  };

  deleteWheel = wheelId => {
    axios.delete(`/api/wheel/${wheelId}`);
    this.getAllWheels();
  };
 

  render() {
    const wheelStyle = {
      height: "200px"
    };
    return (
      <Content2>
        <div className="bodyNav">
              <ul id="nav">
                 <li><a href="/body">Body</a></li>
                 <li><a href="/color">Color</a></li>
                 <li><a href="/">Home</a></li>
               </ul>
             </div>
        <div>
          <Content>
            
            <Title> Stanced World </Title>
            <Title1>Design your very own stanced vehicle</Title1>
          </Content>
          {this.state.wheels.map(wheel => {
            return (
              <div>
               
                <Content5>
                  {wheel.Name}
                  {wheel.Description}
                  {wheel.Price}
                  <img src={wheel.Image} style={wheelStyle} />
                  <button
                    onClick={() => {
                      this.deleteWheel(wheel._id);
                    }}
                  >Delete</button>
                </Content5>
               
              </div>
            );
          })}
          <label className="label" for="body-select">Choose a Wheel:</label>

          <form className="form" onSubmit={this.createWheel}>
              <Div1>
                <label htmlFor="Name"> Name of Wheels</label>
                <textarea
                  id="Name"
                  type="text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.newWheel.Name}
                />
              </Div1>
              <br></br>
              <Div2>
                <label htmlFor="Price">Price of Wheels</label>
                <input
                  id="Price"
                  type="text"
                  name="Price"
                  onChange={this.handleChange}
                  value={this.state.newWheel.Price}
                />
              </Div2>
              <br></br>
              <Div3>
                <label htmlFor="Image">Wheel Image</label>
                <textarea
                  id="Image"
                  type="text"
                  name="Image"
                  onChange={this.handleChange}
                  value={this.state.newWheel.Image}
                />
              </Div3>
              <button>Add Wheels</button>
            </form>
        </div>
        <Link className="link2" to="/finish">Hit The Streets</Link>
        
        <h3>Local Weather</h3>
        <div className="weather">
        {this.state.weather && <div>{this.state.weather.name} <br></br> {this.state.weather.weather[0].description} </div>}
        </div>
        {/* <div class="sharethis-inline-share-buttons" /> */}
      </Content2>
    );
  }
}

export default wheelComp;
