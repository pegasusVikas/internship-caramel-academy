import React from 'react';
import "../Instructor/card.css";

const Account = ({ name, email, course}) => {

    return (
        <div className="card">
            <div className="card-header"  style={{ backgroundColor: "#39004d" }}>
                <span className="text-white" style={{ fontWeight: "bold" }}>{course}</span>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ffffe6" }}>
                Student Name: {name} 
                <br/>
                Email address: {email}
            </div>
        </div>
    )
}

export default Account;
