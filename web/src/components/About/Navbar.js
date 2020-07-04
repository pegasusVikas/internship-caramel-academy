import React from 'react'

const Navbar = () => {
  return (
    <section className="nav-sec" id="navbar-sec">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img src="images/Caramel-Horz.png" width="200px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link px-lg-5 link-nav-index font-weight-bold" href="index.html">IT Services Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-lg-5 link-nav-index font-weight-bold" href="aboutus.html">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-lg-5 link-nav-index font-weight-bold" href="nodeindexcontactform/contactform.html">Contact Us</a>
          </li>
        </ul></div>
    </nav>
  </section>
  
  )
}
export default Navbar;