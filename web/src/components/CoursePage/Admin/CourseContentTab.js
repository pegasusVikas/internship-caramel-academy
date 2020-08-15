import React, { Component } from "react";

export default class CourseContentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = this.props.user;
    return (
      <div className="container" style={{ marginTop: "4%" }}>
        <div className="row">
          <div className="col-md-8" style={{ opacity: this.props.opaque ? 0.2 : 1 }}> 
            <h2>This is {this.props.section} section</h2>
            <div>
              Pure and Transparent code is devoid of redundant components. <br />
              This means also mobile devices where the navigation is easy and intuitive in a desktop or laptop. <br />
              Core UI Layout API lets you customize your project for almost any device - be it mobile or pc. <br />
              Core UI is the fastest way to build a modern dashboard for any platforms, browser or device. <br />
              Core UI - Admin Kit is not just another template. <br />
              It goes way beyond hithero admin templates thanks to transparent code and file structure. <br />
              Key lessons include: 
              <ul>
                <li>
                  Taking your first steps:  choosing your busisness entity and picking a name.
                </li>
                <li>
                  Writing legally binding contracts.
                </li>
                <li>
                  It goes way beyond hithero admin templates thanks to transparent code and file structure.
                </li>
                <li>
                  Pure and Transparent code is devoid of redundant components.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4" style={{ display: "flex", alignItems: "center", float: "right" }}>
            {user &&
              <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src="https://robohash.org/seth" alt="Card image cap" />
              <div class="card-body">
                <div class="card-title" style={{ fontWeight: "bold" }}>Instructor - {user.name}</div>
                <p class="card-text">{user.email}</p>
              </div>
             </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
