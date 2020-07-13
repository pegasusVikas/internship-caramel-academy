import React, { useState } from 'react';
import axios from "axios";

const CourseItem = (props) => {

    const { user, course } = props;
    let teaching = false;
    
    if (course.taughtBy === user) teaching = true;

	const [btn, setBtn] = useState({
		text: teaching ? "Teaching" : "Teach",
		color: teaching ? "info" : "success"
    });
    
    const handleClick = (userId, courseId) => {
		axios.post(`http://localhost:3004/api/courses/instructor/${userId}/${courseId}`)
		.then(res => {
			if (res.data.message === "Done") {
				setBtn({
					text: "Teaching",
					color: "info"
				});
			}
		}).catch(err => {
			console.log(err.message);
		});
	};

    return (
        <>
        {(course.taughtBy === "5ef0b129030c551c709ce740" || teaching) &&
        <div className="card">
            <div className="card-header"  style={{ backgroundColor: "#39004d" }}>
                <span className="text-white" style={{ fontWeight: "bold" }}>{course.title}</span>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ffffe6" }}>
                {course.description}
            </div>
            <div className="card-footer" style={{ backgroundColor: "#ffffcc"}}>
                <div className={`btn btn-${btn.color}`} onClick={() => handleClick(user, course._id)}>{btn.text}</div>
                <div className="btn btn-primary" style={{float: "right"}}>View Course</div>
            </div>
        </div>
        }
        </>
    )
}

export default CourseItem;
