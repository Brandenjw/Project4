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
  color: white;
  text-align: center;
  font-size: 34px;
`;
const Content2 = styled.section`
  background-color: black;
  text-align: center;
  color: white;
  font-size: 30px;
`;

class Color extends Component {
  state = {
    colors: [],
    newColor: {
      id: "",
      color: "",
      price: ""
    },
    isBodiesFormDisplayed: false
  };

  getAllColors = () => {
    axios.get("/color").then(res => {
      console.log(res.data);
      this.setState({ color: res.data });
    });
  };
  componentDidMount = () => {
    this.getAllColors();
  };
  toggleColorsForm = () => {
    this.setState((state, props) => {
      return { isColorsFormDisplayed: !state.isColorsFormDisplayed };
    });
  };
  handleChange = e => {
    const cloneNewColors = { ...this.state.newColor };
    cloneNewColors[e.target.name] = e.target.value;
    console.log(cloneNewColors);
    this.setState({ newColor: cloneNewColors });
  };

  createColor = e => {
    e.preventDefault();
    axios.post("/color", this.state.newColor);
    this.getAllColors();
  };
  deleteColor = colorId => {
    axios.delete(`/color/${colorId}`);
    this.getAllColors();
  };

  render() {
    return (
      <div className="page">
        <Content2>
        <div className="bodyNav">
              <ul id="nav">
                 <li><a href="/body">Body</a></li>
                 <li><a href="/wheel">Wheels</a></li>
                 <li><a href="/">Home</a></li>
               </ul>
             </div>
          <div>
            <Title> Stanced World </Title>
            <Title1>Design your very own stanced vehicle</Title1>
            {this.state.colors.map(color => {
              return (
                <div>
                  {color.Id}
                  {color.Color}
                  {color.Price}
                  <button
                    onClick={() => {
                      this.deleteColor(color._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
            <div>
              <body>
                <div class="wrap">
                  <div className="half">
                    <div class="colorSelect" />
                  </div>
                  <div class="half readout">
                    <span class="title">Body Color:</span>
                    <div id="values" />
                  </div>
                </div>
              </body>
            </div>
          </div>
          {/* <div class="sharethis-inline-share-buttons" /> */}
        </Content2>
      </div>
    );
  }
}

export default Color;
