import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../images/truck1.jpeg"
// import { SocialIcon } from 'react-social-icons';

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
const Content = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
  padding-right: 90px;
  margin-left: 90px;
  text-align: center;
`;
const Content1 = styled.div`
border: solid red;
background-color: blue;
`
const Content2 = styled.section`
  background-color: black;
  text-align: center;
  color: white;
  font-size: 30px;
`;
//body display box
const Content4 = styled.section`
width: 700px;
background-color: white;
position: absolute;
  width: 500px;
  height: 200px;
  z-index: 15;
  top: 60%;
  bottom: 40%;
  left: 42%;
  margin: -100px 0 0 -150px;
  color: black;
`
const Content5 = styled.section`
display: inline-block;
height: 150px;
width: 100vw;
background-color: black;

`
const Content6 = styled.section`
background-color: black;
width: 100vw;
height: 100px;
`

class bodyComp extends Component {
  state = {
    bodies: [],
    newBody: {
      id: "",
      name: "",
      price: "",
      Image: ""
    },
    isBodiesFormDisplayed: false
  };

  getAllBodies = () => {
    axios.get("/api/body").then(res => {
      console.log(res.data);
      this.setState({ bodies: res.data });
    });
  };
  componentDidMount = () => {
    this.getAllBodies();
  };
  toggleBodiesForm = () => {
    this.setState((state, props) => {
      return { isBodiesFormDisplayed: !state.isBodiesFormDisplayed };
    });
  };
  handleChange = e => {
    const cloneNewBodies = { ...this.state.newBody };
    cloneNewBodies[e.target.name] = e.target.value;
    console.log(cloneNewBodies);
    this.setState({ newBody: cloneNewBodies });
  };

  createBody = e => {
    e.preventDefault();
    axios.post("/api/body", this.state.newBody);
    this.getAllBodies();
  };

  updateBody = (body, e) => {
    // e.preventDefault()
    axios.put(`/api/body/${body}`, this.state.newBody).then(() => {
      this.setState({ isEditFormDisplayed: false });
      this.getAllBodies();
    });
  };

  deleteBody = bodyId => {
    axios.delete(`/api/body/${bodyId}`);
    this.getAllBodies();
  };

  render() {
    return (
      <Content2>
        <div>
          <Content> 
           <Title> Stanced World </Title> 
           <Title1>Design your very own stanced vehicle</Title1>
           </Content>
           {this.state.bodies.map(body => {
            return (
              <div>
           <Content4>
            hello
           </Content4>
                <Content5> 
                {body.Name}
                {body.Price}
                {body.Image}
                <button
                  onClick={() => {
                    this.deleteBody(body._id);
                  }}
                  >
                  Delete
                </button>

                <button
                  onClick={() => {
                    this.updateBody(body._id);
                  }}
                  >
                  Update
                </button>
                  </Content5>
                  <Content1>
                    Hello Ag
                    </Content1>  
                    <form onSubmit={this.createMural}>
              <div>
                <label htmlFor="location"> Location</label>
                <textarea
                  id="location"
                  type="text"
                  name="location"
                  onChange={this.handleChange}
                  value={this.state.newMural.location}
                />
              </div>
                </form>
                <Content6>

                </Content6>
              </div>
            );
          })}
        </div>
      </Content2>
    );
  }
}

export default bodyComp;
