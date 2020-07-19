import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export class ViewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
    this.updateList = this.updateList.bind(this);
  }

  //   handleChange(event) {
  //     const { name, value, type, checked } = event.target;
  //     type === "checkbox"
  //       ? this.setState({ [name]: checked })
  //       : this.setState({ [name]: value });
  //   }
  componentDidMount() {
    axios.get("http://localhost:3004/api/courses").then((res) => {
      console.log(res.data);
      if (res.data) {
        this.setState({ courses: res.data.courses });
      } else {
        console.log("error");
      }
    });
  }
  updateList() {
    axios.get("http://localhost:3004/api/courses").then((res) => {
      if (res.data) {
        this.setState({ courses: res.data.courses });
      } else {
        console.log("error");
      }
    });
  }

  render() {
    return (
      <div
        className="view-table"
        style={{
          fontSize: "1.0em",
          marginLeft: 100,
          marginRight: 100,
          marginTop: 0,
          paddingBottom: 75,
        }}
      >
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Course Title</th>
              <th scope="col">Course Description</th>
              <th scope="col"> Course Category</th>
              <th scope="col"> Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course, i) => {
              return (
                <tr>
                  <Link
                    to={
                      "/caramelit_new/courses/coursespage/" +
                      course.title.toLowerCase().split(" ").join("")
                    }
                  >
                    <td>{course.title}</td>
                  </Link>
                  <td>{course.description}</td>
                  <td>{course.subcategoryName}</td>

                  <td>
                    <a href="#">Edit</a>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        axios
                          .delete(
                            "http://localhost:3004/course/delete/" + course._id
                          )
                          .then(() => this.updateList())
                          .catch((err) => console.log(err))
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
