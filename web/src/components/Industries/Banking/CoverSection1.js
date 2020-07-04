import React from 'react'

const CoverSection1 = () => {
    return (
      <section className="what-cover bg-light" id="covv">
	<div className="container-fluid py-3">
		<div><h2 className="text-center font-weight-bold" style={{color:"rgba(76,175,80,1)"}}>WHAT WE COVER</h2></div>
		<div className="row py-3">
			<div className="col-lg-6 col-md-6 col-12">
				<h2 className=" py-3">The World at your Fingertips</h2>
				{/* <!-- <p style="font-size: 24px;">THE FUTURE OF MOBILITY</p> --> */}
				<p style={{fontSize: "18px",textAlign: "justify!important"}}>A lot of people will be able to relate to this, because in some way or the other, all of us are being effected by technology.From ordering food or shopping for clothes, everything is only a tap away. You also do not have the need to carry cash in hand, you can just make a digital payment from your E-Wallet. Similarly, through net banking, one is allowed to transfer money from one account to another, order for cheque books, check the balance, make payments, create Fixed Deposits, and so on.</p>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<div className="iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UPGEo0AkzJs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default CoverSection1;