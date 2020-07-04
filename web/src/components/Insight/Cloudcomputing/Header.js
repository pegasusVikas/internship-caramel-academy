import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
        <div className="container-fluid py-3">
          <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
            <div className="col-md-6 col-lg-6 col-12 class-margin">
              <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 font-weight-bold">Cloud Computing</h1>
              {/* <h2 class="text-left pl-5">Sample text Here</h2> */}
              <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.When considering which cloud computing solution is right for your business, you need to think in terms of hosted, hybrid or on-premises solutions. IaaS, SaaS and PaaS include the equipment software and applications that operate on the cloud. Hosted, hybrid and on-premise are the common deployment models of cloud computing. 
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-12 text-center">
              <img src="../../images/cloud.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header;