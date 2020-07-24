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
  });

  const userStyle = {
		display : 'grid',
		gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '1.5rem',
    padding: "10px"
	};

  return (
    <div>
      {state.subcategories !== null && 
        <Tabs style={{ backgroundImage: "linear-gradient(to left, #0e7fa7, #1d5787, #27386e)", marginLeft: "1px", marginBottom: "1px" }}>
          {state.subcategories.map(subcat => (
            <Tab label={subcat.title}>
              <div style={userStyle}>
                  {subcat.courses.map(course => (  
                    <div className="card">
                        <div className="card-title bg-primary" style={{ textAlign: "center", padding: "3px" }}>
                          <span className="text-black" style={{ fontWeight: "bold", fontSize: "20px" }}>{course.title}</span>
                        </div>
                        <div className="card-body">{course.description}</div>
                        <div className="card-footer">
                          <button className="btn btn-primary" disabled="true">View Course</button>
                        </div>
                    </div>
                  ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      }
    </div>
  );
};

export default Programs3;
