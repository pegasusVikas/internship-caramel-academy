import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import axios from "axios";

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      subcategory: null,
      // subcategoryName: null,
      module: 0,
      project: null,
      test: null,
      lesson: null,
      scenario: null,

      //file2: null,
      subcategories: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectModule = this.selectModule.bind(this);
    this.uploadModule = this.uploadModule.bind(this);
    this.uploadLesson = this.uploadLesson.bind(this);
    this.uploadScenario = this.uploadScenario.bind(this);
    this.uploadTest = this.uploadTest.bind(this);
    this.uploadProject = this.uploadProject.bind(this);
  }

  componentDidMount() {
    console.log("title:" + this.state.title);
    console.log("Description:" + this.state.description);
    console.log("Category:" + this.state.category);
    console.log("Module:" + this.state.module);
    // console.log("file1:" + this.state.file1);
    // console.log("file2:" + this.state.file2);
    axios
      .get("http://localhost:3004/api/subcategories", this.state)
      .then((res) => {
        if (res.data.subcategories) {
          this.setState({
            subcategories: res.data.subcategories,
            subcategory: res.data.subcategories[0]._id,
          });
          console.log(res.data.subcategories[0]._id);
        } else {
          console.log("error");
          // alert('Error While Adding');
        }
      });
  }

  selectModule(e) {
    const { name } = e.target;
    console.log(e.target.files[0]);
    this.setState({
      [name]: e.target.files[0],
    });
  }

  uploadLesson(e) {
    e.preventDefault();
    console.log("upload  lesson");
    //console.log(this.state.file1);
    const data = new FormData();
    data.append("lesson", this.state.lesson);
    console.log(data);
    console.log("start");
    axios
      .post("http://localhost:3004/api/module/upload/lessons", data)
      .then((res) => console.log(res.statusText));
    console.log("end");
  }

  uploadScenario(e) {
    e.preventDefault();
    console.log("upload scenario");
    //console.log(this.state.file1);
    const data = new FormData();
    data.append("scenario", this.state.scenario);
    console.log(data);
    console.log("start");
    axios
      .post("http://localhost:3004/api/module/upload/scenarios", data)
      .then((res) => console.log(res.statusText));
    console.log("end");
  }

  uploadTest(e) {
    e.preventDefault();
    console.log("upload Test");
    console.log(this.state.test);
    const data = new FormData();
    data.append("test", this.state.test);
    console.log(data);
    console.log("start");
    axios
      .post("http://localhost:3004/api/module/upload/tests", data)
      .then((res) => console.log(res.statusText));
    console.log("end");
  }

  uploadProject(e) {
    e.preventDefault();
    console.log("upload project");
    console.log(this.state.project);
    const data = new FormData();
    data.append("project", this.state.project);
    console.log(data);
    console.log("start");
    axios
      .post("http://localhost:3004/api/module/upload/projects", data)
      .then((res) => console.log(res.statusText));
    console.log("end");
  }

  uploadModule(e) {
    e.preventDefault();
    console.log("upload module");
    axios
      .post("http://localhost:3004/module/create")
      .then((res) => console.log(res.statusText));
    const x = this.state.module;
    this.setState({
      module: x + 1,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("title:" + this.state.title);
    console.log("Description:" + this.state.description);
    console.log("Category:" + this.state.category);
    console.log("Module:" + this.state.module);
    // console.log("file1:" + this.state.file1);
    // console.log("file2:" + this.state.file2);
    const newCourse = {
      title: this.state.title,
      description: this.state.description,
      subcategoryId: this.state.subcategory,
      // subcategoryName: this.state.subcategoryName,
    };
    console.log(newCourse);
    axios
      .post("http://localhost:3004/course/create", newCourse)
      .then((res) => console.log(res.data));

    this.setState({
      title: "",
      description: "",
      module: 0,
      file1: null,
      file2: null,
    });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    const user = {
      name: "john",
      email: "a@a.c",
    };
    return (
      <div className="admin-dashboard">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/lms/">
            <img
              src="../../Caramellogo.png"
              alt="logo"
              style={{
                width: "240px",
                height: "65px",
                margin: "0px 0px 0px 0px",
              }}
            />
          </Link>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo03"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/lms/admin/admin_login"
                  style={{ fontSize: "2.5em" }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div
          className=""
          style={{
            fontSize: "2.1em",
            marginLeft: 100,
            marginRight: 100,
            marginTop: 50,
            paddingBottom: 75,
          }}
        >
          {/* <a href="#" className="btn btn-dark">Back</a> */}
          <Link to="dashboard" className="btn btn-dark" params={{ user: user }}>
            Back
          </Link>
          <form
            style={{ backgroundColor: "white", padding: 15 }}
            onSubmit={this.onSubmit}
          >
            <div>
              <div class="form-group">
                <label for="title">Course Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Course Title"
                  value={this.state.title}
                  required
                  onChange={this.handleChange}
                />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div class="form-group">
                <label for="desc">Description</label>
                <textarea
                  type="textarea"
                  className="form-control"
                  name="description"
                  id="desc"
                  placeholder="Description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              {/* <div class="form-group">
                <label for="modules">Number of Modules</label>
                <input
                  type="text"
                  className="form-control"
                  name="modules"
                  id="modules"
                  placeholder="No of Modules"
                  required
                  value={this.state.module}
                  onChange={this.handleChange}
                />
              </div> */}
              <div>
                <label>Upload Modules</label>
                <p>{this.state.module} modules uploaded</p>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label>Upload Lesson</label>
                      <br />
                      <input
                        type="file"
                        name="lesson"
                        //value={this.state.lesson}
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        required
                        onChange={this.selectModule}
                      />
                      <br />
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={this.uploadLesson}
                      >
                        Upload Lesson
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label>Upload Scenario</label>
                      <br />
                      <input
                        type="file"
                        name="scenario"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        required
                        onChange={this.selectModule}
                      />
                      <br />
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={this.uploadScenario}
                      >
                        Upload Scenario
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label>Upload Project</label>
                      <br />
                      <input
                        type="file"
                        name="project"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        required
                        onChange={this.selectModule}
                      />
                      <br />
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={this.uploadProject}
                      >
                        Upload Project
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label>Upload Test</label>
                      <br />
                      <input
                        type="file"
                        name="test"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        required
                        onChange={this.selectModule}
                      />
                      <br />
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={this.uploadTest}
                      >
                        Upload Test
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={this.uploadModule}
                >
                  Upload Module
                </button>
              </div>

              {/* <div class="form-group">
                <label for="category">Select Category</label>
                <select
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Select Category"
                  required
                  onChange={this.handleChange}
                >
                  {this.state.subcategories.map((subcategory, i) => (
                    <option>{subcategory.title}</option>
                  ))}
                </select>
              </div> */}
              <div class="form-group">
                <label for="subcategory">Select Sub Category</label>
                <select
                  className="form-control"
                  name="subcategory"
                  id="subcategory"
                  placeholder="Select Sub Category"
                  onChange={this.handleChange}
                  required
                >
                  {/* {this.state.subcategories.map((subcategory, i) => (
                    <option>{subcategory.title}</option>
                  ))} */}
                  {this.state.subcategories.map((SUBCATEGORY, i) => {
                    return (
                      <option
                        key={i}
                        value={SUBCATEGORY._id}
                        name="subcategory"
                      >
                        {SUBCATEGORY.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* <button className="btn btn-info form-control" onClick={this.next}>Next</button> */}
              {/* <div class="form-group">
                <label for="exampleFormControlFile1">
                  Upload Image for Course title
                </label>
                <input
                  type="file"
                  name="file1"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  required
                  onChange={this.handleChange}
                />
              </div> */}
              {/* <div class="form-group">
                <label for="exampleFormControlFile1">
                  Upload table of content
                </label>
                <input
                  type="file"
                  name="file2"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  required
                  onChange={this.handleChange}
                />
              </div> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-secondary"
                style={{ marginLeft: 10 }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddCourse;
