import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Title3 = styled.h1`
  color: white;
  text-align: center;
  font-size: 70px;
  text-decoration: underline;
  box-shadow: 0px 0px 80px white;
  font-family: 'cars';
  border: blue solid;
`;
const Title1 = styled.h1`
    color: red;
  text-align: center;
  font-size: 34px;
`;
const Content2 = styled.section`
  text-align: center;
  color: white;
  font-size: 30px;
`;
const Content5 = styled.section`
display: flex;
  height: 50px;
  width: 100vw;
color: black;
`;
const Content = styled.div`
  background-repeat: no-repeat;
  padding-right: 90px;
  margin-left: 90px;
  text-align: center;
`;


const Div1 = styled.div`
color:black;
padding-top: 10px;
`;
const Div2 = styled.div`
color:black;
padding-top: 10px;
`;
const Button = styled.button`
  color:black;
  background-color: grey;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  display: block;
`;




class colorComp extends Component {
  state = {
    colors: [],
    newColor: {
      Price: "",
      Image: ""
    },
    isColorsFormDisplayed: false
  };

  getAllColors = () => {
    axios.get("/api/color").then(res => {
      console.log(res.data);
      this.setState({ colors: res.data });
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
    axios.post("/api/color", this.state.newColor);
    console.log(this.state.newColor.Price, this.state.newColor.Image)
    this.getAllColors();
  };
  deleteColor = colorId => {
    axios.delete(`/api/color/${colorId}`);
    this.getAllColors();
  };

  render() {
    const bodyStyle = {
      height: "200px"
    };
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
            <Content>
            <Title3> Stanced World </Title3>
            <Title1>Design your very own stanced vehicle</Title1>
            </Content>

            {this.state.colors.map(color => {
              return (
                <div>
                  <Content5>
                  {color.Id}
                  {color.Price}
                  <img src={color.Image} style={bodyStyle} />
                  <button
                    onClick={() => {
                      this.deleteColor(color._id);
                    }}
                    >
                    Delete
                  </button>
                  </Content5>
                </div>
              );
            })}
                <form className="form" onSubmit={this.createColor}>
                <label htmlFor="Price">Price of Color</label>
              <Div1>
                <input
                  id="Price"
                  type="text"
                  name="Price"
                  onChange={this.handleChange}
                  value={this.state.newColor.Price}
                />
              </Div1>
             
                <label htmlFor="Image">Image</label>
              <Div2>
                <input
                  id="Image"
                  type="text"
                  name="Image"
                  onChange={this.handleChange}
                  value={this.state.newColor.Image}
                />
              </Div2>
              <Button>New Car Color</Button>
            </form>
          </div>
          {/* <div class="sharethis-inline-share-buttons" /> */}
        </Content2>
      </div>
    );
  }
}

export default colorComp;
