import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from './appbar';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Footer from "./footer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
class Dashboard extends Component{
    constructor(props)
    {
        super(props);
    }
render() {
    const user=this.props.location.state;
    // console.log('state',this.props.location.state);
    return (
      <div>  
          {user?<Content user={user} />:<Redirect to="/lms/organisation/organisation_login" /> }             
      </div>

    )
  
};
}

class Content extends Component{
  constructor(props)
  {
      super(props);
  }
render() {
  const user=this.props.user;
  return (
    <>
    <Grid container>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <div className="contained">
              <Grid container spacing={3}>
                <Grid className="dasborad_text text" item xs={6}>
                  <h1>Caramel IT</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Grid>
                <Grid className="dasborad_text img-container" item xs={6}>
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
                  <ListItemIcon style={{ color: "white" }}>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#simple-list">
                  <ListItemIcon style={{ color: "white" }}>
                    <ImportContactsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Our Courses" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#simple-list">
                  <ListItemIcon style={{ color: "white" }}>
                    <RecentActorsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Student" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#simple-list">
                  <ListItemIcon style={{ color: "white" }}>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notify Student" />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#simple-list">
                  <ListItemIcon style={{ color: "white" }}>
                    <AccountCircleIcon />
                  </ListItemIcon>
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

  )

};
}

export default Dashboard;