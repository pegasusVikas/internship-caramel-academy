import React from 'react';
import Header from '../common/navbar';
import Button from '@material-ui/core/Button';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useState,useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { IconButton } from '@material-ui/core';
import LinkSharpIcon from '@material-ui/icons/LinkSharp';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Caramel IT Academy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album(props) {
 const [profile, setProfile] = useState(null)
 const [users,setUsers]= useState({
  skill_complete:[],
  skill_not_complete:[],
  course_complete:[],
  course_not_complete:[],
});
const [button,setButton]=useState({ type:"",status:"request"});

 useEffect(() => {
    if(props.location.state)
    setProfile(props.location.state)
 },[])

 useEffect(() => {
  axios.get("/api/test").then((res)=>{
    console.log(res.data)
    var skill_complete=[],skill_not_complete=[];
    var course_complete=[],course_not_complete=[];
    res.data.map((user)=>{
      if(user.test_type==="skill"){
        if(user.completed)
         skill_complete.push(user)
        else
         skill_not_complete.push(user)
      }else if(user.test_type==="course"){
        if(user.completed)
         course_complete.push(user)
        else
         course_not_complete.push(user)
      }
    })
    setUsers({
      skill_complete:skill_complete,
      skill_not_complete:skill_not_complete,
      course_complete:course_complete,
      course_not_complete:course_not_complete,
    })
  })
},[])

  const classes = useStyles();

  const RenderList=()=>{
    var list;
    if(button.type==="skill"){
      if(button.status==="request")
      list=users.skill_not_complete
      else
      list=users.skill_complete
    }else if(button.type="course"){
      if(button.status==="request")
      list=users.course_not_complete
      else
      list=users.course_complete
    }
    console.log(list)
    return (list.map((card) => (
      <Grid item key={card._id} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5K2dYg8LLsH5cHD00Pudv3Nn0dcuuJFUXsQ&usqp=CAU"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.user_id}
            </Typography>
            <Typography>
              {button.status==="request"?button.type:`${card.score}/${card.total_score}`}
            </Typography>
          </CardContent>
          <CardActions>
          {button.status==="request"&&
            <IconButton size="small" color="primary" onClick={()=>{props.history.push(button.type==="skill"?"/lms/admin/skillAssessment":"/dashboard/courseAssessment")}}>
             {"assign "+button.type+" test"} 
            </IconButton>
          }
          {" "}
            <Button onClick={() => {navigator.clipboard.writeText(card.user_id)}}>
               <LinkSharpIcon/>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )))

  }
 
  return (
    <React.Fragment>
    {!props.location.state&&<Redirect to="/lms/admin/admin_login"></Redirect>}
      <CssBaseline />
      <Header/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to Test Assessment
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              {profile&&profile.adminName}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {(profile&&profile.emailAddress)&&`Email : ${profile.emailAddress}`}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {(profile&&profile.mobileNumber)&&`contact : ${profile.mobileNumber}`}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>{setButton({...button,type:"skill"})}}>
                    Skill Assessment
                  </Button>
                </Grid>
                <Grid item>
                 <Button variant="contained" color="primary" onClick={()=>{setButton({...button,type:"course"})}}>
                    Course Assessment
                 </Button>
                </Grid>
                <Grid item>
                 <Button variant="contained" color="primary" onClick={()=>{setButton({...button,type:""});props.history.push("/dashboard/questionbank")}}>
                   Question Bank
                 </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography variant="h5" align="center" color="textSecondary" paragraph>{button.type.toUpperCase()}</Typography>
          {button.type&&
          <Grid container spacing={2} justify="center">
            <Grid item>
            <Button variant={button.status!="request"?"contained":"outlined"} size="small" onClick={()=>{setButton({...button,status:"request"})}}>
                request
            </Button>
            </Grid>
            <Grid item>
            <Button variant={button.status==="request"?"contained":"outlined"} size="small" onClick={()=>{setButton({...button,status:"completed"})}}>
                completed
            </Button>
            </Grid>
          </Grid>
          }
          <Grid container spacing={4}>
            <RenderList/>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Caramel IT Academy
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}