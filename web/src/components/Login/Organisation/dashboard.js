import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../common/navbar';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Footer from "../common/footer";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Dashboard1 from './toggle/Dashboard1'
import OurCourses from './toggle/OurCourses'
import NotifyStudent from './toggle/NotifyStudent'
import Student from './toggle/Student'

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
  console.log(user)
  return (
    <>
    <Grid container>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <div style={{backgroundImage:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
              <Grid container spacing={3}>
                <Grid className="dasborad_text text" item xs={6}>
                  <h2><u>Welcome organisation</u>:</h2>
                  <h1>{user.corporateName}</h1>
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
          </Grid>
          <div className="my-4 mx-1">
            <div class="row">
                <div class="col-3">
                  <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-Dashboard-tab" data-toggle="pill" href="#v-pills-Dashboard" role="tab" aria-controls="v-pills-Dashboard" aria-selected="true">Dashboard</a>
                    <a class="nav-link" id="v-pills-Course-tab" data-toggle="pill" href="#v-pills-Course" role="tab" aria-controls="v-pills-Course" aria-selected="false">Our Course</a>
                    <a class="nav-link" id="v-pills-Student-tab" data-toggle="pill" href="#v-pills-Student" role="tab" aria-controls="v-pills-Student" aria-selected="false">Notify Student</a>
                    <a class="nav-link" id="v-pills-Notify-tab" data-toggle="pill" href="#v-pills-Notify" role="tab" aria-controls="v-pills-Notify" aria-selected="false">Students</a>
                    <a class="nav-link" id="v-pills-Account-tab" data-toggle="pill" href="#v-pills-Account" role="tab" aria-controls="v-pills-Account" aria-selected="false">Account</a>
                  </div>
                </div>
                <div class="col-9">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-Dashboard" role="tabpanel" aria-labelledby="v-pills-Dashboard-tab"><Dashboard1/></div>
                    <div class="tab-pane fade" id="v-pills-Course" role="tabpanel" aria-labelledby="v-pills-Course-tab"><OurCourses/></div>
                    <div class="tab-pane fade" id="v-pills-Student" role="tabpanel" aria-labelledby="v-pills-Student-tab"><NotifyStudent/></div>
                    <div class="tab-pane fade" id="v-pills-Notify" role="tabpanel" aria-labelledby="v-pills-Notify-tab"><Student/></div>
                    <div class="tab-pane fade" id="v-pills-Account" role="tabpanel" aria-labelledby="v-pills-Account-tab">Settings</div>
                </div> 
              
            {/*<div className='bg-info'>
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
           </div>*/}
          </div>
          </div>
          </div>
          <Grid item xs={12}>
            <Footer />
          </Grid>

        
      </>

  )

};
}

export default Dashboard;