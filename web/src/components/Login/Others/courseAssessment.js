import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import Multiselect from "multiselect-dropdown-react";
import { Multiselect } from "multiselect-react-dropdown";
// import Header from "./header.js";
// import Footer from "./footer.js";
// import TestInstructions from "./testInstructions";
// import Test from "./test";

export default class CourseAssessment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      userid: "",
      course: "Javascript",
      duration: "60 Minutes",
      difficulty: "Beginner",
      user_email_id: "",
      idList: [],
      questionList: [],
      total_score: 0,
      no_of_ques: 0,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
    this.generateTest = this.generateTest.bind(this);
  }

  fetchQuestions() {
    axios
      .get("http://localhost:3004/questions/")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(this.state.questions);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Form Submitted: ");
    console.log("UserID :" + this.state.userid);
    console.log("Difficulty :" + this.state.difficulty);
    console.log("Course :" + this.state.course);
    console.log("Duration :" + this.state.duration);

    if (this.state.duration == "60 Minutes") {
      var mcqs = 30;
      var ts = 10;
    }
    if (this.state.duration == "90 Minutes") {
      var mcqs = 40;
      var ts = 20;
    }
    if (this.state.duration == "120 Minutes") {
      var mcqs = 60;
      var ts = 20;
    }
    const information = {
      userid: this.state.userid,
      level: this.state.difficulty,
      course: this.state.course,
      no_of_mcqs: mcqs,
      no_of_ts: ts,
    };
    var sum = 0;
    var num = 0;
    console.log(information);
    axios
      .post("http://localhost:3004/coursetest/generate", information)
      .then((res) => {
        // console.log(res.data[0]);
        this.setState({ idList: res.data });
        console.log(this.state.idList);
        this.state.idList.forEach((id) => {
          axios
            .get("http://localhost:3004/questions/" + id)
            .then((response) => {
              this.setState((state) => {
                //console.log(response.data);
                if (response.data.score) {
                  console.log(response.data.score);
                  sum += parseInt(response.data.score);
                }
                num++;
                const questionList = state.questionList.concat(response.data);
                const total_score = sum;
                const no_of_ques = num;
                return {
                  questionList,
                  total_score,
                  no_of_ques,
                };
              });
              //console.log(this.state.questionList);
            });
        });
        console.log(this.state.questionList);
      });

    this.setState({
      // userid: "",
      // selectedSkills: [],
      // difficulty: "Beginner",
      // type: "MCQ",
    });
    this.setState({
      step: 2,
    });
  }

  onBack() {
    console.log("back");
    const x = this.state.step;
    this.setState({
      step: x - 1,
    });
  }

  onNext() {
    console.log("next");
    const x = this.state.step;
    this.setState({
      step: x + 1,
    });
    // if (this.state.step == 1) {
    console.log(this.state.questionList);
    // }
  }

  result(params) {
    console.log(params);
  }

  generateTest() {
    console.log("generateTest");
    const info = {
      question_list: this.state.questionList,
      test_type: "course",
      user_id: this.state.user_email_id,
      test_started: false,
      test_completed: false,
      total_score: this.state.total_score,
      marks_scored: 0,
    };
    axios.post("http://localhost:3004/test/create", info).then((res) => {
      console.log(res);
    });
    const x = this.state.step;
    this.setState({
      step: x + 1,
    });
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        {this.state.step == 1 && (
          <div class="row container-fluid">
            <div class="container col-md-4" style={{ alignContent: "center" }}>
              <div className="card">
                <div className="card-header bg-dark text-white"><strong>Create Course Test</strong></div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div class="level">
                      <p id="heading"> Select Course</p>
                      <select
                        class="form-control"
                        id="sel1"
                        name="course"
                        value={this.state.course}
                        onChange={this.handleChange}
                      >
                        <option>Javascript</option>
                        <option>Core UI</option>
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>Python</option>
                      </select>
                    </div>

                    <div class="level">
                      <p id="heading"> Select Difficulty</p>
                      <select
                        class="form-control"
                        id="sel3"
                        value={this.state.difficulty}
                        onChange={this.handleChange}
                        name="difficulty"
                      >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                      </select>
                    </div>
                    <div class="level">
                      <p id="heading"> Select Duration</p>
                      <select
                        class="form-control"
                        name="duration"
                        value={this.state.duration}
                        onChange={this.handleChange}
                      >
                        <option>60 Minutes</option>
                        <option>90 Minutes</option>
                        <option>120 Minutes</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ display: "block", margin: "auto" }}>
                      Generate Questions
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.step == 2 && (
          <div class="container">
            <div class="table-responsive-sm">
              <table class="table table-hover">
                <h3> List of Questions</h3>.
                <h4>Max Score: {this.state.total_score}</h4>
                <h4>NUmber of Questions: {this.state.no_of_ques}</h4>
                <tr id="table-head">
                  <th>QUESTION </th>
                  <th>TOPIC</th>
                  <th>COURSE</th>
                  <th>SCORE</th>
                </tr>
                <tbody>
                  {this.state.questionList.map((currentQuestion, i) => (
                    <tr>
                      <td>{currentQuestion.question}</td>
                      <td>{currentQuestion.question_topic}</td>
                      <td>{currentQuestion.question_course}</td>
                      <td>{currentQuestion.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              class="btn btn-warning btn-sm"
              id="back-button"
              onClick={this.onBack}
            >
              {" "}
              Back
            </button>
            {"  "}
            <button
              type="button"
              class="btn btn-success btn-sm"
              id="back-button"
              onClick={this.onNext}
            >
              {" "}
              Next
            </button>
          </div>
        )}
        {this.state.step == 3 && (
          <div class="row container-fluid">
            <div class="container col-md-4" style={{ alignContent: "center" }}>
              <div class="flex-container schedule container-fluid">
                <div>
                  <p id="heading"> Enter User Email ID</p>
                  <input
                    class="form-control"
                    type="text"
                    name="user_email_id"
                    value={this.state.user_email_id}
                    onChange={this.handleChange}
                  />
                </div>

                <div class="test-date_time">
                  <p id="heading_schedule">The test is valid from : </p>
                  <div class="row">
                    <input
                      type="date"
                      class="form-control"
                      style={{ width: "45%", margin: "1%" }}
                    />
                    <input
                      type="time"
                      class="form-control"
                      style={{ width: "45%", margin: "1%" }}
                    />
                  </div>
                </div>

                <div class="test-date_time">
                  <p id="heading_schedule">To:</p>
                  <div class="row">
                    <input
                      type="date"
                      class="form-control"
                      style={{ width: "45%", margin: "1%" }}
                    />
                    <input
                      type="time"
                      class="form-control"
                      style={{ width: "45%", margin: "1%" }}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    id="back-button"
                    onClick={this.onBack}
                  >
                    {" "}
                    Back
                  </button>
                  {"   "}

                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    id="generateTest-button"
                    onClick={this.generateTest}
                  >
                    {" "}
                    Generate Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.step == 4 && (
          <h1 style={{ color: "black" }}>Test Created</h1>
        )}
        {/* <Footer /> */}
      </div>
    );
  }
}
