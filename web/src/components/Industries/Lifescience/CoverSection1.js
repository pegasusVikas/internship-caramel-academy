import React from 'react'

const CoverSection1 = () => {
    return (
			<section className="what-cover bg-light" id="covv">
			<div className="container-fluid py-3">
				<div><h2 className="text-center font-weight-bold" style={{color: 'rgba(76,175,80,1)'}}>WHAT WE COVER</h2></div>
				<div className="row py-3">
					<div className="col-lg-6 col-md-6 col-12">
						<h2 className=" py-3" style={{textAlign: 'justify!important'}}>Technology is a chief driving agent of growth in the healthcare industry.</h2>
						{/* <p style="font-size: 24px;">THE FUTURE OF MOBILITY</p> */}
						<p style={{fontSize: '18px', textAlign: 'justify!important'}}>The health industry is one of the fastest growing, most critical industries worldwide. We are living in an era of rapid change and innovation in life science, and every healthcare organization in the world is feeling the impact. </p>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<div className="iframe-container">
							<iframe width={560} height={315} src="https://www.youtube.com/embed/XTvwxr-ZrXU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
						</div>
					</div>
				</div>
			</div>
		</section>
		
    )
}

export default CoverSection1;