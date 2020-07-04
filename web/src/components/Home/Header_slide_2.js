import React from 'react'

const Header_Slide_2 = () => {
  return (
    <section className="header-section" id="head-sec">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/images/digital-agency-slider-2.jpg" alt="Chicago" width="1100" height="100" />
            <div className="carousel-caption head-content-base">
              <h1 className="text-capitalize mb-5 margin-bott-text">we turn your<br />ideas into reality</h1>
              {/**<!-- <p>We had such a great time in LA!</p> -->**/}
              <a href="#serv-sec" className="content-base-btn diff-color">READ MORE</a>
              <a href="nodeindexcontactform/contactform.html" className="content-base-btn ml-lg-5">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Header_Slide_2;
