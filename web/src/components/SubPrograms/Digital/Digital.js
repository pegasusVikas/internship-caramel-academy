import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const Digital = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3 style={{textAlign:'left'}}>Digital Marketing</h3>
            <p>
              Digital marketing is the promotion of products or brands via one
              or more forms of electronic media. Digital marketing is often
              referred to as online marketing, internet marketing or web
              marketing.{" "}
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/digimarketing.jpg" />
          </div>
        </div>
        <div className="container-fluid">
          <h1 className="lasthead">Courses Listing:</h1>
        </div>
      </div>

      <CardDeck style={{ marginLeft: "1em", marginRight: "1em" }}>
        >
        <CardColumns>
          <Card style={cardStyle}>
            <Link
              to="coursespage/digitalmarketingfoundation"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/digifound.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/digitalmarketingfoundation"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Digital Marketing Foundation
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/digitalmarketingexpert"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/digimarketexpert.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/digitalmarketingexpert"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Digital Marketing Expert
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/seo"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/SEO-1.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/seo"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  SEO
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/smo"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/smo1.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/smo"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  SMO
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/scm"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/scm1.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/scm"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  SCM
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/smm"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/smm1.png"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/smm"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  SMM
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/adwordsfoundation"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/adwordfoun.png"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/adwordsfoundation"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Adwords Foundation
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/adwordexpert"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/adwordexpert.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/adwordexpert"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Adword Expert
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/contentmarketing"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/contentmarketing.png"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/contentmarketing"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Content Marketing
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/branding"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/branding.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/branding"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Branding
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </CardColumns>
      </CardDeck>
    </div>
  );
};

export default Digital;
