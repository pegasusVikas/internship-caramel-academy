/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from "react";
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import "../../components/style.css";
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminName: "",
      emailAddress: "",
      mobileNumber: "",
      password:"",
      createdAt:"",
      isRegistered: false
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
    console.log(this.state);
    //axios.post("http://localhost:3004http://103.210.75.167:3004/api/admin-register",this.state).
    axios.post("http://localhost:3004/api/admin-register",this.state).
      then(res=>{
        console.log(res.data);
          if(res.data.registered)
          {
              // this.setState({logged:true});
              console.log('logged in');
              console.log(res.data);
              alert('registerd');
              this.setState({isRegistered:true});
          }
            else{
              console.log('not loggedi in');
              alert('Registeration failed, might be email is already taken');
              this.setState({isRegistered:false});
            } 

      }).catch(err=>{this.setState({isRegistered:false})});        

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
          {this.state.isRegistered?<Redirect to={{pathname: "/lms/admin/admin_login"}} ></Redirect>:null}
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
                  <b>New Admin Registration</b>
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

                  {/* <div className="row">
                    <div className="col-md-6">
                      <div className="form-group input-group has-feedback ">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-user stugl" />
                        </span>
                        <input
                          type="text"
                          placeholder="Name...."
                          className="form-control stureg"
                          required
                          id="adminName"
                          name="adminName"
                          onChange={this.handleChange}
                        />
                        <span
                          className="glyphicon form-control-feedback"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-envelope stugl" />
                    </span>
                    <input
                          type="text"
                          placeholder="Name...."
                          className="form-control stureg"
                          required
                          id="adminName"
                          name="adminName"
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
                      <span className="glyphicon glyphicon-envelope stugl" />
                    </span>
                    <input
                      type="password"
                      placeholder="New Password"
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
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary full-width m-b"
                  >
                    Register
                  </button>
                  <br />
                  <h3>
                    <a href="/lms/admin/admin_login" style={{ color: "#111" }}>
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
