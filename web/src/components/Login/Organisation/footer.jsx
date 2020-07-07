import React from "react";
import { Container } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
const Footer = () => {
  return (
    <div className="footer">
      <Container className="icons">
        <FacebookIcon style={{ fontSize: 40 }} />
        <TwitterIcon style={{ fontSize: 40 }} />
        <LinkedInIcon style={{ fontSize: 40 }} />
        <PinterestIcon style={{ fontSize: 40 }} />
        <InstagramIcon style={{ fontSize: 40 }} />
        <WhatsAppIcon style={{ fontSize: 40 }} />
      </Container>
      <Container>
        <p style={{ color: "white" }}>
          Copyright @ 2020 All rights reserved By Caramel It Services Pvt. Ltd.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
