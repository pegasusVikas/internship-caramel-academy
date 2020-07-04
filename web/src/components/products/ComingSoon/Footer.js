import React from 'react'

const Footer = () => {
    return (

        <section class="footer-section bg-light" id="foot-sec">
            <div class="cont">
                <div class="footer py-5 text-center">
                    <div class="cont">
                        <div class="row mb-5">
                            <div class="col-12">
                                <p class="mb-0">
                                    <a href="#" class="p-3"><span class="fa fa-facebook-square social-icons" style={{fontSize:'36px' , color:'#fc00ff'}}></span></a>
                                    <a href="#" class="p-3"><span class="fa fa-twitter-square social-icons" style={{fontSize:'36px' , color:'#fc00ff'}}></span></a>
                                    <a href="#" class="p-3"><span class="fa fa-instagram social-icons" style={{fontSize:'36px' , color:'#fc00ff'}}></span></a>
                                    <a href="#" class="p-3"><span class="fa fa-linkedin-square social-icons" style={{fontSize:'36px' , color:'#fc00ff'}}></span></a>
                                    <a href="#" class="p-3"><span class="fa fa-pinterest-square social-icons" style={{fontSize:'36px' , color:'#fc00ff'}}></span></a>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="mb-5" style={{fontSize: '20px'}}>
                                    Copyright ©<script>document.write(new Date().getFullYear());</script>2020 All rights reserved By Caramel IT Services Pvt.Ltd.
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