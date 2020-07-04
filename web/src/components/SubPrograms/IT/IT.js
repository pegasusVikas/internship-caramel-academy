import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const IT = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3 style={{textAlign:'left'}}>Information Technology</h3>
            <p>
              Information Technology (IT) is the use of computers and software
              to manage information. It's the career discipline responsible for
              storing information, protecting information, processing the
              information, transmitting the information as necessary, and later
              retrieving information as necessary.
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/it.jpg" />
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="lasthead">Courses Listing:</h1>
        </div>
      </div>

      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        <Card style={cardStyle}>
          <Link
            to="coursespage/salesforce"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/salesforce1.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/salesforce"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Salesforce
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/servicenow"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/service-now.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/servicenow"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Service Now
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/remedy"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/remedy.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/remedy"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Remedy
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/microsoftdynamics"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/microdynamics.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/microsoftdynamics"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Micro Dynamics
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};

export default IT;
