import React, { useState, useContext, useEffect, Fragment } from 'react';
import "../Instructor/card.css";
import axios from "axios";
import userContext from "../../context/user/userContext"
import { Redirect, Link } from 'react-router-dom';

const Button=(props)=>{
    if(props.text=="Go To Cart")
    return <Link to="/lms/user/cart" style={{color:"white"}}>{props.text}</Link>
    return <Fragment>{props.text}</Fragment>
}
const CourseItem = (props) => {

    const UserContext=useContext(userContext);

    const { user, course, enrolled } = props;
	const [btn, setBtn] = useState({
		text: enrolled ? "Enrolled" : "Buy Course",
        color: enrolled ? "warning" : "success",
        inCart:false
    });
    useEffect(() => {
        if(!enrolled&&UserContext.user.type){
            var inCart=false;
            UserContext.user.cart.map((item)=>{
                if(item._id==course._id)
                inCart=true;
                return item;
            })
    
            if(inCart){
                setBtn({text:"Go To Cart",color:"primary",inCart:true})
            }
        }
    }, [])
    
    const onClick = () => {
        window.open("/caramelit_new/courses/coursespage/" + course.title.toLowerCase().split(" ").join(""));
    };
    
    const handleClick = (userId, courseId) => {
        if(!btn.inCart){
		axios.post(`http://localhost:3004/api/studcart/${userId}/${courseId}`)
		.then(res => {
			if (res.data) {
				setBtn({
					text: "Go To Cart",
                    color: "primary",
                    display: "none"
                });
			}
		}).catch(err => {
			console.log(err.message);
        });
        }
        
	};

    return (
        <div className="card">
            <div className="card-header bg-dark">
                <span className="text-white" style={{ fontWeight: "bold" }}>{course.title}</span>
            </div>
            <div className="card-body">
                {course.description}
            </div>
            <div className="card-footer" style={{ backgroundColor: "#ccffff"}}>
                <button className={`btn btn-${btn.color}`} onClick={() => handleClick(user, course._id)} disabled={enrolled}><Button text={btn.text}/></button>
                <button onClick={onClick} className="btn btn-primary" style={{float: "right"}}>View Course</button>
            </div>
        </div>
    );
};

export default CourseItem;
