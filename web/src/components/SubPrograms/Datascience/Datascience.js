import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const Datascience = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3 style={{textAlign:'left'}} >DataScience</h3>
            <p>
              Data science is a "concept to unify statistics, data analysis,
              machine learning and their related methods" in order to
              "understand and analyze actual phenomena" with data. It employs
              techniques and theories drawn from many fields within the context
              of mathematics, statistics, computer science, and information
              science.{" "}
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/data science.png" />
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
              to="coursespage/dsbootcamp"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/bootcamp.png"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/dsbootcamp"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    DS Bootcamp
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/dsbootcamp"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  DS Bootcamp
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/mlwithpython"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/mlpython.png"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/mlwithpython"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    ML With Python
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/mlwithpython"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  ML With Python
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/deeplearning"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/deeplearning1.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/deeplearning"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    DEEPLEARNING
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="oursespage/deeplearning"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  DEEP LEARNING
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/dataanalytics"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/dataanalytics1.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/dataanalytics"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Data Analytics
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="oursespage/dataanalytics"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Data Analytics
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/datascientistcertification"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/dsc.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/datascientistcertification"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Data Science Certification
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/datascientistcertification"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Data Science Certification
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/naturallanguageprocessing"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/nlp.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/naturallanguageprocessing"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Natural Language processing
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/naturallanguageprocessing"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Natural Language processing
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/rprogramming"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/r pro.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/rprogramming"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    R Programming
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/rprogramming"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  R Programming
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/aimlfoundationcourse"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/aimlfound.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/aimlfoundationcourse"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    AI/ML Foundation Course
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/aimlfoundationcourse"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  AI/ML Foundation Course
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/aimlexpertcourse"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/aimlexpert.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/aimlexpertcourse"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    AI/ML Expert Course
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/aimlexpertcourse"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  AI/ML Expert Course
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/hadoop"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/hadoop1.jpg"
                style={{ height: "10em" }}
              />
              {/* <Card.Body>
                <Alert color="light">
                  <a
                    href="coursespage/hadoop"
                    style={{ textDecorationLine: "none" }}
                    color="dark"
                    className="alert-link"
                  >
                    Hadoop
                  </a>
                </Alert>
              </Card.Body> */}
              <Card.Body>
                <Card.Title
                  href="coursespage/hadoop"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Hadoop
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </CardColumns>
      </CardDeck>
    </div>
  );
};

export default Datascience;
