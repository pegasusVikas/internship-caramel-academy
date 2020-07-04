import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  // height: "15em",
  position: "static",
};

const CloudComputing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
          <h3 style={{textAlign:'left'}}>Cloud Computing</h3>
          <p>
            Cloud Computing refers to manipulating, configuring, and accessing
            the hardware and software resources remotely. It offers online data
            storage, infrastructure, and application. Cloud computing offers
            platform independency, as the software is not required to be
            installed locally on the PC.
          </p>
        </div>
        <div className="col-lg-4 cimage" style={{zIndex:-5}}>
          <img src="../../images/cloud computing.jpg" />
        </div>
      </div>
      <div className="container-fluid">
        <h1 className="lasthead">Courses Listing:</h1>
      </div>

      <CardDeck>
        <CardColumns>
          <Card style={cardStyle}>
            <Link
              to="coursespage/awstechnicalessentials"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/aws technical.jpeg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/awstechnicalessentials"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  AWS Technical <br />
                  Essential
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/awscloudpractitioner"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/awscloud2.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/awscloudpractitioner"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  AWS Cloud <br /> Practitioner
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/awssolutionarchitectassociate"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/awssolutionarchi2.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/awssolutionarchitectassociate"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  AWS Solution <br /> Architect Associate
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/awsdeveloperassociate"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/awsdeveloper1.png"
                style={{ height: "10em" }}
              />

              <Card.Body>
                <Card.Title
                  href="coursespage/awsdeveloperassociate"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  AWS Developer Associate
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/awssysopsassociateadministrator"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/aws sysops.jpg"
                style={{ height: "10em" }}
              />

              <Card.Body>
                <Card.Title
                  href="coursespage/awssysopsassociateadministrator"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  AWS SysOps Associate Administrator
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/microsoftazurefundamentals"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/Mcf.png"
                style={{ height: "10em" }}
              />

              <Card.Body>
                <Card.Title
                  href="coursespage/microsoftazurefundamentals"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Microsoft Azure <br />
                  Fundamentals
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card style={cardStyle}>
            <Link
              to="coursespage/microsoftazureexpertcertification"
              style={{ color: "#000", textDecorationLine: "none" }}
            >
              <Card.Img
                variant="top"
                id="coursesimg"
                src="../../images/mae.jpg"
                style={{ height: "10em" }}
              />
              <Card.Body>
                <Card.Title
                  href="coursespage/microsoftazureexpertcertification"
                  color="light"
                  style={{ textAlign: "center" }}
                  className="alert-link"
                >
                  Microsoft Azure Expert Certification
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </CardColumns>
      </CardDeck>
    </div>
  );
};

export default CloudComputing;
