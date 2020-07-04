import React from 'react'

const YourNeeds1 = () => {
  return (
    <section className="needs-section" id="need-sec">
      <div className=" container-fluid py-3">
        <div><h1 className="text-center" style={{ color: "rgba(76,175,80,1)" }}>TAILORED TO YOUR NEEDS</h1></div>
      </div>
      <div className="container-fluid">
        <div className="text-left pb-3" style={{ fontSize: " 20px", textAlign: "justify !important" }}>Our unique value proposition and key differentiator is to empower its partner network, client, employees and stakeholders to make smarter, innovative choices with speed of delivery. We achieve this using five easy steps.</div>
        <div className="row justify-content-between mobile-disp pt-3 px-5">
          <div className="col-lg-2 col-md-6 col-6 card-serv">
            <div><img src="images/integration.png" className="img-fluid pt-3" /></div>
            <p className="text-center py-3">Simplified integration</p>
          </div>
          <div className="col-lg-2 col-md-6 col-6 card-serv">
            <div><img src="images/solutions.png" className="img-fluid pt-3" /></div>
            <p className="text-center py-3">Customized Solutions</p>
          </div>
          <div className="col-lg-2 col-md-6 col-6 card-serv">
            <div><img src="images/results.png" className="img-fluid pt-3" /></div>
            <p className="text-center py-3">Result Oriented</p>
          </div>
          <div className="col-lg-2 col-md-6 col-6 card-serv">
            <div><img src="images/innovation.png" className="img-fluid pt-3" /></div>
            <p className="text-center py-3">Encourage Innovation</p>
          </div>
          <div className="col-lg-2 col-md-6 col-6 card-serv">
            <div><img src="images/collaboration.png" className="img-fluid pt-3" /></div>
            <p className="text-center py-3">Collaboration Platform</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default YourNeeds1;