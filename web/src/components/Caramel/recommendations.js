import React from 'react';
import "./css/stylesheet.css";
import caramelacademy from "./images/caramelacademy.png";
import cbs from "./images/cbs.jpg";
import cc from "./images/cc.jpg";
import data from "./images/data.jpg";
import java from "./images/java.jpg";
import mean from "./images/mean.jpg";
import ml from "./images/ml.jpg";

const Recommendations = () => {
    return (
        <div>
            <div className="acaheader" id="topheader">
                <div className="container-fluid text5">
                    <nav className="navbar navbar-expand-lg bg navbar-light">
                        <a className="navbar-brand logo1" href="acadamy.html"><img src={caramelacademy} width="200px" height="70px" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <form autocomplete="off" action="#">
                                        <span className="search-input" />
                                        <div className="autocomplete searchbar">
                                            <input id = "automplete-3" placeholder="Search For Courses" />
                                            <a><i className="fa fa-search" type="submit" for="autocomplete-3" style={{ fontSize: "25px", backgroundColor: "white", ariaHidden: "true" }} /></a>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto font-weight-bold">
                                
                                <li className="nav-item ">
                                    <a className="nav-link px-lg-4 alink" href="index.html">Catagories</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link px-lg-4 alink" href="index.html">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-lg-4 alink" href="corporate.html">Corporates</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-lg-4 alink" href="university.html">Universities</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-lg-4 alink" href="nodecontactform/acadamycontact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="suggestbar">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link">Core UI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">BackEnd Technologies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Full Stack</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Mobile Developement</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Dev Ops</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Data Science, AI & ML</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Cloud Computing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Cyber Security</a>
                    </li>
                </ul>
            </div>

            <div className="bg-image-overlay">
                <h1 className="text-center about-position">Never Stop Learning</h1>
            </div>

            <div className="jumbotron" >
                <h3 className="font-weight-bold text-uppercase align-center">Trending Courses</h3>
                <p className="align-center">Popular among students</p>
                <section>
                    <div className="container" style={{ position: "relative" }}>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={mean} alt="John" style={{ width: "100%" }}/>
                                    <h3 className="pt-2">Mean Stack</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={java} alt="John" style={{ width: "100%", height: "50%" }}/>
                                    <h3 className="pt-2">Mern Stack</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={ml} alt="John" style={{ width: "100%" }} />
                                    <h3 className="pt-2">ML with python</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={data} alt="John" style={{ width: "100%" }} />
                                    <h3 className="pt-2">Web Development</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-center">
                            <button className="btn btn-primary">View All Courses</button>  
                        </div>
                    </div>	   
                </section>
                
            </div>

            <div className="jumbotron" style={{ backgroundColor: "#E8A54C" }}>
                <h3 className="font-weight-bold text-uppercase align-center">Recommended For You</h3>
                <p className="align-center">Latest technologies to learn</p>
                <section>
                    <div className="container" style={{ position: "relative" }}>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={data} alt="John" style={{ width: "100%" }} />
                                    <h3 className="pt-2">Web Development</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={cbs} alt="John" style={{ width: "100%", height: "50%" }}/>
                                    <h3 className="pt-2">ReactJs</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={cc} alt="John" style={{ width: "100%" }} />
                                    <h3 className="pt-2">NodeJs</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="card-profile">
                                    <img src={java} alt="John" style={{ width: "100%", height: "50%" }}/>
                                    <h3 className="pt-2">Mern Stack</h3>
                                    <p className="title-person"></p>
                                    <p></p>
                                
                                    <p><button className="button-class">View Course Details</button></p>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-center">
                            <button className="btn btn-primary">View All Courses</button>  
                        </div>
                    </div>	   
                </section>
                
            </div>
            
            <div className="footer text-center">
                <div className="row mb-4">
                    <div className="col-12">
                        <p className="mb-0" id="socialmedia1" style={{ overflowY: "hidden" }}>
                            <a href="https://www.facebook.com/caramelacademy/" className="p-2"><i className="fa fa-facebook-square" style={{ fontSize: "36px", color: "#292C7D"}}></i></a>
                            <a href="https://twitter.com/caramelacademy" className="p-2"><span className="fa fa-twitter-square" style={{ fontSize: "36px", color: "#292C7D" }}></span></a>
                            <a href="https://www.instagram.com/caramelitacademy/" className="p-2"><span className="fa fa-instagram" style={{ fontSize: "36px", color: "#292C7D" }}></span></a>
                            <a href="https://www.linkedin.com/company/37846486/admin/" className="p-2"><span className="fa fa-linkedin-square" style={{ fontSize: "36px", color: "#292C7D" }}></span></a>
                            <a href="https://in.pinterest.com/caramelacademy/" className="p-2"><span className="fa fa-pinterest-square" style={{ fontSize: "36px", color: "#292C7D" }}></span></a>
                            <a href="https://api.whatsapp.com/send?phone=+918886660462&amp;text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="p-2"><span className="fa fa-whatsapp" style={{ fontSize: "36px", color: "#292C7D" }}></span></a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="mb-0" id="foter" style={{ fontSize: "18px" }}>
                            Copyright ©2020 &nbsp;All rights reserved By Caramel IT Services Pvt.Ltd.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations;