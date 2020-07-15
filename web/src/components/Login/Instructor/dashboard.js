import React, { useState } from "react";
import axios from "axios";
import CourseItem from "./CourseItem";
import Logo from "../common/logo.png";
import "../Others/dashboard.css";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("instructor"));

	const [state, setState] = useState({
		courses: null,
		showCourses: false,
		showTeachingCourses: false
	});

	const userStyle = {
		display : 'grid',
		gridTemplateColumns : 'repeat(3, 1fr)',
		gridGap : '1.5rem'
	};

	if(state.courses === null) {
		axios.get('http://localhost:3004/api/courses')
		.then(res => {
			setState({ courses: res.data.courses });
		}).catch(err => {
			console.log(err.message);
		});
	}

	const courses = () => {
		setState({ courses: state.courses, showCourses: !state.showCourses, showTeachingCourses: false });
	};

	const teachingCourses = () => {
		setState({ courses: state.courses, showCourses: false, showTeachingCourses: !state.showTeachingCourses });
	};

	return (
		<div>
			<nav className="navbar navbar-expand-sm" style={{ backgroundColor: "#39004d" }}>  
				<a className="navbar-brand" href="/">
					<img
					src="../../Caramellogo.png"
					alt="logo"
					style={{
						width: "240px",
						height: "65px",
						margin: "0px 0px 0px 0px",
					}}
					/>
				</a>
				<div
					class="collapse navbar-collapse justify-content-end"
					id="navbarTogglerDemo03"
				>
					<ul class="navbar-nav">
						<li><img src={Logo} width="50px" alt="mern" height="50px"/></li>
					</ul>
				</div>
			</nav>
			<div class="row">
				<div className="column left" id="sidebar" style={{ backgroundColor: "#ffffe6" }}>
					<p>{user.firstName} {user.lastName}</p>
					<p style={{ textAlign: "left", paddingLeft: "15px" }}>
					{user.emailAddress}
					</p>
					<hr />	
					<div className="card-header">Account</div> <br />
					<div className="card-header" onClick={courses}>Available Courses</div> <br />
					<div className="card-header" onClick={teachingCourses}>Your Courses</div>
					<hr />
					<a className="btn btn-lg bg-dark text-white" href="/">
						Logout
					</a>
				</div>
				<div className="column right" id="sidebar">
					<h2>Hello, Instructor - {user.firstName} {user.lastName} !</h2>
					{state.showCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} teaching={false}/>}
					{state.showTeachingCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} teaching={true}/>}
				</div>
			</div>
     	</div>
	);
}

const CourseItems = ({ courses, user, userStyle, teaching }) => {
	console.log(courses);
    return (
		<div style={{ padding: "1%" }}>
			<div style={userStyle}>
				{courses.map(course => ((teaching ? course.taughtBy === user._id :  course.taughtBy !== user._id) &&
					<CourseItem key={course._id} course={course} user={user._id} teaching={teaching} />
				))}
			</div>
		</div>
	);
};

export default Dashboard;
