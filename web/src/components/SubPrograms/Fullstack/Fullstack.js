import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  // height: "14em",
  position: "static",
};

const Fullstack = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3>FullStack</h3>
            <p>
              FullStack Developers are computer programmers who are proficient
              in both front and back end coding. Their primary responsibilities
              include designing user interactions on websites, developing
              servers and databases for website functionality and coding for
              mobile platforms.
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/fullstack.jpg" />
          </div>
        </div>
        <div class="container-fluid">
          <h1 class="lasthead">Courses Listing:</h1>
        </div>
        <CardDeck>
          <CardColumns>
            <Card style={cardStyle}>
              <Link
                to="coursespage/corejava"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/core-java.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/corejava"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    CORE JAVA
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/advancejava"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/advanced1.png"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/advancejava"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    ADVANCED JAVA
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/fullstack.net"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/fullstacknet.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/fullstack.net"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    .Net
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/.netcore"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/net core.jpeg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/.netcore"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    .NetCore
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/mean"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/mean1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/mean"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    MEAN
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/measn"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/measn.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/measn"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    MEASN
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/mevn"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/mevn.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/mevn"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    MEVN
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/golang"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/golang.png"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/golang"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Golang
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/rubyfullstack"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/ruby1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/rubyfullstack"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Ruby
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </CardColumns>
        </CardDeck>
      </div>
    </div>
  );
};

export default Fullstack;
