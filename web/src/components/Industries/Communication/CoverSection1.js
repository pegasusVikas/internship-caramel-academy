
import React from 'react'

const CoverSection1 = () => {
    return (
      <section className="what-cover bg-light" id="covv">
      <div className="container-fluid py-3">
        <div><h2 className="text-center font-weight-bold" style={{color: 'rgba(76,175,80,1)'}}>WHAT WE COVER</h2></div>
        <div className="row py-3">
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className=" py-3" style={{textAlign: 'justify!important'}}>The rise of smartphones and apps means marketers have to develop digital skills to communicate effectively with customers. </h2>
            {/* <p style="font-size: 24px;">THE FUTURE OF MOBILITY</p> */}
            <p style={{fontSize: '18px', textAlign: 'justify!important'}}>The real-time conversations brands have with people as they interact with websites and mobile apps have changed the nature of marketing. The modern-day marketing department needs to combine the creative side of the discipline – using powerful narratives to tap into people’s wishes and aspirations – with the technical side of data, digital engineering and analytics. </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="iframe-container">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/hpbN3zhxdKs" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    )
}

export default CoverSection1;