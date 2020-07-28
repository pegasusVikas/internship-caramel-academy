import React, { Component } from "react";
import "./testLogin.css";
import axios from "axios";

export default class TestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Form Submitted: ");
    console.log("User ID :" + this.state.id);
    console.log("Password :" + this.state.password);

    const info = {
      userid: this.state.id,
      password: this.state.password,
    };
    axios
      .post("http://localhost:3004/test/login", info)
      .then((response) => {
        //this.setState({ questions: response.data });
        if (response.data) {
          console.log(response.data);
          this.props.history.push("/test/" + this.state.id);
        } else {
          console.log("wrong");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {/* <h1 style={{ color: "black" }}>Test Login</h1> */}
        {/* <section class="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div> */}
        <div id="title">
          <h1> Welcome to Caramel IT Evaluation </h1>
          <br />
          <br />
          <br />
          <div class="logindiv">
            <h2>Login</h2>
            <form onSubmit={this.onSubmit}>
              <div>
                <input
                  type="text"
                  name="id"
                  required=""
                  value={this.state.id}
                  onChange={this.handleChange}
                />
                <label>User Email ID</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  required=""
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <label>Password</label>
              </div>
              <input type="submit" name="" value="submit" />
            </form>
          </div>
        </div>
        {/* </section> */}
      </div>
    );
  }
}
