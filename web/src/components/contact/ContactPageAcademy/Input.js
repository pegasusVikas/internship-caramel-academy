import React from 'react'

const Input = () => {
    return (
      <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-10 contact">
            <h1 id="cname">Caramel IT Academy</h1>
            <h1 id="coname" style={{textAlign: 'center'}}>Contact Us</h1>
            <div className="row">
              <div className="col-lg-6">
                <div id="first2">
                  <form name="frm" action="#" method="post">
                    <div className="form-group">
                      <label htmlFor="fullname" name="fname">Full Name:</label>
                      <input type="text" className="form-control bg bg-light" id="fname" name="email" required />
                      <i id="fname error" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="fullname">Email:</label>
                      <input type="text" className="form-control bg bg-light" id="email" name="email" required />
                      <i id="emailerror" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="fullname">Phone Number:</label>
                      <input type="text" className="form-control bg bg-light" id="phone" name="phone" required />
                      <i id="phoneerror" />
                    </div>
                    <div className="form-group">
                      <label>ZipCode/Pincode:</label>
                      <input type="text" className="form-control bg bg-light" name="pincode" />
                    </div>
                  </form></div>
              </div>
            </div></div></div></div></div>
    
    )
}

export default Input;