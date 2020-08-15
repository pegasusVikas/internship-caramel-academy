import React, { Component } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import CourseContentTab from "./CourseContentTab";
import DescriptionIcon from '@material-ui/icons/Description';
import CreateIcon from '@material-ui/icons/Create';
import PagesIcon from '@material-ui/icons/Pages';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CodeIcon from '@material-ui/icons/Code';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import "./nav.css";

export default class AdminCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    }
  }
  componentDidMount() {
    console.log("hi");
  }
  render() {
    const src = this.props.course.embed;
    const user = JSON.parse(localStorage.getItem("user"));
    const instructor = JSON.parse(localStorage.getItem("instructor"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    const opaque = user !== null && this.props.course.enrolledBy.indexOf(user._id) !== -1 || admin !== null || instructor !== null ? false : true
    return (
      <div>
        <Navbar />
        <div style={{ backgroundColor: "#002333", height: "800px" }}>
          <h4 style={{ color: "white", marginLeft: "4%", fontWeight: "bold" }}>
            <span style={{ color: "#1affff" }}>{this.props.course.title} </span>Fundamentals
          </h4>
          <div style={{ marginLeft: "4%", marginRight: "4%" }}>
            {!opaque ?
            <div className="row" style={{ paddingBottom: "4%" }}>
              <div className="col-md-8 col-sm-12"
              >
                <iframe 
                src={src} 
                width="100%" 
                height="700px" 
                frameborder="0">
                </iframe>
                {user !== null && 
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div className="nav-link"><SaveAltIcon /> Save</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link"><PrintIcon /> Print</div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link"><ShareIcon /> Share</div>
                  </li>
                </ul>
                }
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
              <div class="transbox" style={{ height: "700px" }}>
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
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <div className="nav-link" onClick={() => this.setState({ tab: 1 })} style={{ backgroundColor: this.state.tab === 1 ? "#aa66cc" : "" }}><DescriptionIcon /> Lessons {user === null && !opaque && <><br /> Edit</>}</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => this.setState({ tab: 2 })} style={{ backgroundColor: this.state.tab === 2 ? "#aa66cc" : "" }}><CreateIcon /> Handouts {user === null && !opaque && <><br /> Edit</>}</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => this.setState({ tab: 3 })} style={{ backgroundColor: this.state.tab === 3 ? "#aa66cc" : "" }}><PagesIcon /> Tutorials {user === null && !opaque && <><br /> Edit</>}</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => this.setState({ tab: 4 })} style={{ backgroundColor: this.state.tab === 4 ? "#aa66cc" : "" }}><AssessmentIcon /> Scenarios {user === null && !opaque &&  <><br /> Edit</>}</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => this.setState({ tab: 5 })} style={{ backgroundColor: this.state.tab === 5 ? "#aa66cc" : "" }}><CodeIcon /> Assignments {user === null && !opaque &&  <><br /> Edit</>}</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => this.setState({ tab: 6 })} style={{ backgroundColor: this.state.tab === 6 ? "#aa66cc" : "" }}><ViewColumnIcon /> Examples {user === null && !opaque &&  <><br /> Edit</>}</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => this.setState({ tab: 7 })} style={{ backgroundColor: this.state.tab === 7 ? "#aa66cc" : "" }}><EqualizerIcon /> Additional Details {user === null && !opaque && <><br /> Edit</>}</div>
            </li>
          </ul>
          {this.state.tab === 1 && <CourseContentTab section="Lessons" user={ user !== null ? this.props.course.instructor : false } opaque={opaque}/>}
          {this.state.tab === 2 && <CourseContentTab section="Handouts" user={ user !== null ? this.props.course.instructor : false } opaque={opaque} />} 
          {this.state.tab === 3 && <CourseContentTab section="Tutorials" user={ user !== null ? this.props.course.instructor : false } opaque={opaque}/>}
          {this.state.tab === 4 && <CourseContentTab section="Scenarios" user={ user !== null ? this.props.course.instructor : false } opaque={opaque}/>}
          {this.state.tab === 5 && <CourseContentTab section="Assignments" user={ user !== null ? this.props.course.instructor : false } opaque={opaque}/>}
          {this.state.tab === 6 && <CourseContentTab section="Examples" user={ user !== null ? this.props.course.instructor : false } opaque={opaque}/>}
          {this.state.tab === 7 && <CourseContentTab section="Addition Details" user={ user !== null ? this.props.course.instructor : false } opaque={opaque}/>}
        </div>
        <Footer />
      </div>
    );
  }
}