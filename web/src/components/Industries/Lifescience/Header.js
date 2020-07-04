
import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
	<div className="container-fluid py-3">
		<div className="row pb-5" id="homeid" style={{marginRight:"0px!important" , marginLeft: "0px!important"}}>
			<div className="col-md-6 col-lg-6 col-12 class-margin">
				<h1 style={{color:"rgba(76,175,80,1)",fontSize: "40px"}} className="py-3 font-weight-bold">Lifescience & Healthcare</h1>
				{/* <!-- <h2 className="text-left pl-5">Sample text Here</h2> --> */}
				<p className="text-left" style={{fontSize: "18px",textAlign: "justify!important"}}>Designing and developing the next generation of health technology for brighter futures, better communication, greater interoperability, and agility.
       </p>
     </div>
     <div className="col-md-6 col-lg-6 col-12 text-center">
      <img src="../../images/lifescience.jpg" className="img-fluid"/>
    </div>
  </div>
</div>
</section>
    )
}

export default Header;