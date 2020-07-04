/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
//import '../../components/style.css';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const SignUp1 = () => {
  return (
    <div className="light-bg">
  {/*  */}
  <nav className="navbar navbar-expand-sm">
    {/* Brand/logo */}
    <a className="navbar-brand" href="/lms/">
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
        <h2 align="center" style={{color: '#111'}}><b>New College Registration</b></h2><br />
        <form autoComplete="off" action="/lms/college/college_register" method="post" className="m-t" role="form" data-toggle="validator"><input type="hidden" name="_csrf" defaultValue="eb490557-a7ec-4e99-9c4e-7427faaf0aea" />
          {/*  <div th:if="${#fields.hasErrors('technology')}" th:errors="*{technology}"
    class="validation-message alert alert-danger" role="alert"></div> */}
          <div className="form-group input-group has-feedback ">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-user stugl" />
            </span>
            <input type="text" placeholder="College Name...." className="form-control stureg" required id="collegeName" name="collegeName" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-education stugl" />
            </span>
            <input type="text" placeholder="University Name...." className="form-control stureg" required id="universityName" name="universityName" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-envelope stugl" />
            </span>
            <input type="email" placeholder="Email Address...." className="form-control stureg" data-error="This email address is invalid" required id="email" name="email" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-earphone stugl" />
            </span>
            <input type="number" placeholder="Your Mobile Number...." className="form-control stureg" data-error="This Mobile Number is invalid" required id="mobile" name="mobile" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-flag stugl" />
            </span>
            <select className="form-control stureg" required id="country" name="country">
              <option value>- - - Select Your Country - - -</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="others">Others</option>
            </select>
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-home stugl" />
            </span>
            <input type="text" className="form-control stureg" placeholder="Enter Your State..." data-error="State is invalid" required id="state" name="state" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-tasks stugl" />
            </span>
            <input type="text" className="form-control stureg" placeholder="Skill Set if you have any... EX: C, C++,java" data-error="Skill Set is invalid" required id="skill" name="skill" defaultValue />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          <div className="form-group input-group has-feedback">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-edit stugl" />
            </span>
            <textarea type="text" className="form-control stureg" placeholder="Others..." data-error="College is invalid" required id="others" name="others" defaultValue={""} />
            <span className="glyphicon form-control-feedback" aria-hidden="true" />
          </div>
          {/* <label style="color:#111;">Technologies You Are Intrested In</label><br>
     	
     	<div class="row">
            
    <div class="col-md-3" th:each="user : ${technologies}">
      <input type="checkbox" th:field="*{technology}" th:value="${user.id}" class="stucheck"
        required />&ensp;<label style="color:#111;">C/C++</label></input>
  
    </div>*/}
          {/*         
    <div class="col-md-3">
      <input type="checkbox" th:checked="*{technology}" value="Java" class="stucheck"
        required />&ensp;<label style="color:#111;">Java</label></input>
      <br/>
          <input type="checkbox" th:checked="*{technology}" value="DevOps" class="stucheck"
        required />&ensp;<label style="color:#111;">DevOps</label> </input>
    </div>
    
    <div class="col-md-3">
      <input type="checkbox" th:checked="*{technology}" value="Python" class="stucheck"
        required />&ensp;<label style="color:#111;">Python</label></input>
      <br/>
          <input type="checkbox" th:checked="*{technology}" value="Salesforce" class="stucheck"
        required />&ensp;<label style="color:#111;">Salesforce</label> </input>
    </div>
    
    <div class="col-md-3">
      <input type="checkbox" th:checked="*{technology}" value="C/C++" class="stucheck"
        required />&ensp;<label style="color:#111;">Database</label></input>
      <br/>
          <input type="checkbox" th:checked="*{technology}" value="Digital Marketing" class="stucheck"
        required />&ensp;<label style="color:#111;">Marketing</label> </input>
    </div>
   </div>  */}
          <br />
          <button type="submit" className="btn btn-primary full-width m-b">Register</button>
          <br />
          <h3><a href="/lms/college/college_login" style={{color: '#111'}}>Already Registered? Please Login</a></h3><br /><br />
        </form>
      </div>
      <div className="col-md-3" />
    </div>
  </div>
  <p className="m-t">
  </p>
</div>



  )
}

export default SignUp1;
