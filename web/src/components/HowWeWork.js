import React, { Component } from "react";
import img1 from "./images/show18.png";
import { Collapse } from "react-collapse";

export default class HowWeWork extends Component {
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
        <section className="working-section" id="working">
          <div className="row py-5">
            <div className="col-lg-8 col-md-6 col-12">
              <h2
                className="font-weight-bold tophead1 text-right"
                style={{ color: "rgba(0,191,255 ,1)" }}
              >
                {" "}
                <button
                  className="collapse-btn-2"
                  // id="margin-lefts"
                  // data-toggle="collapse"
                  // data-target="#colaapse"
                  onClick={this.show}
                >
                  <img src="../images/drop-down-arrow.png" alt="" srcSet />
                </button>{" "}
                <p className="m-left">SHOW MORE</p> HOW WE WORK
              </h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <img src={img1} className="img-fluid imgwidth" />
            </div>
          </div>

          <div className="container">
            <div className="row">
              {/* <div class="col-md-1">

		</div> */}
              <Collapse isOpened={isOpened}>
                <div
                  // id="colaapse"
                  className="grid-container2 "
                >
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/1.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/2.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/3.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/4.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/5.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/6.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/7.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/8.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/9.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/10.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/11.png" />
                    </a>
                  </div>
                  <div>
                    <a href="recpage.html">
                      <img src="../images/grid/12.png" />
                    </a>
                  </div>
                </div>
              </Collapse>
              {/* <div class="col-md-1">

		</div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
