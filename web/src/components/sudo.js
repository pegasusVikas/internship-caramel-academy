/* eslint-disable react/jsx-no-undef */
import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "../components/css/owl.carousel.css"
import "../components/css/owl.theme.default.css"
import {Tab, Row , Col , Nav} from 'react-bootstrap';

const Sudo = () => {
  return (
    <div>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    {/* <Col sm={3}> */}
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">
            <button
        className="tablink"
        onclick="openPage('Home', this, 'rgba(255,183,77 ,1)')"
        id="defaultOpen">
      
       <Col> <h3>All Courses</h3></Col>
      </button></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><h3>Popular Courses</h3></Nav.Link>
        </Nav.Item>
      </Nav>
    {/* </Col> */}
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div id="News" className="tabcontent">
    <div
      className="container-fluid "
      id="courses2"
      style={{ display: "inline-block !important", paddingLeft: "60px" }}
    >
      {/* allcourses  */}
      <div className="row " id="courses3">
      <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/core ui.jpeg" />
          </div>
          <div className="sub1">
            <h5>Core UI</h5>
            <a href="courses/coursespage/coreui.html"  className="btn btn-primary stretched-link"  id="read">
            KNOW MORE
            </a>
          </div>
        </div>
        <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/java1.jpg" />
          </div>
          <div className="sub1">
            <h5>Java</h5>
            <a href="courses/coursespage/java.html"  className="btn btn-primary stretched-link" id="read">
            KNOW MORE
            </a>
          </div>
        </div>
        <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/mean.jpg" />
          </div>
          <div className="sub1">
            <h5>MEAN</h5>
            <a href="courses/coursespage/mean.html"  className="btn btn-primary stretched-link" id="read">
            KNOW MORE
            </a>
          </div>
        </div>
        <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/ionic1.jpg" />
          </div>
          <div className="sub1">
            <h5>Ionic</h5>
            <a href="courses/coursespage/ionic.html"  className="btn btn-primary stretched-link"  id="read">
            KNOW MORE
            </a>
          </div>
        </div>
        <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/ansible.jpg" />
          </div>
          <div className="sub1">
            <h5>Ansible</h5>
            <a href="courses/coursespage/ansible.html"  className="btn btn-primary stretched-link"  id="read">
            KNOW MORE
            </a>
          </div>
        </div>
        <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/r pro.jpg" />
          </div>
          <div className="sub1">
            <h5>R Programming</h5>
            <a href="courses/coursespage/java.html"  className="btn btn-primary stretched-link"  id="read">
            KNOW MORE
            </a>
          </div>
        </div>
        <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/net_1.jpg" />
          </div>
          <div className="sub1">
            <h5>.NET</h5>
            <a href="courses/coursespage/.net.html"  className="btn btn-primary stretched-link"  id="read">
            KNOW MORE
            </a>
          </div>
        </div>
        <div className="card" id="notreq" style={{margin:10, width:300}}>
          <div className="sub">
            <img alt="" src="images/nodejs.jpg" />
          </div>
          <div className="sub1">
            <h5>NODE JS</h5>
            <a href="courses/coursespage/nodejs.html"  className="btn btn-primary stretched-link"  id="read">
            KNOW MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

          {/* <Sonnet /> */}
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          {/* <Sonnet /> */}
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
   
    </div> 

)
}

export default Sudo;


