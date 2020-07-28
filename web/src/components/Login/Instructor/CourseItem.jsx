import React, { useState } from 'react';
import "./card.css";
import axios from "axios";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const CourseItem = (props) => {

    const { user, course, teaching } = props;

	const [btn, setBtn] = useState({
        text: teaching ? <div><BeenhereIcon /> Teaching</div> : <div><AssignmentIndIcon />Teach Course</div>,
        color: teaching ? "yellow" : "#66ff99",
    });

    const onClick = () => {
        window.open("/caramelit_new/courses/coursespage/" + course.title.toLowerCase().split(" ").join(""));
    }
    
    const handleClick = (userId, courseId) => {
		axios.post(`http://localhost:3004/api/courses/instructor/${userId}/${courseId}`)
		.then(res => {
			if (res.data.message === "Done") {
				setBtn({
					text: <div><BeenhereIcon /> Teaching</div>
                });
                window.location.href="/lms/instructor/dashboard"
			}
		}).catch(err => {
			console.log(err.message);
		});
	};

    return (
        <>
        {(course.taughtBy === "5f05e4ce1172af181036b727" || teaching) &&
        <div className="card">
            <div className="card-header"  style={{ backgroundColor: "#39004d" }}>
                <span className="text-white" style={{ fontWeight: "bold" }}>{course.title}</span>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ffffe6" }}>
                {course.description}
            </div>
            <div className="card-footer" style={{ backgroundColor: "#ffffcc"}}>
                <button className="btn btn-sm" disabled={teaching} onClick={() => handleClick(user, course._id)} style={{ borderRadius: "30px", backgroundColor: btn.color }}>{btn.text}</button>
                <button onClick={onClick} className="btn btn-sm" style={{ float: "right", borderRadius: "30px", backgroundColor: "#eb99ff" }}><LibraryBooksIcon />{" "}View Course</button>
            </div>
        </div>
        }
        </>
    )
}

export default CourseItem;
