import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from "../common/logo.png";

import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manage: false,
    };
    this.manage = this.manage.bind(this);
  }
  manage() {
    this.setState({ manage: !this.state.manage });
  }

  logout() {
    localStorage.removeItem("admin");
  }

  render() {
    const user = JSON.parse(localStorage.getItem("admin"));

    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-info navbar-info">
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
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo03"
          >
            <ul class="navbar-nav">
						  <li><img src={Logo} width="50px" alt="mern" height="50px"/></li>
					  </ul>
          </div>
        </nav>

        <div class="row">
          <div className="column left" id="sidebar">
            <p>{user.adminName}</p>
            <p style={{ textAlign: "left", paddingLeft: "15px" }}>
              {user.emailAddress}
            </p>
            <hr />
            <a className="thiner" href="http://localhost:3001/dashboard/questionbank">
              Question Bank
            </a>
            <a className="thiner" href="dashboard/skilltest">
              Create Skill Test
            </a>
            <a className="thiner" href="dashboard/coursetest">
              Create Course Test
            </a>
            <a className="thiner" href="#" onClick={this.manage}>
              Manage
            </a>
            <a className="thiner" href="http://localhost:3001">
              Login to Question Bank
            </a>
            <hr />
            <div>
              <Link className="btn btn-lg bg-dark text-white" to="/" onClick={this.logout}>
						    Logout
					    </Link>
            </div>
          </div>

          <div className="column right" id="mainbar">
            <h2>Welcome, {user.adminName}</h2>
            {this.state.manage ? <Manage manage={this.manage} /> : null}
            {/* <p>Some text..</p> */}
          </div>
        </div>
      </div>
    );
  }
}

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: false,
    };
    this.hide = this.hide.bind(this);
  }
  hide() {
    this.props.manage();
    this.setState({ courses: true });
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Grid spacing={3}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              className="manage manage-container"
              xs={12}
            >
              <h2 className="manger-head">MANAGE</h2>
              <Grid className=" option" xs={4}>
                <Grid
                  className="manage  options"
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  item
                  xs={8}
                >
                  {" "}
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="expand-btn"
                    >
                      <Typography>
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          category
                        </span>
                        Structure
                      </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                      <div style={{ display: "block" }}>
                        {/* <a href="#" className="btn btn-danger options">Courses</a> */}
                        <a
                          href="/lms/admin/addCategory"
                          className="btn btn-danger expand-btn options"
                        >
                          Add Category
                        </a>
                        <a
                          href="/lms/admin/viewcategory"
                          className="btn btn-danger expand-btn options"
                        >
                          View Category
                        </a>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>
                <Grid
                  className="manage  options"
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  item
                  xs={8}
                >
                  {" "}
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      className="expand-btn"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          school
                        </span>
                        Courses
                      </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                      <div style={{ display: "block" }}>
                        {/* <a href="#" className="btn btn-danger options">Courses</a> */}
                        <a
                          href="/lms/admin/addcourse"
                          className="btn expand-btn btn-danger options"
                        >
                          Add Course
                        </a>
                        <a
                          href="/lms/admin/viewcourse"
                          className="btn expand-btn btn-danger options"
                        >
                          View Course
                        </a>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>
                <Grid
                  className="manage  options"
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  item
                  xs={8}
                >
                  {" "}
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      className="expand-btn"
                      aria-controls="panel1a-content"
                    >
                      <Typography>
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          school
                        </span>
                        Structure
                      </Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                </Grid>
              </Grid>

              <Grid className=" option" xs={4}>
                <Grid
                  className="manage  options"
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  item
                  xs={8}
                >
                  {" "}
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      className="expand-btn"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          school
                        </span>
                        Organisations
                      </Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                </Grid>
                <Grid
                  className="manage  options"
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  item
                  xs={8}
                >
                  {" "}
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      className="expand-btn"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          person
                        </span>
                        Students
                      </Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                </Grid>
                <Grid
                  className="manage  options"
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  item
                  xs={8}
                >
                  {" "}
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="expand-btn"
                    >
                      <Typography>
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          school
                        </span>
                        Instructor
                      </Typography>
                    </ExpansionPanelSummary>
                  </ExpansionPanel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
