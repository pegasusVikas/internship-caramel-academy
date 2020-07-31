import React, { useState } from 'react';
import Navbar from "../Navbar";
import Footer from "../Login/common/footer";
import PersonIcon from '@material-ui/icons/Person';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import EmailIcon from '@material-ui/icons/Email';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SendIcon from '@material-ui/icons/Send';
import InfoIcon from '@material-ui/icons/Info';
import axios from "axios";
import "./card.css";

const Apply = () => {

    const [state, setState] = useState({
        email: "",
        skillSet: "",
        proficiency: "",
        registered: false,
        display: "none",
        message: ""
    });

    const setRegister = () => {
        setState({ ...state, registered: true });
    };

    const setNew = () => {
        setState({ ...state, registered: false });
    };

    const handlechange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3004/newuser/apply", {
            email: state.email,
            skillSet: state.skillSet,
            proficiency: state.proficiency
        }).then(res => {
            if(res.data) {
                console.log(res.data);
                setState({
                    email: "",
                    skillSet: "",
                    proficiency: "",
                    display: null,
                    message: res.data.msg
                });
            };
        }).catch(err => {
            console.log(err.message);
        });
    };

    return (
        <div>
            <Navbar /><br/>
            <div className="container col-md-7 mt-2" style={{ alignContent: "center" }}>
                <div className="custom-card">
                    <div className="card-panel"> 
                        <div className="card-row">
                            <div onClick={setRegister} className="card-tab">
                                <h5><VerifiedUserIcon />Registered User</h5>
                            </div>
                            <div onClick={setNew} className="card-tab">
                                <h5><PersonIcon />New User</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form">
                            <div className="alert alert-warning" style={{ display: state.display }}><InfoIcon />{" "}{state.message}</div>
                            <div style={{ textAlign: "center", fontWeight: "bold" }}>
                                <span>Apply for profile evaluation(skill based test)</span>
                            </div> <hr/>
                            <div className="form-group">
                                <EmailIcon />{" "}<label for="email">Email Address</label>
                                <input type="email" className="form-control" id="email" name="email" value={state.email} onChange={handlechange} placeholder="Enter your email address" />
                            </div>
                            <div className="form-group">
                                <MenuBookIcon />{" "}<label for="skills">Skills</label>
                                <input type="text" className="form-control" id="skills" name="skillSet" value={state.skillSet} onChange={handlechange} placeholder="Ex: C, JavaScript, Python, etc.." />
                            </div>
                            <div className="form-group">
                                <AssessmentIcon />{" "}<label for="proficiency">Proficiency</label>
                                <input type="number" className="form-control" id="proficiency" name="proficiency" value={state.proficiency} onChange={handlechange} placeholder="Enter a number between 1-5" />
                            </div>
                            <div className="btn btn-info" style={{  marginLeft : "85%", borderRadius: "30px" }} onClick={submit}>
                                <SendIcon />{" "}Submit 
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>
            <Footer />
        </div>
    );
};

export default Apply;
