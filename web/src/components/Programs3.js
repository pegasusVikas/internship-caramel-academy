import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tabs, Tab } from "react-bootstrap-tabs";
import axios from 'axios';
import react from "./images/react2.jpg";
import angular from "./images/angular.png";
import coreui from "./images/core ui.jpeg";
import nodejs from "./images/nodejs.jpg";
import mern from "./images/mern.jpg";
import golang from "./images/golang.jpg";
import data from "./images/data science.png";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Programs3 = () => {
  const [state, setState] = useState({
    subcategories: null
  });
  state.subcategories === null && axios.get("http://localhost:3004/api/subcategories")
  .then(res => {
    console.log(res.data);
    setState({
      subcategories: res.data.subCategories
    });
  })
  .catch(err => {
    console.log(err.message);
  });

  const onClick = (course) => {
    window.open("/caramelit_new/courses/coursespage/" + course.title.toLowerCase().split(" ").join(""));
  };

  return (
    <div>
      {state.subcategories !== null && 
        <Tabs style={{ backgroundImage: "linear-gradient(to left, #0e7fa7, #1d5787, #27386e)", marginLeft: "1px", marginBottom: "1px" }}>
          {state.subcategories.map(subcat => (
            <Tab label={subcat.title}>
              <div
                className="container-fluid"
                id="courses2"
                style={{
                  display: "inline-block !important",
                  paddingLeft: "20px",
                  paddingTop: "15px",
                }}
              >
                <div className="row" style={{ margin: "0" }} id="courses3">
                  {subcat.courses.map(course => (  
                    <div className="course">
                      <div className="sub">
                        <img src={course.title.toLowerCase() === "reactjs" ? react : (course.title.toLowerCase() === "angular js" ? angular : (course.title.toLowerCase() === "nodejs" ? nodejs : (course.title.toLowerCase() === "mern stack" ? mern : (course.title.toLowerCase() === "golang" ? golang : (course.title.toLowerCase() === "web development" ? coreui : data)))))} />
                      </div>
                      <div className="sub1" style={{ backgroundColor: "white", borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", height: "100px" }}>
                        <h5>{course.title}</h5>
                        <button onClick={() => onClick(course)} id="read">View Course</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      }
    </div>
  );
};

export default Programs3;
