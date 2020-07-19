import React, { useState } from 'react';
import "../Instructor/card.css";
import axios from "axios";

const CourseItem = (props) => {

    const { user, course, enrolled } = props;
	const [btn, setBtn] = useState({
		text: enrolled ? "Enrolled" : "Buy Course",
        color: enrolled ? "warning" : "success"
    });

    const onClick = () => {
        window.open("/caramelit_new/courses/coursespage/" + course.title.toLowerCase().split(" ").join(""));
    }
    
    const handleClick = (userId, courseId) => {
		axios.post(`http://localhost:3004/api/courses/${userId}/${courseId}`)
		.then(res => {
			if (res.data.message === "Done") {
				setBtn({
					text: "Enrolled",
                    color: "warning",
                    display: "none"
                });
                window.location.href="http://localhost:3000/lms/user/dashboard"
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
            <div className="card-body">
                {course.description}
            </div>
            <div className="card-footer" style={{ backgroundColor: "#ccffff"}}>
                <button className={`btn btn-${btn.color}`} onClick={() => handleClick(user, course._id)} disabled={enrolled}>{btn.text}</button>
                <button onClick={onClick} className="btn btn-primary" style={{float: "right"}}>View Course</button>
            </div>
        </div>
    );
};

export default CourseItem;
