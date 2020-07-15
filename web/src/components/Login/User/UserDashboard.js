import React, { useState } from "react";
import axios from "axios";
import CourseItem from "./CourseItem";
import Logo from "../common/logo.png";
import "../Others/dashboard.css";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	const [state, setState] = useState({
		courses: null,
		showCourses: false,
		showEnrolledCourses: false
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
		setState({ courses: state.courses, showCourses: !state.showCourses, showEnrolledCourses: false });
	};

	const enrolledCourses = () => {
		setState({ courses: state.courses, showCourses: false, showEnrolledCourses: !state.showEnrolledCourses });
	};

	return (
		<div>
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
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
				<div className="column left" id="sidebar" style={{ backgroundColor: "#ccffff" }}>
					<p>{user.firstName} {user.lastName}</p>
					<p style={{ textAlign: "left", paddingLeft: "15px" }}>
					{user.emailAddress}
					</p>
					<hr />	
					<div className="card-header">Account</div> <br />
					<div className="card-header" onClick={courses}>Courses</div> <br />
					<div className="card-header" onClick={enrolledCourses}>Enrolled Courses</div>
					<hr />
					<a className="btn btn-lg bg-dark text-white" href="/">
						Logout
					</a>
				</div>
				<div className="column right" id="sidebar">
					<h2>Hello, {user.profile} - {user.firstName} {user.lastName} !</h2>
					{state.showCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} enrolled={false}/>}
					{state.showEnrolledCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} enrolled={true}/>}
				</div>
			</div>
     	</div>
	);
}

const CourseItems = ({ courses, user, userStyle, enrolled }) => {
	console.log(courses);
    return (
		<div style={{ padding: "1%" }}>
			<div style={userStyle}>
				{courses.map(course => ((enrolled ? course.enrolledBy.indexOf(user._id) !== -1 : course.enrolledBy.indexOf(user._id) === -1)  &&
					<CourseItem key={course._id} course={course} user={user._id} enrolled={enrolled}/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
