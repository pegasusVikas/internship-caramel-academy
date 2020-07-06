import React, { Component } from "react";
import NavBar from "./appbar";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Footer from "./footer";

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

class CollegeDashboard extends Component {
	render() {
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
									<h1 style={{ color: "black" }}>ABC College of PQR</h1>
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
						<div className="pink-container">
							<List
								className="skin-container"
								component="nav"
								aria-label="secondary mailbox folders"
							>
								<ListItemLink href="#simple-list">
									<ListItemText primary="Dashboard" />
								</ListItemLink>
								<Divider />
								<ListItemLink href="#simple-list">
									<ListItemText primary="Our Courses" />
								</ListItemLink>
								<Divider />
								<ListItemLink href="#simple-list">
									<ListItemText primary="Student" />
								</ListItemLink>
								<Divider />
								<ListItemLink href="#simple-list">
									<ListItemText primary="Notify Student" />
								</ListItemLink>
								<Divider />
								<ListItemLink href="#simple-list">
									<ListItemText primary="Account" />
								</ListItemLink>
							</List>
						</div>
					</Grid>
					<Grid item xs={12}>
						<Footer />
					</Grid>
				</Grid>
			</>
		);
	}
}

export default CollegeDashboard;
