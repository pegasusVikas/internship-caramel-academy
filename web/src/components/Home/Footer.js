import React from 'react'

const Footer = () => {
    return (
      <div>
        <section className="footer-section bg-lightgrey" id="foot-sec">
          <div className="contai">
            <div className="footer text-center">
              <div>
                <div className="row mb-5">
                  <div className="col-12">
                    <p className="mb-0" id="socialmedia1" style={{overflowY: 'hidden', paddingTop: '40px'}}>
                      <a href="https://www.facebook.com/caramelacademy/" className="p-2"><span className="fa fa-facebook-square" style={{fontSize: '36px', color: '#292C7D'}} /></a>
                      <a href="https://twitter.com/caramelacademy" className="p-2"><span className="fa fa-twitter-square" style={{fontSize: '36px', color: '#292C7D'}} /></a>
                      <a href="https://www.instagram.com/caramelitacademy/" className="p-2"><span className="fa fa-instagram" style={{fontSize: '36px', color: '#292C7D'}} /></a>
                      <a href="https://www.linkedin.com/company/37846486/admin/" className="p-2"><span className="fa fa-linkedin-square" style={{fontSize: '36px', color: '#292C7D'}} /></a>
                      <a href="https://in.pinterest.com/caramelacademy/" className="p-2"><span className="fa fa-pinterest-square" style={{fontSize: '36px', color: '#292C7D'}} /></a>
                      <a href="https://api.whatsapp.com/send?phone=+918886660462&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="p-2"><span className="fa fa-whatsapp" style={{fontSize: '36px', color: '#292C7D'}} /></a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="mb-0" id="foter" style={{fontSize: '18px'}}>
                      Copyright © All rights reserved By Caramel IT Services Pvt.Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </section>
        <a href="https://api.whatsapp.com/send?phone=+918886660462&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
          <i className="fa fa-whatsapp my-float" />
        </a>
      </div>
    )
}

export default Footer;