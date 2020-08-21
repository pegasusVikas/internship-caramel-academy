import React, { useState, useContext, useEffect, Fragment } from 'react';
import "../Instructor/card.css";
import "../common/button.css";
import axios from "axios";
import userContext from "../../context/user/userContext"
import { Redirect, Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Button = (props) => {
    console.log(props)
    if (props.text === "Go to cart")
    return <Link to={{pathname:"/lms/user/cart",state:props.location.state}} style={{ color: "black" }}><ShoppingCartIcon />{" "}{props.text}</Link>
    return <Fragment>{props.text}</Fragment>
}
const CourseItem = (props) => {

    const UserContext=useContext(userContext);

    const { user, course, enrolled } = props;
	const [btn, setBtn] = useState({
		text: enrolled ? <div><BeenhereIcon /> Enrolled</div> : <div><ShoppingCartIcon /> Add to cart</div>,
        color: enrolled ? "yellow" : "#66ff99",
        inCart: false
    });
    useEffect(() => {
        if(!enrolled && UserContext.user.type) {
            var inCart = false;
            UserContext.user.cart.map(item => {
                if (item._id == course._id)
                inCart = true;
                return item;
            })
    
            if(inCart)
            setBtn({ text: "Go to cart", color: "primary", inCart: true })
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
                        text: "Go to cart",
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
            <div className="card-header"  style={{ backgroundColor: "#39004d" }}>
                <span className="text-white" style={{ fontWeight: "bold" }}>{course.title}</span>
            </div>
            <div className="card-body">
                {course.description}
            </div>
            <div className="card-footer">
                <button className="btn btn-sm" onClick={() => handleClick(user, course._id)} disabled={enrolled} style={{ borderRadius: "30px", backgroundColor: btn.color }}><Button text={btn.text} location={props.location}/></button>
                <button onClick={onClick} className="btn btn-sm" style={{ float: "right", borderRadius: "30px", backgroundColor: "#eb99ff" }}><LibraryBooksIcon />{" "}View Course</button>
            </div>
        </div>
    );
};

export default CourseItem;
