import React from 'react'

const CoverSection1 = () => {
    return (
      <section className="what-cover bg-light" id="covv">
	<div className="container-fluid py-3">
		<div><h2 className="text-center font-weight-bold" style={{color:"rgba(76,175,80,1)"}}>WHAT WE COVER</h2></div>
		<div className="row py-3">
			<div className="col-lg-6 col-md-6 col-12">
				<h2 className=" py-3" style={{textAlign: "justify!important"}}>Adding services to make the company’s products more relevant and cement lasting relationships with consumers.</h2>
				{/* <!-- <p style={{fontSize: "24px"}}>THE FUTURE OF MOBILITY</p> --> */}
				<p style={{fontSize: "18px",textAlign: "justify!important"}}>Consumer goods companies used to design produce and ship products for customers to buy through a third-party.They’re trying to get closer to customers, understand them better and be a top-of-mind brand, not just a manufacturer.</p>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5oV3EhEEmrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default CoverSection1;