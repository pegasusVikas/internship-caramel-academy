import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Program3 from "./Programs3";
import axios from 'axios';

const cardStyle = {
  width: "10em",
  height: "8em",
  marginLeft: "1em",
};

const Programs1 = () => {

  axios.get("/api/categories")
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err.message);
  })

  return (
    <div>
      <section className="program-section" id="ourprogram">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6 col-10">
            <img src="images/show5.png" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 col-md-6 col-12"
            style={{ marginLeft: "40px" }}
          >
            <h2
              className="font-weight-bold tophead1"
              style={{ color: "rgba(124,77,255 ,1)" }}
            >
              OUR PROGRAMS
            </h2>
          </div>
        </div>
        <div className="container-fluid back">
          <div className="row wor">
            <div className="col-lg-12 col-sm-12 Drive">
              <h1
                id="h"
                style={{
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "40px",
                  marginTop: "43px",
                  marginLeft: "17px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Drive Your Transformation With Us
              </h1>
              <h1
                id="programpara"
                style={{
                  textAlign: "center",
                  marginLeft: "16px",
                  fontWeight: "bold",
                  paddingTop: "10px",
                  color: "white",
                }}
              >
                Collaboration Platform For All Your Technical Training Needs.
                <br />
                <span style={{ color: "#07ef07" }}>Join Us Today.</span>
              </h1>
              <div>
                {/* input tag */}
                {/* <input id="searchbar" onkeyup="search_course()" type="text"
		

        name="search" placeholder="Search courses..">  */}
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 progra">
              <div className="first">
                <div className="ruby-menu-demo-header">
                  {/* ########################### */}
                  {/* START: RUBY HORIZONTAL MENU */}

                  <div
                    className="ruby-wrapper"
                    style={{ width: "100%", marginLeft: "0px" }}
                  >
                    <ul className="ruby-menu">
                      <li className="ruby-menu-mega-blog">
                        <a
                          href="/caramelit_new/program"
                          style={{ fontSize: "2em" }}
                        >
                          Software Development
                        </a>

                        <div
                          style={{
                            height: "625px",
                          }}
                          className
                        >
                          <ul className="ruby-menu-mega-blog-nav">
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/uicourses">
                                Frontend
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/coreui">
                                          <img
                                            src="images/core ui.jpeg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Core UI</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/advancedui">
                                          <img
                                            src="images/advancedui.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Advanced UI</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second ">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/angularjs">
                                          <img
                                            src="images/angular.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Angular JS</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/reactjs">
                                          <img
                                            src="images/react2.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>React JS</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/vuejs">
                                          <img
                                            src="images/vue.js1.jpeg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Vue JS</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/backend">
                                Backend
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/java">
                                          <img
                                            src="images/java1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Java</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/.net">
                                          <img
                                            src="images/net2.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>.NET</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second ">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/nodejs">
                                          <img
                                            src="images/nodejs1.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Node JS</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/ruby">
                                          <img
                                            src="images/ruby1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Ruby</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/python">
                                          <img
                                            src="images/python1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Python</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/fullstack">
                                Full Stack
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/corejava">
                                          <img
                                            src="images/core-java.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Core Java</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/.netcore">
                                          <img
                                            src="images/net core.jpeg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>.NET Core</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second ">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/mevn">
                                          <img
                                            src="images/mevn.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>MEVN</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/advancejava">
                                          <img
                                            src="images/advanced1.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Advanced Java</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/mean">
                                          <img
                                            src="images/mean1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>MEAN</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/golang">
                                          <img
                                            src="images/golang.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Golang</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/fullstack.net">
                                          <img
                                            src="images/fullstacknet.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>.NET</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="coursespage/measn">
                                          <img
                                            src="images/measn.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>MEASN</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/rubyfullstack">
                                          <img
                                            src="images/ruby1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Ruby</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/functionaltesting">
                                Functional Testing
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/manualtesting">
                                          <img
                                            src="images/manualtesting.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Manual Testing</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/automation">
                                          <img
                                            src="images/automationtesting.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Automation Testing</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second ">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/cloudtesting">
                                          <img
                                            src="images/cloudtesting.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Cloud Testing</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="caramelit_new/courses/coursespage/fullstacktesting">
                                          <img
                                            src=" images/fullstacktesting.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Full Stack Testing</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/datascience">
                                Data Science
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/datascience.html">
                                          <img
                                            src="images/bootcamp.png"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>DS BootCamp</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/mobility.html">
                                          <img
                                            src="images/dsc.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Data Science Certification</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/devops.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>AI/ML Expert Course</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/aimlexpert.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>ML with Python</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Natural Language Processing</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Hadoop</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Deep Learning</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>R programming</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Data Analytics</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>AI/ML Foundation Course</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span className="ruby-dropdown-toggle" />
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/mobility">
                                Mobility
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/datascience.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Flutter</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/mobility.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Xamarin</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/devops.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Android</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Iconic</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Onsen UI</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>React Native</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>IOS</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/devops">DevOps</a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/datascience.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>DevOps Foundation</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/mobility.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>DevOps Expert</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/devops.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Ansibe</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>CHEF</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Dockers</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Kubernets</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Open Stack</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/cloud">
                                Cloud Computing
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/datascience.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>AWS Technical Essential</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/mobility.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>AWS Cloud Practitioner</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/devops.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>AWS Solution Architect Associate</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>AWS Developer Associate</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>AWS SysOps Associate Adminstrator</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Microsoft Azure Fundamentals</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/cloud.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>
                                          Microsoft Azure Expert Certification
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/cyber">
                                Cyber Security
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="images/cloudcomputing1.jpg">
                                          <img
                                            src="images/cyber.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>CISSP</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/digital.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>CISA</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/erp.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>CEH</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/it.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Comptia Security++</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>CISM</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span className="ruby-dropdown-toggle" />
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/it">IT</a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/it.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Salesforce</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Service Now</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Remedy</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Microdynamics</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <span className="ruby-dropdown-toggle" />
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/itcertification">
                                IT Certifications
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/it.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>ITIL Foundation</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>PMP</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>PMI-ACP</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Agile</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Prince 2</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/erp">ERP</a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/it.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>SAP</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Oracle</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Infor LN</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>RootStack</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="ruby-active-menu-item">
                              <a href="caramelit_new/courses/digital">
                                Digital Marketing
                              </a>
                              <div
                                className="ruby-grid ruby-grid-lined"
                                style={{ height: "264.359px", width: "1000px" }}
                              >
                                <div className="ruby-row">
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/it.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Digital Marketing Foundation</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img src="images/cloudcomputing1.jpg" />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Digital Marketing Expert</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>SEO</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>SMO</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>SCM</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>SMM</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Adword Expert</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Content Marketing</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ruby-col-3">
                                    <div className="second">
                                      <div className="third">
                                        <a href="courses/itcertification.html">
                                          <img
                                            src="images/cloudcomputing1.jpg"
                                            style={{ height: "110px" }}
                                          />
                                        </a>
                                      </div>
                                      <div className="four">
                                        <p>Branding</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <span className="ruby-dropdown-toggle" />
                      </li>
                      {/* <li className="ruby-menu-mega-blog">
                        <a href="program.html">Business Strategy</a>
                        <div style={{ height: "269.359px" }} className>
                          <ul className="ruby-menu-mega-blog-nav"> </ul>
                        </div>
                        <span className="ruby-dropdown-toggle" />
                      </li> */}
                    </ul>
                  </div>
                  {/* END:   RUBY HORIZONTAL MENU */}
                  {/* ########################### */}
                </div>

                {/* <div class="owl-carousel owl-theme" id="slider">	
					</div> */}
              </div>
            </div>
          </div>
          <Program3 />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Programs1;
