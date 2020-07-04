import React from 'react'

const OurStories = () => {
    return (
      <section className="updates-blog">
  <div className="container-fluid py-3"><div><h2 className="text-center font-weight-bold text-uppercase" style={{color:"rgba(76,175,80,1)"}}>Our Industry Stories</h2></div>
</div>
{/* <!-- Page Content --> */}
<div className="container-fluid">

  <div className="row">

    {/* <!-- Blog Entries Column --> */}
    <div className="col-md-6 col-lg-6">
      {/* <!-- Blog Post --> */}
      <div className=" mb-4 w3-card-4">
        <img className="card-img-top" src="../../images/consumer-products.jpg" alt="Card image cap"/>
        <div className="card-body">
          <h2 className="card-title">Products</h2>
          <p className="card-text">Technology plays a key role. A competitive digital consumer goods and services (CG&S) organization today uses disruptive technologies, such as intelligent automation, machine learning and the industrial internet of things, to connect people, processes, things and data.</p>
          <a href="#" className="btn btn-primary">Read More &rarr;</a>
        </div>
        <div className="card-footer text-muted">
          Posted on Feb 10, 2020 by
          <a href="../index.html">Caramel IT</a>
        </div>
      </div>
    </div>
    {/* <!-- Blog Post --> */}
    <div className="col-12 col-md-12 col-lg-6">
      <div className=" mb-4 w3-card-4">
        <img className="card-img-top" src="../../images/consumer-services.jpg" alt="Card image cap"/>
        <div className="card-body">
          <h2 className="card-title">Services</h2>
          <p className="card-text">In some cases, that means adding a direct-to-consumer (retail) channel to their existing distribution channels. For others, it means adding services to make the company’s products more relevant and cement lasting relationships with consumers.</p>
          <a href="#" className="btn btn-primary">Read More &rarr;</a>
        </div>
        <div className="card-footer text-muted">
          Posted on Feb 10, 2020 by
          <a href="../index.html">Caramel IT</a>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Sidebar Widgets Column --> */}
  <div className="w3-container bg-success">
  <h1 className="text-center text-white">Case Studies</h1>
</div>

<div className="w3-row-padding w3-margin-top">
  <div className="w3-third">
    <div className="w3-card">
      <img src="../../images/web-development.jpeg" style={{width:"100%"}}/>
      <div className="w3-container">
        <h5>Web Development</h5>
      </div>
    </div>
  </div>

  <div className="w3-third card-margin">
    <div className="w3-card">
      <img src="../../images/evolving-industries.jpg" style={{width:"100%"}}/>
      <div className="w3-container">
        <h5>Industries Evolveing</h5>
      </div>
    </div>
  </div>

  <div className="w3-third">
    <div className="w3-card">
      <img src="../../images/technology.jpg" style={{width:"100%"}}/>
      <div className="w3-container">
        <h5>Technology</h5>
      </div>
    </div>
  </div>
</div>
  {/* <!-- Side Widget --> */}
  <div className=" my-4 w3-card-4 px-5 bg-success">
    <h3 className="pt-3 text-white text-center">Partners Saying</h3>
    <div className="card-body text-white text-center">
     The resulting personalization, workforce empowerment and insight-led decision-making are cornerstones of a successful digital business.
    </div>
  </div>

</div>


</section>
    )
}

export default OurStories;