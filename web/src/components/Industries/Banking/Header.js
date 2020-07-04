import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
	<div className="container-fluid py-3">
		<div className="row pb-5" id="homeid" style={{marginRight: "0px!important", marginLeft: "0px!important"}}>
			<div className="col-md-6 col-lg-6 col-12 class-margin">
				<h1 style={{color:"rgba(76,175,80,1)",fontSize: "40px"}} className="py-3 font-weight-bold">Banking</h1>
				{/* <!-- <h2 className="text-left pl-5">Sample text Here</h2> --> */}
				<p className="text-left" style={{fontSize: "18px",textAlign: "justify!important"}}>Banks were always regarded as a place with long queues, and an unmanageable amount of paper work. Due to technological advancements in the banking sector, the need of labor and papers has reduced a lot.</p>
     </div>
     <div className="col-md-6 col-lg-6 col-12 text-center">
      <img src="../../images/banking.png" className="img-fluid" />
    </div>
  </div>
</div>
</section>
    )
}

export default Header;