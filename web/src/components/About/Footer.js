import React from 'react'

const Footer = () => {
  return (
    <div>
    <section className="footer-section bg-light" id="foot-sec">
      <div className="cont">
        <div className="footer py-5 text-center">
          <div className="cont">
            <div className="row mb-5">
              <div className="col-12">
                <p className="mb-0">
                  <a href="https://www.facebook.com/caramelitserviceshyderabad/" className="p-2"><span className="fa fa-facebook-square social-icons" style={{fontSize: '36px', color: '#731a14'}} /></a>
                  <a href="https://twitter.com/ItCaramel" className="p-2"><span className="fa fa-twitter-square social-icons" style={{fontSize: '36px', color: '#731a14'}} /></a>
                  <a href="https://www.instagram.com/caramelitservices/" className="p-2"><span className="fa fa-instagram social-icons" style={{fontSize: '36px', color: '#731a14'}} /></a>
                  <a href="https://www.linkedin.com/in/caramel-it-services/" className="p-2"><span className="fa fa-linkedin-square social-icons" style={{fontSize: '36px', color: '#731a14'}} /></a>
                  <a href="https://in.pinterest.com/caramelitservices/" className="p-2"><span className="fa fa-pinterest-square social-icons" style={{fontSize: '36px', color: '#731a14'}} /></a>
                  <a href="https://api.whatsapp.com/send?phone=+918886660461&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="p-2"><span className="fa fa-whatsapp" style={{fontSize: '36px', color: '#731a14'}} /></a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="mb-5" style={{fontSize: '20px'}}>
                  Copyright © All rights reserved By Caramel IT Services Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
    <a href="https://api.whatsapp.com/send?phone=+918886660461&text=%20Hello!%20want%20to%20find%20out%20about%20caramel" className="float" target="_blank">
      <i className="fa fa-whatsapp my-float" />
    </a>
  </div>
  
  )
}
export default Footer;