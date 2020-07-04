import React from 'react'

const Partners = () => {
    return (
      <section className="partner-section">
      <div className="jumbotron jumb-intro bg-transparent mb-0">
        <div className="text-center pb-5"><h1 className="font-weight-bold" style={{color: "rgba(63,81,181,1)" , letterSpacing:" 3px"}}>Member Of</h1>
        </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-6">
          <div className="card-cert">
          <a href="https://nasscomfoundation.org/">
          <img src="images/nasscomlogo.png" width="100%" style={{padding: "10px"}} /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="card-cert">
          <a href="https://hyderabad.tie.org/">
          <img src="images/tielogo.png" width="100%" style={{padding: "10px"}} /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="card-cert">
          <a href="https://www.startupindia.gov.in/">
          <img src="images/startup.png" width="100%" style={{padding: "10px"}} /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-6">
          <div className="card-cert">
          <a href="https://skillindia.nsdcindia.org/">
          <img src="images/skillindia.jpg" width="100%" style={{padding: "10px"}} /></a>
          </div>
        </div>
      </div>	
      </div>
    </section>
    )
}

export default Partners;