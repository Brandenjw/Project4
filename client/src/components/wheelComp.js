import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import styled from "styled-components";



const Title = styled.h1`
  color: red;
  text-align: center;
  font-size: 70px;
  text-decoration: underline;
  box-shadow: 0px 0px 80px white;
`;
const Title1 = styled.h1`
  color: red;
  text-align: center;
  font-size: 34px;
`;
const Title2 = styled.h1`
  color: yellow;
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
 
  height: 100vh;
  width: 100vw;
  text-align: center;
  color: white;
  font-size: 30px;
  border: solid red;
`;

const Content5 = styled.section`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100vw;
  background-color: black;
  border: solid blue;
  text-align: center;
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
            <Title2>BETA MODE</Title2>
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
                  >
                    Delete
                  </button>
                </Content5>
                {/* <Content1>Hello Ag</Content1> */}

                {/* <Content6 /> */}
              </div>
            );
          })}
          <label className="label" for="body-select">Choose a Wheel:</label>

          <form className="form" onSubmit={this.createWheel}>
              <div>
                <label htmlFor="Name"> Name of Wheels</label>
                <textarea
                  id="Name"
                  type="text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.newWheel.Name}
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="Price">Price of Wheels</label>
                <input
                  id="Price"
                  type="text"
                  name="Price"
                  onChange={this.handleChange}
                  value={this.state.newWheel.Price}
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="Image">Wheel Image</label>
                <textarea
                  id="Image"
                  type="file"
                  name="Image"
                  onChange={this.handleChange}
                  value={this.state.newWheel.Image}
                />
              </div>
              <button>New Car Body</button>
            </form>

          {/* <select id="body-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
          </select> */}
        </div>
        <div className="floor"></div>
        <div className="weather">
        {this.state.weather && <div>{this.state.weather.name} <br></br> {this.state.weather.weather[0].description} </div>}
        </div>
        {/* <div class="sharethis-inline-share-buttons" /> */}
      </Content2>
    );
  }
}

export default wheelComp;
