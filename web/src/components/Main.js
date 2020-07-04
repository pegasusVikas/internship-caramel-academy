import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Feature from "./Feature";
import Feature2 from "./Feature2";
import Working from "./Working";
import Programs1 from "./Programs1";
import Covering from "./Covering";
import HowWeWork from "./HowWeWork";
import Footer from "./Footer";
import Programs2 from "./Programs2";
//import Sudo from './sudo'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Feature /> */}
      <Feature2 />
      <Working />
      <HowWeWork />
      <Programs1 />
      <Programs2 />
      {/* <Sudo/> */}
      <Covering />
      <Footer />
    </div>
  );
};

export default Main;
