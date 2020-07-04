import React, { Component } from "react";
import { Collapse } from "react-collapse";
import "../components/style.css";
export default class Covering extends Component {
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
        <section className="cover-section" id="cover">
          <div className="row py-5">
            <div className="col-lg-8 col-md-6 col-12">
              <h2
                className="font-weight-bold tophead1 text-right"
                style={{ color: "rgba(124,77,255 ,1)" }}
              >
                <button
                  className="collapse-btn-2"
                  id="margin-lefts"
                  //data-toggle="collapse"
                  //data-target="#colaapse-2"
                  onClick={this.show}
                >
                  <img src="../../images/drop-down-arrow.png" alt="" srcSet />
                </button>{" "}
                <p className="m-left">SHOW MORE</p>WHAT WE COVER
              </h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <img src="../images/show18.png" className="img-fluid imgwidth" />
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <div
            // id="colaapse-2"
            //className="container collapse"
            >
              <div className="row">
                <div className="col-4 col-lg-2 col-md-3 mt-lg-5">
                  <img src="../images/show8.png" className=" img-fluid" />
                  <p className="font-weight-bold text-center num1">100</p>
                  <h5 className="text-center py-5 text-uppercase font-weight-bold headfont">
                    students
                  </h5>
                </div>
                <div className="col-4 col-lg-2 col-md-3 mt-lg-5">
                  <img src="../images/show9.png" className=" img-fluid" />
                  <p className="font-weight-bold text-center num2">16</p>
                  <h5 className="text-center py-5 text-uppercase font-weight-bold headfont">
                    courses
                  </h5>
                </div>
                <div className="col-4 col-lg-2 col-md-3 mt-lg-5">
                  <img src="../images/show10.png" className=" img-fluid" />
                  <p className="font-weight-bold text-center num3">50</p>
                  <h5 className="text-center py-5 text-uppercase font-weight-bold headfont">
                    placements
                  </h5>
                </div>
                <div className="col-12 col-lg-6 col-md-3">
                  <img
                    src="../images/show12.png"
                    className="show12 img-fluid"
                  />
                </div>
              </div>
            </div>
          </Collapse>
          {/* <div class="container">
		<div class="row">
			<div class="col-12 col-lg-12 col-md-12">
				<p class="text-center" style="font-size: 24px;">The programing language enables us to write efficient programs and develop
				online solutions such as - mobile applications, web applications</p>
			</div>
		</div>
	</div> */}
        </section>
      </div>
    );
  }
}
