import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { SocialIcon } from 'react-social-icons';

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

class Body extends Component {
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
    axios.get("/body").then(res => {
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
    axios.post("/body", this.state.newBody);
    this.getAllBodies();
  };

  updateBody = (body, e) => {
    // e.preventDefault()
    axios.put(`/body/${body}`, this.state.newBody).then(() => {
      this.setState({ isEditFormDisplayed: false });
      this.getAllBodies();
    });
  };

  deleteBody = bodyId => {
    axios.delete(`/body/${bodyId}`);
    this.getAllBodies();
  };

  render() {
    return (
      <Content2>
        <div>
          <Title> Stanced World </Title>
          <Title1>Design your very own stanced vehicle</Title1>

          {this.state.body.map(body => {
            return (
              <div>
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
              </div>
            );
          })}
        </div>
      </Content2>
    );
  }
}

export default Body;
