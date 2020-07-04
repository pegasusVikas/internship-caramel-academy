import React from 'react'

const TrendingNews = () => {
  return (
    <section className="trend-section" id="trend-sec">
  <div className=" container-fluid py-3">
    <div><h1 className="text-center" style={{color:"rgba(76,175,80,1)"}}>TRENDING NEWS</h1></div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-lg-6 col-md-6 mt-3">
        <div className="w3-card-4" style={{width:"100%"}}>
        <header className="w3-container w3-light-grey">
          <h3>Key Updates From Academy</h3>
        </header>
        <div className="w3-container py-5">
          {/* <!-- <p>1 new friend request</p>
          <hr> --> */}
          <img src="images/avatar.png" alt="Avatar" className="w3-left w3-margin-right"style={{width:"100px"}} />
          <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p><br/>
        </div>
        <button className="w3-button w3-block bg-success text-white">+ Connect</button>
      </div>
      </div>
      <div className="col-12 col-lg-6 col-md-6 mt-3">
        <div className="w3-card-4" style={{width:"100%"}}>
        <header className="w3-container w3-light-grey">
          <h3>Key Updates From Products</h3>
        </header>
        <div className="w3-container py-5">
          {/* <!-- <p>1 new friend request</p>
          <hr> --> */}
          <img src="images/avatar.png" alt="Avatar" className="w3-left w3-margin-right"style={{width:"100px"}} />
          <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p><br/>
        </div>
        <button className="w3-button w3-block bg-success text-white">+ Connect</button>
      </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default TrendingNews;