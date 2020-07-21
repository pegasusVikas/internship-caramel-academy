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
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false,
      isOpened5: false,
    };
    this.show1 = this.show1.bind(this);
    this.show2 = this.show2.bind(this);
    this.show3 = this.show3.bind(this);
    this.show4 = this.show4.bind(this);
    this.show5 = this.show5.bind(this);
  }

  show1() {
    console.log(this.state.isOpened1);
    if (this.state.isOpened1 == false) {
      this.setState({
        isOpened1: true,
      });
    } else {
      this.setState({
        isOpened1: false,
      });
    }
  }
  show2() {
    console.log(this.state.isOpened2);
    if (this.state.isOpened2 == false) {
      this.setState({
        isOpened2: true,
      });
    } else {
      this.setState({
        isOpened2: false,
      });
    }
  }
  show3() {
    console.log(this.state.isOpened3);
    if (this.state.isOpened3 == false) {
      this.setState({
        isOpened3: true,
      });
    } else {
      this.setState({
        isOpened3: false,
      });
    }
  }
  show4() {
    console.log(this.state.isOpened4);
    if (this.state.isOpened4 == false) {
      this.setState({
        isOpened4: true,
      });
    } else {
      this.setState({
        isOpened4: false,
      });
    }
  }
  show5() {
    console.log(this.state.isOpened5);
    if (this.state.isOpened5 == false) {
      this.setState({
        isOpened5: true,
      });
    } else {
      this.setState({
        isOpened5: false,
      });
    }
  }
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "4%" }}>
          <div className="row">
            <div className="col-md-8">
              <h2 style={{ fontWeight: "bold" }}>Greetings {this.props.user}</h2>
              <br />
              <div>
                <h4 style={{ display: "inline" }}>What will you learn</h4>
                <button
                  className="btn"
                  style={{
                    right: "8%",
                    position: "absolute",
                  }}
                >
                  Edit
                </button>
                <i
                  class="fa fa-arrow-down fa-2x"
                  onClick={this.show1}
                  style={{
                    right: "5%",
                    position: "absolute",
                    color: "#002333",
                  }}
                  aria-hidden="true"
                ></i>

                <hr style={{ borderColor: "pink", borderWidth: "4px" }} />
                <Collapse isOpened={this.state.isOpened1}>
                  <p style={{ backgroundColor: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    mollis vulputate felis eget auctor. Sed eu dolor malesuada
                    elit faucibus pharetra. Duis ultrices, felis vitae interdum
                    malesuada, quam ante ornare sem, nec viverra metus quam sed
                    diam. Cras vel bibendum dolor. Morbi sit amet velit est.
                    Vivamus convallis tincidunt magna vitae molestie. Nullam
                    congue risus eget eros ultricies, id sollicitudin elit
                    imperdiet. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Phasellus porta
                    elementum vestibulum. Quisque maximus leo eget diam
                    tincidunt luctus in non risus. Proin convallis neque id
                    augue dictum sagittis. Aliquam sed magna efficitur, dapibus
                    metus sed, pretium metus.
                  </p>
                </Collapse>
              </div>
              <div>
                <h4 style={{ display: "inline" }}>Practice Assignments</h4>
                <button
                  className="btn"
                  style={{
                    right: "8%",
                    position: "absolute",
                  }}
                >
                  Edit
                </button>
                <i
                  class="fa fa-arrow-down fa-2x"
                  onClick={this.show2}
                  style={{
                    right: "5%",
                    position: "absolute",
                    color: "#002333",
                  }}
                  aria-hidden="true"
                ></i>

                <hr style={{ borderColor: "pink", borderWidth: "4px" }} />
                <Collapse isOpened={this.state.isOpened2}>
                  <p style={{ backgroundColor: "white" }}>
                    hgvbhsxzgavbx nadskmcjnhuc cxliasjcijsa n scjushdcnsa dsa
                    ndcsandjcnsa csackjsabc sac sadchbsa csa csajkdcnsakjdc
                    sajkdcbnsac saciusand msa ckjsan xcsakjdcsa mc sajdxn
                    sdxsakjdsad xsa dcsakdxjn sadxsakjn sadkwdo qsn qsldsiqjsd
                    qaND H
                  </p>
                </Collapse>
              </div>
              <div>
                <h4 style={{ display: "inline" }}>Technical Scenarios</h4>
                <button
                  className="btn"
                  style={{
                    right: "8%",
                    position: "absolute",
                  }}
                >
                  Edit
                </button>
                <i
                  class="fa fa-arrow-down fa-2x"
                  onClick={this.show3}
                  style={{
                    right: "5%",
                    position: "absolute",
                    color: "#002333",
                  }}
                  aria-hidden="true"
                ></i>

                <hr style={{ borderColor: "pink", borderWidth: "4px" }} />
                <Collapse isOpened={this.state.isOpened3}>
                  <p style={{ backgroundColor: "white" }}>
                    hgvbhsxzgavbx nadskmcjnhuc cxliasjcijsa n scjushdcnsa dsa
                    ndcsandjcnsa csackjsabc sac sadchbsa csa csajkdcnsakjdc
                    sajkdcbnsac saciusand msa ckjsan xcsakjdcsa mc sajdxn
                    sdxsakjdsad xsa dcsakdxjn sadxsakjn sadkwdo qsn qsldsiqjsd
                    qaND H
                  </p>
                </Collapse>
              </div>
              <div>
                <h4 style={{ display: "inline" }}>Mini Project</h4>
                <button
                  className="btn"
                  style={{
                    right: "8%",
                    position: "absolute",
                  }}
                >
                  Edit
                </button>
                <i
                  class="fa fa-arrow-down fa-2x"
                  onClick={this.show4}
                  style={{
                    right: "5%",
                    position: "absolute",
                    color: "#002333",
                  }}
                  aria-hidden="true"
                ></i>

                <hr style={{ borderColor: "pink", borderWidth: "4px" }} />
                <Collapse isOpened={this.state.isOpened4}>
                  <p style={{ backgroundColor: "white" }}>
                    hgvbhsxzgavbx nadskmcjnhuc cxliasjcijsa n scjushdcnsa dsa
                    ndcsandjcnsa csackjsabc sac sadchbsa csa csajkdcnsakjdc
                    sajkdcbnsac saciusand msa ckjsan xcsakjdcsa mc sajdxn
                    sdxsakjdsad xsa dcsakdxjn sadxsakjn sadkwdo qsn qsldsiqjsd
                    qaND H
                  </p>
                </Collapse>
              </div>
              <div>
                <h4 style={{ display: "inline" }}>
                  Discussion Forums and FAQs
                </h4>
                <button
                  className="btn"
                  style={{
                    right: "8%",
                    position: "absolute",
                  }}
                >
                  Edit
                </button>
                <i
                  class="fa fa-arrow-down fa-2x"
                  onClick={this.show5}
                  style={{
                    right: "5%",
                    position: "absolute",
                    color: "#002333",
                  }}
                  aria-hidden="true"
                ></i>

                <hr style={{ borderColor: "pink", borderWidth: "4px" }} />
                <Collapse isOpened={this.state.isOpened5}>
                  <p style={{ backgroundColor: "white" }}>
                    hgvbhsxzgavbx nadskmcjnhuc cxliasjcijsa n scjushdcnsa dsa
                    ndcsandjcnsa csackjsabc sac sadchbsa csa csajkdcnsakjdc
                    sajkdcbnsac saciusand msa ckjsan xcsakjdcsa mc sajdxn
                    sdxsakjdsad xsa dcsakdxjn sadxsakjn sadkwdo qsn qsldsiqjsd
                    qaND H
                  </p>
                </Collapse>
              </div>
            </div>
            <div
              className="col-md-4"
              // style={{ marginLeft: "8%" }}
            >
              <h2
                style={{
                  textAlign: "center",
                  color: "#002333",
                  fontWeight: "bold",
                }}
              >
                Skills you learn
              </h2>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <h4 style={{ textAlign: "center" }}>HTML</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>Javascript</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>Bootstrap</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>Graphics</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>I-Phone</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>Web Design</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <h4 style={{ textAlign: "center" }}>CSS</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>UI</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>Icon</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>App</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>Andriod</h4>
                  <hr
                    style={{
                      borderColor: "pink",
                      borderWidth: "4px",
                    }}
                  />
                </div>
              </div>
              <div>
                <h4>Instructor John Doe</h4>
                <h4>Message your instructor</h4>
                <input
                  type="text"
                  style={{
                    backgroundColor: "#292c7d",
                    height: "50px",
                    width: "100%",
                  }}
                />
                <br />
                <br />
                <div style={{ marginLeft: "80%" }}>
                  <button className="btn" style={{ backgroundColor: "pink" }}>
                    Send
                  </button>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-9">
                    <h3>VISIT THE PROGRAM </h3>
                    <h3>PAGE FOR THIS</h3>
                    <h3>COURSE </h3>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-primary"
                      style={{
                        marginTop: "30%",
                      }}
                    >
                      GO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
              Recommended Courses
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
