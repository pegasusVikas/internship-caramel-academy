import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import axios from "axios";
class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: true,
      prClass: "active",
      subprClass: "",
      user: "",
    };
    this.mprogram = this.mprogram.bind(this);
    this.msubprogram = this.msubprogram.bind(this);
  }
  mprogram() {
    this.setState({ programs: true, prClass: "active", subprClass: "" });
  }

  msubprogram() {
    this.setState({ programs: false, prClass: "", subprClass: "active" });
  }
  render() {
    return (
      <div className="admin-dashboard" style={{ height: "100%" }}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
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
                  href="/lms/admin/admin_login"
                  style={{ fontSize: "1.5em" }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Link
          to={{ pathname: "dashboard", state: this.state.user }}
          className="btn btn-dark"
          style={{ margin: 50 }}
        >
          <div className="btn btn-info"><SkipPreviousIcon /> Back</div>
        </Link>
        <div className="form-group">
          <button
            className={"btn btn-success " + this.state.prClass}
            style={{ marginLeft: 50 }}
            onClick={this.mprogram}
          >
            Manage Program
          </button>
          <button
            className={"btn btn-success " + this.state.subprClass}
            style={{ marginLeft: 50 }}
            onClick={this.msubprogram}
          >
            Manage Sub Program
          </button>
        </div>
        {this.state.programs ? <AddProgram /> : <AddSubProgram />}
      </div>
    );
  }
}

class AddProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/api/categories", this.state)
      .then((res) => {
        if (res.data.message) {
          alert("Added Sucessfully");
        } else {
          alert("Error While Adding");
        }
      });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    return (
      <div style={{
        marginLeft: 100,
        marginRight: 100,
        marginTop: 0,
        paddingBottom: 75,
      }}>
        <div className="card">
          <div className="card-body">
            <form style={{ padding: 15 }}>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"
                  name="title"
                  placeholder="Course Title"
                  required
                />
              </div>
              <div class="form-group">
                <label for="desc">Description</label>
                <textarea
                  className="form-control"
                  onChange={this.handleChange}
                  name="description"
                  id="desc"
                  placeholder="Description"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                Save Category
              </button>
              <div class="form-group">
                <a
                  href="/lms/admin/viewcategory"
                  className="btn btn-info form-control"
                  style={{ marginTop: 25, height: "4em" }}
                >
                  View Category
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

class AddSubProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      title: "",
      description: "",
      catId: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/api/categories", this.state)
      .then((res) => {
        if (res.data.categories) {
          this.setState({ categories: res.data.categories });
        } else {
          console.log("error");
        }
      });
  }
  onSubmit(e) {
    e.preventDefault();
    // axios.post("http://localhost:3003/admin/addsubcategory",this.state).
    axios
      .post("/api/api/subcategories", this.state)
      .then((res) => {
        if (res.data.message) {
          alert("Added Sucessfully");
        } else {
          alert("Error While Adding");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    return (
      <div
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginTop: 0,
          paddingBottom: 75,
        }}
      >
        <div className="card">
          <div className="card-body">
            <form style={{ backgroundColor: "white", padding: 15 }}>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  name="title"
                  placeholder="Course Title"
                  required
                />
              </div>
              <div class="form-group">
                <label for="desc">Description</label>
                <textarea
                  className="form-control"
                  onChange={this.handleChange}
                  name="description"
                  id="desc"
                  placeholder="Description"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Select Category</label>
                <select
                  className="form-control"
                  id="category"
                  placeholder="Description"
                  name="catId"
                  required
                  onChange={this.handleChange}
                >
                  <option value="" selected disabled hidden>
                    Select Category
                  </option>
                  {this.state.categories.map((CATEGORY, i) => {
                    return (
                      <option key={i} value={CATEGORY._id}>
                        {CATEGORY.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmit}
              >
                Save Sub Category
              </button>

              <div class="form-group">
                <a
                  href="/lms/admin/viewcategory"
                  className="btn btn-info form-control"
                  style={{
                    marginTop: 25,
                    height: "4em",
                    verticalAlign: "text-bottom",
                  }}
                >
                  View Category
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCategory;
