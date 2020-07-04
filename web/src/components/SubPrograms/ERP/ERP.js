import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const ERP = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3 style={{textAlign:'left'}}>ERP</h3>
            <p>
              Enterprise resource planning (ERP) is software designed to help
              companies store, manage, and use data regarding their daily and
              regular processes. ERP keeps track of a wealth of information,
              including payroll, raw materials, business commitments, purchase
              orders, and capacity for production.
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/erp.jpg" />
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="lasthead">Courses Listing:</h1>
        </div>
      </div>

      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        <Card style={cardStyle}>
          <Link
            to="coursespage/sap"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/sap.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/sap"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                SAP
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/oracle"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/oracle.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/oracle"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                ORACLE
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/inforln"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/inforln.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/inforln"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Infor LN
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card style={cardStyle}>
          <Link
            to="coursespage/rootstack"
            style={{ color: "#000", textDecorationLine: "none" }}
          >
            <Card.Img
              variant="top"
              id="coursesimg"
              src="../../images/rootstack1.jpg"
              style={{ height: "10em" }}
            />
            <Card.Body>
              <Card.Title
                href="coursespage/rootstack"
                color="light"
                style={{ textAlign: "center" }}
                className="alert-link"
              >
                Rootstack
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};

export default ERP;
