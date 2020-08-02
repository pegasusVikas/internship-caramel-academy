/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
// import "../../components/style.css";
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      mobileNumber: "",
      dateOfBirth: "",
      country: "",
      state: "",
      collegeName: "",
      skillset: "",
      password: "",
      createdAt: "",
      organization: "",
      experience: 0,
      isRegistered: false,

    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.onPasswordChange=this.onPasswordChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log("Form Submitted: ");
    // console.log("First Name :" + this.state.firstName);
    // console.log("Last Name :" + this.state.lastName);
    // console.log("Email:" + this.state.email);
    // console.log("Mobile :" + this.state.mobile);
    // console.log("Date of birth :" + this.state.dob);
    // console.log("Country :" + this.state.country);
    // console.log("State :" + this.state.state);
    // console.log("College :" + this.state.college);
    // console.log("Skill :" + this.state.skill);
    axios
      //  .post("http://103.210.75.167:3004/api/user-register", this.state)
      .post("http://localhost:3004/api/user-register", this.state)
      .then((res) => {
        if (res.data.registered) {
          // this.setState({logged:true});
          console.log("logged in");
          console.log(res.data);
          alert("registered");
          this.setState({ isRegistered: true });
        } else {
          console.log("not logged in");
          alert("Registeration failed, might be email is already taken");
          this.setState({ isRegistered: false });
        }
      })
      .catch((err) => {
        this.setState({ isRegistered: false });
      });
    //   this.setState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     mobile: "",
    //     dob: "",
    //     country: "",
    //     state: "",
    //     college: "",
    //     skill: "",
    //   });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="BackGround">
        {this.state.isRegistered ? (
          <Redirect to={{ pathname: "/lms/user/login" }}></Redirect>
        ) : null}
        <div className="light-bg">
          {/*  */}
          <nav className="navbar navbar-expand-sm">
            {/* Brand/logo */}
            <a className="navbar-brand" href="/lms">
              <img
                src="../../Caramel-Horz.png"
                alt="logo"
                style={{
                  width: "240px",
                  height: "65px",
                  margin: "0px 0px 0px 0px",
                }}
              />
            </a>
          </nav>

          <br />
          <br />
          <div className="container" style={{ marginTop: "-40px" }}>
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <h2 align="center" style={{ color: "#111" }}>
                  <b>New User Registration</b>
                </h2>
                <br />
                <form
                  autoComplete="off"
                  action="/lms/user/register"
                  method="post"
                  className="m-t"
                  role="form"
                  data-toggle="validator"
                  onSubmit={this.onSubmit}
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="7bbcad0d-7508-4435-abf8-1f67975b7df9"
                  />
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-flag stugl" />
                    </span>
                    <select
                      className="form-control stureg"
                      required
                      id="profile"
                      name="profile"
                      onChange={this.handleChange}
                    >
                      <option value>- - - Select Your Profile - - -</option>
                      <option value="Student">Student</option>
                      <option value="IT Professional">Working Professional</option>
                    </select>
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group input-group has-feedback ">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-user stugl" />
                        </span>
                        <input
                          type="text"
                          placeholder="First Name...."
                          className="form-control stureg"
                          required
                          id="firstName"
                          name="firstName"
                          onChange={this.handleChange}
                        />
                        <span
                          className="glyphicon form-control-feedback"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group input-group has-feedback">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-user stugl" />
                        </span>
                        <input
                          type="text"
                          placeholder="Last Name...."
                          className="form-control stureg"
                          required
                          id="lastName"
                          name="lastName"
                          onChange={this.handleChange}
                        />
                        <span
                          className="glyphicon form-control-feedback"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-envelope stugl" />
                    </span>
                    <input
                      type="email"
                      placeholder="Email Address...."
                      className="form-control stureg"
                      data-error="This email address is invalid"
                      required
                      id="emailAddress"
                      name="emailAddress"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-earphone stugl" />
                    </span>
                    <input
                      type="number"
                      placeholder="Your Mobile Number...."
                      className="form-control stureg"
                      data-error="This Mobile Number is invalid"
                      required
                      id="mobileNumber"
                      name="mobileNumber"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-list-alt stugl" />
                    </span>
                    <input
                      type="date"
                      className="form-control stureg"
                      data-error="Date Of Birth is invalid"
                      required
                      id="dateOfBirth"
                      name="dateOfBirth"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-flag stugl" />
                    </span>
                    <select
                      className="form-control stureg"
                      required
                      id="country"
                      name="country"
                      onChange={this.handleChange}
                    >
                      <option value>- - - Select Your Country - - -</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="UK">UK</option>
                      <option value="USA">USA</option>
                      <option value="others">Others</option>
                    </select>
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-home stugl" />
                    </span>
                    <input
                      type="text"
                      className="form-control stureg"
                      placeholder="Enter Your State..."
                      data-error="State is invalid"
                      required
                      id="state"
                      name="state"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  {this.state.profile === "Student" &&  
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-education stugl" />
                    </span>
                    <input
                      type="text"
                      className="form-control stureg"
                      placeholder="Your College/University Name..."
                      data-error="College is invalid"
                      required
                      id="collegeName"
                      name="collegeName"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  }
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-tasks stugl" />
                    </span>
                    <input
                      type="text"
                      className="form-control stureg"
                      placeholder="Enter upto any 6 skills if you have... EX: C, C++,java"
                      data-error="Skill Set is invalid"
                      required
                      id="skillset"
                      name="skillset"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-envelope stugl" />
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control stureg"
                      data-error="This email address is invalid"
                      required
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  {this.state.profile === "IT Professional" && 
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-home stugl" />
                    </span>
                    <input
                      type="text"
                      className="form-control stureg"
                      placeholder="Your organization name..."
                      data-error="State is invalid"
                      required
                      id="organization"
                      name="organization"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  }
                  {this.state.profile === "IT Professional" && 
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-home stugl" />
                    </span>
                    <input
                      type="number"
                      className="form-control stureg"
                      placeholder="Years of experience"
                      data-error="State is invalid"
                      required
                      id="experience"
                      name="experience"
                      onChange={this.handleChange}
                    />
                    <span
                      className="glyphicon form-control-feedback"
                      aria-hidden="true"
                    />
                  </div>
                  }
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary full-width m-b"
                  >
                    Register
                  </button>
                  <br />
                  <h3>
                    <a href="/lms/user/login" style={{ color: "#111" }}>
                      Already Registered? Please Login
                    </a>
                  </h3>
                  <br />
                  <br />
                </form>
              </div>
              <div className="col-md-3" />
            </div>
          </div>
          <p className="m-t"></p>
        </div>
        {/* jQuery*/}
        {/* Bootstrap */}
        {/* Bootstrap Validator plugin */}
      </div>
    );
  }
}

export default SignUp;
