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
    const info = {
      userid: this.state.id,
      password: this.state.password,
    };
    axios.post("/api/test/login", info).then((response) => {
      if (response.data.msg === "done") {
        try {;
          localStorage.setItem("test", response.data.test._id);
          this.props.history.push("/test");
        } catch(err) {
          console.log(err.message);
        }
        
      } else {
        window.alert(response.data.msg);
      }
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        {/* <h1 style={{ color: "black" }}>Test Login</h1> */}
        <section class="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
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
        </section>
      </div>
    );
  }
}
