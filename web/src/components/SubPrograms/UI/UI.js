import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const UI = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3>UI Courses</h3>
            <p>
              User interface (UI) developers combine programming, psychology and
              creative design to craft intuitive controls for software and
              hardware. ... There is a range of UI development classes and
              college degrees featuring coursework in the skills needed to
              become a user interface developer.
            </p>
          </div>
          <div className="col-lg-4 cimage">
            <img src="../../images/headimg.jpg" />
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="lasthead">Courses Listing:</h1>
        </div>
      </div>

      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        <Card style={cardStyle}>
          <Link
            to="coursespage/coreui"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/core ui.jpeg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/coreui"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Frontend
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/advancedui"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/advancedui.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/advancedui"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Advanced UI
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/angularjs"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/angular.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/angularjs"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Angular JS
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/reactjs"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/react2.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/reactjs"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                React JS
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/vuejs"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/vue.js1.jpeg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/vuejs"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Vue JS
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};

export default UI;
