import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CourseItem from "./CourseItem";
import Account from "./Account";
import Logo from "../common/logo.png";
import ErrorIcon from '@material-ui/icons/Error';
import "./dashboard.css";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("instructor"));

	const [state, setState] = useState({
		courses: null,
		showAccount: false,
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
			console.log(res.data);
		}).catch(err => {
			console.log(err.message);
		});
	}

	let accountBorder = state.showAccount ? "2px solid #39004d" : ""; 
	let courseBorder = state.showCourses ? "2px solid #39004d" : ""; 
	let teachingBorder = state.showTeachingCourses ? "2px solid #39004d" : ""; 

	const account = () => {
		setState({ courses: state.courses, showAccount: !state.showAccount, showCourses: false, showTeachingCourses: false });
	};

	const courses = () => {
		setState({ courses: state.courses, showCourses: !state.showCourses, showTeachingCourses: false, showAccount: false });
	};

	const teachingCourses = () => {
		setState({ courses: state.courses, showCourses: false, showTeachingCourses: !state.showTeachingCourses, showAccount: false });
	};

	return (
		<div>
			<nav className="navbar navbar-expand-sm" style={{ backgroundColor: "#39004d" }}>  
				<Link className="navbar-brand" to="/">
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
				<div className="column insleft" id="sidebar" style={{ backgroundColor: "#ffffe6" }}>
					<p>{user.firstName} {user.lastName}</p>
					<p style={{ textAlign: "left", paddingLeft: "15px" }}>
					{user.emailAddress}
					</p>
					<hr />	
					<div className="card-header" onClick={account} style={{ border: accountBorder, cursor: "pointer" }}>Account</div> <br />
					<div className="card-header" onClick={courses} style={{ border: courseBorder, cursor: "pointer" }}>Available Courses</div> <br />
					<div className="card-header" onClick={teachingCourses} style={{ border: teachingBorder, cursor: "pointer" }}>Your Courses</div>
					<hr />
					<Link className="btn btn-lg bg-dark text-white" to="/">
						Logout
					</Link>
				</div>
				<div className="column insright" id="sidebar">
					<h2 style={{ color: "white" }}>Hello, Instructor - {user.firstName} {user.lastName} !</h2>
					{state.showAccount && <AccountItems courses={state.courses} user={user} userStyle={userStyle} />} 
					{state.showCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} teaching={false} />}
					{state.showTeachingCourses && <CourseItems courses={state.courses} user={user} userStyle={userStyle} teaching={true} />}
				</div>
			</div>
     	</div>
	);
};

const AccountItems = ({ courses, user, userStyle }) => {
	let i = 0, j = 0;
	return (
		<div>
			<h4 style={{ color: "white", marginLeft: "2px" }}>Students enrolled for your courses:</h4> <hr />
			<div style={{ padding: "1%" }}>
				<div style={userStyle}>
					{courses.map(course => (course.students.length > 0 ?
						course.taughtBy === user._id &&
						course.students.map(student => (
							<Account key={i++} name={student.name} email={student.email} course={student.course} />
						)) : <div style={{ display: "none" }}>{j++}</div>
					))}
				</div>
				{j == courses.length &&
				<div className="alert alert-warning"><ErrorIcon /> You do not seem to have any students enrolled for your courses</div>}
			</div>
		</div>
		
	);
};

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
