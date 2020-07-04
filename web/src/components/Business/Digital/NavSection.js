
import React, { useState } from 'react'

const NavSection = () => {
  const [showIndustries, setShowIndustries] = useState(false);
  const [showInsight, setShowInsight] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  return (
    <section class="top-header" id="tophead">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light bg-white naving">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img class="logo horizontal-logo" src="../images/caramelconsortium.jpg" width="200px" alt="CONSORTIUM logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item naving-item">
                  <a class="nav-link link-nav px-lg-4 font-weight-bold" href="/">HOME</a>
                </li>
                <li class="nav-item dropdown dropdowns naving-item">
                  <a className="nav-link dropdown-toggle link-nav px-lg-4 drop-togg font-weight-bold" href="#"
                    id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded={"" + showIndustries} onMouseEnter={() => setShowIndustries(true)} onMouseLeave={() => setShowIndustries(false)}>
                    INDUSTRIES </a>
                  {
                    showIndustries && (
                      <div class="dropdown-menu dropdown-menus show" aria-labelledby="navbarDropdown2" 
                      onMouseEnter={() => setShowIndustries(true)} onMouseLeave={() => setShowIndustries(false)}>
                        <a class="dropdown-item item-drop-cons" href="automotive.html">Automotive</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="communication.html">Communication &amp; Media</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="lifescience.html">Life Science &amp; Healthcare</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="banking.html">Banking</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="consumer.html">Consumer Goods &amp; Services</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="travel.html">Travel</a>
                      </div>
                    )
                  }
                </li>
                <li class="nav-item dropdown dropdowns naving-item">
                  <a class="nav-link dropdown-toggle link-nav px-lg-4 drop-togg font-weight-bold" href="#"
                    id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded={"" + showInsight} onMouseEnter={() => setShowInsight(true)} onMouseLeave={() => setShowInsight(false)} >
                    INSIGHT</a>
                  {
                    showInsight && (
                      <div class="dropdown-menu dropdown-menus show" aria-labelledby="navbarDropdown3" 
                      onMouseEnter={() => setShowInsight(true)} onMouseLeave={() => setShowInsight(false)}>
                        <a class="dropdown-item item-drop-cons" href="../insights/artificial.html">Artificial Intelligence</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../insights/blockchain.html">Blockchain</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../insights/iot.html">Internet Of Things</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../insights/futureworkforce.html">Future Workforce</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../insights/cloudcomputing.html">Cloud Computing</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../insights/datascience.html">Data Science</a>
                      </div>
                    )
                  }
                </li>
                <li class="nav-item dropdown dropdowns naving-item">
                  <a class="nav-link dropdown-toggle link-nav px-lg-4 drop-togg font-weight-bold" href="#"
                    id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded={"" + showBusiness} onMouseEnter={() => setShowBusiness(true)} onMouseLeave={() => setShowBusiness(false)}>
                    BUSINESS</a>
                  {
                    (showBusiness &&
                      <div class="dropdown-menu dropdown-menus show" aria-labelledby="navbarDropdown3" 
                      onMouseEnter={() => setShowBusiness(true)}  onMouseLeave={() => setShowBusiness(false)}>
                        <a class="dropdown-item item-drop-cons" href="../business/strategy.html">Strategy</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../business/consulting.html">Consulting</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../business/digital.html">Digital</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../business/technology.html">Technology</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../business/operations.html">Operations</a>
                        <div class="dropdown-divider divider-drop-cons"></div>
                        <a class="dropdown-item item-drop-cons" href="../business/Application.html">Application Services</a>
                      </div>
                    )
                  }
                </li>
                <li class="nav-item naving-item">
                  <a class="nav-link link-nav px-lg-4 font-weight-bold" href="/contact">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default NavSection;