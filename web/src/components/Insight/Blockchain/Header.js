import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
        <div className="container-fluid py-3">
          <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
            <div className="col-md-6 col-lg-6 col-12 class-margin">
              <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 font-weight-bold">Blockchain</h1>
              {/* <h2 class="text-left pl-5">Sample text Here</h2> */}
              <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>The Blockchain is a technology based on the virtual digitized decentralized network with “blocks” of information. When you add any information in the network, you add it in all computers in the network.Blockchain technology distributed across multiple data centers can ensure security against attacks on important network and hardware equipment.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-12 text-center">
              <img src="../../images/blockchain.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header;