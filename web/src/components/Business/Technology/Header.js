import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
      <div className="container-fluid py-3">
        <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
          <div className="col-md-6 col-lg-6 col-12 class-margin">
            <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 text-left font-weight-bold">Technology</h1>
            <p className="text-left py-1" style={{textAlign: 'justify!important'}}>We bring innovation, intelligence and deep industry experience together with leading technologies from our ecosystem partners to help you reinvent your business as an intelligent enterprise—and innovate at scale, across your organization.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-12 text-center">
            <img src="../../images/technology.gif" className="img-fluid" style={{}} />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Header;