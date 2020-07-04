import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const FT = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
              <h3 style={{textAlign:'left'}}>Functional Testing</h3>
              <p>
                FUNCTIONAL TESTING is a type of software testing whereby the
                system is tested against the functional requirements/
                specifications. Functions (or features) are tested by feeding
                them input and examining the output. Functional testing ensures
                that the requirements are properly satisfied by the application.
              </p>
            </div>
            <div className="col-lg-4 cimage" style={{zIndex:-5}}>
              <img src="../../images/functionaltesting.png" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="lasthead">Courses Listing:</h1>
        </div>
      </div>

      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        <Card style={cardStyle}>
          <Link
            to="coursespage/manualtesting"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/manualtesting.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/manualtesting"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Manual Testing
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/automation"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/automationtesting.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/automation"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Automation Testing
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/cloudtesting"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/cloudtesting.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/cloudtesting"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Cloud Testing
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/fullstacktesting"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/fullstacktesting.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/fullstacktesting"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Full Stack Testing
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};

export default FT;
