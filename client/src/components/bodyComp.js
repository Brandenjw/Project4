import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import img from "client/public/images/background.jpg"


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
// const Content1 = styled.div`
//   border: solid red;
//   background-color: blue;
// `;
const Content2 = styled.section`
 /* background-image: );
background-size: cover;
background-repeat:no-repeat; */
  height: 100vh;
  width: 100vw;
  text-align: center;
  color: white;
  font-size: 30px;
  border: solid red;
`;
//body display box
// const Content4 = styled.section`
//   width: 700px;
//   background-color: white;
//   position: absolute;
//   width: 500px;
//   height: 200px;
//   z-index: 15;
//   /* top: 60%;
//   bottom: 40%;
//   left: 42%;
//   margin: -100px 0 0 -150px; */
//   color: black;
// `;
const Content5 = styled.section`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100vw;
  background-color: black;
  border: solid blue;
  text-align: center;
`;
// const Content6 = styled.section`
//   background-color: black;
//   width: 100vw;
//   height: 100px;
//   border: solid blue;
// `;

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
    const bodyStyle = {
      height: "200px"
    };
    return (
      <Content2>
        <div>
          <Content>
            <Title2>BETA MODE</Title2>
            <Title> Stanced World </Title>
            <Title1>Design your very own stanced vehicle</Title1>
            {/* <div className="bodyImage">Hello</div> */}
          </Content>
          {this.state.bodies.map(body => {
            return (
              <div>
                
                <Content5>
                  {body.Name}
                  {body.Price}
                  <img src={body.Image} style={bodyStyle} />
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
                {/* <Content1>Hello Ag</Content1> */}

                {/* <Content6 /> */}
              </div>
            );
          })}
          <label className="label" for="body-select">Choose a body:</label>

          <form className="form" onSubmit={this.createBody}>
              <div>
                <label htmlFor="Name"> Name of Car</label>
                <textarea
                  id="Name"
                  type="text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.newBody.Name}
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="Price">Price of Car</label>
                <input
                  id="Price"
                  type="text"
                  name="Price"
                  onChange={this.handleChange}
                  value={this.state.newBody.Price}
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="Image">Image</label>
                <textarea
                  id="Image"
                  type="file"
                  name="Image"
                  onChange={this.handleChange}
                  value={this.state.newBody.Image}
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
        <div className="floor">
        
        </div>
        
        {/* <div class="sharethis-inline-share-buttons" /> */}
      </Content2>
    );
  }
}

export default bodyComp;
