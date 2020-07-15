import React, { Component } from "react";
import axios from "axios";
import "./questionBank.css";

export default class QuestionBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question_course: "Javascript",
      question_module: "1",
      question_topic: "Javascript",
      question_type: "",
      question_level: "Beginner",
      question: "",
      answer: "",
      value: "",
      time: "",
      option1: "",
      isOption1: false,
      option2: "",
      isOption2: false,
      option3: "",
      isOption3: false,
      option4: "",
      isOption4: false,
      questions: [],
      file: null,
      score: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClickTemplate = this.onClickTemplate.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.onSelect = this.onSelect.bind(this);
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

  componentDidMount() {
    this.fetchQuestions();
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  onClickTemplate() {
    axios.get("http://localhost:3004/questions/template");
  }

  onClickDelete(id, e) {
    console.log(id);
    axios
      .delete("http://localhost:3004/questions/delete/" + id)
      .then((response) => {
        console.log("Course deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
    this.fetchQuestions();
  }

  onSelect(e) {
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0],
    });
  }

  onUpload(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file);
    console.log("start");
    axios
      .post("http://localhost:3004/questions/upload", data)
      .then((res) => console.log(res.statusText));
    console.log("end");
    this.fetchQuestions();
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Form Submitted: ");
    console.log("Question Course :" + this.state.question_course);
    console.log("Question Module :" + this.state.question_module);
    console.log("Question Topic :" + this.state.question_topic);
    console.log("Question Level :" + this.state.question_level);
    console.log("Question Type :" + this.state.question_type);
    console.log("Question:" + this.state.question);
    console.log("Option1:" + this.state.option1);
    console.log("Is Option 1 correct?:" + this.state.isOption1);
    console.log("Option2:" + this.state.option2);
    console.log("Is Option 2 correct?:" + this.state.isOption2);
    console.log("Option3:" + this.state.option3);
    console.log("Is Option 3 correct?:" + this.state.isOption3);
    console.log("Option4:" + this.state.option4);
    console.log("Is Option 4 correct?:" + this.state.isOption4);
    console.log("Score : " + this.state.score);

    console.log("Answer:" + this.state.answer);
    console.log("Time:" + this.state.time);

    const newQuestion = {
      question_course: this.state.question_course,
      question_module: this.state.question_module,
      question_topic: this.state.question_topic,
      question_type: this.state.question_type,
      question_level: this.state.question_level,
      question: this.state.question,
      answer: this.state.answer,
      option1: this.state.option1,
      isOption1: this.state.isOption1,
      option2: this.state.option2,
      isOption2: this.state.isOption2,
      option3: this.state.option3,
      isOption3: this.state.isOption3,
      option4: this.state.option4,
      isOption4: this.state.isOption4,
      time: this.state.time,
      score: this.state.score,
    };

    axios
      .post("http://localhost:3004/questions/create", newQuestion)
      .then((res) => console.log(res.data));

    this.setState({
      question_course: "Javascript",
      question_module: "1",
      question_topic: "Javascript",
      question_type: "",
      question_level: "Beginner",
      question: "",
      answer: "",
      value: "",
      time: "",
      option1: "",
      isOption1: false,
      option2: "",
      isOption2: false,
      option3: "",
      isOption3: false,
      option4: "",
      isOption4: false,
      score: null,
    });
    this.fetchQuestions();
  }

  render() {
    return (
      <div style={{padding: "1%" }}>
        <div className="row container-fluid">
          <div className="col-md-4">
            <div>
              <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
                <div className="card-header bg-dark text-white"><strong>Upload questions in bulk</strong></div>
                <div className="card-body">
                  <p>
                    Use the form below to upload a list of questions. Click{" "}
                    <a
                      href="/questions/template"
                      //   href="#"
                      onClick={this.onClickTemplate}
                    >
                      here
                    </a>{" "}
                    for an example template.
                  </p>
                  <form encType="multipart/form-data">
                    <input
                      type="file"
                      name="file"
                      accept="*.csv"
                      onChange={this.onSelect}
                    />
                    <br />
                    <br />
                    <button
                      className="btn btn-info"
                      type="submit"
                      onClick={this.onUpload}
                    > Upload Questions </button>
                  </form>
                </div>
              </div>
            </div>
            <br />
            <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
              <div className="card-header bg-dark text-white"><strong>Add Question Manually</strong></div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div class="level">
                    <p id="heading"> Select Course Name</p>
                    <select
                      class="form-control"
                      id="sel1"
                      name="question_course"
                      value={this.state.question_course}
                      onChange={this.handleChange}
                    >
                      <option>Core UI</option>
                      <option>Javascript</option>
                      <option>HTML</option>
                      <option>CSS</option>
                      <option>Python</option>
                    </select>
                  </div>

                  <div class="level">
                    <p id="heading"> Select Module</p>
                    <select
                      class="form-control"
                      id="sel1"
                      name="question_module"
                      value={this.state.question_module}
                      onChange={this.handleChange}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <div class="level">
                    <p id="heading"> Select Topic(s)</p>
                    <select
                      class="form-control"
                      id="sel2"
                      value={this.state.question_topic}
                      onChange={this.handleChange}
                      name="question_topic"
                    >
                      <option>Javascript</option>
                      <option>HTML</option>
                      <option>CSS</option>
                      <option>Python</option>
                      <option>Generic</option>
                    </select>
                  </div>

                  <div class="level">
                    <p id="heading"> Select Level</p>
                    <select
                      class="form-control"
                      id="sel3"
                      value={this.state.question_level}
                      onChange={this.handleChange}
                      name="question_level"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Expert</option>
                    </select>
                  </div>

                  <div class="level">
                    <p id="heading"> Score</p>
                    <input
                      type="number"
                      class="form-control"
                      id="sel3"
                      value={this.state.score}
                      onChange={this.handleChange}
                      name="score"
                    />
                  </div>

                  <div class="questype">
                    <p id="heading"> Add Question Type</p>
                    <select
                      class="form-control"
                      id="ques-type"
                      value={this.state.question_type}
                      onChange={this.handleChange}
                      name="question_type"
                    >
                      <option
                        placeholder="eg. mcq, subjective, true/false"
                        value=" "
                      ></option>
                      <option value="mcq">MCQ</option>
                      <option value="subjective">Subjective - 2</option>
                      <option value="ts">Technical Sceanrio</option>
                      <option value="truefalse">True/False - 1</option>
                    </select>
                  </div>

                  {this.state.question_type === "mcq" && (
                    <div>
                      <div className="form-group">
                        <p id="heading">Question</p>
                        <textarea
                          name="question"
                          value={this.state.question}
                          onChange={this.handleChange}
                        ></textarea>
                        <br />
                        <label>Option 1:</label>
                        <input
                          type="text"
                          name="option1"
                          className="form-control"
                          value={this.state.option1}
                          onChange={this.handleChange}
                        />
                        <div className="form-group">
                          <input
                            type="checkbox"
                            name="isOption1"
                            onChange={this.handleChange}
                            checked={this.state.isOption1}
                          />
                          <label>Is Option 1 correct?</label>
                        </div>
                        <label>Option 2:</label>
                        <input
                          type="text"
                          name="option2"
                          className="form-control"
                          value={this.state.option2}
                          onChange={this.handleChange}
                        />
                        <div className="form-group">
                          <input
                            type="checkbox"
                            name="isOption2"
                            onChange={this.handleChange}
                            checked={this.state.isOption2}
                          />
                          <label>Is Option 2 correct?</label>
                        </div>
                        <label>Option 3:</label>
                        <input
                          type="text"
                          name="option3"
                          className="form-control"
                          value={this.state.option3}
                          onChange={this.handleChange}
                        />
                        <div className="form-group">
                          <input
                            type="checkbox"
                            name="isOption3"
                            onChange={this.handleChange}
                            checked={this.state.isOption3}
                          />
                          <label>Is Option 3 correct?</label>
                        </div>
                        <label>Option 4:</label>
                        <input
                          type="text"
                          name="option4"
                          className="form-control"
                          value={this.state.option4}
                          onChange={this.handleChange}
                        />
                        <div className="form-group">
                          <input
                            type="checkbox"
                            name="isOption4"
                            onChange={this.handleChange}
                            checked={this.state.isOption4}
                          />
                          <label>Is Option 4 correct?</label>
                        </div>
                        <br />
                      </div>
                    </div>
                  )}
                  {this.state.question_type === "subjective" && (
                    <div>
                      <p id="heading">Question</p>
                      <textarea
                        value={this.state.question}
                        name="question"
                        onChange={this.handleChange}
                      ></textarea>

                      <p id="heading">Answer</p>
                      <textarea
                        value={this.state.answer}
                        name="answer"
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                  )}
                  {this.state.question_type === "truefalse" && (
                    <div>
                      <p id="heading">Question</p>
                      <textarea
                        rows="3"
                        style={{ width: "100%" }}
                        value={this.state.question}
                        name="question"
                        onChange={this.handleChange}
                      ></textarea>
                      <br />
                      <br />
                      <input
                        type="radio"
                        id="false"
                        name="answer"
                        value="true"
                        checked={this.state.answer === "true"}
                        onChange={this.handleChange}
                      />
                      <label for="true">True</label>
                      <br />
                      <input
                        type="radio"
                        id="false"
                        name="answer"
                        value="false"
                        checked={this.state.answer === "false"}
                        onChange={this.handleChange}
                      />
                      <label for="false">False</label>
                      <br />
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn btn-info"
                    style={{ display: "block", margin: "auto" }}
                  >
                    Submit Question
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="container overflow-auto" style={{ maxHeight: "1000px" }}>
              <div className="table-responsive-sm">
                <div className="card-header bg-dark text-white"><h3>List of Questions</h3></div>
                <table className="table table-bordered">
                  <tr>
                    <th>QUESTION COURSE</th>
                    <th>QUESTION MODULE</th>
                    <th>QUESTION TOPIC</th>
                    <th>QUESTION TYPE</th>
                    <th>LEVEL OF PROBLEM</th>
                    <th>SCORE</th>
                    <th>QUESTION</th>
                    <th>ANSWER</th>
                    <th></th>
                  </tr>
                  <tbody>
                    {this.state.questions.map((currentQuestion, i) => (
                      <tr>
                        <td>{currentQuestion.question_course}</td>
                        <td>{currentQuestion.question_module}</td>
                        <td>{currentQuestion.question_topic}</td>
                        <td>{currentQuestion.question_type}</td>
                        <td>{currentQuestion.question_level}</td>
                        <td>{currentQuestion.score}</td>
                        <td>{currentQuestion.question}</td>

                        {currentQuestion.question_type === "subjective" && (
                          <td>{currentQuestion.answer}</td>
                        )}
                        {currentQuestion.question_type === "ts" && (
                          <td>{currentQuestion.answer}</td>
                        )}
                        {currentQuestion.question_type === "truefalse" && (
                          <td>{currentQuestion.answer}</td>
                        )}
                        {currentQuestion.question_type === "mcq" && (
                          <td>
                            <ol>
                              {currentQuestion.isOption1 === true && (
                                <li
                                  style={{
                                    background: "#75ff70"
                                  }}
                                >
                                  {currentQuestion.option1}
                                </li>
                              )}
                              {currentQuestion.isOption1 === false && (
                                <li
                                  style={{
                                    backgroundColor: "#ff525d"
                                  }}
                                >
                                  {currentQuestion.option1}
                                </li>
                              )}

                              {currentQuestion.isOption2 === true && (
                                <li
                                  style={{
                                    background: "#75ff70"
                                  }}
                                >
                                  {currentQuestion.option2}
                                </li>
                              )}
                              {currentQuestion.isOption2 === false && (
                                <li
                                  style={{
                                    backgroundColor: "#ff525d"
                                  }}
                                >
                                  {currentQuestion.option2}
                                </li>
                              )}

                              {currentQuestion.isOption3 === true && (
                                <li
                                  style={{
                                    background: "#75ff70"
                                  }}
                                >
                                  {currentQuestion.option3}
                                </li>
                              )}
                              {currentQuestion.isOption3 === false && (
                                <li
                                  style={{
                                    backgroundColor: "#ff525d"
                                  }}
                                >
                                  {currentQuestion.option3}
                                </li>
                              )}

                              {currentQuestion.isOption4 === true && (
                                <li
                                  style={{
                                    background: "#75ff70"
                                  }}
                                >
                                  {currentQuestion.option4}
                                </li>
                              )}
                              {currentQuestion.isOption4 === false && (
                                <li
                                  style={{
                                    backgroundColor: "#ff525d"
                                  }}
                                >
                                  {currentQuestion.option4}
                                </li>
                              )}
                            </ol>
                          </td>
                        )}
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={(ev) =>
                              this.onClickDelete(currentQuestion._id, ev)
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
