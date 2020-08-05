import React, { Component } from "react";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import Header from "../../common/navbar";
import Footer from "../../common/footer";

export default class SkillAssessment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			userid: "",
			skills: [
				{ name: "HTML", id: 1 },
				{ name: "CSS", id: 2 },
				{ name: "Python", id: 3 },
				{ name: "Javascript", id: 4 },
				{ name: "NodeJS", id: 5 },
				{ name: "Java", id: 6 },
				{ name: "Bootstrap", id: 7 },
			],
			category: "",
			prof: "",
			selectedSkills: [],
			idList: [],
			questionList: [],
			difficulty: "",
			user_email_id: "",
			total_score: 350
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.generateTest = this.generateTest.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onRemove = this.onRemove.bind(this);
		this.onBack = this.onBack.bind(this);
		this.onNext = this.onNext.bind(this);
	}

	onSelect(list, item) {
		console.log(list, item);
		this.setState({
			selectedSkills: list
		});
	};

	onRemove(list, item) {
		console.log(list, item);
		this.setState({
			selectedSkills: list
		});
	};

	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	}

	onSubmit(e) {
		e.preventDefault();

		let skillset = [];
		this.state.selectedSkills.map(skill => {
			skillset.push(skill);
		});

		const information = {
			userid: this.state.userid,
			total_skills: "4",
			skillset,
			skill_prof: this.state.prof,
			no_of_questions: 30,
			category: this.state.category,
		};

		axios.post("http://localhost:3004/skilltest/generate", information).then(res => {
			this.setState({ questionList: res.data });
			// this.state.idList.forEach(id => {
			// 	axios.get("http://localhost:4000/questions/" + id).then(response => {
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
			test_type: "skill",
			user_id: this.state.user_email_id,
			total_score: this.state.total_score
		};
		axios.post("http://localhost:3004/test/create", info).then(res => {
			console.log(res);
			window.alert("Test Generated and email sent to the user!");
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
						<div class="container col-md-6" style={{ alignContent: "center" }}>
							<br />
							<h3> Add Question Manually</h3>
							<form onSubmit={this.onSubmit}>
								<div class="course">
									<p id="heading"> Select Skills</p>
									<Multiselect
										options={this.state.skills} // Options to display in the dropdown
										selectedValues={[]} // Preselected value to persist in dropdown
										onSelect={this.onSelect} // Function will trigger on select event
										onRemove={this.onRemove} // Function will trigger on remove event
										selectionLimit="5"
										displayValue="name" // Property name to display in the dropdown options
									/>
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
									<p id="heading"> Select Category</p>
									<select
										class="form-control"
										id="sel3"
										value={this.state.category}
										onChange={this.handleChange}
										name="category"
									>
										<option>Student</option>
										<option>Working Professional</option>
									</select>
								</div>
								<div class="level">
									<p id="heading"> Select Proficiency</p>
									<select
										class="form-control"
										id="sel3"
										value={this.state.prof}
										onChange={this.handleChange}
										name="prof"
									>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>

								<button type="submit" class="btn btn-sm btn-primary">
									{" "}
									Generate Questions
								</button>
								<br />
								<br />
							</form>
						</div>
					</div>
				)}
				{this.state.step == 2 && (
					<div class="container">
						<div class="table-responsive-sm">
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
					<div className="flex-container schedule container-fluid">
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
						<div className="flex-container schedule container-fluid">
							<p id="heading"> Total Score</p>
							<input className="form-control" type="text" name="total_score" onChange={this.handleChange} value={this.state.total_score}/>
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
							{/* </Link> */}
						</div>
					</div>
				)}
				{this.state.step == 4 && <h1>Test Created</h1>}
				<Footer />
			</div>
		);
	}
}
