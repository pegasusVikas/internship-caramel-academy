import React from 'react'

const CoverSection2 = () => {
    return (
      <section className="types-section" id="types-sec">
        <div className="container-fluid py-5">
          <h1 className="text-center pb-5">Types Of Blockchain</h1>
          <div className="row">
            <div className=" col-lg-4 col-md-4 col-12">
              <div className="card card1">
                <img src="../../images/bitcoin.png" className="card-img" />
                <div className="card-body">
                  <h4 className="text-center text-white">Private Blockchain</h4>
                  <p className="text-center text-white">private blockchain is a permissioned based.Works on access controls which restrict the people who can participate in the network.</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-12 margin-mobile">
              <div className="card card1">
                <img src="../../images/cryptocurrency.png" className="card-img" />
                <div className="card-body">
                  <h4 className="text-center text-white">Consortium Blockchain</h4>
                  <p className="text-center text-white">
                    The consortium blockchain is a system that is 'semi-private' and has a controlled user group, but works across different organizations. 
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-12 margin-mobile">
              <div className="card card1">
                <img src="../../images/cryptocurrency1.png" className="card-img" />
                <div className="card-body">
                  <h4 className="text-center text-white">Public Blockchain</h4>
                  <p className="text-center text-white">public blockchain is permissionless. Anyone can join the network and read, write, or participate within the blockchain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CoverSection2;