import React from 'react'

const YourNeeds2 = () => {
  return (
    <section className="mobile-needs-section" id="mobile-needs">
      <div className="container py-3">
        <div className="carousel-flick"
          data-flickity='{ "wrapAround": true }'>
          <div className="carousel-cell-cons" background="#8C8"><img src="images/integration.png" className="img-fluid pt-3" /><p className="text-center py-3">Collaboration Platform</p></div>
          <div className="carousel-cell-cons" background="#8C8"> <img src="images/solutions.png" className="img-fluid pt-3" /><p className="text-center py-3">Collaboration Platform</p></div>
          <div className="carousel-cell-cons" background="#8C8"><img src="images/results.png" className="img-fluid pt-3" /><p className="text-center py-3">Collaboration Platform</p></div>
          <div className="carousel-cell-cons" background="#8C8"><img src="images/innovation.png" className="img-fluid pt-3" /><p className="text-center py-3">Collaboration Platform</p></div>
          <div className="carousel-cell-cons" background="#8C8"><img src="images/collaboration.png" className="img-fluid pt-3" /><p className="text-center py-3">Collaboration Platform</p></div>
        </div>
      </div>
    </section>
  )
}

export default YourNeeds2;