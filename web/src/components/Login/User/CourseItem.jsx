import React, { useState } from 'react';
import axios from "axios";

const CourseItem = (props) => {

    const { user, course } = props;
    let enrolled = false;
    for (let i = 0; i < (course.enrolledBy).length; i++) {
        if (course.enrolledBy[i] === user) {
            enrolled = true;
            break;
        }
    }
    
	const [btn, setBtn] = useState({
		text: enrolled ? "Enrolled" : "Buy Course",
		color: enrolled ? "warning" : "success"
    });
    
    const handleClick = (userId, courseId) => {
		axios.post(`http://localhost:3004/api/courses/${userId}/${courseId}`)
		.then(res => {
			if (res.data.message === "Done") {
				setBtn({
					text: "Enrolled",
					color: "warning"
				});
			}
		}).catch(err => {
			console.log(err.message);
		});
	};

    return (
        <div className="card">
            <div className="card-header bg-dark">
                <span className="text-white" style={{ fontWeight: "bold" }}>{course.title}</span>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ccffff"}}>
                {course.description}
            </div>
            <div className="card-footer" style={{ backgroundColor: "#99ffff"}}>
                <div className={`btn btn-${btn.color}`} onClick={() => handleClick(user, course._id)}>{btn.text}</div>
                <div className="btn btn-primary" style={{float: "right"}}>View Course</div>
            </div>
        </div>
    )
}

export default CourseItem;
