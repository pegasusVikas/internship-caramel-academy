import React from 'react'

const CoverSection = () => {
    return (
      <section>
        {/* Grid */}
        <div className="container-fluid">
          <div className="w3-row">
            {/* Blog entries */}
            <div className="w3-col l8 s12">
              {/* Blog entry */}
              <div className="w3-card-4 w3-margin w3-white">
                <img src="../../images/Cloud.jpg" alt="Nature" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3><b>Cloud Services</b></h3>
                  <h5>Title Description, <span className="w3-opacity">Feb 10, 2020</span></h5>
                </div>
                <div className="w3-container">
                  <p>Cloud App Services are a wide range of specific application services for applications deployed in cloud-based resources.</p>
                  <div className="w3-row">
                    <div className="w3-col m8 s12">
                      <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                      <p><span className="w3-padding-large w3-right"><b>Comments</b> <span className="w3-tag">0</span></span></p>
                    </div>
                  </div>
                </div>
              </div>
              <hr style={{backgroundColor: 'black'}} />
              {/* Blog entry */}
              <div className="w3-card-4 w3-margin w3-white">
                <img src="../../images/app-modernization.jpg" alt="Norway" style={{width: '100%'}} />
                <div className="w3-container">
                  <h3><b>App Modernization Services</b></h3>
                  <h5>Title Description, <span className="w3-opacity">Feb 10, 2020</span></h5>
                </div>
                <div className="w3-container">
                  <p>Traditional applications were built as monolithic blocks of software. These monolithic applications have long life cycles because any changes or updates to one function, usually requires reconfiguring the entire application. </p>
                  <div className="w3-row">
                    <div className="w3-col m8 s12">
                      <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                    </div>
                    <div className="w3-col m4 w3-hide-small">
                      <p><span className="w3-padding-large w3-right"><b>Comments</b> <span className="w3-badge">0</span></span></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END BLOG ENTRIES */}
            </div>
            {/* Introduction menu */}
            <div className="w3-col l4">
              {/* About Card */}
              <div className="w3-card w3-margin w3-margin-top">
                <img src="../../images/handshake-stories.jpg" style={{width: '100%'}} />
                <div className="w3-container w3-white">
                  <h4><b>Stories</b></h4>
                  <p>Today, organizations with their own data centers or which use the public cloud, handle applications services management. In the early days of online adoption, application service providers (or ASPs) were companies which would deliver applications to end users for a fixed cost. </p>
                </div>
              </div><hr />
              {/* Posts */}
              <div className="w3-card w3-margin bg-success text-white">
                <div className="w3-container w3-padding">
                  <h4>Services</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                  <li className="w3-padding-16">
                    <img src="../../images/help.png" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                    <span className="w3-large">Business Operations</span><br />
                    <span>Sed mattis nunc</span>
                  </li>
                  <li className="w3-padding-16">
                    <img src="../../images/help.png" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                    <span className="w3-large">Consulting Services</span><br />
                    <span>Praes tinci sed</span>
                  </li> 
                  <li className="w3-padding-16">
                    <img src="../../images/help.png" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                    <span className="w3-large">Technology Services</span><br />
                    <span>Ultricies congue</span>
                  </li>   
                  <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                    <img src="../../images/help.png" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                    <span className="w3-large">Application Services</span><br />
                    <span>Lorem ipsum dipsum</span>
                  </li>  
                </ul>
              </div>
              <hr /> 
              {/* Labels / tags */}
              <div className="w3-card w3-margin">
                <div className="w3-container w3-padding bg-success">
                  <h4 className=" text-white">Similar Topics</h4>
                </div>
                <div className="w3-container w3-white pt-2">
                  <p><span className="w3-tag w3-black w3-margin-bottom">Technology</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Updates</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Business</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Academy</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Courses</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Web Development</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Mysql</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Digital Marketing</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">DevOps</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Node.js</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Python Development</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Industries</span>
                    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Automotive</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Consulting</span>
                  </p>
                </div>
              </div>
              {/* END Introduction Menu */}
            </div>
            {/* END GRID */}
          </div><br />
          {/* END w3-content */}
        </div>
      </section>
    )
}

export default CoverSection;