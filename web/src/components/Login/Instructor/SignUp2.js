/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
//import '../../components/style.css';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const SignUp2 = () => {
  return (
    <div>
  {/*  */}
  <nav className="navbar navbar-expand-sm">
    {/* Brand/logo */}
    <a className="navbar-brand" href="/lms">
      <img src="../../Caramel-Horz.png" alt="logo" style={{width: '240px', height: '65px', margin: '0px 0px 0px 0px'}} />
    </a>
  </nav>
  {/* <div class="middle-box text-center loginscreen animated fadeInDown">
    <div> */}
  <br /><br />
  <div className="container" style={{marginTop: '-40px'}}>
    <div className="row">
      <div className="col-md-3" />
      <div className="col-md-6">
        <h2 align="center" style={{color: '#111'}}><b>New Instructor Registration</b></h2><br />
        <form autoComplete="off" action="/lms/instructor/instructor_register" method="post" className="m-t" role="form" data-toggle="validator"><input type="hidden" name="_csrf" defaultValue="eb490557-a7ec-4e99-9c4e-7427faaf0aea" />
          <div className="row">
            <div className="col-md-6">
              <div className="form-group input-group has-feedback ">
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-user stugl" />
                </span>
                <input type="text" placeholder="First Name...." className="form-control stureg" required id="firstName" name="firstName" defaultValue />
                <span className="glyphicon form-control-feedback" aria-hidden="true" />
              </div>
            </div>
            {/*         -------firstName closes--------           */}
            <div className="col-md-6">
              <div className="form-group input-group has-feedback">
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-user stugl" />
                </span>
                <input type="text" placeholder="Last Name...." className="form-control stureg" required id="lastName" name="lastName" defaultValue />
                <span className="glyphicon form-control-feedback" aria-hidden="true" />
              </div>
            </div> 
            {/*         -------lastName closes--------           */}
          </div>
          {/*         -------row closes--------           */}
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-envelope stugl" />
            </span>
            <input type="email" placeholder="Email Address...." className="form-control stureg" data-error="This email address is invalid" required id="email" name="email" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/*         -------email closes--------           */}
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-earphone stugl" />
            </span>
            <input type="number" placeholder="Your Mobile Number...." className="form-control stureg" data-error="This Mobile Number is invalid" required id="mobile" name="mobile" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/*         -------mobile closes--------           */}
          <div className="form-group input-group has-feedback ">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-pencil stugl" />
            </span>
            <input type="text" placeholder="Enter your subjects" className="form-control stureg" required id="subject" name="subject" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/*          ------ Subject closes-----  */}
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-time stugl" />
            </span>
            <select className="form-control stureg" required id="time" name="time">
              <option value> - - - Select By - - - </option>
              <option value="fulltime">FullTime</option>
              <option value="parttime">PartTime</option>
            </select>
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/*          ------ timing closes-----  */}
          <div className="form-group input-group has-feedback ">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-briefcase stugl" />
            </span>
            <input type="text" placeholder="Enter your Experience" className="form-control stureg" required id="experience" name="experience" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/*          ------ experience closes-----  */}
          <div className="form-group input-group has-feedback ">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-list-alt stugl" />
            </span>
            <textarea placeholder="Enter your Profile Details" className="form-control stureg" required id="profile" name="profile" defaultValue={""} />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <br />
          <button type="submit" className="btn btn-primary full-width m-b">Register</button>
          <br />
          <h3><a href="/lms/instructor/instructor_login" style={{color: '#111'}}>Already Registered? Please Login</a></h3><br /><br />
        </form>
      </div>
      <div className="col-md-3" />
    </div>
  </div>
  <p className="m-t">
  </p>
  {/* jQuery*/}
  {/* Bootstrap */}
  {/* Bootstrap Validator plugin */}
</div>

  )
}

export default SignUp2;
