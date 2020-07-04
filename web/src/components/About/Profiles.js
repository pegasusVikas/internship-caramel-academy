import React from 'react'

const Profiles = () => {
  return (
    <section>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4 col-12">
        <div className="card-profile">
          <img src="images/ceo.jpeg" alt="John" style={{width: '100%'}} />
          <h3 className="pt-2">Kishore Kumar</h3>
          <p className="title-person">CEO &amp; Founder, Caramel IT Services</p>
          <p />
          <div style={{margin: '24px 0'}} className="link-social">
            <a href="#"><i className="fa fa-instagram" /></a> 
            <a href="#"><i className="fa fa-twitter" /></a>  
            <a href="#"><i className="fa fa-linkedin" /></a>  
            <a href="#"><i className="fa fa-facebook" /></a> 
          </div>
          <p><button className="button-class">Contact</button></p>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="card-profile">
          <img src="images/hr.jpeg" alt="John" style={{width: '100%'}} />
          <h3 className="pt-2">Suchitra Kumar</h3>
          <p className="title-person">HR,Caramel IT Services</p>
          <p />
          <div style={{margin: '24px 0'}} className="link-social">
            <a href="#"><i className="fa fa-instagram" /></a> 
            <a href="#"><i className="fa fa-twitter" /></a>  
            <a href="#"><i className="fa fa-linkedin" /></a>  
            <a href="#"><i className="fa fa-facebook" /></a> 
          </div>
          <p><button className="button-class">Contact</button></p>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-12">
        <div className="card-profile">
          <img src="images/manager.jpeg" alt="John" style={{width: '100%'}} />
          <h3 className="pt-2">Krishna Murthy</h3>
          <p className="title-person">Manager, Caramel IT Services</p>
          <p />
          <div style={{margin: '24px 0'}} className="link-social">
            <a href="#"><i className="fa fa-instagram" /></a> 
            <a href="#"><i className="fa fa-twitter" /></a>  
            <a href="#"><i className="fa fa-linkedin" /></a>  
            <a href="#"><i className="fa fa-facebook" /></a> 
          </div>
          <p><button className="button-class">Contact</button></p>
        </div>
      </div>
    </div>
  </div>	
</section>

  )
}
export default Profiles;