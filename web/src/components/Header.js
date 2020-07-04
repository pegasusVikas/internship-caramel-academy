import React from "react";

const Header = () => {
  return (
    <div>
      <section className="header-section">
        <div className="container-fluid">
          <div className="row banner3" id="homeid1">
            <div className="col-md-6 col-lg-6 col-12">
              <div
                data-aos="flip-left"
                data-aos-duration={2000}
                data-aos-easing="ease-out-cubic"
              >
                <h1> DRIVE YOUR TRANSFORMATION WITH US </h1>
                <p>
                  {" "}
                  Be the first person to transform yourself with our unique
                  &amp; world class corporate level trainings &amp; industry
                  specific real time scenario based hands-on assignments{" "}
                </p>
                <div className="learn3">
                  <a href="#learnmore" className="express-btn">
                    LEARN MORE
                  </a>
                  <a href="broouchure.pdf" download className="banner2 ml-lg-5">
                    DOWNLOAD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12 text-center1">
              {/* <div data-aos="fade-left"data-aos-duration="2000"> */}
              <img src="../images/show4.png" width="100%" height="60%" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
