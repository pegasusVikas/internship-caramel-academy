
import React from 'react'

const CoverSection1 = () => {
    return (
      <section className="what-cover bg-light" id="covv">
  <div className="container-fluid py-3">
    <div><h2 className="text-center font-weight-bold" style={{color: 'rgba(76,175,80,1)'}}>WHAT WE COVER</h2></div>
    <div className="row py-3">
      <div className="col-lg-6 col-md-6 col-12">
        <h2 className=" py-3">Learn how automakers can position themselves to flourish the new era of IOT,Mobility &amp; AI/ML</h2>
        <p style={{fontSize: '24px'}}>THE FUTURE OF MOBILITY</p>
        <p style={{fontSize: '18px'}}>Softwares are changing automotive technology from AI-powered Robo-Taxis and blockchain-powered cars to interactive car lights</p>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="iframe-container">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/LRrMDf-2iqE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default CoverSection1;