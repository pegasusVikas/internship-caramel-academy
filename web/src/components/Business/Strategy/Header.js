import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
        <div className="container-fluid">
          <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
            <div className="col-md-6 col-lg-6 col-12 class-margin">
              <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 text-left font-weight-bold">Strategy</h1>
              {/* <h3 class="text-left py-1">Navigate complexity with competitive agility</h3> */}
              <p className="text-left" style={{textAlign: 'justify!important'}}>To stay agile in a world dominated by change, the C-suite must keep the core business running while simultaneously identifying and investing in the new. Caramel Strategy consulting enables leaders to act quickly and confidently as they pivot to the future.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-12 text-center">
              <img src="../../images/strategy1.gif" className="img-fluid mt-5" style={{}} />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header;