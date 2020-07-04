import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
      

const Navbar1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div data-aos="zoom-in" data-aos-delay={2000} data-aos-offset={100}>
  <div className="container-fluid courses5">
    <section className="top-header" id="tophead">
      <div className="container-fluid" id="coursenav">
        <nav className="navbar navbar-expand-md navbar-light naving1">
          <div className="container-fluid">
            <a className="navbar-brand" href="../acadamy.html">
              <img className="logo1 horizontal-logo" src="../images/caramelacademy.png" width="200px" alt="forecastr logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item naving-item">
                  <a className="nav-link px-lg-4 font-weight-bold alink" href="../index.html">IT Services Home</a>
                </li>
                <li className="nav-item dropdown dropdowns naving-item">
                  <div className="dropdown">
                    {/* <button className="btn blue-col btn-default dropdown-toggle" type="button" data-toggle="dropdown">  <a className="blue-col">
                        Categories
                      </a>
                    </button> */}
                    </div>
                    
                    <div className="nav-item dropdown dropdowns naving-item">
      <Navbar className="btn blue-col btn-default dropdown-toggle"   >
              <DropdownToggle type="button" className="dropdown">
                Options
              </DropdownToggle>
               
              <DropdownMenu className="blue-col">
              
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
        </Navbar> 
        </div>
        </li>
        <li className="nav-item naving-item">
                  <a className="nav-link alink px-lg-4 font-weight-bold" href="../nodeindexcontactform/contactform.html">Contact Us</a>
                </li>
                    </ul>
                    </div>
        </div>
        </nav>
                    </div>
                    </section>
                    </div>
        </div>

  );
}



export default Navbar1;
