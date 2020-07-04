import React from "react";
import { Card, CardDeck, CardColumns } from "react-bootstrap";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const cardStyle = {
  // width: "21em",
  // height: "14em",
  marginLeft: "1em",
};

export default class Software2 extends React.Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
  }
  render() {
    const { activeItemIndex } = this.state;
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <div style={{ marginTop: "2em", marginBottom: "2em" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/uicourses"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/core ui.jpeg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/uicourses"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Frontend
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/backend"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/backend2.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/backend"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Backend
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/fullstack"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/fullstack1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/fullstack"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Full Stack
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/functionaltesting"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/functionaltesting.png"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/functionaltesting"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Functional Testing
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/mobility"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/mobility1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/mobility"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Mobility
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/devops"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/devops1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/devops"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    DevOps
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/datascience"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/datascience1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/datascience"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Data Science
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/cloud"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/cloudcomputing1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/cloud"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Cloud Computing
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/cyber"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/cyber.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/cyber"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Cyber Security
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/digital"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/digi1.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/digital"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Digital Marketing
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/erp"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/erp2.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/erp"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    ERP
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/it"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/IT2.jpg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/it"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    Information Technology
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
          <div>
            <Card style={cardStyle}>
              <Link
                to="courses/itcertification"
                style={{ color: "#000", textDecorationLine: "none" }}
              >
                <Card.Img
                  variant="top"
                  id="coursesimg"
                  src="../images/it.jpeg"
                  style={{ height: "10em" }}
                />
                <Card.Body>
                  <Card.Title
                    href="courses/itcertification"
                    color="light"
                    style={{ textAlign: "center" }}
                    className="alert-link"
                  >
                    IT Certifications
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </div>
        </Carousel>
      </div>
    );
  }
}
