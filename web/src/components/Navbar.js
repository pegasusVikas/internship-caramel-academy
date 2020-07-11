import React from "react";
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props.location);
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
              <a className="navbar-brand logo1" href="acadamy.html">
                <img
                  src="../../../images/caramelacademy.png"
                  width="200px"
                  height="70px"
                />
              </a>
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
                    <a className="nav-link px-lg-4 alink" href="index.html" style={{ backgroundColor: course ? "#002333" : "" }}>
                      IT Services Home
                    </a>
                  </li>
                  <li className="dropdown nav-item">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link px-lg-4 alink"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ backgroundColor: course ? "#002333" : "" }}
                    >
                      Register <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link px-lg-4" href="/lms/user/login" style={{ backgroundColor: course ? "#002333" : "" }}>
                          User
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-lg-4" href="/lms/instructor/instructor_login" style={{ backgroundColor: course ? "#002333" : "" }}>
                          Instructor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-lg-4"
                          href="/lms/organisation/organisation_login"
                          style={{ backgroundColor: course ? "#002333" : "" }}
                        >
                          Organization
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-lg-4 "
                          href="/lms/college/college_login"
                          style={{ backgroundColor: course ? "#002333" : "" }}
                        >
                          University
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-lg-4"
                          href="/lms/admin/admin_login"
                          style={{ backgroundColor: course ? "#002333" : "" }}
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link px-lg-4 alink"
                      href="nodecontactform/acadamycontact.html"
                      style={{ backgroundColor: course ? "#002333" : "" }}
                    >
                      Contact Us
                    </a>
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