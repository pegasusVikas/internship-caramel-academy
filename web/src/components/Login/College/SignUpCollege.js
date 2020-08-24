import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class SignUpCollege extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collegeName: "",
      universityName: "",
      emailAddress: "",
      mobileNumber: "",
      country: "",
      state: "",
      skillset: "",
      others: "",
      createdAt: "",
      password: "",
      isRegistered: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.onPasswordChange=this.onPasswordChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    axios
      //.post("http://localhost:3004http://103.210.75.167:3004/api/university-register", this.state)
      .post("http://localhost:3004/api/university-register", this.state)
      .then((res) => {
        if (res.data.registered) {
          console.log("logged in");
          console.log(res.data);
          alert("registerd");
          this.setState({ isRegistered: true });
        } else {
          console.log("not loggedi in");
          alert("Registeration failed, might be email is already taken");
          this.setState({ isRegistered: false });
        }
      });

    this.setState({
      collegeName: "",
      universityName: "",
      email: "",
      mobileNumber: "",
      country: "",
      state: "",
      skillset: "",
      others: "",
    });
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
          <Redirect to={{ pathname: "/lms/college/college_login" }}></Redirect>
        ) : null}
        <div className="light-bg">
          {/*  */}
          <nav className="navbar navbar-expand-sm">
            {/* Brand/logo */}
            <a className="navbar-brand" href="/">
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
                  <b>New Unviversity Registration</b>
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

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group input-group has-feedback ">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-user stugl" />
                        </span>
                        <input
                          type="text"
                          placeholder="College Name...."
                          className="form-control stureg"
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
                    </div>
                    <div className="col-md-6">
                      <div className="form-group input-group has-feedback">
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-user stugl" />
                        </span>
                        <input
                          type="text"
                          placeholder="University Name...."
                          className="form-control stureg"
                          required
                          id="universityName"
                          name="universityName"
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
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Others">Others</option>
                    </select>
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
                      type="state"
                      className="form-control stureg"
                      placeholder="Enter your State..."
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
                  <div className="form-group input-group has-feedback">
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-home stugl" />
                    </span>
                    <input
                      type="text"
                      className="form-control stureg"
                      placeholder="Skill Set if you have any...EX :C,C++,java"
                      data-error="Skillset is invalid"
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
                      <span className="glyphicon glyphicon-education stugl" />
                    </span>
                    <input
                      type="text"
                      className="form-control stureg"
                      placeholder="Others"
                      data-error="Invalid"
                      required
                      id="others"
                      name="others"
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
                    <a href="/lms/college/login" style={{ color: "#111" }}>
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

export default SignUpCollege;
