import React, { useState } from 'react';
import axios from "axios";

const CourseItem = (props) => {

    const { user, course, teaching } = props;

	const [btn, setBtn] = useState({
		text: teaching ? "Teaching" : "Teach",
        color: teaching ? "info" : "success",
    });

    const onClick = () => {
        window.open("/caramelit_new/courses/coursespage/" + course.title.toLowerCase().split(" ").join(""));
    }
    
    const handleClick = (userId, courseId) => {
		axios.post(`http://localhost:3004/api/courses/instructor/${userId}/${courseId}`)
		.then(res => {
			if (res.data.message === "Done") {
				setBtn({
					text: "Teaching",
                    color: "info"
                });
                window.location.href="/lms/instructor/dashboard"
			}
		}).catch(err => {
			console.log(err.message);
		});
	};

    return (
        <>
        {(course.taughtBy === "5ef0b129030c551c709ce740" || teaching) &&
        <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
            <div className="card-header"  style={{ backgroundColor: "#39004d" }}>
                <span className="text-white" style={{ fontWeight: "bold" }}>{course.title}</span>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ffffe6" }}>
                {course.description}
            </div>
            <div className="card-footer" style={{ backgroundColor: "#ffffcc"}}>
                <button className={`btn btn-${btn.color}`} disabled={teaching} onClick={() => handleClick(user, course._id)}>{btn.text}</button>
                <button onClick={onClick} className="btn btn-primary" style={{float: "right"}}>View Course</button>
            </div>
        </div>
        }
        </>
    )
}

export default CourseItem;
