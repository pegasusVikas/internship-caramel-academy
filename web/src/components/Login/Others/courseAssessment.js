import React, { Component } from "react";
import axios from "axios";
import Header from "../common/navbar";
import Footer from "../common/footer";

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
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onBack = this.onBack.bind(this);
		this.onNext = this.onNext.bind(this);
		this.generateTest = this.generateTest.bind(this);
	}


	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	}

	onSubmit(e) {
		e.preventDefault();

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

		console.log(information);
		axios.post("/coursetest/generate", information).then(res => {
			console.log(res.data);
			this.setState({ questionList: res.data });
			// this.state.idList.forEach(id => {
			// 	axios.get("/questions/" + id).then(response => {
			// 		console.log(response.data);
			// 		this.setState(state => {
			// 			const questionList = state.questionList.concat(response.data);
			// 			return {
			// 				questionList,
			// 			};
			// 		});
			// 	});
			// });
		}).catch(err => {
			console.log(err.message);
		});
		this.setState({	step: 2 });
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
		console.log(this.state.questionList);
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
			total_score: 350
		};
		axios.post("/test/create", info).then(res => {
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
				<Header />
				{this.state.step == 1 && (
					<div class="row container-fluid">
						<div class="container col-md-6" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3%" }}>
							<br />
							<div className="card" style={{  textAlign: "left", width: "30vw" }}>
								<div className="card-header bg-dark text-white" style={{ fontWeight: "bold" }}> Create Skill Test</div>
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
										<br />
									</form>
								</div>
							</div>
							<br />
						</div>
					</div>
				)}
				{this.state.step == 2 && (
					<div class="container">
						<br />
						<div class="table-responsive-sm" style={{ border: "1px solid black" }}>
							<table class="table table-hover">
								<h3> List of Questions</h3>
								<tr id="table-head">
									<th>QUESTION </th>
									<th>TOPIC</th>
									<th>COURSE</th>
								</tr>
								<tbody>
									{this.state.questionList.map((currentQuestion, i) => (
										<tr>
											<td>{currentQuestion.question}</td>
											<td>{currentQuestion.question_topic}</td>
											<td>{currentQuestion.question_course}</td>
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
					<div class="row container-fluid" style={{ height: "65vh", padding: "50px" }}>
						<div class="container col-md-6" style={{ alignContent: "center" }}>
							<div className="card" style={{ textAlign: "left" }}>
								<div className="card-header bg-dark text-white" style={{ fontWeight: "bold" }}>Create Test</div>
								<div className="card-body">
									<div className="level">
										<p id="heading"> Enter User Email ID</p>
										<input
											class="form-control"
											type="text"
											name="user_email_id"
											value={this.state.user_email_id}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="card-footer" style={{ paddingLeft: "230px", paddingRight: "230px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
									<button
										type="button"
										class="btn btn-warning btn"
										id="back-button"
										onClick={this.onBack}
									>
										{" "}
										Back
									</button>
									{"   "}
									<button
										type="button"
										class="btn btn-info"
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
				{this.state.step == 4 && <h2>Test Created!</h2>}
				<Footer />
			</div>
		);
	}
}
