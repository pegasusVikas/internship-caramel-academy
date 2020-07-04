import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const Cyber = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3 style={{textAlign:'left'}}>Cyber Security</h3>
            <p>
              Cyber security is the application of technologies, processes and
              controls to protect systems, networks, programs, devices and data
              from cyber attacks. It aims to reduce the risk of cyber attacks,
              and protect against the unauthorised exploitation of systems,
              networks and technologies.
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/cyber security.jpg" />
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="lasthead">Courses Listing:</h1>
        </div>
      </div>

      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        <CardColumns>
          <Card style={cardStyle}>
            <Link
              to="coursespage/cissp"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/cissp2.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/cissp"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    CISSP
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/cissp"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  CISSP
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/cisa"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/cisa1.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/cisa"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    CISA
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/cisa"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  CISA
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/ceh"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/ceh.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/ceh"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    CEH
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/ceh"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  CEH
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/comptiasecurity++"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/comptiasecurity.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/comptiasecurity++"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Comptia Security++
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/comptiasecurity++"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Comptia Security++
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/cism"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/cism1.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/cism"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    CISM
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/cism"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  CISM
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </CardColumns>
      </CardDeck>
    </div>
  );
};

export default Cyber;
