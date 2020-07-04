import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "reactstrap";
// import  './dashboard.css'
import pic from "../../images/bootcamp.png";
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
        {/* <ul _ngcontent-iuq-c91 className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">
          <li _ngcontent-iuq-c91 className="nav-item active">
            <button _ngcontent-iuq-c91 className="btn">
              <a _ngcontent-iuq-c91 href="#" className="nav-link">Wishlist <i _ngcontent-iuq-c91 className="fa fa-heart" /></a>
            </button>
          </li>
          <li _ngcontent-iuq-c91 className="nav-item mr-auto ml-auto">
            <button _ngcontent-iuq-c91 className="btn">
              <a _ngcontent-iuq-c91 href="#" className="nav-link">Cart <i _ngcontent-iuq-c91 aria-hidden="true" className="fa fa-shopping-cart" /></a>
            </button>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = this.props.user;
    return (
      <div>
        <Navbar />
        <Test />
      </div>
    );
  }
}

class Test extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div className="column left" id="sidenav">
            <p>Welcome</p>

            <hr />
            <a className="thiner" href="#">
              Add Course
            </a>
            <a className="thiner" href="#">
              View Your Courses
            </a>
          </div>
          <div className="column right" id="mainbar">
            <h2>Your Courses</h2>
            <div className="card-deck">
              <div className="card">
                <div>
                  <img
                    className="card-img-top"
                    src={pic}
                    style={{
                      width: "50%",
                      height: "auto",
                      padding: 15,
                      borderRadius: "50%",
                    }}
                    alt="Card image cap"
                  />
                  <span>Students Enrolled:100</span>
                </div>
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
                  <Button
                    className="btn btn-primary"
                    style={{ marginRight: 10 }}
                  >
                    Goto Course
                  </Button>
                  <Button className="btn btn-info">SHARE</Button>
                </div>
              </div>
              <div className="card">
                <div>
                  <img
                    className="card-img-top"
                    src={pic}
                    style={{
                      width: "50%",
                      height: "auto",
                      padding: 15,
                      borderRadius: "50%",
                    }}
                    alt="Card image cap"
                  />
                  <span>Students Enrolled:100</span>
                </div>
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
                  <Button
                    className="btn btn-primary"
                    style={{ marginRight: 10 }}
                  >
                    Goto Course
                  </Button>
                  <Button className="btn btn-info">SHARE</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
