import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 70px;
  text-decoration: underline;
  /* box-shadow: 0px 0px 80px white; */
  font-family: 'cars';
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  color:black;
  background-color: grey;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  display: block;
`;





const Content5 = styled.section`
display: flex;
  /* justify-content: center; */
  height: 50px;
  width: 100vw;
color: black;
  
  
  /* text-align: center; */
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
      <div  className="Content2, bodyContain">
       <div className="Nav">
              <ul id="bodyNav">
                 <li><a href="/color">Color</a></li>
                 <li><a href="/wheel">Wheels</a></li>
                 <li><a href="/">Home</a></li>
               </ul>
             </div>
        <div >
          <Content>
            
            <Title> Stanced World </Title>
            <Title1>Design your very own stanced vehicle</Title1>
           
          </Content>
          {this.state.bodies.map(body => {
            return (
              <div  >
              
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
                

                
              </div>
            );
          })}

          <form className="form" onSubmit={this.createBody}>
                <label htmlFor="Name"> Name of Car</label>
              <Div1>
                <input
                  id="Name"
                  type="text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.newBody.Name}
                />
              </Div1>
              <br></br>
                <label htmlFor="Price">Price of Car</label>
              <Div2>
                <input
                  id="Price"
                  type="text"
                  name="Price"
                  onChange={this.handleChange}
                  value={this.state.newBody.Price}
                />
              </Div2>
              <br></br>
                <label htmlFor="Image">Image</label>
              <Div3>
                <input
                  id="Image"
                  type="text"
                  name="Image"
                  onChange={this.handleChange}
                  value={this.state.newBody.Image}
                />
              </Div3>
              <Button>New Car Body</Button>
              <Link to={`/color`}>NEXT</Link>
            </form>
            
            

      
        </div>
        <div className="floor">
        
        </div>
        
        {/* <div class="sharethis-inline-share-buttons" /> */}
      </div>
    );
  }
}

export default bodyComp;
