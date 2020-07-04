
import React from 'react'

const ServiceSection = () => {
    return (
      <section className="serv-section bg-light" id="serve-sec">
      <div className=" container-fluid pb-5">
        <h1 className="text-center text-success py-5">Our Services</h1>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4">
            <div className="card" >
              <img className=" avatar mt-5" src="../../images/talk.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Strategy And Consulting</h4>
                {/*  <p class="card-text text-center">advise organisations on high-level decisions in an unbiased fashion, using deep industry knowledge to deliver the best results. </p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 mobile-margin">
            <div className="card" >
              <img className=" avatar mt-5" src="../../images/web-development.png" alt="Card image"  />
              <div className="card-body">
                <h4 className="card-title text-center">Development</h4>
                {/* <p class="card-text text-center">AI-driven development focuses on tools and techniques for embedding AI into applications and using AI to generate other AI-powered tools.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 mobile-margin">
            <div className="card" >
              <img className=" avatar mt-5" src="../../images/application.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Customization</h4>
                {/*  <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-4 col-md-4">
            <div className="card" >
              <img className=" avatar mt-5" src="../../images/project.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Implementation</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/database.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Integration</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/customer-support.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Support</h4>
                {/* <p class="card-text text-center">Some example text.</p> */} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default ServiceSection;