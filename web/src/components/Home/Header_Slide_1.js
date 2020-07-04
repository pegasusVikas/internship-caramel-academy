import React from 'react'

const Header_Slide_1 = () => {
  return (
    <section className="header-section" id="head-sec">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img-fluid" src="../../images/images/digital-agency-slider-1.jpg"
              alt="Los Angeles" />
            <div className="carousel-caption head-content-base">
              <h1 className="text-capitalize mb-4">drive your<br /> transformation<br /> with us</h1>
              {/**<!-- <p>We had such a great time in LA!</p>**/}
              <a href="#serv-sec" className="content-base-btn diff-color">READ MORE</a>
              <a href="nodeindexcontactform/contactform.html" className="content-base-btn ml-lg-5">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Header_Slide_1;
