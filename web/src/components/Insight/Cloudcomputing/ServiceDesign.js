import React from 'react'

const ServiceDesign = () => {
    return (
      <section className="design-services" id="des-serv">
      <div className="container-fluid py-5">
        <h1 className="text-center text-success pb-5">
          Our Cloud Services Designed For
        </h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 text-center">
            <div className="card1">
              <h2 className="pt-2">Non-IT Enterprises</h2>
              <p className="py-3" style={{fontSize: '18px'}}>Companies which are using AWS,IAAS &amp; PAAS.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 text-center">
            <div className="card1">
              <h2 className="pt-2">Software Product Companies</h2>
              <p className="py-3" style={{fontSize: '18px'}}>SaaS Application providers using AWS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default ServiceDesign;