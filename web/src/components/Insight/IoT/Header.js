import React from 'react'

const Footer = () => {
    return (
      <section className="header-section">
        <div className="container-fluid py-3">
          <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
            <div className="col-md-6 col-lg-6 col-12 class-margin">
              <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 font-weight-bold">Internet Of Things</h1>
              {/* <h2 class="text-left pl-5">Sample text Here</h2> */}
              <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>IOT is a network of smart devices, sensors, and actuators that can interconnect with each other.The Internet of Things will include 26 billion units installed by 2020. 
                IOT product and service suppliers will generate incremental revenue exceeding $300 billion, mostly in services, in 2020. 
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-12 text-center">
              <img src="../../images/iot.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer;