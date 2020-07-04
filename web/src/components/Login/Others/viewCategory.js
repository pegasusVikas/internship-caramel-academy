import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
class ViewCateories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: true,
      prClass: "active",
      subprClass: "",
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
                  style={{ fontSize: "1.0em" }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Link to="dashboard" className="btn btn-dark" style={{ margin: 50 }}>
          Back
        </Link>
        <div className="form-group switch">
          <button
            className={"btn btn-success " + this.state.prClass}
            style={{ marginLeft: 50 }}
            onClick={this.mprogram}
          >
            View Group(Program)
          </button>
          <button
            className={"btn btn-success " + this.state.subprClass}
            style={{ marginLeft: 50 }}
            onClick={this.msubprogram}
          >
            View Sub-Group(Sub-Program)
          </button>
        </div>
        {this.state.programs ? <ViewProgram /> : <ViewSubProgram />}
      </div>
    );
  }
}

class ViewProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    // this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   axios
  //     .get("http://localhost:3004/api//categories", this.state)
  //     .then((res) => {
  //       if (res.data.status) {
  //         alert("Added Sucessfully");
  //       } else {
  //         alert("Error While Adding");
  //       }
  //     });
  // }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  componentDidMount() {
    axios
      .get("http://localhost:3004/api/categories", this.state)
      .then((res) => {
        if (res.data.categories) {
          this.setState({ categories: res.data.categories });
        } else {
          console.log("error");
          // alert('Error While Adding');
        }
      });
  }
  updateList()
  {
    axios
    .get("http://localhost:3004/api/categories", this.state)
    .then((res) => {
      if (res.data.categories) {
        this.setState({ categories: res.data.categories });
      } else {
        console.log("error");
        // alert('Error While Adding');
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
              <th scope="col">category Title</th>
              <th scope="col">Category Description</th>
              <th scope="col"> No of Subcategories</th>
              <th scope="col">No of Courses</th>
              <th scope="col"> Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map((CATEGORY, i) => {
              return (
                <tr>
                  <td>{CATEGORY.title}</td>
                  <td>{CATEGORY.description}</td>
                  <td>{CATEGORY.noOfSubCategories}</td>
                  <td>{CATEGORY.noOfCourses}</td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                  <td>
                    <button onClick={ () =>
				                axios.delete('http://localhost:3004/api/categories/'+CATEGORY._id)
				                    .then(() => this.updateList())                      
				                    .catch(err => console.log(err))
				            } className="btn btn-danger">
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

class ViewSubProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [],
      idToDelete:''
    };
    // this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteSubCategory = this.deleteSubCategory.bind(this);
  }
  // onSubmit(e) {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3003/admin/addcategory", this.state)
  //     .then((res) => {
  //       if (res.data.status) {
  //         alert("Added Sucessfully");
  //       } else {
  //         alert("Error While Adding");
  //       }
  //     });
  // }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/api/subcategories", this.state)
      .then((res) => {
        if (res.data.subcategories) {
          this.setState({ subcategories: res.data.subcategories });
        } else {
          console.log("error");
          // alert('Error While Adding');
        }
      });
  }

 updateList()
 {
  axios
  .get("http://localhost:3004/api/subcategories", this.state)
  .then((res) => {
    if (res.data.subcategories) {
      this.setState({ subcategories: res.data.subcategories });
    } else {
      console.log("error");
      // alert('Error While Adding');
    }
  });
 }


 deleteSubCategory(id){
  axios
  .delete("http://localhost:3004/api/subcategories/"+{id}, this.state)
  .then((res) => {
    if (res.data.message) {
      // this.setState({ subcategories: res.data.subcategories });
    } else {
      console.log("error");
      // alert('Error While Adding');
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
              <th scope="col">Subcategory Title</th>
              <th scope="col">Subcategory Description</th>
              <th scope="col">No of Courses</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.subcategories.map((CATEGORY, i) => {
              return (
                <tr key={i}>
                  <td>{CATEGORY.title}</td>
                  <td>{CATEGORY.description}</td>
                  <td>{CATEGORY.noOfCourses}</td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                  <td>
                    <button onClick={ () =>
				                axios.delete('http://localhost:3004/api/subcategories/'+CATEGORY._id)
				                    .then(() => this.updateList())                      
				                    .catch(err => console.log(err))
				            } className="btn btn-danger">
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

export default ViewCateories;
