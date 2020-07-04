import React, { Component } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CourseInformationTab from "./CourseInformationTab";
import CourseContentTab from "./CourseContentTab";
//import CourseInformationTab from "../Student/CourseInformationTab";

export default class AdminCoursePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("here");
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ backgroundColor: "#002333" }}>
          <div style={{ marginLeft: "4%", marginRight: "4%" }}>
            <h1 style={{ color: "white" }}>
              {this.props.course.title} Fundamentals
            </h1>
            <hr style={{ border: "2px solid #34dbeb" }} />
            <div className="row" style={{ paddingBottom: "4%" }}>
              <div
                className="col-md-8 col-sm-12"
                style={{
                  // backgroundColor: "yellow",
                  height: "500px",
                }}
              >
                {/* <img
                  src="https://images.unsplash.com/photo-1544237526-cae15a57ed1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=855&q=80"
                  style={{ width: "100%" }}
                /> */}
                <iframe
                  src="https://onedrive.live.com/embed?cid=1488ABC83D8F1B5E&resid=1488ABC83D8F1B5E%21122&authkey=AOLA8ubRNnNSyFI&em=2"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </div>
              <div className="col-md-4 col-sm-12" style={{ height: "500px" }}>
                <table
                  class="table table-striped"
                  style={{
                    // backgroundColor: "red",
                    color: "white",
                  }}
                >
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
                    {this.props.course.modules[0].lessons.map((lesson, i) => (
                      <tr style={{ width: "100%", display: "inline-table" }}>
                        {/* <td>{lesson.S_No}</td> */}
                        <td>{lesson.Lessons_List}</td>
                        <td>{lesson.Lessons_Time}</td>
                      </tr>
                    ))}
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 1</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 2</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 3</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 4</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 5</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 6</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 7</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 8</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 9</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 10</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 11</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 12</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 13</td>
                      <td>1:56</td>
                    </tr>
                    <tr style={{ width: "100%", display: "inline-table" }}>
                      <td>Topic 14</td>
                      <td>1:56</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
              <CourseInformationTab />
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
