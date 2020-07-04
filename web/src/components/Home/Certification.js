import React from 'react'

const Certification = () => {
    return (
        <section className="certificate-section">
        <div className="container">
          <div className="text-center py-5"><h1 className="font-weight-bold" style={{color: "rgba(63,81,181,1)" , letterSpacing:" 3px"}}>Our Certifications </h1></div>
          <div className="row pb-5">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="card-cert">
                <a href="images/certificate13.jpg"data-lightbox="image-1">
                  <img className="card-img-top" src="images/images/cert13.jpg" alt="Card image" style={{width:"100%"}} /></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="card-cert">
                <a href="images/certificate15.jpg"data-lightbox="image-1">
                  <img className="card-img-top" src="images/images/cert15.jpg" alt="Card image" style={{width:"100%"}} /></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="card-cert">
                <a href="images/certificate17.jpg"data-lightbox="image-1">
                  <img className="card-img-top" src="images/images/cert17.jpg"alt="Card image" style={{width:"100%"}} /></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="card-cert">
                <a href="images/certificate18.jpg"data-lightbox="image-1">
                  <img className="card-img-top" src="images/images/cert18.jpg" alt="Card image" style={{width:"100%"}} /></a>
                </div>
            </div>
          </div>	
        </div>
      </section>
    )
}

export default Certification;