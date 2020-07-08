import React, { Component } from "react";
import NavBar from "../common/navbar";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Footer from "../common/footer";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(user);
	return (
		<>
			<Grid container>
				<Grid item xs={12}>
					<NavBar />
				</Grid>
				<Grid item xs={12}>
					{" "}
					<div className="container">
						<Grid container spacing={3}>
							<Grid className="dashboard_text text" item xs={6}>
								<h3 style={{ color: "black" }}>Welcome, {user.profile} - {user.firstName} {user.lastName}</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a
									type specimen book.
								</p>
							</Grid>
							<Grid className="dashboard_text img-container" item xs={6}>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									className="img"
									image="https://caramelit.com/images/Caramel-Horz.png"
									title="Contemplative Reptile"
								/>
							</Grid>
						</Grid>
					</div>
				</Grid>
				<Grid item xs={12}>
					<Footer />
				</Grid>
			</Grid>
		</>
	);
}

export default Dashboard;

/*
import React, { Component } from "react";
import NavBar from "../common/navbar";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Footer from "../common/footer";

class Dashboard extends Component {
	render() {
		const user = this.props.location.state;
		console.log(user);
		
	}
}

export default Dashboard;
*/