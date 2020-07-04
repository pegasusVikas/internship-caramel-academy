import React from 'react'
//import './login.css';
import { Link } from 'react-router-dom';
const SignIn3 = () => {
  return (
    <div>
      <div>
  <nav className="navbar navbar-expand-sm">
    {/* Brand/logo */}
    <Link className="navbar-brand" to="/lms/">
      <img src="../../Caramellogo.png" alt="logo" style={{width: '240px', height: '65px', margin: '0px 0px 0px 0px'}} />
    </Link>
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h2 className="card-title text-center"><b>Sign In As Organisation</b></h2>
            <center>
              <span style={{color: 'red'}} /> <br /><br />
            </center>
            <form className="form-signin" action="/lms/college/college_login" method="post"><input type="hidden" name="_csrf" defaultValue="8988e4bb-70cc-457f-86b6-d73bf13d30ac" />
              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus name="email" defaultValue />
                <label htmlFor="inputEmail">Email address</label>
              </div>
              <div className="form-label-group">
                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
                <label htmlFor="inputPassword">Password</label>
              </div>
              {/* <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">Remember password</label>
        </div> */}
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr className="my-4" />
              {/* <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
        <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
              <Link to="/lms/organisation/organisation_register" style={{fontSize: '20px'}}>Sign Up</Link><Link className="float-right" to="/lms/user/forgot-password" style={{fontSize: '20px'}}>Forgot password?</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignIn3;
