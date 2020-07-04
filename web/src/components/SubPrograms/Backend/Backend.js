import React, { Component } from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "21em",
  height: "14em",
};

export default class Backend extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3 style={{textAlign:'left'}}>BACKEND</h3>
              <p>
                Backend development (also stylized as back-end or back end
                development) is the skill that powers the web. ... Backend
                development languages handle the 'behind-the-scenes'
                functionality of web applications. It's code that connects the
                web to a database, manages user connections, and powers the web
                application itself.{" "}
              </p>
            </div>
            <div className="col-lg-4 cimage" style={{zIndex:-5}}>
              <img src="../../images/backend.jpg" />
            </div>
          </div>
          <div class="container-fluid">
            <h1 class="lasthead">Courses Listing:</h1>
          </div>

          <CardDeck>
            <Card style={cardStyle}>
              <Link
                to="coursespage/java"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/java1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="coursespage/java"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Java
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/.net"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/net2.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/.net"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    .NET
                  </a>
                </Alert>
              </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/.net"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    .NET
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/nodejs"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/nodejs1.png"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/nodejs"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Node JS
                  </a>
                </Alert>
              </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/nodejs"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Node JS
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/ruby"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/ruby1.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/ruby"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Ruby
                  </a>
                </Alert>
              </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/ruby"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Ruby
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/python"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/python1.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/python"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Python
                  </a>
                </Alert>
              </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/python"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Python
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
