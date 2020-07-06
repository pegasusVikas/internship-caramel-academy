import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'reactstrap';
import './forget-password.css';
import axios from 'axios';

const ForgotPass = () => {
	const [state, setState] = useState({
		emailAddress: ""
	});
	const onChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}
	const onSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:3004/api/university-req-reset-password", state)
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err.message);
		}) 

	}
	return (
		<div>
			<div style={{background: '#d9a7c7', /* fallback for old browsers */
			// eslint-disable-next-line no-dupe-keys
			background: '-webkit-linear-gradient(to right, #fffcdc, #d9a7c7)', /* chrome 1025, safari 5.16 */
			// eslint-disable-next-line no-dupe-keys
			background: 'linear-gradient(to right, #fffcdc, #d9a7c7)'}}>
				<nav className="navbar navbar-expand-sm">
					{/* Brand/logo */}
					<Link className="navbar-brand" to="/lms/">
						<img src="../../Caramel-Horz.png" alt="logo" style={{width: '240px', height: '65px', margin: '0px 0px 0px 0px'}} />
					</Link>
				</nav>	
				<div className="container">
					<div className="row">
						<center><h3><b>Enter Your Email Id To Reset Your Password</b></h3><br /></center>
						<div className="col-md-4" />
						<div className="col-md-4" style={{border: '1px solid black', borderRadius: '25px', padding: '20px'}}>
							<center>
								<span style={{color: 'red'}} /> <br /><br />
							</center>
							<Form onSubmit={onSubmit} method="post"><input type="hidden" name="_csrf" defaultValue="2b65fd3b-f00e-487f-9bc7-b0a9a38d71b2" />
								<div className="form-group">
									<label htmlFor="email" style={{fontSize: '22px'}}>Email Id</label>
									<input type="text" name="emailAddress" onChange={onChange} value={state.emailAddress} className="form-control" style={{height: '38px'}} id="inputUsernameEmail" defaultValue />
								</div>
								<center>
									&nbsp;&nbsp;&nbsp;
									<button type="submit" className="btn btn btn-primary">
										Reset Password
									</button></center><br />
							</Form>
						</div>
						<div className="col-md-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPass;
