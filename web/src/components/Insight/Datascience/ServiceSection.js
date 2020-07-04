
import React from 'react'

const ServiceSection = () => {
    return (
      <section className="serv-section bg-light" id="serve-sec">
      <div className=" container-fluid pb-5">
        <h1 className="text-center text-success py-5">What We Offer</h1>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/data-science.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Data Science &amp; Analytics</h4>
                {/*  <p class="card-text text-center">advise organisations on high-level decisions in an unbiased fashion, using deep industry knowledge to deliver the best results. </p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/data2.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Data Strategy</h4>
                {/* <p class="card-text text-center">AI-driven development focuses on tools and techniques for embedding AI into applications and using AI to generate other AI-powered tools.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/brain.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Business Intelligence</h4>
                {/*  <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/ai.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">AI Software Development</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/artificial-intelligence.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Artificial Intelligence Consulting</h4>
                {/* <p class="card-text text-center">Some example text.</p>  */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5 " src="../../images/data-science-base.png" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title text-center">Data Engineering &amp; Architecture</h4>
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