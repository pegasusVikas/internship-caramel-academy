import React from 'react'

const Navbar = () => {
  return (
    <section class="nav-sec" id="navbar-sec">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"><img src="images/Caramel-Horz.png" width="200px" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link px-lg-5 link-nav-index font-weight-bold" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-5 link-nav-index font-weight-bold" href="aboutus.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-5 link-nav-index font-weight-bold" href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Navbar;