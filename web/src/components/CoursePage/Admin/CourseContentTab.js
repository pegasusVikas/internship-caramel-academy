import React, { Component } from "react";

import { Tabs, Tab } from "react-bootstrap-tabs";
import { Collapse } from "react-collapse";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "21em",
  height: "14em",
  marginLeft: "1em",
};

export default class CourseInformationTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "4%" }}>
          <h1>Table of Content</h1>
          <table className="table table-striped">
            <tbody>
              {this.props.course.table[0].lessons.map((lesson, i) => (
                <tr>
                  <td>{lesson.S_No}</td>
                  <td>{lesson.List}</td>
                  <td>{lesson.Lessons_Time}</td>
                </tr>
              ))}
            </tbody>
            {/* <h2>{this.props.course.title}</h2> */}
          </table>
        </div>
      </div>
    );
  }
}
