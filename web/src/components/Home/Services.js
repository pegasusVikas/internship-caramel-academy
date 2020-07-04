import React from 'react'

const Services = () => {
    return (
      <section className="services-section" id="serv-sec">
          <div className="container">
            <div className="text-center py-5"><h1 className="font-weight-bold" style={{color: "rgba(63,81,181,1)" , letterSpacing: "3px"}}>Our Services</h1></div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="">
                    <a href="/consortium">
                      <img className="card-serv translate-up" src="images/consortiumlogo.jpeg" alt="Card image" style={{width:"100%"}} /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
           <div className=" card-top">
              <a href="/acadamy">
                <img className="card-serv" src="images/academylogo.jpeg" alt="Card image" style={{width:"100%"}} /></a>
              </div>
            </div>
           <div className="col-lg-4 col-md-4 col-12">
            <div className=" card-top">
              <a href="products.html">
                <img className="card-serv translate-up" src="images/productslogo.jpeg" alt="Card image" style={{width:"100%"}} /></a>
              </div>
            </div>
        </div>	
      </div>
    </section>
    )
}

export default Services;