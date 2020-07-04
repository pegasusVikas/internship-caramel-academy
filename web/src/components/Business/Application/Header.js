import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
        <div className="container-fluid py-3">
          <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
            <div className="col-md-6 col-lg-6 col-12 class-margin">
              <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 text-left font-weight-bold">Application Services</h1>
              {/* <h3 class="text-left py-1">Navigate complexity with competitive agility</h3> */}
              <p className="text-left" style={{textAlign: 'justify!important'}}>Providing Application Services such as load balancing, application performance monitoring, application acceleration, autoscaling, micro‑segmentation, service proxy and service discovery needed to optimally deploy, run and improve applications.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-12 text-center">
              <img src="../../images/application-services.gif" className="img-fluid" style={{}} />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header;