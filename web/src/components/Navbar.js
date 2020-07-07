import React from "react";
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
                <ul className="navbar-nav ml-auto font-weight-bold">
                  <li className="nav-item ">
                    <a className="nav-link px-lg-4 alink" href="index.html">
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
                    >
                      Resgistration <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a className="nav-link px-lg-4" href="/lms/user/login">
                          User
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-lg-4" href="/lms/student/login">
                          Student
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-lg-4" href="/lms/instructor/instructor_login">
                          Instructor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-lg-4"
                           href="/lms/organisation/organisation_login"
                        >
                          Corporates
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-lg-4 "
                           href="/lms/college/college_login"
                        >
                          Universities
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-lg-4 "
                          // id="admin-bar"
                          href="/lms/admin/admin_login"
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <NavDropdown
                    href="#"
                    title="Registration"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item className="nav-link px-lg-4" href="#">
                      Student
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4" href="#">
                      Instructor
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4" href="#">
                      Corporates
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4 " href="#">
                      Universities
                    </NavDropdown.Item>
                    <NavDropdown.Item className="nav-link px-lg-4 " href="#">
                      Admin
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <li className="nav-item">
                    <a
                      className="nav-link px-lg-4 alink"
                      href="nodecontactform/acadamycontact.html"
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

export default Navbar;