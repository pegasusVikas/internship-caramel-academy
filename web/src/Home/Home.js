import React from 'react';
import '../../src/Home/style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-light">
    {/* <div> */}
  <nav className="navbar navbar-expand-sm bg-info navbar-info">
    <Link className="navbar-brand" to="#">
      <img src="../../Caramellogo.png" alt="logo" style={{width: '240px', height: '65px', margin: '0px 0px 0px 0px'}} />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon">
        <i className="fa fa-bars" style={{color: '#fff', fontSize: '28px'}} />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">  
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="#" style={{fontSize: '25px', marginLeft: '40px'}}><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact/form" style={{fontSize: '25px', marginLeft: '40px'}}><b>Contact Us</b></Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropbtn" to="#" style={{fontSize: '25px', marginLeft: '40px'}}><b>Login / Sign Up</b></Link>
          <div className="dropdown-content">
            <Link to="/lms/user/login">User</Link>
            <Link to="/lms/student/login">Student</Link>
            <Link to="/lms/instructor/instructor_login">Instructor</Link>
            <Link to="/lms/college/college_login">College / University</Link>
            <Link to="/lms/organisation/organisation_login">Organisation / Corporate</Link>
            <Link to="/lms/admin/admin_login">Others</Link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <br /><br /><br />
  <div className="container" align="center">
    <div className="row">
      <div className="col-md-8 text-center">
      </div><br />
    </div>
  </div>
</div>
  )
  
  }
  
  export default Home;