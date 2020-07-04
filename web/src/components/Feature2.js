import React, { Component } from "react";
import { Collapse } from "react-collapse";
import { UnmountClosed } from "react-collapse";

export default class Feature2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.show = this.show.bind(this);
  }

  show() {
    console.log(this.state.isOpened);
    if (this.state.isOpened == false) {
      this.setState({
        isOpened: true,
      });
    } else {
      this.setState({
        isOpened: false,
      });
    }
  }
  render() {
    const { isOpened } = this.state;
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
              <div className="col-lg-8 col-md-8 col-12" style={{verticalAlign:'text-bottom'}} >
                <h2
                  className="font-weight-bold tophead2"
                  style={{ color: "rgba(0,191,255 ,1)" ,width:400}}
                >
                  WHY CARAMEL IT{" "}
                </h2>
                <p className="para-side">SHOW MORE</p>
                <button
                  className="collapse-btn"
                  //data-toggle="collapse"
                  //data-target="#demo"
                  //   onClick={({ target: { checked } }) =>
                  //     this.setState({ isOpened: checked })
                  //   }
                  onClick={this.show}
                >
                  <img src="../images/drop-down-arrow.png" alt="" srcSet />
                </button>
              </div>
            </div>
          </div>
          {/* <label className="label">
            Opened:
            <input
              className="input"
              type="checkbox"
              checked={isOpened}
              onChange={({ target: { checked } }) =>
                this.setState({ isOpened: checked })
              }
            />
          </label> */}
          <Collapse isOpened={isOpened}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-12 ">
                  <a href="https://caramelit.com/">
                    <img
                      // id="demo"
                      //className="collapse"
                      src="../images/caramelitservices.png"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Collapse>
        </section>
      </div>
    );
  }
}
