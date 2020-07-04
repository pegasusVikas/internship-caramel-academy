
import React from 'react'

const CoverSection1 = () => {
    return (
      <section className="what-cover bg-light" id="covv">
	<div className="container-fluid py-3">
		<div><h2 className="text-center font-weight-bold" style={{color:"rgba(76,175,80,1)"}}>WHAT WE COVER</h2></div>
		<div className="row py-3">
			<div className="col-lg-6 col-md-6 col-12">
				<h2 className=" py-3" style={{textAlign: "justify!important"}}>Do you want to know what it has in store for us in the not-too-distant future?</h2>
				{/* <!-- <p style="font-size: 24px;">THE FUTURE OF MOBILITY</p> --> */}
				<p style={{fontSize: "18px",textAlign: "justify!important"}}>Today, nobody doubts that technology and travel are the perfect combination. This joint force also plays a crucial role in the way we travel: from the vacation destination we choose, all the way to what we do once we're there and even in the time after we've come back from our adventure</p>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BCBUkZA_u7Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default CoverSection1;