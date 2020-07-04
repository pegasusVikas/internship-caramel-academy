import React from 'react'

const Header = () => {
	return (
		<section className="header-section">
  <div className="container-fluid">
    <div className="row" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
      <div className="col-md-6 col-lg-6 col-12 class-margin">
        <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="p-3 font-weight-bold">Consortium</h1>
        {/* <h3 class="text-left pl-5">Sample text Here</h3> */}
        <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>Caramel IT Services offers specialized business and custom software solutions, which was designed to meet rapidly increasing market demands and customer-centric solutions. Its main activity is to partner with CMMI Level 3, 4 &amp; 5 organizations and provide a collaboration platform to build and then transfer technological innovations to its customers through consortium eco system.
        </p>
        {/* <a href="#succ-sec" class="express-btn float-right ml-5 mt-1">READ MORE</a> */}
      </div>
      <div className="col-md-6 col-lg-6 col-12 text-center">
        <img src="../../images/consortium-head.png" className="img-fluid"  />
      </div>
    </div>
  </div>
</section>

	)
}

export default Header;

//style={{height="0"}}