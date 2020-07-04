import React, { useState } from "react";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import pic from "../../images/bootcamp.png";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import "./dashboard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.location.state;
    // console.log('state',this.props.location.state);
    return (
      <div>
        {user ? (
          <Content user={user} />
        ) : (
          <Redirect to="/lms/instructor/instructor_login" />
        )}
      </div>
    );
  }
}

function Navbar() {
  return (
    <div>
      <nav
        _ngcontent-iuq-c91
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "rgb(182, 128, 231)" }}
      >
        <img
          _ngcontent-iuq-c91
          src="../../../images/caramelacademy.png"
          width="150px"
          alt="forecastr logo"
          className="logo1 horizontal-logo"
        />
        <a _ngcontent-iuq-c91 href="#" className="navbar-brand" />
        <button
          _ngcontent-iuq-c91
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span _ngcontent-iuq-c91 className="navbar-toggler-icon" />
        </button>
        <div
          _ngcontent-iuq-c91
          id="navbarTogglerDemo01"
          className="collapse navbar-collapse"
        >
          <form
            _ngcontent-iuq-c91
            noValidate
            className="form-inline my-2 my-lg-0 example-spacer ng-untouched ng-pristine ng-valid"
          >
            <input
              _ngcontent-iuq-c91
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="form-control mr-sm-2"
            />
            <button
              _ngcontent-iuq-c91
              type="submit"
              className="btn btn-outline-dark my-2 my-sm-0"
            >
              Search
            </button>
          </form>
          <ul
            _ngcontent-iuq-c91
            className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto"
          >
            <li _ngcontent-iuq-c91 className="nav-item active">
              <button _ngcontent-iuq-c91 className="btn">
                <a _ngcontent-iuq-c91 href="#" className="nav-link">
                  Wishlist <i _ngcontent-iuq-c91 className="fa fa-heart" />
                </a>
              </button>
            </li>
            <li _ngcontent-iuq-c91 className="nav-item mr-auto ml-auto">
              <button _ngcontent-iuq-c91 className="btn">
                <a _ngcontent-iuq-c91 href="#" className="nav-link">
                  Cart{" "}
                  <i
                    _ngcontent-iuq-c91
                    aria-hidden="true"
                    className="fa fa-shopping-cart"
                  />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function DashBoardBody() {
  return (
    <div _ngcontent-iuq-c91>
      <mat-drawer-container
        _ngcontent-iuq-c91
        autosize
        className="mat-drawer-container example-container"
        ng-reflect-autosize
      >
        <div className="mat-drawer-backdrop ng-star-inserted" />
        {/*bindings={
      "ng-reflect-ng-if": "true"
    }*/}
        <div
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
        <mat-drawer
          _ngcontent-iuq-c91
          tabIndex={-1}
          mode="side"
          className="mat-drawer sidenavv ng-tns-c70-0 ng-trigger ng-trigger-transform mat-drawer-side ng-star-inserted"
          ng-reflect-mode="side"
          style={{ boxShadow: "none", visibility: "hidden" }}
        >
          <div className="mat-drawer-inner-container ng-tns-c70-0">
            <div _ngcontent-iuq-c91 id="prodisplay" className="ng-tns-c70-0">
              <h1 _ngcontent-iuq-c91>Student Name</h1>
              <div _ngcontent-iuq-c91 className="image-cropper">
                <img
                  _ngcontent-iuq-c91
                  src="../../assets/student.svg"
                  className="center"
                />
              </div>
            </div>
            <div _ngcontent-iuq-c91 className="sidebutarea ng-tns-c70-0">
              <button _ngcontent-iuq-c91 className="btn btn-dark sidebut">
                <span _ngcontent-iuq-c91>
                  MY COURSES
                  <i _ngcontent-iuq-c91 className="fa fa-th-list" />
                </span>
                <a _ngcontent-iuq-c91 href />
              </button>
              <i _ngcontent-iuq-c91 className="fa fa-grid" />
            </div>
            <div _ngcontent-iuq-c91 className="sidebutarea ng-tns-c70-0">
              <button _ngcontent-iuq-c91 className="btn btn-dark sidebut">
                <span _ngcontent-iuq-c91>
                  PROGRESS REPORT
                  <i _ngcontent-iuq-c91 className="fa fa-line-chart" />
                </span>
                <a _ngcontent-iuq-c91 href />
              </button>
            </div>
            <div _ngcontent-iuq-c91 className="sidebutarea ng-tns-c70-0">
              <button _ngcontent-iuq-c91 className="btn btn-dark sidebut">
                <span _ngcontent-iuq-c91>
                  EXAM REPORT
                  <i _ngcontent-iuq-c91 className="fa fa-bar-chart" />
                </span>
                <a _ngcontent-iuq-c91 href />
              </button>
            </div>
            <div _ngcontent-iuq-c91 className="logout ng-tns-c70-0">
              <button _ngcontent-iuq-c91 className="btn btn-dark">
                <h1 _ngcontent-iuq-c91>
                  Logout{" "}
                  <i
                    _ngcontent-iuq-c91
                    className="fa fa-chevron-circle-right"
                  />
                </h1>
              </button>
            </div>
          </div>
        </mat-drawer>
        <div
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        />
        <mat-drawer-content className="mat-drawer-content ng-star-inserted">
          <div _ngcontent-iuq-c91>
            <div _ngcontent-iuq-c91 className="example-sidenav-content">
              <button
                _ngcontent-iuq-c91
                type="button"
                mat-button
                className="mat-focus-indicator btn btn-outline-dark mat-button mat-button-base"
              >
                <span className="mat-button-wrapper">
                  <span _ngcontent-iuq-c91>
                    TOGGLE SIDENAV
                    <i _ngcontent-iuq-c91 className="fa fa-bars" />
                  </span>
                </span>
                <div
                  matripple
                  className="mat-ripple mat-button-ripple"
                  ng-reflect-disabled="false"
                  ng-reflect-centered="false"
                  ng-reflect-trigger="[object HTMLButtonElement]"
                />
                <div className="mat-button-focus-overlay" />
              </button>
            </div>
          </div>
          <div _ngcontent-iuq-c91 className="main-content">
            <h1 _ngcontent-iuq-c91>RECOMMENDED COURSES</h1>
            <div _ngcontent-iuq-c91 className="row">
              <div _ngcontent-iuq-c91 className="col-md-4">
                <mat-card
                  _ngcontent-iuq-c91
                  className="mat-card mat-focus-indicator example-card"
                >
                  <mat-card-header
                    _ngcontent-iuq-c91
                    className="mat-card-header"
                  >
                    <div
                      _ngcontent-iuq-c91
                      mat-card-avatar
                      className="mat-card-avatar example-header-image"
                    />
                    <div className="mat-card-header-text">
                      <mat-card-title
                        _ngcontent-iuq-c91
                        className="mat-card-title"
                      >
                        Courses
                      </mat-card-title>
                      <mat-card-subtitle
                        _ngcontent-iuq-c91
                        className="mat-card-subtitle"
                      >
                        Course Number
                      </mat-card-subtitle>
                    </div>
                  </mat-card-header>
                  <img
                    _ngcontent-iuq-c91
                    mat-card-image
                    src="../../assets/course.jpg"
                    alt="Photo of a Courses"
                    className="mat-card-image"
                  />
                  <mat-card-actions
                    _ngcontent-iuq-c91
                    className="mat-card-actions"
                  >
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">LIKE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">SHARE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                  </mat-card-actions>
                </mat-card>
              </div>
              <div _ngcontent-iuq-c91 className="col-md-4">
                <mat-card
                  _ngcontent-iuq-c91
                  className="mat-card mat-focus-indicator example-card"
                >
                  <mat-card-header
                    _ngcontent-iuq-c91
                    className="mat-card-header"
                  >
                    <div
                      _ngcontent-iuq-c91
                      mat-card-avatar
                      className="mat-card-avatar example-header-image"
                    />
                    <div className="mat-card-header-text">
                      <mat-card-title
                        _ngcontent-iuq-c91
                        className="mat-card-title"
                      >
                        Courses
                      </mat-card-title>
                      <mat-card-subtitle
                        _ngcontent-iuq-c91
                        className="mat-card-subtitle"
                      >
                        Course Number
                      </mat-card-subtitle>
                    </div>
                  </mat-card-header>
                  <img
                    _ngcontent-iuq-c91
                    mat-card-image
                    src="../../assets/course.jpg"
                    alt="Photo of a Courses"
                    className="mat-card-image"
                  />
                  <mat-card-actions
                    _ngcontent-iuq-c91
                    className="mat-card-actions"
                  >
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">LIKE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">SHARE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                  </mat-card-actions>
                </mat-card>
              </div>
              <div _ngcontent-iuq-c91 className="col-md-4">
                <mat-card
                  _ngcontent-iuq-c91
                  className="mat-card mat-focus-indicator example-card"
                >
                  <mat-card-header
                    _ngcontent-iuq-c91
                    className="mat-card-header"
                  >
                    <div
                      _ngcontent-iuq-c91
                      mat-card-avatar
                      className="mat-card-avatar example-header-image"
                    />
                    <div className="mat-card-header-text">
                      <mat-card-title
                        _ngcontent-iuq-c91
                        className="mat-card-title"
                      >
                        Courses
                      </mat-card-title>
                      <mat-card-subtitle
                        _ngcontent-iuq-c91
                        className="mat-card-subtitle"
                      >
                        Course Number
                      </mat-card-subtitle>
                    </div>
                  </mat-card-header>
                  <img
                    _ngcontent-iuq-c91
                    mat-card-image
                    src="../../assets/course.jpg"
                    alt="Photo of a Courses"
                    className="mat-card-image"
                  />
                  <mat-card-actions
                    _ngcontent-iuq-c91
                    className="mat-card-actions"
                  >
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">LIKE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">SHARE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                  </mat-card-actions>
                </mat-card>
              </div>
            </div>
            <div _ngcontent-iuq-c91 className="row">
              <div _ngcontent-iuq-c91 className="col-md-4">
                <mat-card
                  _ngcontent-iuq-c91
                  className="mat-card mat-focus-indicator example-card"
                >
                  <mat-card-header
                    _ngcontent-iuq-c91
                    className="mat-card-header"
                  >
                    <div
                      _ngcontent-iuq-c91
                      mat-card-avatar
                      className="mat-card-avatar example-header-image"
                    />
                    <div className="mat-card-header-text">
                      <mat-card-title
                        _ngcontent-iuq-c91
                        className="mat-card-title"
                      >
                        Courses
                      </mat-card-title>
                      <mat-card-subtitle
                        _ngcontent-iuq-c91
                        className="mat-card-subtitle"
                      >
                        Course Number
                      </mat-card-subtitle>
                    </div>
                  </mat-card-header>
                  <img
                    _ngcontent-iuq-c91
                    mat-card-image
                    src="../../assets/course.jpg"
                    alt="Photo of a Courses"
                    className="mat-card-image"
                  />
                  <mat-card-actions
                    _ngcontent-iuq-c91
                    className="mat-card-actions"
                  >
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">LIKE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">SHARE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                  </mat-card-actions>
                </mat-card>
              </div>
              <div _ngcontent-iuq-c91 className="col-md-4">
                <mat-card
                  _ngcontent-iuq-c91
                  className="mat-card mat-focus-indicator example-card"
                >
                  <mat-card-header
                    _ngcontent-iuq-c91
                    className="mat-card-header"
                  >
                    <div
                      _ngcontent-iuq-c91
                      mat-card-avatar
                      className="mat-card-avatar example-header-image"
                    />
                    <div className="mat-card-header-text">
                      <mat-card-title
                        _ngcontent-iuq-c91
                        className="mat-card-title"
                      >
                        Courses
                      </mat-card-title>
                      <mat-card-subtitle
                        _ngcontent-iuq-c91
                        className="mat-card-subtitle"
                      >
                        Course Number
                      </mat-card-subtitle>
                    </div>
                  </mat-card-header>
                  <img
                    _ngcontent-iuq-c91
                    mat-card-image
                    src="../../assets/course.jpg"
                    alt="Photo of a Courses"
                    className="mat-card-image"
                  />
                  <mat-card-actions
                    _ngcontent-iuq-c91
                    className="mat-card-actions"
                  >
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">LIKE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">SHARE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                  </mat-card-actions>
                </mat-card>
              </div>
              <div _ngcontent-iuq-c91 className="col-md-4">
                <mat-card
                  _ngcontent-iuq-c91
                  className="mat-card mat-focus-indicator example-card"
                >
                  <mat-card-header
                    _ngcontent-iuq-c91
                    className="mat-card-header"
                  >
                    <div
                      _ngcontent-iuq-c91
                      mat-card-avatar
                      className="mat-card-avatar example-header-image"
                    />
                    <div className="mat-card-header-text">
                      <mat-card-title
                        _ngcontent-iuq-c91
                        className="mat-card-title"
                      >
                        Courses
                      </mat-card-title>
                      <mat-card-subtitle
                        _ngcontent-iuq-c91
                        className="mat-card-subtitle"
                      >
                        Course Number
                      </mat-card-subtitle>
                    </div>
                  </mat-card-header>
                  <img
                    _ngcontent-iuq-c91
                    mat-card-image
                    src="../../assets/course.jpg"
                    alt="Photo of a Courses"
                    className="mat-card-image"
                  />
                  <mat-card-actions
                    _ngcontent-iuq-c91
                    className="mat-card-actions"
                  >
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">LIKE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                    <button
                      _ngcontent-iuq-c91
                      mat-button
                      className="mat-focus-indicator mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">SHARE</span>
                      <div
                        matripple
                        className="mat-ripple mat-button-ripple"
                        ng-reflect-disabled="false"
                        ng-reflect-centered="false"
                        ng-reflect-trigger="[object HTMLButtonElement]"
                      />
                      <div className="mat-button-focus-overlay" />
                    </button>
                  </mat-card-actions>
                </mat-card>
              </div>
            </div>
          </div>
        </mat-drawer-content>
        {/*bindings={
      "ng-reflect-ng-if": "true"
    }*/}
      </mat-drawer-container>
    </div>
  );
}

class Background extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "grey",
          height: "500px",
          color: "white",
          alignContent: "center",
        }}
      >
        <br />
        <div
          style={{ alignSelf: "center", marginTop: "200px", marginLeft: "30%" }}
        >
          <h1>Welcome Student:</h1>
        </div>
      </div>
    );
  }
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
    };

    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar() {
    this.setState({
      sideBar: !this.state.sideBar,
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="navContainer">
            <span className="logo" style={{ padding: "0.30em" }}>
              <img
                _ngcontent-iuq-c91
                src="../../../images/caramelacademy.png"
                width="150px"
                alt="forecastr logo"
                className="logo1 horizontal-logo"
              />
            </span>

            <form
              _ngcontent-iuq-c91
              noValidate
              className="form-inline my-2 my-lg-0 example-spacer ng-untouched ng-pristine ng-valid"
            >
              <input
                _ngcontent-iuq-c91
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="form-control mr-sm-2"
              />
              <button
                _ngcontent-iuq-c91
                type="submit"
                className="btn btn-outline-dark my-2 my-sm-0"
                style={{ backgroundColor: "white" }}
              >
                Search
              </button>
            </form>
            <ul _ngcontent-iuq-c91 className=" mr-auto mt-2 mt-lg-0 ml-auto">
              <li
                _ngcontent-iuq-c91
                className="nav-item active"
                style={{ display: "inline", float: "left", paddingTop: "20px" }}
              >
                <button _ngcontent-iuq-c91 className="btn">
                  <a
                    _ngcontent-iuq-c91
                    href="#"
                    className="nav-link"
                    style={{ backgroundColor: "inherit" }}
                  >
                    Wishlist <i _ngcontent-iuq-c91 className="fa fa-heart" />
                  </a>
                </button>
              </li>
              <li
                _ngcontent-iuq-c91
                className="nav-item mr-auto ml-auto"
                style={{
                  display: "inline",
                  float: "right",
                  paddingTop: "20px",
                }}
              >
                <button _ngcontent-iuq-c91 className="btn">
                  <a
                    _ngcontent-iuq-c91
                    href="#"
                    className="nav-link"
                    style={{ backgroundColor: "inherit" }}
                  >
                    Cart{" "}
                    <i
                      _ngcontent-iuq-c91
                      aria-hidden="true"
                      className="fa fa-shopping-cart"
                    />
                  </a>
                </button>
              </li>
            </ul>

            <nav>
              <ul
                className="mainNav"
                style={
                  this.state.sideBar ? { transform: "translateX(0)" } : null
                }
              >
                <li>
                  <a className="mainNavLink" href="#">
                    MY COURSES
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="#">
                    PROGRESS REPORT
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="#">
                    EXAM REPORT
                  </a>
                </li>
                <li>
                  <a className="mainNavLink" href="/lms/user/login">
                    LOGOUT
                  </a>
                </li>
              </ul>
            </nav>
            <button
              onClick={this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`}
            >
              <span />
              <span />
              <span />
            </button>
            <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
            />
          </div>
        </header>
        <div className="wrapper">{/* <p>jaxnasj</p> */}</div>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.user;
    return (
      <div>
        {/* <Navbar /> */}
        <SideBar />
        <Background />
        {/* <DashBoardBody /> */}
        <Test />
      </div>
    );
  }
}

// const Content = (props) => {
//   const [showNav, setShowNav] = useState();
//   return (
//     <div>
//       <MenuIcon onClick={() => setShowNav(true)} />{" "}
//       <SideNav
//         showNav={showNav}
//         onHideNav={() => setShowNav(false)}
//         title="Hello World"
//         items={["home", "services", "about", "contact"]}
//         titleStyle={{ backgroundColor: "#4CAF50" }}
//         itemStyle={{ backgroundColor: "#fff" }}
//         itemHoverStyle={{ backgroundColor: "#CDDC39" }}
//       />
//     </div>
//   );
// };

class Test extends Component {
  render() {
    return (
      <div style={{ padding: 40 }}>
        <h2>ENROLLED COURSES</h2>
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  Goto Course
                </Button>
                <Button className="btn btn-info">SHARE</Button>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  Goto Course
                </Button>
                <Button className="btn btn-info">SHARE</Button>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  Goto Course
                </Button>
                <Button className="btn btn-info">SHARE</Button>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  Goto Course
                </Button>
                <Button className="btn btn-info">SHARE</Button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Recommend />
      </div>
    );
  }
}

class Recommend extends Component {
  render() {
    return (
      <div>
        <h2>RECOMMENDED COURSES</h2>
        <div className="row">
          <div className="card-deck" style={{ height: 500 }}>
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  ENROLL
                </Button>
                <Button className="btn btn-info">SHARE</Button>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  ENROLL
                </Button>
                <Button className="btn btn-info">SHARE</Button>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  ENROLL
                </Button>
                <Button className="btn btn-info">SHARE</Button>
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={pic} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Course Title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                <Button className="btn btn-primary" style={{ marginRight: 10 }}>
                  ENROLL
                </Button>
                <Button className="btn btn-info">SHARE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
