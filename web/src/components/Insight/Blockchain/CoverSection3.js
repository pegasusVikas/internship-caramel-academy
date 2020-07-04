import React from 'react'

const CoverSection3 = () => {
    return (
      <section className="indus-section bg-success" id="industries-sec">
        <div className="container-fluid py-5">
          <h1 className="text-center text-white pb-5">Industries We Serve</h1>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="card">
                <img src="../../images/hospital.png" className="avatar mt-3" />
                <div className="card-body">
                  <p className=" text-center mobile-font">Lifescience &amp; Healthcare</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="card">
                <img src="../../images/supermarket.png" className="avatar mt-3" />
                <div className="card-body">
                  <p className=" text-center mobile-font">Goods &amp; Services</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6  mobile-margin">
              <div className="card">
                <img src="../../images/profits.png" className="avatar mt-3" />
                <div className="card-body">
                  <p className=" text-center mobile-font">Banking</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6  mobile-margin pad-margin">
              <div className="card">
                <img src="../../images/car.png" className="avatar mt-3" />
                <div className="card-body">
                  <p className=" text-center mobile-font">Automotive</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6  mobile-margin pad-margin">
              <div className="card">
                <img src="../../images/travel5.png" className="avatar mt-3" />
                <div className="card-body" id="travel-card">
                  <p className=" text-center mobile-font">Travel</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6  mobile-margin pad-margin">
              <div className="card">
                <img src="../../images/network-signal.png" className="avatar mt-3" />
                <div className="card-body">
                  <p className=" text-center mobile-font">Communication &amp; Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CoverSection3;