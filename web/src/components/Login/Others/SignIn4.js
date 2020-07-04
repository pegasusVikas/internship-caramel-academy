import React, {Component} from 'react'
// import './login.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
class SignIn extends Component{

  constructor(props){
		super(props);
		this.state={
      emailAddress:'',
      password : '',
      error: false,
      islogged:false,
      user:{}
		}
    this.onSubmit=this.onSubmit.bind(this);
    this.onEmailChange=this.onEmailChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
  }
  
  onEmailChange(e){
    this.setState({emailAddress:e.target.value});
  }
  onPasswordChange(e){
    this.setState({password:e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    // axios.post("http://localhost:3003/admin/admin_login",this.state).
    axios.post("http://103.210.75.167:3004/api/admin-authenticate",this.state).
            then(res=>{
                if(res.data.logged)
                {
                    // this.setState({logged:true});
                    console.log('logged in');
                    // console.log(res.data);
                    this.setState({error:false, islogged:true,user:res.data.admin});
                    // console.log(this.state.user);
                }
                  else{
                     console.log('not loggedi in');
                     this.setState({error:true});
                  } 

            }).catch(err=>{console.log(err); this.setState({error:true})});
                    
    }
  render(){
    return(
      <div>
      <div>
        <nav className="navbar navbar-expand-sm">
          <Link className="navbar-brand" to="/">
            <img src="../../Caramellogo.png" alt="logo" style={{width: '240px', height: '65px', margin: '0px 0px 0px 0px'}} />
          </Link>
        </nav>
        <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h2 className="card-title text-center"><b>Sign In As An Admin</b></h2>
            <center>
              <span style={{color: 'red'}} /> <br /><br />
            </center>
            <form className="form-signin" onSubmit={this.onSubmit} ><input type="hidden" name="_csrf" defaultValue="8988e4bb-70cc-457f-86b6-d73bf13d30ac" />
              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus name="emailAddress" onChange={this.onEmailChange}  value={this.state.email} />
                <label htmlFor="inputEmail">Email address</label>
              </div>
              <div className="form-label-group">
                <input type="password" id="inputPassword" onChange={this.onPasswordChange} value={this.state.password} name="password" className="form-control" placeholder="Password" required />
                <label htmlFor="inputPassword">Password</label>
              </div>
 
        <input type="submit" className="btn btn-lg btn-primary btn-block text-uppercase" value="Sigin" /> 
        {this.state.error==true?<p style={{margin:5}}>Invalid Email or Password</p>:null}
        <hr className="my-4" />  
              <Link to="/lms/admin/register" style={{fontSize: '20px'}}>Sign Up</Link><Link className="float-right" to="/lms/user/forgot-password" style={{fontSize: '20px'}}>Forgot password?</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    {this.state.islogged?<Redirect to={{pathname: "/lms/admin/dashboard", state:this.state.user}} ></Redirect>:null}
    </div>
    )
  }
}

export default SignIn;
