/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
//import '../../components/style.css';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const SignUp3 = () => {
  return (
    <div>
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
        <h2 align="center" style={{color: '#111'}}><b>New Organisation/Corporate Registration</b></h2><br />
        <form autoComplete="off" action="/lms/organisation/organisation_register" method="post" className="m-t" role="form" data-toggle="validator"><input type="hidden" name="_csrf" defaultValue="eb490557-a7ec-4e99-9c4e-7427faaf0aea" />
          <div className="form-group input-group has-feedback ">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-user stugl" />
            </span>
            <input type="text" placeholder="Your Organisation Name...." className="form-control stureg" required id="organisationName" name="organisationName" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/*         -------OrganisationName closes--------           */}
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-envelope stugl" />
            </span>
            <input type="email" placeholder="your Email Address...." className="form-control stureg" data-error="This email address is invalid" required id="email" name="email" defaultValue />
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
              <span className="glyphicon glyphicon-edit stugl" />
            </span>
            <textarea placeholder="Others....." className="form-control stureg" required id="others" name="others" defaultValue={""} />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/*         -------others closes--------           */}
          <br />
          <button type="submit" className="btn btn-primary full-width m-b">Register</button>
          <br />
          <h3><a href="/lms/organisation/organisation_login" style={{color: '#111'}}>Already Registered? Please Login</a></h3><br /><br />
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

export default SignUp3;
