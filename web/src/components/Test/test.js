import React, { Component } from "react";
import "./test.css";
import axios from "axios";
import Academy from "../images/caramelacademy.jpeg";

export default class Test extends Component {

	constructor(props) {
		super(props);
		this.state = {
			questionList: null,
			total_score: null,
			testid: null,
			testType: "",
			testStarted: false,
			testCompleted: false,
		};
		this.start = this.start.bind(this);
		this.handleOptions = this.handleOptions.bind(this);
		this.check = this.check.bind(this);
		this.updateTest = this.updateTest.bind(this);
  	}

	handleOptions(event) {
		const { name, value } = event.target;
		const i = parseInt(name);
		this.setState(state => {
			const questionList = state.questionList.map((item, j) => {
				if (j === i) {
					item.answer_given = value;
					return item;
				} else {
					return item;
				}
			});
			return {
				questionList,
			};
		});
	}

	updateTest(score) {
    const questions = this.state.questionList;
		axios.post(`/test/update/${this.state.testid}`, { score, questions }).then(res => {
			console.log(res);
		});
	}

	check() {
    let k = 0;
    let score = 0;
		this.state.questionList.forEach(question => {
			var correct = false;
			if (question.answer_given == "option1" && question.isOption1) {
				correct = true;
			} else if (question.answer_given == "option2" && question.isOption2) {
				correct = true;
			} else if (question.answer_given == "option3" && question.isOption3) {
				correct = true;
			} else if (question.answer_given == "option4" && question.isOption4) {
				correct = true;
			}
			if (correct) {
        score += question.score;
      }
      k++;
      if (k === this.state.questionList.length) {
        console.log(score);
        localStorage.setItem("score", score);
        this.setState({ ...this.state, testCompleted: true });
        this.updateTest(score);
      }
		});
	}

	start() {
		this.setState({ ...this.state, testStarted: true });
	}

	render() {
		let test = localStorage.getItem("test");
		let loaded = false;
		if (this.state.questionList === null) {
			axios.get(`/test/${test}`).then(res => {
				test = res.data;
				this.setState({
					...this.state,
					questionList: test.question_list,
					total_score: test.total_score,
					testid: test._id,
					testType: test.test_type,
					testCompleted: test.completed
				});
				loaded = true;
			}).catch(err => {
				console.log(err.message);
			})
		}

		let response = 
		<div>
			{this.state.questionList !== null && !this.state.testStarted && !this.state.testCompleted && (
				<div style={{ backgroundColor: "#011e30" }} className="testbody">
					<div class="container" id="mainins">
						<h1>Welcome to the Skill based test</h1>
						<div id="instructions">
							<h2>Instructions</h2>
							<hr class="new" />
							<p>
								Assessment is the systematic, ongoing process of gathering and
								interpreting evidence of student learning to determine if a
								program is meeting its learning goals and then using that
								information to improve the program. This overview of the
								assessment cycle is intended to introduce the basic steps for
								how to use assessment to improve your program.
							</p>
						</div>
						<div id="description">
							<h2>Description</h2>
							<hr class="new" />
							<ol>
								<li>
									Once the test begins, you are not allowed to leave Test
									Screen.
								</li>
								<li>
									Using Keys such as ALT+TAB, CTRL+TAB, ESC, F4, F5 etc. which
									takes you off the Test Screen are prohibited.
								</li>
								<li>Avoid using Keys from keyboard while answering MCQs.</li>
								<li>The Test Duration is of 1 Hour.</li>
								<li>Make sure to answer all the questions.</li>
								<li>
									There is no negative marking for any of the questions.
								</li>
								<li>
									You would be invigilated during the Test via Visual & Audio
									Proctoring.
								</li>
							</ol>
						</div>
						<button
							type="button"
							class="btn btn-success"
							id="starttest"
							onClick={this.start}
						>
							Start Test
						</button>
						<br />
						<br />
					</div>
				</div>
			)}
			{this.state.testStarted && !this.state.testCompleted && (
				<div>
					<div class="container-fluid navb">
						<nav class="navbar navbar-expand-lg bg navbar-light">
							<a class="navbar-brand logo1" href="#">
								<img
									src={Academy}
									width="200px"
									height="70px"
								/>
							</a>
							<p id="test-name"> Total Marks: {this.state.total_score}</p>
							<button
								class="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#collapsibleNavbar"
							>
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="collapsibleNavbar">
								<ul class="navbar-nav ml-auto ">
									<li class="nav-item ">
										<a class="nav-link px-lg-4 alink" href="#">
											Proficiency: 4
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link px-lg-4 alink" href="#">
											Duration: 120 mins
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					<div class="row container-fluid">
						<div class="col-md-8">
							<div>
								<div class="formm">
									<h1>Knowledge Check</h1>
									<p>
										Well organized and easy to understand Web building
										tutorials with lots of examples of how to use HTML, CSS,
										JavaScript, SQL, PHP, Python, Bootstrap, Java ...
									</p>
									<h2>Time for a quiz </h2>
									<form id="quiz" name="quiz">
										{this.state.questionList.map((currQuestion, i) => (
											<div>
												<p class="questions">Question {i + 1}</p>
												<p class="questions">{currQuestion.question}</p>
												<ul>
													<li>
														{" "}
														<input
															type="radio"
															id="mc"
															name={i}
															value="option1"
															onChange={this.handleOptions}
														/>{" "}
														{currQuestion.option1}
														<br />
													</li>
													<li>
														{" "}
														<input
															type="radio"
															id="mc"
															name={i}
															value="option2"
															onChange={this.handleOptions}
														/>{" "}
														{currQuestion.option2}
														<br />
													</li>
													<li>
														{" "}
														<input
															type="radio"
															id="mc"
															name={i}
															value="option3"
															onChange={this.handleOptions}
														/>{" "}
														{currQuestion.option3}
														<br />
													</li>
													<li>
														{" "}
														<input
															type="radio"
															id="mc"
															name={i}
															value="option4"
															onChange={this.handleOptions}
														/>{" "}
														{currQuestion.option4}
														<br />
													</li>
													<span id="spa"></span>
												</ul>
											</div>
										))}

										<br />
									</form>

									<button class="finish" onClick={this.check}>
										I'm Finished
									</button>
								</div>
								<br />
								<br />
							</div>
						</div>
						<div class="col-md-4" style={{}}>
							<div
							//class="ques_nav"
							>
								&nbsp;
								<h2>
									&nbsp;Progress Grid | <span id="timer"></span>
								</h2>
								<div class="grid-container">
									{this.state.questionList.map((question, i) => (
										<div class="grid-item">
											{question.answer_given == "" && (
												<div class="square">{i + 1}</div>
											)}
											{question.answer_given != "" && (
												<div class="square" id="answered">
													{i + 1}
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{this.state.testStarted === true && this.state.testCompleted == true && (
				<div style={{ alignSelf: "center" }}>
					<h2>Test Completed</h2>
					<h2>
						Marks Scored: {localStorage.getItem("score")}/{this.state.total_score}
					</h2>
				</div>
			)}
		</div>
		
		if(loaded && test !== null && test.completed) {
		response = 
			<div style={{ alignSelf: "center" }}>
			<h2>Test Completed</h2>
			<h2>
				Marks Scored: {test.score}/{test.total_score}
			</h2>
			</div>
		}
		return (
			response
		);
	}
}
