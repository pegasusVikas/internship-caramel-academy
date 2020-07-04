import React from 'react'

const IconSection = () => {
  return (
    <section className="icon-sec">
  <div className="jumbotron bg-light">
    <div className="container">
      <div className="row d-flex justify-content-end">
        <div className="col-lg-3 col-md-6 col-12 hover-effect">
          <img src="images/like.png" className="py-3 align-middle" />
          <h4>Individual Approach</h4>
          <p>Unlike many other companies, we use an individual approach to each client and we never offer you a set of standard decisions for your business.</p>	
        </div>
        <div className="col-lg-3 col-md-6 col-12 hover-effect">
          <img src="images/man.png" className="py-3" />
          <h4>Qualified Employers</h4>
          <p>Caramel is a team of dedicated and qualified designers, developers, marketing experts and managers who are ready to work for a personalized web solution.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-12 hover-effect">
          <img src="images/support.png" className="py-3" />
          <h4>24/7 Online Support</h4>
          <p>Our online support is available 24 hours a day to answer your every question and help you solve any issue you may have with our porducts and services.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-12 hover-effect">
          <img src="images/payment.png" className="py-3" />
          <h5>Various Payment Methods</h5>
          <p>We provide a variety of payment methods that include Paypal, Visa/Mastercard/American Express and lots of others, which can be customized.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
export default IconSection;