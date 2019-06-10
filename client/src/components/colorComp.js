import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Title = styled.h1`
  color: red;
  text-align: center;
  font-size: 70px;
  text-decoration: underline;
  box-shadow: 0px 0px 80px white;
`;
const Title1 = styled.h1`
  color: black;
  text-align: right;
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
      bodies: [],
      newBody: {
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
          <Content2>
            <div>
              <Title> Stanced World </Title>
              <Title1>Design your very own stanced vehicle</Title1>
              {this.state.color.map(color => {
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
        </div>
      </Content2>
    );
  }
}

export default Color;      