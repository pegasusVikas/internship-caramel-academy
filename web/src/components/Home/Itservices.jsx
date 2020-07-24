import React from 'react'

const Itservices = () => {
	return (
		<div>
			<div className="body-overflow">
				<section className="nav-sec" id="navbar-sec">
					<section className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="index.html"><img src="images/Caramel-Horz.png" alt="img" width="200px" /></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link px-lg-5 link-nav-index font-weight-bold" href="/index">Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link px-lg-5 link-nav-index font-weight-bold" href="aboutus.html">About Us</a>
								</li>
								<li className="nav-item">
									<a className="nav-link px-lg-5 link-nav-index font-weight-bold" href="nodecontactform/acadamycontact">Contact Us</a>
								</li>
							</ul>
						</div>
					</section>
				</section>
				<section className="header-section" id="head-sec">
					<div id="demo" className="carousel slide" data-ride="carousel">
						<ul className="carousel-indicators">
							<li data-target="#demo" data-slide-to="0" className="active"></li>
							<li data-target="#demo" data-slide-to="1"></li>
							<li data-target="#demo" data-slide-to="2"></li>
						</ul>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src="images/images/digital-agency-slider-1.jpg" alt="Los Angeles" className="img-fluid" />
								<div className="carousel-caption head-content-base">
									<h1 className="text-capitalize mb-4">drive your<br/> transformation<br/> with us</h1>
									<p>We had such a great time in LA!</p>
									<a href="#serv-sec" className="content-base-btn diff-color">READ MORE</a>
									<a href="nodecontactform/acadamycontact" className="content-base-btn ml-lg-5">CONTACT US</a>
								</div>
							</div>
							<div className="carousel-item">
								<img src="images/images/digital-agency-slider-2.jpg" alt="Chicago" width="1100" height="100" />
								<div className="carousel-caption head-content-base">
									<h1 className="text-capitalize mb-5 margin-bott-text">we turn your<br/>ideas into reality</h1>
									<p>We had such a great time in LA!</p> 
									<a href="#serv-sec" className="content-base-btn diff-color">READ MORE</a>
									<a href="nodecontactform/acadamycontact" className="content-base-btn ml-lg-5">CONTACT US</a>
								</div>   
							</div>
							<div className="carousel-item">
								<img src="images/images/digital-agency-slider-3.jpg" alt="New York" width="1100" height="100" />
								<div className="carousel-caption head-content-base">
									<h1 className="text-capitalize mb-4">Let us <br/>Build your <br/>Career Together</h1>
									<p>We had such a great time in LA!</p>
									<a href="#serv-sec" className="content-base-btn diff-color">READ MORE</a>
									<a href="nodecontactform/acadamycontact" className="content-base-btn ml-lg-5">CONTACT US</a>
								</div>   
							</div>
						</div>
					</div>
				</section>
				<section className="services-section" id="serv-sec">
					<div className="container">
						<div className="text-center py-5"><h1 className="font-weight-bold" style={{ color: "rgba(63,81,181,1)", letterSpacing: "3px" }}>Our Services</h1></div>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-12">
								<div className="">
									<a href="consortium.html">
										<img className="card-serv translate-up" src="images/consortiumlogo.jpeg" alt="Card image" style={{ width: "100%" }} /></a>
									</div>
								</div>
							<div className="col-lg-4 col-md-4 col-12">
							<div className=" card-top">
									<a href="/">
										<img className="card-serv" src="images/academylogo.jpeg" alt="Card image" style={{ width: "100%" }} /></a>
									</div>
								</div>
							<div className="col-lg-4 col-md-4 col-12">
								<div className=" card-top">
									<a href="products.html">
										<img className="card-serv translate-up" src="images/productslogo.jpeg" alt="Card image"  style={{ width: "100%" }} /></a>
									</div>
								</div>
						</div>	
					</div>
				</section>
				<section className="certificate-section">
					<div className="container">
						<div className="text-center py-5"><h1 className="font-weight-bold" style={{ color: "rgba(63,81,181,1)", letterSpacing: "3px" }}>Our Certifications</h1></div>
						<div className="row pb-5">
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
									<a href="images/certificate13.jpg"data-lightbox="image-1">
										<img className="card-img-top" src="images/images/cert13.jpg" alt="Card image" style={{ width: "100%" }} /></a>
									</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
									<a href="images/certificate15.jpg"data-lightbox="image-1">
										<img className="card-img-top" src="images/images/cert15.jpg" alt="Card image" style={{ width: "100%" }} /></a>
									</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
									<a href="images/certificate17.jpg"data-lightbox="image-1">
										<img className="card-img-top" src="images/images/cert17.jpg"alt="Card image" style={{ width: "100%" }} /></a>
									</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
									<a href="images/certificate18.jpg"data-lightbox="image-1">
										<img className="card-img-top" src="images/images/cert18.jpg" alt="Card image" style={{ width: "100%" }} /></a>
									</div>
							</div>
						</div>	
					</div>
				</section>
				<section className="partner-section">
					<div className="jumbotron jumb-intro bg-transparent mb-0">
						<div className="text-center pb-5"><h1 className="font-weight-bold" style={{ color: "rgba(63,81,181,1)", letterSpacing: "3px" }}>Member Of</h1></div>
						<div className="row">
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
								<a href="https://nasscomfoundation.org/">
								<img src="images/nasscomlogo.png" width="100%" style={{ padding: "10px" }} /></a>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
								<a href="https://hyderabad.tie.org/">
								<img src="images/tielogo.png" width="100%" style={{ padding: "10px" }} /></a>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
								<a href="https://www.startupindia.gov.in/">
								<img src="images/startup.png" width="100%" style={{ padding: "10px" }} /></a>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-6">
								<div className="card-cert">
								<a href="https://skillindia.nsdcindia.org/">
								<img src="images/skillindia.jpg" width="100%" style={{ padding: "10px" }} /></a>
								</div>
							</div>
						</div>	
					</div>
				</section>
				<section className="footer-section bg-light" id="foot-sec">
					<div className="cont">
						<div className="footer py-5 text-center">
							<div className="cont">
								<div className="row mb-5">
									<div className="col-12">
										<p className="mb-0" id="socialmedia">
											<a href="https://www.facebook.com/caramelitserviceshyderabad/" className="p-3"><span className="fa fa-facebook-square social-icons" style={{ fontSize: "36px", color: "#731a14" }}></span></a>
											<a href="https://twitter.com/ItCaramel" className="p-3"><span className="fa fa-twitter-square social-icons" style={{ fontSize: "36px", color: "#731a14" }}></span></a>
											<a href="https://www.instagram.com/caramelitservices/" className="p-3"><span className="fa fa-instagram social-icons" style={{ fontSize: "36px", color: "#731a14" }}></span></a>
											<a href="https://www.linkedin.com/in/caramel-it-services/" className="p-3"><span className="fa fa-linkedin-square social-icons" style={{ fontSize: "36px", color: "#731a14" }}></span></a>
											<a href="https://in.pinterest.com/caramelitservices/" className="p-3"><span className="fa fa-pinterest-square social-icons" style={{ fontSize: "36px", color: "#731a14" }}></span></a>
											<a href="https://api.whatsapp.com/send?phone=+918886660461&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="p-2"><span className="fa fa-whatsapp" style={{ fontSize: "36px", color: "#731a14" }}></span></a>
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<p className="mb-5" style={{ fontSize: "20px" }}>
											Copyright &copy; All rights reserved By Caramel IT Services Pvt. Ltd.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div> 
				</section>
				<a href="https://api.whatsapp.com/send?phone=+918886660461&text=%20Hello!%20want%20to%20find%20out%20about%20caramel" className="float" target="_blank">
				<i className="fa fa-whatsapp my-float"></i>
				</a>
			</div>
		</div>
	);
};

export default Itservices;