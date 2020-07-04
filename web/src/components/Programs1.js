import React from "react";
import ReactDOM from "react-dom";
import ScrollArea from "react-scrollbar";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Program3 from "./Programs3";

const cardStyle = {
  width: "10em",
  height: "8em",
  marginLeft: "1em",
};

const Programs1 = () => {
  return (
    <div>
      <section className="program-section" id="ourprogram">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6 col-10">
            <img src="images/show5.png" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 col-md-6 col-12"
            style={{ marginLeft: "40px" }}
          >
            <h2
              className="font-weight-bold tophead1"
              style={{ color: "rgba(124,77,255 ,1)" }}
            >
              OUR PROGRAMS
            </h2>
          </div>
        </div>
        <div className="container-fluid back">
          <div className="row wor">
            <div className="col-lg-12 col-sm-12 Drive">
              <h1
                id="h"
                style={{
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "40px",
                  marginTop: "43px",
                  marginLeft: "17px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Drive Your Transformation With Us
              </h1>
              <h5
                id="programpara"
                style={{
                  textAlign: "center",
                  marginLeft: "16px",
                  fontWeight: "bold",
                  paddingTop: "10px",
                  color: "white",
                }}
              >
                Collaboration Platform For All Your Technical Training Needs.              </h5>
                <br />
                <h5 id="programpara"  style={{ textAlign:"center", fontWeight:"bold" }}><a style={{color: "#07ef07"}} href="/lms/user/register">Join Us Today.</a></h5>

              <div>
                {/* input tag */}
                {/* <input id="searchbar" onkeyup="search_course()" type="text name="search" placeholder="Search courses..">  */}
              </div>
            </div>
          </div>

          <div
            className="ruby-wrapper"
            style={{ width: "100%", marginLeft: "0px" }}
          >
            <ul className="ruby-menu">
              <li className="ruby-menu-mega-blog">
                <a href="/caramelit_new/program" style={{ fontSize: "2em" }}>
                  Software Development
                </a>
                <Program3 />
              </li>
              {/* <li className="ruby-menu-mega-blog">
                <a href="program.html" style={{ fontSize: "2em" }}>
                  Business Strategy
                </a>
                <div style={{ height: "269.359px" }} className>
                  <ul className="ruby-menu-mega-blog-nav"> </ul>
                </div>
                <span className="ruby-dropdown-toggle" />
              </li> */}
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Programs1;
