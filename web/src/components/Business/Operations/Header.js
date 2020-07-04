import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
      <div className="container-fluid py-3">
        <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
          <div className="col-md-6 col-lg-6 col-12 class-margin">
            <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 text-left font-weight-bold">Operations</h1>
            <p className="text-left py-1" style={{textAlign: 'justify!important'}}>We bring together people, technology, processes and data to create intelligent operating model that enable companies to drive exceptional result  in today’s business environment, sustainable growth is a challenge. A single new competitor, product or service can change an entire business model. As a result, growth isn’t just about building value—it’s fundamental to long-term business survival.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-12 text-center">
            <img src="../../images/operations.gif" className="img-fluid mt-5" style={{}} />
          </div>
        </div>
      </div>
    </section>

    )
}

export default Header;