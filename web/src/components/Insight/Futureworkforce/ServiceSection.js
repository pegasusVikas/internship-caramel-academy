
import React from 'react'

const ServiceSection = () => {
    return (
      <section className="serv-section bg-light" id="serve-sec">
      <div className=" container-fluid pb-5">
        <h1 className="text-center text-success py-5 m-0">Our Services</h1>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/web.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">UIPath As a Service</h4>
                {/*  <p class="card-text text-center">advise organisations on high-level decisions in an unbiased fashion, using deep industry knowledge to deliver the best results. </p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/product.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Process Improvement</h4>
                {/* <p class="card-text text-center">AI-driven development focuses on tools and techniques for embedding AI into applications and using AI to generate other AI-powered tools.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/robot.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Implementing RPA Solutions</h4>
                {/*  <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/setup.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Support &amp; Maintenance</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/robotic-color.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">RPA Training Program</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/brain-robot.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">RPA Center Of Excellence</h4>
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