import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import CourseItem from "./CourseItem";
import Account from "./Account";
import Logo from "../common/logo.png";
import ErrorIcon from '@material-ui/icons/Error';
import "../Others/dashboard.css";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	const [state, setState] = useState({
		courses: null,
		showAccount: null,
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

	let accountBorder = state.showAccount ? "2px solid #39004d" : ""; 
	let courseBorder = state.showCourses ? "2px solid #39004d" : ""; 
	let enrolledBorder = state.showEnrolledCourses ? "2px solid #39004d" : ""; 

	const account = () => {
		setState({ courses: state.courses, showAccount: !state.showAccount, showCourses: false, showEnrolledCourses: false });
	};


	const courses = () => {
		setState({ courses: state.courses, showCourses: !state.showCourses, showEnrolledCourses: false, showAccount: false });
	};

	const enrolledCourses = () => {
		setState({ courses: state.courses, showCourses: false, showEnrolledCourses: !state.showEnrolledCourses, showAccount: false });
	};

	return (
		<div> 
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
				<Link className="navbar-brand" to="/lms/user/cart">
					<img
					src="../../Caramellogo.png"
					alt="logo"
					style={{
						width: "240px",
						height: "65px",
						margin: "0px 0px 0px 0px",
					}}
					/>
				</Link>
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
					<p style={{ textAlign: "left", paddingLeft: "5px" }}>
					{user.emailAddress}
					</p>
					<hr />	
					<div className="card-header" onClick={account} style={{ border: accountBorder, cursor: "pointer" }}>Account</div> <br />
					<div className="card-header" onClick={courses} style={{ border: courseBorder, cursor: "pointer" }}>Courses</div> <br />
					<div className="card-header" onClick={enrolledCourses} style={{ border: enrolledBorder, cursor: "pointer" }}>Enrolled Courses</div>
					<hr />
					<Link className="btn btn-lg bg-dark text-white" to="/">
						Logout
					</Link>
				</div>
				<div className="column right" id="sidebar">
					<h2>Hello, {user.profile} - {user.firstName} {user.lastName} !</h2>
					{state.showAccount && <AccountItems courses={state.courses} user={user} userStyle={userStyle} />} 
					{state.showCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} enrolled={false}/>}
					{state.showEnrolledCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} enrolled={true}/>}
				</div>
			</div>
     	</div>
	);
}

const AccountItems = ({ courses, user, userStyle }) => {
	let i = 0;
	return (
		<div>
			<h4>Instructors for your courses:</h4>
			<div style={{ padding: "1%" }}>
				<div style={userStyle}>
					{courses.map(course => course.instructor !== null && course.enrolledBy.indexOf(user._id) !== -1 && (
						<Account key={i++} name={course.instructor.name} email={course.instructor.email} course={course.title} />
					))}
				</div>
			</div>
			{i === 0 && <div className="alert alert-warning"><ErrorIcon /> You do not seem to be enrolled in any courses</div>}
		</div>	
	);
};

const CourseItems = ({ courses, user, userStyle, enrolled }) => {
	console.log(courses);
	let i = 0;
    return (
		<div style={{ padding: "1%" }}>
			<div style={userStyle}>
				{courses.map(course => ((enrolled ? course.enrolledBy.indexOf(user._id) !== -1 : course.enrolledBy.indexOf(user._id) === -1)  &&
					<CourseItem key={i++} course={course} user={user._id} enrolled={enrolled}/>
				))}
			</div>
			{enrolled && i == 0 && <div className="alert alert-warning"><ErrorIcon /> You do not seem to be enrolled in any courses</div>}
		</div>
	);
};

export default Dashboard;
