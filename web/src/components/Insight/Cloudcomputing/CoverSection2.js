import React from 'react'

const CoverSection2 = () => {
    return (
      <section className="serv-section bg-light" id="serve-sec">
      <div className=" container-fluid pb-5">
        <h1 className="text-center text-success py-5">Our Cloud Services</h1>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/system.png" alt="Card image" />
              <div className="card-body p-2">
                <h4 className="card-title text-center">Cloud Managed Services</h4>
                <p className="card-text text-center">Managed cloud services refers to outsourcing daily IT management for cloud-based services and technical support to automate and enhance your business operations.</p> 
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/responsive.png" alt="Card image" style={{width:"250px 250px"}}/>
              <div className="card-body p-2" >
                <h4 className="card-title text-center">Cloud Migration Services</h4>
                <p className="card-text text-center" style={{width:"250px 250px"}}>The goal of any cloud migration is to host applications and data in the most effective IT environment possible, based on factors such as cost, performance &amp; security.</p> 
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/data.png" alt="Card image" />
              <div className="card-body p-2">
                <h4 className="card-title text-center">Cloud Advisory Services</h4>
                <p className="card-text text-center">Our Cloud Advisory Services enable you to identify suitable opportunities to leverage Cloud computing services for sustainable business benefits. </p> 
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-lg-4 col-md-6">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/privacy.png" alt="Card image" />
              <div className="card-body p-2">
                <h4 className="card-title text-center">Cloud Security Services</h4>
                <p className="card-text text-center">Cloud security is essential for the many users who are concerned about the safety of the data they store in the cloud. They believe their data is safer on their own local servers where they feel they have more control over the data.</p> 
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/flexible.png" alt="Card image" />
              <div className="card-body p-2">
                <h4 className="card-title text-center">Cloud Provisioning Services</h4>
                <p className="card-text text-center">Cloud provisioning is the allocation of a cloud provider's resources and services to a customer.It refers to the processes for the deployment and integration of cloud computing services within an enterprise IT infrastructure</p> 
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 mobile-margin">
            <div className="card">
              <img className=" avatar mt-5" src="../../images/computer.png" alt="Card image" />
              <div className="card-body p-2">
                <h4 className="card-title text-center">Cloud Computing services</h4>
                <p className="card-text text-center">This Services provide IT as a service over the Internet or dedicated network, with delivery on demand, and payment based on usage.It range from full applications and development platforms.</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    )
}

export default CoverSection2;