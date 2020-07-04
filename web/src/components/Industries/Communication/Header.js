import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
  <div className="container-fluid py-3">
    <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
      <div className="col-md-6 col-lg-6 col-12 class-margin">
        <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 font-weight-bold">Communication &amp; Media</h1>
        {/* <h2 class="text-left pl-5">Sample text Here</h2> */}
        <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>A transformation of marketing is underway as we spend more time on our mobiles, tablets and laptops. The challenge for brands is to connect with customers through all these devices in real time and create campaigns that work across social media, display advertising and e-commerce with Full Stack Development Tech Stack.
        </p>
      </div>
      <div className="col-md-6 col-lg-6 col-12 text-center">
        <img src="../../images/communication.png" className="img-fluid" style={{}} />
      </div>
    </div>
  </div>
</section>

    )
}

export default Header;