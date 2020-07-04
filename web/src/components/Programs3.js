import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tabs, Tab } from "react-bootstrap-tabs";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Programs3 = () => {
  return (
    <div>
      {/* <div
        className="ruby-wrapper"
        style={{ width: "100%", marginLeft: "0px" }}
      >
        <ul className="ruby-menu">
          <li className="ruby-menu-mega-blog">
            <a href="/caramelit_new/program" style={{ fontSize: "2em" }}>
              Software Development
            </a> */}
      {/* <Tabs
        onSelect={(index, label) => console.log(label + " selected")}
        headerStyle={{ fontWeight: "bold" }}
        activeHeaderStyle={{ color: "blue" }}
        contentStyle={{ backgroundColor: "yellow" }}
      > */}
      <Tabs
        headerStyle={{
          backgroundColor: "black",
          marginLeft: "1px",
          marginBottom: "1px",
        }}
      >
        <Tab label="Frontend">
          {" "}
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
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

              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
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
        </Tab>
        <Tab label="Backend">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/java">
                      <img src="images/java1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Java</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/.net">
                      <img src="images/net2.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>.NET</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
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

              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/ruby">
                      <img src="images/ruby1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Ruby</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
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
        </Tab>
        <Tab label="Full Stack">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
                <div className="second ">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/mevn">
                      <img src="images/mevn.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>MEVN</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/mean">
                      <img src="images/mean1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>MEAN</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="coursespage/measn">
                      <img src="images/measn.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>MEASN</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/rubyfullstack">
                      <img src="images/ruby1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Ruby</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="Functional Testing">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
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
              <div className="ruby-col-2">
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

              <div className="ruby-col-2">
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
        </Tab>
        <Tab label="Data Science">
          {" "}
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/dsbootcamp">
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
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/datascientistcertification">
                      <img src="images/dsc.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Data Science Certification</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/coursespage/aimlexpertcourse">
                      <img
                        src="images/aimlexpert.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>AI/ML Expert Course</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/mlwithpython">
                      <img
                        src="images/mlpython.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>ML with Python</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/naturallanguageprocessing">
                      <img src="images/nlp.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Natural Language Processing</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/hadoop">
                      <img
                        src="images/hadoop1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Hadoop</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/deeplearning">
                      <img
                        src="images/deeplearning1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Deep Learning</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/rprogramming">
                      <img src="images/r pro.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>R programming</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/dataanalytics">
                      <img
                        src="images/dataanalytics1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Data Analytics</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/aimlfoundationcourse">
                      <img
                        src="images/aimlfound.jpg"
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
        </Tab>
        <Tab label="Mobility">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/flutter">
                      <img
                        src="images/flutter1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Flutter</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/xamarin">
                      <img
                        src="images/xamarin1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Xamarin</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/android">
                      <img
                        src="images/android1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Android</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/ionic">
                      <img
                        src="images/ionic1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Iconic</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/onsenui">
                      <img
                        src="images/onsenui.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Onsen UI</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/reactnative">
                      <img
                        src="images/reactnative.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>React Native</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/ios">
                      <img src="images/ios.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>IOS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="DevOps">
          {" "}
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/devopsfoundation">
                      <img
                        src="images/devopsfound.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>DevOps Foundation</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/devopsexpert">
                      <img
                        src="images/devopsexpert.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>DevOps Expert</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/ansible">
                      <img
                        src="images/ansible2.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Ansibe</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/chef">
                      <img src="images/chef2.png" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>CHEF</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/docker">
                      <img
                        src="images/docker.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Dockers</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/kubernets">
                      <img
                        src="images/kubernates.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Kubernets</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/openstack">
                      <img
                        src="images/openstack1.jpg"
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
        </Tab>
        <Tab label="Cloud Computing">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/awstechnicalessentials">
                      <img
                        src="images/aws technical.jpeg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>AWS Technical Essential</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/awscloudpractitioner">
                      <img
                        src="images/awscloud2.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>AWS Cloud Practitioner</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/awssolutionarchitectassociate ">
                      <img
                        src="images/awssolutionarchi2.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>AWS Solution Architect Associate</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/awsdeveloperassociate">
                      <img
                        src="images/awsdeveloper1.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>AWS Developer Associate</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/awssysopsassociateadministrator">
                      <img
                        src="images/aws sysops.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>AWS SysOps Associate Adminstrator</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/microsoftazurefundamentals">
                      <img src="images/Mcf.png" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Microsoft Azure Fundamentals</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/microsoftazureexpertcertification">
                      <img src="images/mae.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Microsoft Azure Expert Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="Cyber Security">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/cissp">
                      <img
                        src="images/cissp2.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>CISSP</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/cisa">
                      <img src="images/cisa1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>CISA</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/ceh">
                      <img src="images/ceh.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>CEH</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/comptiasecurity++">
                      <img
                        src="images/comptiasecurity.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Comptia Security++</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/cism">
                      <img src="images/cism1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>CISM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab label="Information Technology">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/salesforce">
                      <img
                        src="images/salesforce1.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Salesforce</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/servicenow">
                      <img
                        src="images/service-now.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Service Now</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/remedy">
                      <img
                        src="images/remedy.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Remedy</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/microsoftdynamics">
                      <img
                        src="images/microdynamics.jpg"
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
        </Tab>
        <Tab label="IT Certifications">
          {" "}
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/itilfoundation">
                      <img src="images/itil.png" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>ITIL Foundation</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/pmp">
                      <img src="images/pmp.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>PMP</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/pmiacp">
                      <img
                        src="images/PMI-ACP.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>PMI-ACP</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/agile">
                      <img src="images/Agile.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>Agile</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/prince">
                      <img
                        src="images/prince1.jpg"
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
        </Tab>
        <Tab label="ERP">
          {" "}
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/sap">
                      <img src="images/sap.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>SAP</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/oracle">
                      <img
                        src="images/oracle.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Oracle</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/inforln">
                      <img
                        src="images/inforln.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Infor LN</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/rootstack">
                      <img
                        src="images/rootstack1.jpg"
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
        </Tab>
        <Tab label="Digital Marketing">
          <div
            className="ruby-grid ruby-grid-lined"
            style={{ height: "422px" }}
          >
            <div className="ruby-row">
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/digitalmarketingfoundation">
                      <img
                        src="images/digifound.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Digital Marketing Foundation</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/digitalmarketingexpert">
                      <img src="images/digimarketexpert.jpg" />
                    </a>
                  </div>
                  <div className="four">
                    <p>Digital Marketing Expert</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/seo">
                      <img src="images/SEO-1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>SEO</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/smo">
                      <img src="images/smo1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>SMO</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/scm">
                      <img src="images/scm1.jpg" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>SCM</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/smm">
                      <img src="images/smm1.png" style={{ height: "110px" }} />
                    </a>
                  </div>
                  <div className="four">
                    <p>SMM</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/adwordsfoundation">
                      <img
                        src="images/adwordfoun.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Adwords Foundation</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/adwordexpert">
                      <img
                        src="images/adwordexpert.jpg"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Adword Expert</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/contentmarketing">
                      <img
                        src="images/contentmarketing.png"
                        style={{ height: "110px" }}
                      />
                    </a>
                  </div>
                  <div className="four">
                    <p>Content Marketing</p>
                  </div>
                </div>
              </div>
              <div className="ruby-col-2">
                <div className="second">
                  <div className="third">
                    <a href="caramelit_new/courses/coursespage/branding">
                      <img
                        src="images/branding.jpg"
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
        </Tab>
      </Tabs>
      <br />
      <br />
      {/* </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Programs3;
