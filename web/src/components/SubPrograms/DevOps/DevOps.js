import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "25em",
  height: "14em",
  position: "static",
};

const DevOps = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent" style={{zIndex:-5}}>
            <h3 style={{textAlign:'left'}}>DevOps</h3>
            <p>
              DevOps is a set of practices that automates the processes between
              software development and IT teams, in order that they can build,
              test, and release software faster and more reliably. The concept
              of DevOps is founded on building a culture of collaboration
              between teams that historically functioned in relative siloes.{" "}
            </p>
          </div>
          <div className="col-lg-4 cimage" style={{zIndex:-5}}>
            <img src="../../images/devops.jpg" />
          </div>
        </div>
        <div class="container-fluid">
          <h1 class="lasthead">Courses Listing:</h1>
        </div>

        <CardDeck style={{}}>
          <CardColumns>
            <Card style={cardStyle}>
              <Link
                to="coursespage/devopsfoundation"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/devopsfound.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                  <Alert color="light">
                    <a
                      href="coursespage/devopsfoundation"
                      style={{ textDecorationLine: "none" }}
                      color="dark"
                      className="alert-link"
                    >
                      DevOps Foundation
                    </a>
                  </Alert>
                </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/devopsfoundation"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    DevOps Foundation
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/devopsexpert"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/devopsexpert.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                  <Alert color="light">
                    <a
                      href="coursespage/devopsexpert"
                      style={{ textDecorationLine: "none" }}
                      color="dark"
                      className="alert-link"
                    >
                      DevOps Expert
                    </a>
                  </Alert>
                </Card.Body>
                 */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/devopsexpert"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    DevOps Expert
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/ansible"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/ansible2.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                  <Alert color="light">
                    <a
                      href="coursespage/ansible"
                      style={{ textDecorationLine: "none" }}
                      color="dark"
                      className="alert-link"
                    >
                      Ansible
                    </a>
                  </Alert>
                </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/ansible"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Ansible
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/chef"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/chef2.png"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                  <Alert color="light">
                    <a
                      href="coursespage/chef"
                      style={{ textDecorationLine: "none" }}
                      color="dark"
                      className="alert-link"
                    >
                      CHEF
                    </a>
                  </Alert>
                </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/chef"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    CHEF
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/docker"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/docker.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                  <Alert color="light">
                    <a
                      href="coursespage/docker"
                      style={{ textDecorationLine: "none" }}
                      color="dark"
                      className="alert-link"
                    >
                      Dockers
                    </a>
                  </Alert>
                </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/docker"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Dockers
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/kubernets"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/kubernates.png"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                  <Alert color="light">
                    <a
                      href="coursespage/kubernets"
                      style={{ textDecorationLine: "none" }}
                      color="dark"
                      className="alert-link"
                    >
                      Kubernets
                    </a>
                  </Alert>
                </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/kubernets"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Kubernets
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
            <Card style={cardStyle}>
              <Link
                to="coursespage/openstack"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../../images/openstack1.jpg"
                  style={{ height: "10em" }}
                />
                {/* <Card.Body>
                  <Alert color="light">
                    <a
                      href="coursespage/openstack"
                      style={{ textDecorationLine: "none" }}
                      color="dark"
                      className="alert-link"
                    >
                      Open Stack
                    </a>
                  </Alert>
                </Card.Body> */}
                <Card.Body>
                  <Card.Title
                    href="coursespage/openstack"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Open Stack
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

export default DevOps;
