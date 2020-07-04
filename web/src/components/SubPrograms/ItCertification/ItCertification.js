import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const ItCertification = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3  style={{textAlign:'left'}}>IT Certifications</h3>
            <p>
              An information technology (IT) certificate program provides
              students with a broad understanding of computer operating systems,
              information systems, programming, and computer software and
              hardware. Learn more about program details, career options, and
              continuing education options.
            </p>
          </div>
          <div className="col-lg-4 cimage">
            <img src="../../images/itcertification.png" />
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="lasthead">Courses Listing:</h1>
        </div>
      </div>

      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        <Card style={cardStyle}>
          <Link
            to="coursespage/itilfoundation"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/itil.png"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/itilfoundation"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                ITIL Foundation
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/pmp"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/pmp.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/pmp"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                PMP
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/pmiacp"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/PMI-ACP.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/pmiacp"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                PMI-ACP
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/agile"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/Agile.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/agile"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Agile
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/prince"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/prince1.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/prince"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Prince2
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};

export default ItCertification;
