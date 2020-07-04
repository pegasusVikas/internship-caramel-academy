import React from 'react'

const Header = () => {
  return (
    <section>
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div><img src="images/team-work.jpeg" className="img-fluid" /></div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <h2 className="text-uppercase py-3 font-weight-bold">we are Caramel IT Services</h2><hr />
          <h5 className="py-3">Caramel IT Services is a team of experts bringing you innovative web and IT solutions that combine captivating design and flawless functionality in our every project.</h5>
          <p>We operate on a managed services model that offers proactive outsourced IT services aswell as design, development, and management services at affordable, consistent rates.</p>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Header;