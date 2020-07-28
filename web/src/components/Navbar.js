import React from "react";
import { withRouter, Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = (props) => {
  let course = props.location.pathname.split("/")[3] === "coursespage" ? true : false;
  return (
    <div>
      <div
        className="body-overflow"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <div className="acaheader" id="topheader">
          <div className="container-fluid text5">
            <nav className="navbar navbar-expand-lg bg navbar-light" style={{ backgroundColor: course ? "#002333" : "" }}>
              {/* Brand*/}
              <Link className="navbar-brand logo1" to="/">
                <img
                  src="../../../images/caramelacademy.png"
                  width="200px"
                  height="70px"
                />
              </Link>
              {/* Toggler/collapsibe Button */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Navbar links */}
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto font-weight-bold" style={{ backgroundColor: course ? "#002333" : "" }}>
                  <li className="nav-item ">
                    <Link className="nav-link px-lg-4 alink" to="/index" style={{ backgroundColor: course ? "#002333" : "" }}>
                      <HomeRoundedIcon />IT Services Home
                    </Link>
                  </li>
                  <li className="dropdown nav-item" style={{ display: course ? "none" : null }}>
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link px-lg-4 alink"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ backgroundColor: course ? "#002333" : "" }}
                    >
                      <ExitToAppIcon />Sign In <span className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link px-lg-4" to="/lms/user/login" style={{ backgroundColor: course ? "#002333" : "" }}>
                          User
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link px-lg-4" to="/lms/instructor/instructor_login" style={{ backgroundColor: course ? "#002333" : "" }}>
                          Instructor
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link px-lg-4"
                          to="/lms/organisation/organisation_login"
                          style={{ backgroundColor: course ? "#002333" : "" }}
                        >
                          Organization
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link px-lg-4 "
                          to="/lms/college/college_login"
                          style={{ backgroundColor: course ? "#002333" : "" }}
                        >
                          University
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link px-lg-4"
                          to="/lms/admin/admin_login"
                          style={{ backgroundColor: course ? "#002333" : "" }}
                        >
                          Admin
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link px-lg-4 alink"
                      to="/nodecontactform/acadamycontact"
                      style={{ backgroundColor: course ? "#002333" : "" }}
                    >
                      <EmailIcon />Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);