
import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
      <div className="container-fluid py-3">
        <div className="row pb-5" id="homeid" style={{marginright:  "0px!important", marginleft: "0px!important;"}}>
          <div className="col-md-6 col-lg-6 col-12 class-margin">
            <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 font-weight-bold">Artificial Intelligence</h1>
            {/* <h2 class="text-left pl-5">Sample text Here</h2> */}
            <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>In computer science, artificial intelligence, sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans.Applications of AI include expert systems, speech recognition and machine vision.AI has been used to develop and advance numerous fields and industries, including finance, healthcare, education, transportation, and more. 
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-12 text-center">
            <img src="../../images/artificial.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Header;