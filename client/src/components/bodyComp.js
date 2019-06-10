import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';





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
        <div>
        <Content>
          <Wrapper>
            <Title>  Stanced World </Title>
            <Title1>Design your very own stanced vehicle</Title1>
          </Wrapper>
        </Content>

        {this.state.bodies.map(bodies => {
          return (



            </div>
  
export default Body;