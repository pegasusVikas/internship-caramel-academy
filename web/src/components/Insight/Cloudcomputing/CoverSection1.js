import React from 'react'


const CoverSection1 = () => {
    return (
      <section className="what-cover" id="covv">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src="../../images/cloudgovernance.png" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className>
                <h1 className="text-success font-weight-bold pb-5">Cloud Governance Solutions</h1>
                <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>Cloud governance and cloud management are terms that IT practitioners and leadership are going to be confronted with over the coming years. These concepts are interlinked and encompass a number of areas of concern. Understanding the difference between cloud governance and cloud management and how this difference impacts real-world IT operations requires knowledge of the overall evolution of IT as well as an exploration of problems facing organizations today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CoverSection1;