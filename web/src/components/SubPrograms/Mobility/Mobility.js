import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  //position: "static",
};

const Mobility = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3  style={{textAlign:'left'}}>Mobility</h3>
            <p>
              Enterprise mobility is an approach to work in which employees can
              do their jobs from anywhere using a variety of devices and
              applications. The term commonly refers to the use of mobile
              devices, such as smartphones and tablets, for business purposes.
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/mobility.jpg" />
          </div>
        </div>
        <div class="container-fluid">
          <h1 class="lasthead">Courses Listing:</h1>
        </div>
      </div>
      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        <CardColumns>
          <Card style={cardStyle}>
            <Link
              to="coursespage/flutter"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/flutter1.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/flutter"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Flutter
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/ionic"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/ionic1.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/ionic"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Ionic
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>

          <Card style={cardStyle}>
            <Link
              to="coursespage/reactnative"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/reactnative.png"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/reactnative"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  React Native
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/xamarin"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/xamarin1.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/xamarin"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Xamarin
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/onsenui"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/onsenui.png"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/onsenui"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Onsen UI
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/ios"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/ios.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/ios"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  IOS
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/android"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/android1.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/android"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Android
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </CardColumns>
      </CardDeck>
    </div>
  );
};

export default Mobility;
