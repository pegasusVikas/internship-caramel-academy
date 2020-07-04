import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
      <div className="container-fluid py-3">
        <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
          <div className="col-md-6 col-lg-6 col-12 class-margin">
            <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 text-left font-weight-bold">Consulting</h1>
            {/* <h3 class="text-left py-1">Raise your business to the next level with groundbreaking strategy, fresh technologies and innovation advisors that help drive business value.</h3> */}
            <p className="text-left" style={{textAlign: 'justify!important'}}>If you’re ready to innovate and transform your business, Caramel can help you imagine, and run your future wherever you compete, using latest technologies, from strategy development through implementation. We are aware that, because impact is not created alone. Together we can make history.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-12 text-center">
            <img src="../../images/consulting.gif" className="img-fluid" style={{}} />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Header;