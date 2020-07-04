import React, { Component } from "react";

export default class Feature extends Component {
  render() {
    return (
      <div>
        <section className="feature-section" id="feature">
          <div className="container-fluid">
            <div className="row">
              <div className="no-margin col-lg-4 col-md-6 col-12">
                <img
                  src="../images/show5.png"
                  className="img-fluid"
                  id="whywe"
                />
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <h2
                  className="font-weight-bold tophead2"
                  style={{ color: "rgba(0,191,255 ,1)" }}
                >
                  WHY CARAMEL IT{" "}
                </h2>
                <p className="para-side">SHOW MORE</p>
                <button
                  className="collapse-btn"
                  data-toggle="collapse"
                  data-target="#demo"
                >
                  <img src="../images/drop-down-arrow.png" alt="" srcSet />
                </button>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12 ">
                <a href="https://caramelit.com/">
                  <img
                    id="demo"
                    className="collapse"
                    src="../images/caramelitservices.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
