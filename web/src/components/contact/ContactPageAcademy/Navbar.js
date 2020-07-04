import React from 'react'

const Navbar = () => {
    return (
      <div>
      <div className="acaheader" id="topheader">
        <div className="contai">
          <nav className="navbar navbar-expand-lg bg-light navbar-light">
            {/* Brand*/}
            <a className="navbar-brand" href="../acadamy.html"><img src="../images/caramelacademy.png" width="200px" height="70px" /></a>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto font-weight-bold">
                <li className="nav-item ">
                  <a className="nav-link px-lg-4" href="../index.html">IT Services Home</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link px-lg-4" href="../aboutus.html">About Us</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link px-lg-4" href="../nodecontactform/acadamycontact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    
    )
}

export default Navbar;