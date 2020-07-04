import React, { Component } from "react";
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import ReactDOM from "react-dom";
import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manage: true,
    };
    this.manage = this.manage.bind(this);
  }
  manage() {
    if (this.state.manage) this.setState({ manage: false });
    else this.setState({ manage: true });
  }
  render() {
    // const user=this.props.location.state;
    // console.log('state',this.props.location.state);
    const user = {
      name: "John",
      email: "a@a.c",
    };
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-info navbar-info">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <button
                id="collapse"
                className="btn-dark"
                style={{ fontSize: "2.5em" }}
              >
                <span class="material-icons">menu</span>
              </button>
            </li>
          </ul>
          <Link className="navbar-brand" to="/lms/">
            <img
              src="Caramel-Horz.png"
              alt="logo"
              style={{
                width: "240px",
                height: "65px",
                margin: "0px 0px 0px 0px",
              }}
            />
          </Link>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo03"
          >
            <ul class="navbar-nav ">
              <li class="nav-item"></li>
            </ul>
          </div>
        </nav>

        <div class="row">
          <div className="column left" id="sidebar">
            <p>{user.name}</p>
            <p style={{ textAlign: "left", paddingLeft: "15px" }}>
              {user.email}
            </p>
            <hr />
            <a href="#">Reports</a>
            <a href="/lms/admin/dashboard/questionBank">Question Bank</a>
            <a href="/lms/admin/dashboard/manage">Manage</a>
            <a href="#">Template</a>
            <div>
              {" "}
              <a
                class="nav-link"
                href="/lms/admin/admin_login"
                style={{ fontSize: "2.5em" }}
              >
                Logout
              </a>
            </div>
          </div>

          <div className="column right" id="mainbar">
            <h2>Welcome, {user.name}</h2>
            {/* {this.state.manage?<Manage manage={this.manage} /> :null} */}
            <Router>
              <Route
                exact
                path="/lms/admin/dashboard/manage"
                component={Manage}
              />
            </Router>
            {/* <p>Some text..</p> */}
          </div>
        </div>
      </div>
    );
  }
}

class Manage extends Component {
  render() {
    return (
      <div className="manage">
        <h2>MANAGE</h2>
        <div className="options">
          <a href="#" className="btn btn-danger options">
            <span
              className="material-icons"
              style={{ verticalAlign: "text-bottom" }}
            >
              school
            </span>
            University
          </a>
          <a href="#" className="btn btn-danger options">
            <span
              className="material-icons"
              style={{ verticalAlign: "text-bottom" }}
            >
              portrait
            </span>
            Instructors
          </a>
        </div>
        <div>
          <div style={{ display: "block" }}>
            {/* <a href="#" className="btn btn-danger options">Courses</a> */}
            <a href="/lms/admin/addcourse" className="btn btn-danger options">
              Add Course
            </a>
            <a href="/lms/admin/viewcourse" className="btn btn-danger options">
              View Course
            </a>
          </div>
          <div style={{ display: "block" }}>
            {/* <a href="#" className="btn btn-danger options">Student</a> */}
            <a href="#" className="btn btn-danger options">
              Add Student
            </a>
            <a href="#" className="btn btn-danger options">
              View Students
            </a>
          </div>
        </div>
        <div className="options">
          <a href="#" className="btn btn-danger options">
            <span
              className="material-icons"
              style={{ verticalAlign: "text-bottom" }}
            >
              person
            </span>
            College
          </a>
          <a href="#" className="btn btn-danger options">
            <span className="material-icons">category</span>View college
          </a>
          <div style={{ display: "block" }}>
            <a href="/lms/admin/addcategory" className="btn btn-danger options">
              <span
                className="material-icons"
                style={{ verticalAlign: "text-bottom" }}
              >
                category
              </span>
              Add Structure
            </a>
            <a
              href="/lms/admin/viewcategory"
              className="btn btn-danger options"
            >
              <span
                className="material-icons"
                style={{ verticalAlign: "text-bottom" }}
              >
                category
              </span>
              View Structure
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
