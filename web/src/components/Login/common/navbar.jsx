import React from "react";
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
                      <HomeRoundedIcon />{" "}IT Services Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link px-lg-4 alink"
                      to="/nodecontactform/acadamycontact"
                    >
                      <EmailIcon />{" "}Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link px-lg-4 alink"
                      to="/"
                    >
                      <ExitToAppIcon />{" "}Logout
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
