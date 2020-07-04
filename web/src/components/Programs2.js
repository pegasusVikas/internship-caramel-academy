import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "../components/css/owl.carousel.css";
import "../components/css/owl.theme.default.css";
import { Row, Container, Col } from "react-bootstrap";

export default class Programs2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.showtrue = this.showtrue.bind(this);
    this.showfalse = this.showfalse.bind(this);
  }

  showtrue() {
    console.log(this.state.isOpened);

    this.setState({
      isOpened: true,
    });
  }
  showfalse() {
    console.log(this.state.isOpened);

    this.setState({
      isOpened: false,
    });
  }

  render() {
    return (
      <div>
        <button
          className="tablink"
          //onclick="openPage('Home', this, 'rgba(255,183,77 ,1)')"
          onClick={this.showtrue}
          id="defaultOpen"
        >
          <h3>All Courses</h3>
        </button>
        <button
          id="popular"
          className="tablink"
          onClick={this.showfalse}
          //onclick="openPage('News', this, 'rgba(255,183,77 ,1)')"
        >
          <h3>Popular Courses</h3>
        </button>
        {/* <button class="tablink" onclick="openPage('Contact', this, 'rgba(255,183,77 ,1)')"><h3>Recent Courses</h3></button>
         */}
        {/* <button class="tablink" onclick="openPage('About', this, 'orange')">About</button> */}
        <div id="Home" className="tabcontent" style={{ paddingBottom: "20px" }}>
          {this.state.isOpened === true && (
            <div
              className="container-fluid"
              id="courses2"
              style={{
                display: "inline-block !important",
                paddingLeft: "60px",
                paddingTop: "15px",
              }}
            >
              {/* allcourses  */}
              <div className="row " id="courses3">
                <div className="course">
                  <div className="sub">
                    <img src="images/core ui.jpeg" />
                  </div>
                  <div className="sub1">
                    <h5>CoreUI</h5>
                    <a href="courses/coursespage/coreui.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/advancedui.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>Advanced UI</h5>
                    <a href="courses/coursespage/advancedui.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course" id="notreq">
                  <div className="sub">
                    <img src="images/angular.png" />
                  </div>
                  <div className="sub1">
                    <h5>Angular JS</h5>
                    <a href="courses/coursespage/angularjs.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course" id="notreq">
                  <div className="sub">
                    <img src="images/react2.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>React JS</h5>
                    <a href="courses/coursespage/reactjs.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course" id="notreq">
                  <div className="sub">
                    <img src="images/vue.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>Vue Js</h5>
                    <a href="courses/coursespage/vuejs.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course" id="notreq">
                  <div className="sub">
                    <img src="images/java1.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>JAVA</h5>
                    <a href="courses/coursespage/java.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course" id="notreq">
                  <div className="sub">
                    <img src="images/net_1.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>.NET</h5>
                    <a href="courses/coursespage/.net.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course" id="notreq">
                  <div className="sub">
                    <img src="images/nodejs.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>Node JS</h5>
                    <a href="courses/coursespage/nodejs.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
              </div>
              <a href="coursedetails.html" id="know">
                READ MORE&gt;&gt;
              </a>
            </div>
          )}
          {/* courses close */}
        </div>
        {this.state.isOpened == false && (
          <div id="News" className="tabcontent" style={{ paddingTop: "0px" }}>
            <div
              className="container-fluid "
              id="courses2"
              style={{
                display: "inline-block !important",
                paddingLeft: "60px",
              }}
            >
              {/* allcourses  */}

              <div className="row " id="courses3">
                <div className="course">
                  <div className="sub">
                    <img src="images/core ui.jpeg" />
                  </div>
                  <div className="sub1">
                    <h5>CoreUI</h5>
                    <a href="courses/coursespage/coreui.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/java1.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>Java</h5>
                    <a href="courses/coursespage/java.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/mean.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>MEAN</h5>
                    <a href="courses/coursespage/mean.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/ionic1.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>Ionic</h5>
                    <a href="courses/coursespage/ionic.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/ansible.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>Ansible</h5>
                    <a href="courses/coursespage/ansible.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/r pro.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>R Programming</h5>
                    <a href="courses/coursespage/java.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/.net_1.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>.NET</h5>
                    <a href="courses/coursespage/.net.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
                <div className="course">
                  <div className="sub">
                    <img src="images/nodejs.jpg" />
                  </div>
                  <div className="sub1">
                    <h5>NODE JS</h5>
                    <a href="courses/coursespage/nodejs.html">
                      <button id="read">KNOW MORE</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
