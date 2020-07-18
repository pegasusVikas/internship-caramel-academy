import React from 'react';

const Account = ({ name, email, course}) => {

    return (
        <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
            <div className="card-header"  style={{ backgroundColor: "#39004d" }}>
                <span className="text-white" style={{ fontWeight: "bold" }}>{course}</span>
            </div>
            <div className="card-body" style={{ backgroundColor: "#ffffe6" }}>
                Name: {name} 
                <br/>
                Email address: {email}
            </div>
        </div>
    )
}

export default Account;
