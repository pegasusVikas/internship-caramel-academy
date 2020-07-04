import React from 'react'

const Footer = () => {
    return (
      <section className="footer-section bg-light" id="foot-sec">
        <div className="cont">
          <div className="footer py-5 text-center" style={{paddingRight: 0, paddingLeft: 0}}>
            <div className="co">
              <div className="row mb-5">
                <div className="col-12">
                  <p className="mb-0" style={{overflowY: 'hidden'}}>
                    <a href="https://www.facebook.com/caramelconsortium/" className="p-1"><span className="fa fa-facebook-square social-icons" style={{fontSize: '36px', color: '#5cb85c'}} /></a>
                    <a href="https://twitter.com/Caramelconsort" className="p-1"><span className="fa fa-twitter-square social-icons" style={{fontSize: '36px', color: '#5cb85c'}} /></a>
                    <a href="https://www.instagram.com/caramelconsort/" className="p-1"><span className="fa fa-instagram social-icons" style={{fontSize: '36px', color: '#5cb85c'}} /></a>
                    <a href="https://www.linkedin.com/company/37846486/admin/" className="p-1"><span className="fa fa-linkedin-square social-icons" style={{fontSize: '36px', color: '#5cb85c'}} /></a>
                    <a href="https://in.pinterest.com/caramelconsortium/" className="p-1"><span className="fa fa-pinterest-square social-icons" style={{fontSize: '36px', color: '#5cb85c'}} /></a>
                    <a href="https://api.whatsapp.com/send?phone=+918886660461&text=%20Hello!%20want%20to%20find%20out%20about%20caramel" className="p-1"><span className="fa fa-whatsapp social-icons" style={{fontSize: '36px', color: '#5cb85c'}} /></a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="mb-5" style={{fontSize: '20px'}}>
                    Copyright © All rights reserved By Caramel IT Services Pvt.Ltd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>
    )
}

export default Footer;