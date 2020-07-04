
import React from 'react'

const CoverSection = () => {
    return (
      <section className="special-section " id="special-sec">
        <div className=" container-fluid">
          <h1 className="text-center text-success"> Our Data Science Expertise</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h3><i className="fa fa-hand-o-right" style={{fontSize: '20px'}} />&nbsp; Big Data Analytics</h3>
              <p style={{fontSize: '18px', textAlign: 'justify!important'}}> Big Data analytics can help organizations to better understand the information contained within the data and will also help identify the data that is most important to the business and future business decisions.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h3><i className="fa fa-hand-o-right" style={{fontSize: '20px'}} /> &nbsp; NLP &amp; Text Analysis </h3>
              <p style={{fontSize: '18px', textAlign: 'justify!important'}}>Text analysis, sometimes referred as text mining, is the automated process of understanding and sorting unstructured text, making it easier to manage. </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h3><i className="fa fa-hand-o-right" style={{fontSize: '20px'}} /> &nbsp;Computer Vision</h3>
              <p style={{fontSize: '18px', textAlign: 'justify!important'}}>Computer vision is closely linked with artificial intelligence, as the computer must interpret what it sees, and then perform appropriate analysis or act accordingly.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h3><i className="fa fa-hand-o-right" style={{fontSize: '20px'}} /> &nbsp;Peredictive Analytics</h3>
              <p style={{fontSize: '18px', textAlign: 'justify!important'}}>Predictive analytics describe the use of statistics and modeling to determine future performance based on current and historical data.It is a decision-making tool in a variety of industries.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h3><i className="fa fa-hand-o-right" style={{fontSize: '20px'}} /> &nbsp;Data Capture / OCR</h3>
              <p style={{fontSize: '18px', textAlign: 'justify!important'}}>OCR is necessary for data capture because an OCR engine is responsible for recognizing the actual text within a scanned form or invoice.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h3><i className="fa fa-hand-o-right" style={{fontSize: '20px'}} /> &nbsp;BI Implementation</h3>
              <p style={{fontSize: '18px', textAlign: 'justify!important'}}>BI(Business Intelligence) is a set of processes, architectures, and technologies that convert raw data into meaningful information that drives profitable business actions.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CoverSection;