
import React from 'react'

const Header = () => {
    return (
      <section className="header-section">
      <div className="container-fluid py-3">
        <div className="row pb-5" id="homeid" style={{marginRight: '0px!important', marginLeft: '0px!important'}}>
          <div className="col-md-6 col-lg-6 col-12 class-margin">
            <h1 style={{color: 'rgba(76,175,80,1)', fontSize: '40px'}} className="py-3 font-weight-bold">Data Science</h1>
            {/* <h2 class="text-left pl-5">Sample text Here</h2> */}
            <p className="text-left" style={{fontSize: '18px', textAlign: 'justify!important'}}>Usage of data to provide solutions. Using collected data to extract meaning from and interpret data.<br />
              Business Intelligence: After the data has been Organized.<br />
              Traditional Method: After BI report has been created and discussed.<br />
              Machine Learning: Use data to create reports and dashboards to gain business insights.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-12 text-center">
            <img src="../../images/datascience.png" className="img-fluid"  />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Header;