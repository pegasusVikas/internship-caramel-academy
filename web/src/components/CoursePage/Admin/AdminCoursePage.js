import React, { Component } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CourseInformationTab from "./CourseInformationTab";
import CourseContentTab from "./CourseContentTab";

export default class AdminCoursePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("hi");
  }
  render() {
    const src = this.props.course.embed;
    const user = JSON.parse(localStorage.getItem("user"));
    const instructor = JSON.parse(localStorage.getItem("instructor"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return (
      <div>
        <Navbar />
        <div style={{ backgroundColor: "#002333", height: "750px" }}>
          <h4 style={{ color: "white", marginLeft: "4%", fontWeight: "bold" }}>
            <span style={{ color: "#1affff" }}>{this.props.course.title} </span>Fundamentals
          </h4>
          <div style={{ marginLeft: "4%", marginRight: "4%" }}>
            {this.props.course.enrolledBy.indexOf(user._id) !== -1 ?
            <div className="row" style={{ paddingBottom: "4%" }}>
              <div className="col-md-8 col-sm-12" style={{ height: "500px" }}
              >
                <iframe 
                src={src} 
                width="100%" 
                height="700px" 
                frameborder="0">
                </iframe>
              </div>
              <div className="col-md-4 col-sm-12" style={{ height: "720px" }}>
                <table class="table table-striped" style={{ color: "white" }}>
                  <thead>
                    <h3>15 Lectures (29m 00s)</h3>
                  </thead>
                  <tbody
                    style={{
                      overflowY: "scroll",
                      height: "90%",
                      width: "100%",
                      position: "absolute",
                    }}
                  >
                    {this.props.course.table[0].lessons.map((lesson, i) => (
                      <tr style={{ width: "100%", display: "inline-table" }}>
                        <td>{lesson.S_No}</td>
                        <td>{lesson.List}</td>
                        <td>{lesson.Lessons_Time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> :
            <div class="background">
              <div class="transbox">
                <p>TO VIEW COURSE CONTENT</p>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "40%" }}
                >
                  ENROLL NOW
                </button>
              </div>
            </div>
            }
          </div>
        </div>
        <div>
          <Tabs
            headerStyle={{
              backgroundColor: "#292b7d",
              borderRadius: "0",
            }}
            activeHeaderStyle={{
              backgroundColor: "#002333",
            }}
            className="coursepagetabs"
          >
            <Tab label="Course Information">
              <CourseInformationTab user={admin !== null ? "Admin" : instructor !== null ? "Instructor" : "Student"}/>
            </Tab>
            <Tab label="Table of Contents">
              <CourseContentTab course={this.props.course} />
            </Tab>
            <Tab label="Projects">Tab 3 content</Tab>
            <Tab label="Additional Resources">Tab 4 content</Tab>
            <Tab label="Reviews">Tab 5 content</Tab>
            <Tab label="Notes">Tab 6 content</Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    );
  }
}