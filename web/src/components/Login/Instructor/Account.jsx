import React from 'react';
import "./card.css";

const Account = ({ name, email, course}) => {

    return (
        <div className="card">
            <div className="card-header"  style={{ backgroundColor: "#39004d" }}>
                <span className="text-white" style={{ fontWeight: "bold" }}>{course}</span>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ffffe6" }}>
                Name: {name} 
                <br/>
                Email: {email}
            </div>
        </div>
    )
}

export default Account;
