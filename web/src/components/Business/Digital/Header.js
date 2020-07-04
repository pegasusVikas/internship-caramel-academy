import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
        <div className="container-fluid py-3">
          <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
            <div className="col-md-6 col-lg-6 col-12 class-margin">
              <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 text-left font-weight-bold">Digital</h1>
              {/* <h3 class="text-left py-1">Navigate complexity with competitive agility</h3> */}
              <p className="text-left" style={{textAlign: 'justify!important'}}>In era of digital disruption we help business to evolve from simply thinking digital to being digital. Every digital transformation is unique. We pull from the deep bench of cross-functional experts to help you find your way forward.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-12 text-center">
              <img src="../../images/digital1.gif" className="img-fluid" style={{}} />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header;