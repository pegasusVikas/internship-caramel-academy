import React from 'react'

const CoverSection = () => {
    return (
      <section className="what-cover" id="covv">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src="../../images/iot-app.png" className="img-fluid pt-5" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className>
                <h1 className="text-success font-weight-bold">IoT Application Development</h1>
                <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>we offer innovative and hi-end IoT application development services tailored to solve the real-world problems of different industry verticals. We offer end-to-end application development services including both hardware and software support with an aim to provide the best integration of software and hardware technologies for superior performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CoverSection;