import React from "react";
import {Link} from 'react-router-dom'
import { Nav, NavDropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <div
        className="body-overflow"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <div className="acaheader" id="topheader">
          <div className="container-fluid text5">
            <nav className="navbar navbar-expand-lg bg navbar-light">
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
                <ul className="navbar-nav ml-auto font-weight-bold">
                  <li className="nav-item ">
                    <Link className="nav-link px-lg-4 alink" to="/index">
                      IT Services Home
                    </Link>
                  </li>
                  <li className="dropdown nav-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link px-lg-4 alink"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Resgistration <span className="caret" />
                    </Link>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link className="nav-link px-lg-4" to="/lms/user/login">
                          User
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link px-lg-4" to="/lms/student/login">
                          Student
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link px-lg-4" to="/lms/instructor/instructor_login">
                          Instructor
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link px-lg-4"
                           to="/lms/organisation/organisation_login"
                        >
                          Corporates
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link px-lg-4 "
                           to="/lms/college/college_login"
                        >
                          Universities
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link px-lg-4 "
                          // id="admin-bar"
                          to="/lms/admin/admin_login"
                        >
                          Admin
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <NavDropdown
                    to="#"
                    title="Registration"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item className="nav-link px-lg-4" to="#">
                      Student
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4" to="#">
                      Instructor
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4" to="#">
                      Corporates
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4 " to="#">
                      Universities
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4 " to="#">
                      Admin
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <li className="nav-item">
                    <Link
                      className="nav-link px-lg-4 alink"
                      to="/nodecontactform/acadamycontact"
                    >
                      Contact Us
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

export default Navbar;
