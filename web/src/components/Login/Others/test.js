import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from "../common/logo.png";
import axios from 'axios';
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

        <div class="row" style={{ margin: "0" }}>
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
      instructors: null,
      users: null,
      organizations: null,
      universities: null
    };
    this.hide = this.hide.bind(this);
  }
  hide() {
    this.props.manage();
    this.setState({ courses: true });
  }
  render() {
    const instructors = () => {
      this.state.instructors === null && axios.get('http://localhost:3004/api/instructors').then(res => {
        this.setState({ instructors: res.data.docs });
      }).catch(err => {
        console.log(err.message);
      });
    }
    const users = () => {
      this.state.users === null && axios.get('http://localhost:3004/api/users').then(res => {
        this.setState({ users: res.data.docs });
      }).catch(err => {
        console.log(err.message);
      });
    }
    const organizations = () => {
      this.state.organizations === null && axios.get('http://localhost:3004/api/organizations').then(res => {
        this.setState({ organizations: res.data.docs });
      }).catch(err => {
        console.log(err.message);
      });
    }
    const universities = () => {
      this.state.universities === null && axios.get('http://localhost:3004/api/universities').then(res => {
        this.setState({ universities: res.data.docs });
      }).catch(err => {
        console.log(err.message);
      });
    }

    const viewInstructor = () => {
      window.location.href = "http://localhost:3000/lms/instructor/instructor_login";
    }
    const viewUser = () => {
      window.location.href = "http://localhost:3000/lms/user/login";
    }
    const viewOrg = () => {
      window.location.href = "http://localhost:3000/lms/organisation/organisation_login";
    }
    const viewUni = () => {
      window.location.href = "http://localhost:3000/lms/university/university_login";
    }

    let a = 1, b = 1, c = 1, d = 1;
    return (
      <React.Fragment>
        <div class="modal fade modal-xl" id="instructor_modal" tabindex="-1" aria-labelledby="instructorModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content" style={{ width: "43vw" }}>
              <div class="modal-header bg-dark text-white">
                  <h4 class="heading">Instructors</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" class="white-text">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="table-wrapper">
                  <table border="1px solid black">
                    <thead>
                    <tr>
                        <th style={{ padding: "10px" }}>S.no</th>
                        <th style={{ padding: "10px" }}>Name</th>
                        <th style={{ padding: "10px" }}>Email Id</th>
                        <th style={{ padding: "10px" }}>Mobile</th>
                        <th style={{ padding: "10px" }}>View</th>
                    </tr>
                    </thead>
                    <tbody>
                      {this.state.instructors !== null && this.state.instructors.map(doc => (
                        <tr>
                        <td style={{ padding: "10px" }}>{a++}</td>
                        <td style={{ padding: "10px" }}>{doc.firstName} {doc.lastName}</td>
                        <td style={{ padding: "10px" }}>{doc.emailAddress}</td>
                        <td style={{ padding: "10px" }}>{doc.mobileNumber}</td>
                        <td style={{ padding: "10px" }}><div className="btn btn-primary" onClick={viewInstructor}>View</div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade modal-xl" id="user_modal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content" style={{ width: "48vw", maxHeight: "70vh", overflowY: "scroll" }}>
              <div class="modal-header bg-dark text-white">
                  <h4 class="heading">Users</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" class="white-text">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="table-wrapper">
                  <table border="1px solid black">
                    <thead>
                    <tr>
                        <th style={{ padding: "10px" }}>S.no</th>
                        <th style={{ padding: "10px" }}>Name</th>
                        <th style={{ padding: "10px" }}>Email Id</th>
                        <th style={{ padding: "10px" }}>Mobile</th>
                        <th style={{ padding: "10px" }}>Type</th>
                        <th style={{ padding: "10px" }}>View</th>
                    </tr>
                    </thead>
                    <tbody>
                      {this.state.users !== null && this.state.users.map(doc => (
                        <tr>
                        <td style={{ padding: "10px" }}>{b++}</td>
                        <td style={{ padding: "10px" }}>{doc.firstName} {doc.lastName}</td>
                        <td style={{ padding: "10px" }}>{doc.emailAddress}</td>
                        <td style={{ padding: "10px" }}>{doc.mobileNumber}</td>
                        <td style={{ padding: "10px" }}>{doc.profile}</td>
                        <td style={{ padding: "10px" }}><div className="btn btn-primary" onClick={viewUser}>View</div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade modal-xl" id="orgs_modal" tabindex="-1" aria-labelledby="orgModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content" style={{ width: "44vw" }}>
              <div class="modal-header bg-dark text-white">
                  <h4 class="heading">Organizations</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" class="white-text">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="table-wrapper">
                  <table border="1px solid black">
                    <thead>
                    <tr>
                        <th style={{ padding: "10px" }}>S.no</th>
                        <th style={{ padding: "10px" }}>Name</th>
                        <th style={{ padding: "10px" }}>Email Id</th>
                        <th style={{ padding: "10px" }}>Mobile</th>
                        <th style={{ padding: "10px" }}>View</th>
                    </tr>
                    </thead>
                    <tbody>
                      {this.state.organizations !== null && this.state.organizations.map(doc => (
                        <tr>
                        <td style={{ padding: "10px" }}>{c++}</td>
                        <td style={{ padding: "10px" }}>{doc.corporateName}</td>
                        <td style={{ padding: "10px" }}>{doc.emailAddress}</td>
                        <td style={{ padding: "10px" }}>{doc.mobileNumber}</td>
                        <td style={{ padding: "10px" }}><div className="btn btn-primary" onClick={viewOrg}>View</div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade modal-xl" id="unis_modal" tabindex="-1" aria-labelledby="unisModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content" style={{ width: "44vw" }}>
              <div class="modal-header bg-dark text-white">
                  <h4 class="heading">Universities</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" class="white-text">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="table-wrapper">
                  <table border="1px solid black">
                    <thead>
                    <tr>
                        <th style={{ padding: "10px" }}>S.no</th>
                        <th style={{ padding: "10px" }}>Name</th>
                        <th style={{ padding: "10px" }}>Email Id</th>
                        <th style={{ padding: "10px" }}>Mobile</th>
                        <th style={{ padding: "10px" }}>View</th>
                    </tr>
                    </thead>
                    <tbody>
                      {this.state.universities !== null && this.state.universities.map(doc => (
                        <tr>
                        <td style={{ padding: "10px" }}>{d++}</td>
                        <td style={{ padding: "10px" }}>{doc.collegeName}</td>
                        <td style={{ padding: "10px" }}>{doc.emailAddress}</td>
                        <td style={{ padding: "10px" }}>{doc.mobileNumber}</td>
                        <td style={{ padding: "10px" }}><div className="btn btn-primary" onClick={viewUni}>View</div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
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
                        Program Structure
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
                      <Typography onClick={universities} data-toggle="modal" data-target="#unis_modal">
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          school
                        </span>
                        <span data-toggle="modal" data-target="unis_modal">University</span>
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
                      <Typography onClick={organizations} data-toggle="modal" data-target="#orgs_modal">
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          school
                        </span>
                        <span data-toggle="modal" data-target="orgs_modal">Organizations</span>
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
                          person
                        </span>
                        Gamification
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
                        Recommendation models
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
                      <Typography onClick={users} data-toggle="modal" data-target="#user_modal">
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          person
                        </span>
                        <span data-toggle="modal" data-target="user_modal">Users</span>
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
                      <Typography onClick={instructors} data-toggle="modal" data-target="#instructor_modal">
                        <span
                          className="material-icons"
                          style={{ verticalAlign: "text-bottom" }}
                        >
                          school
                        </span>
                        <span data-toggle="modal" data-target="instructor_modal">Instructor</span>
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
