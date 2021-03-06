import React, { Component,useContext } from "react";
import "./login.css";
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import UserContext from '../../context/user/userContext'
class SignInOrganisation extends Component {
  static contextType=UserContext;
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      error: false,
      islogged:false,
      user:{}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    
  }

  componentDidUpdate(pP,pS,SS){
    const context =this.context;
    if(this.state.islogged){
      const profile =this.state.user
      profile.type="organisation"
      context.setUser(profile);
    }
  }

  onEmailChange(e) {
    this.setState({ emailAddress: e.target.value });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);
    axios//"http://103.210.75.167:3004/api/corporate-authenticate"
      .post("http://localhost:3004/api/corporate-authenticate", this.state)
      .then((res) => {
        if (res.data.logged) {
          // this.setState({logged:true});
          console.log("true");
          this.setState({error:false, islogged:true,user:res.data.organisation});
          console.log("token",res.data.token);
          localStorage.setItem("token",res.data.token);
        } else {
          console.log("not logged in");
          this.setState({ error: true });
        }
      })
      .catch((err)=>{console.log(err.message);this.setState({error:true})});
  }
  render() {
    return (
      <div>
        <div className="BackGround">
          <nav className="navbar navbar-expand-sm">
            <Link className="navbar-brand" to="/">
              <img
                src="../../Caramellogo.png"
                alt="logo"
                style={{
                  width: "240px",
                  height: "65px",
                  margin: "0px 0px 0px 0px",
                }}
              />
            </Link>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h2 className="card-title text-center">
                      <b>Sign In As Organisation</b>
                    </h2>
                    <center>
                      <span style={{ color: "red" }} /> <br />
                      <br />
                    </center>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                      <input
                        type="hidden"
                        name="_csrf"
                        defaultValue="8988e4bb-70cc-457f-86b6-d73bf13d30ac"
                      />
                      <div className="form-label-group">
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          required
                          autoFocus
                          name="emailAddress"
                          onChange={this.onEmailChange}
                          value={this.state.emailAddress}
                        />
                        <label htmlFor="inputEmail">Email address</label>
                      </div>
                      <div className="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          onChange={this.onPasswordChange}
                          value={this.state.password}
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="inputPassword">Password</label>
                      </div>

                      <input
                        type="submit"
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        value="Sigin"
                      />
                      {this.state.error === true ? (
                        <p style={{ margin: 5 }}>Invalid Email or Password</p>
                      ) : null}
                      <hr className="my-4" />
                      <Link
                        to="/lms/organisation/register"
                        style={{ fontSize: "20px" }}
                      >
                        Sign Up
                      </Link>
                      <Link
                        className="float-right"
                        to="/lms/organization/forgot-password"
                        style={{ fontSize: "20px" }}
                      >
                        Forgot password?
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.islogged?<Redirect to={{pathname: "/lms/organisation/dashboard", state:this.state.user}} ></Redirect>:null}
      </div>
    );
  }
}
// const SignIn = () => {
//   return (

//   )
// }

export default SignInOrganisation;
