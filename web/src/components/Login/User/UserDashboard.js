import React, { useState } from "react";
import axios from "axios";
import NavBar from "../common/navbar";
import Grid from "@material-ui/core/Grid";
import Footer from "../common/footer";
import CourseItem from "./CourseItem";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	const [state, setState] = useState({
		courses: null
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

	return (
		<>
		{state.courses !== null &&
			<Grid container>
				<Grid item xs={12}>
					<NavBar />
				</Grid>
				<div style={{ padding: "1%" }}>
					<h3 style={{ color: "black" }}>Welcome, {user.profile} - {user.firstName} {user.lastName}</h3>
					<h3>Courses: </h3> <hr />
					<div style={userStyle}>
						{state.courses.map(course => (
							<CourseItem key={course._id} course={course} user={user._id} />
						))}
					</div>
				</div>
				<Grid item xs={12}>
					<Footer />
				</Grid>
			</Grid>
		}
		{state.courses === null &&
			<h1>Loading</h1> 
		}
		</>
	);
}

export default Dashboard;
