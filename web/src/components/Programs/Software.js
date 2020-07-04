import React from "react";

const Software = () => {
  return (
    <div>
      <h1 className="sub-head">SOFTWARE DEVELOPMENT</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 ccontent">
            <p>
              Software development is the process of conceiving, specifying,
              designing, programming, documenting, testing, and bug fixing
              involved in creating and maintaining applications, frameworks, or
              other software components.{" "}
            </p>
          </div>
          <div className="col-lg-4 cimage">
            <img src="../images/sd.png" />
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <h1
          id="h"
          style={{
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: "40px",
            marginTop: "43px",
            marginLeft: "17px",
            textAlign: "center",
            color: "white",
          }}
        >
          Sub Programs:
        </h1>
      </div>
    </div>
  );
};

export default Software;
