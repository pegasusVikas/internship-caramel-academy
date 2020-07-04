import React, { useState } from 'react';
import Header_Slide_1 from './Header_Slide_1';
import Header_Slide_2 from './Header_slide_2';
import Header_Slide_3 from './Header_slide_3';

const Header = (props) => {
  const [slide, setSlide] = useState(0);
  let slide1 = "" ;
  let slide2 = "";
  let slide3 = "";
  {slide == 0 ? slide1="active" : slide == 1 ?  slide2="active":  slide3="active"}
  return (
    <div>
      <section className="header-section" id="head-sec">
        <div id="demo" className="carousel slide" data-ride="carousel">
          
          <ul className="carousel-indicators">
            <li data-target="#demo" onClick={() => setSlide(0)} className = {""+slide1}></li>
            <li data-target="#demo" onClick={() => setSlide(1)} className = {""+slide2} ></li>
            <li data-target="#demo" onClick={() => setSlide(2)} className = {""+slide3}></li>
          </ul>
          {slide == 0 ? <Header_Slide_1 /> : slide == 1 ? <Header_Slide_2 /> : <Header_Slide_3 />}
        </div>
      </section>
    </div>

  )
}

export default Header;