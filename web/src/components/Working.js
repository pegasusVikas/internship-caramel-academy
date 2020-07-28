import React, { Component } from "react";

const styleSelect = {
  // background: "transparent",
  // border: "#444 solid",
  // borderRadius: "1em",
  // minWidth: "20em",
  // height: "10vh",
  // fontSize: "5vh",
  //fontColor: "white",
  // color: "white",
  //fontFamily: "sans-serif",
};

const styleOption = {
  //   opacity: "0",
  //   font: "inherit",
  //   background: "inherit",
};

export default class Working extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMiddlebox: false,
      value: "",
    };
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onClickSelect = this.onClickSelect.bind(this);
  }

  onClickSelect() {
    // console.log("onclick");
    if (this.state.showMiddlebox === true) {
      document.getElementById("middlebox").style.visibility = "visible";
    } else {
      document.getElementById("middlebox").style.visibility = "hidden";
    }
  }

  onChangeSelect(e) {
    //console.log(e.target.value);
    if (e.target.value == "going-back") {
      this.setState({
        showMiddlebox: false,
      });
    } else {
      this.setState({
        showMiddlebox: true,
      });
    }
    //console.log(this.state.showMiddlebox);
  }

  render() {
    return (
      <div>
        <div className="row py-5" id="learnmore">
          <div className=" col-lg-4 col-md-6 col-12 ">
            {/* <img src="images/show18.png" class="img-fluid imgwidth"> */}
            <img
              src="../images/show11.png"
              className="mx-0 px-0"
              style={{ width: "100%!important", height: "100% !important" ,width:'110%' }}
              alt="style"
            />
          </div>
          <div className="col-lg-8 col-md-6 col-12">
            <h2
              className="font-weight-bold "
              style={{ color: "rgba(124,77,255 ,1)" ,width:750, paddingLeft:40}}
            >
              LET US KNOW MORE ABOUT YOU
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div id="no-space" className="col-md-12 col-lg-12 col-12">
              <div className="middleblock">
                <br />
                <center>
                <h2 style={{color:'white',marginLeft:25}}>Welcome to AI Based Course Selection</h2>
                  <div
                    className="sel sel--black-panther"
                    // onclick="vis();"
                    // onClick={this.onClickSelect}
                  >

                    <select
                      // name="select-profession"
                      //id="select-profession"
                      //onclick="vis();"
                      // onClick={this.onClickVisible}
                      //style={styleSelect}
                      className="styleSelect"
                      onClick={this.onClickSelect}
                      onChange={this.onChangeSelect}
                    >
                      <option
                        value="going-back"
                        //onclick="mis();"
                        //style={styleSelect}
                      >
                        Select your Option
                      </option>
                      <option
                        value="hacker"
                        //onclick="vis();"
                        // style={styleOption}
                      >
                        Student (with no IT Knowledge)
                      </option>
                      <option
                        value="gamer"
                        // onclick="vis();"
                        style={styleOption}
                      >
                        Student (with some IT Knowledge)
                      </option>
                      <option
                        value="developer"
                        //onclick="vis();"
                        style={styleOption}
                      >
                        Professional (with no IT Experience)
                      </option>
                      <option
                        value="programmer"
                        // onclick="vis();"
                        style={styleOption}
                      >
                        Professional (with IT Experience)
                      </option>
                    </select>
                  </div>
                  <hr className="rule" />
                </center>
                <div id="middlebox">
                  <a href="https://caramelit.com/">
                    <div className="counselling">
                      <h2>COUNSELLING</h2>
                      <br />
                    </div>
                  </a>
                  <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <img
                      src="./images/arrow.png"
                      className="midarrow"
                      style={{ width: "8%", height: "8%" }}
                    />
                    <div className="eval">
                      <a href="http://localhost:3000/apply">
                        <h2>PROFILE EVALUATION</h2>
                      </a>
                      <br />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginLeft: "33%",
                    }}
                  >
                    <img src="./images/arrow.png" className="midarrow" />
                    <div className="recommend">
                      <a href="https://caramelit.com/">
                        <h2>RECOMMENDATION</h2>
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
                )
                <div className="enrollment">
                  <a href="#">
                    <h1>ENROLLMENT</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
