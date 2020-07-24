import React, { useState } from "react";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import { Tabs, Tab } from "react-bootstrap-tabs";
import axios from 'axios';
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
  })

  return (
    <div>
      {state.subcategories !== null && 
        <Tabs style={{ backgroundColor: "black", marginLeft: "1px", marginBottom: "1px" }}>
          {state.subcategories.map(subcat => (
            <Tab label={subcat.title}>
              {subcat.courses.map(course => (
                <div className="ruby-grid ruby-grid-lined" style={{ height: "422px" }}>
                  <div className="ruby-row">
                    <div className="ruby-col-2">
                      <div className="second">
                        <div className="third">
                          {course.title}
                        </div>
                        <div className="four">
                          <p>{course.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
          ))}
        </Tabs>
      }
    </div>
  );
};

export default Programs3;
