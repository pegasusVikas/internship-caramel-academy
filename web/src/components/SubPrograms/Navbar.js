import React, { Component } from 'react'


import 'aos/dist/aos.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true
    };
    // this.toggleMenu = this.toggleMenu.bind(this);
  }

  // toggleMenu(){
  //   this.setState({ menu: !this.state.menu })
  // }

  render() {


  // const show = (this.state.menu) ? "show" : "" ;
  
  return (
    <div   data-aos="zoom-in" data-aos-delay={1000} data-aos-offset={100}>
  <div className="container-fluid courses5" style={{zIndex:100000,position:'relative'}}>
    <section className="top-header" id="tophead">
      <div className="container-fluid" id="coursenav">
        <nav className="navbar navbar-expand-md navbar-light  naving1">
          <div className="container-fluid">
            <a className="navbar-brand" href="../acadamy">
              <img className="logo1 horizontal-logo" src="../../images/caramelacademy.png" width="200px" alt="forecastr logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item naving-item">
                  <a className="nav-link px-lg-4 font-weight-bold alink" href="../index">IT Services Home</a>
                </li>
                {/* <li className="nav-item dropdown dropdowns naving-item">
                  <div className="dropdown">
                    <button className="btn blue-col btn-default dropdown-toggle" type="button" data-toggle="dropdown">  <a className="blue-col">
                        Categories
                      </a>
                    </button>
                    <ul className="dropdown-menu  neededdrop">
                      <li className="dropdown-submenu">
                        <a className="test" tabIndex={-1} href="#">Programs <span className="caret" /></a>

                      </li>
                      <li className="dropdown-submenu">
                        <a className="visible" className="test" tabIndex={6} href="#">Sub 
                        
                        <span className="caret" /></a>
                        <ul id="dmenu2" className="dropdown-menu">
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/backend">Backend</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/cloud">Cloud</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/cyber">Cyber</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/datascience">Datascience</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/devops">Devops</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/digital">Digital</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/erp">Erp</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/fullstack">Fullstack</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/functionaltesting">Functionaltesting</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/it">It</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/itcertification">It certification</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/mobility">Mobility</a></li>
                          <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/uicourses">UI Courses</a></li>
                        </ul> 
                      </li>
                      <li className="dropdown-submenu">
                        <a className="test" tabIndex={-1} href="#">All Courses <span className="caret" /></a>
                        <ul id="dmenu3" className="dropdown-menu">
                          <li className="second-drop"><a tabIndex={-1} href="#">Courses</a></li>
                        </ul>
                      </li>
                      
                    </ul>
                  </div>
                </li> */}
                <li class="dropdown nav-item naving-item">
        <a class="dropdown-toggle btn blue-col" data-toggle="dropdown" href="#">Categories
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li class="dropdown-submenu"><a href="/caramelit_new/program">Programs</a></li>
          <li class="dropdown-submenu dropleft">
            <a class="test" tabindex="-1" href="#">Sub Programs <span class="caret"></span></a>
            {this.state.menu?
              <ul class="dropdown-menu " style={{paddingLeft:10}}>
              <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/backend">Backend</a></li>
        <li className="second-drop"><a  tabIndex={-1} href="/caramelit_new/courses/cloud">Cloud</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/cyber">Cyber</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/datascience">Datascience</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/devops">Devops</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/digital">Digital</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/erp">Erp</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/fullstack">Fullstack</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/functionaltesting">Functional Testing</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/it">Information Technology</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/itcertification">It certification</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/mobility">Mobility</a></li>
        <li className="second-drop"><a tabIndex={-1} href="/caramelit_new/courses/uicourses">UI Courses</a></li>
            </ul>
            :null}
          
          </li>
          <li class="dropdown-submenu"><a href="#">All Courses</a></li>
        </ul>
      </li>
                <li className="nav-item naving-item">
                  <a className="nav-link alink px-lg-4 font-weight-bold" href="../nodeindexcontactform/contactform">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <h1 className="sub-head">SUB PROGRAM</h1>
  </div></div>

  );
  
};
 
}

