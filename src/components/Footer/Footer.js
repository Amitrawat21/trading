import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img
            src="https://img.freepik.com/premium-vector/trading-logo-with-chart-concept_11481-675.jpg"
            alt="Trading Logo"
            className="logo"
          />
          <p>
            To address all issues (including breaking changes), run:
            <code> npm audit fix --force</code>. This ensures your application
            dependencies remain secure.
          </p>
        </div>
        <div className="col">
          <h3>Office</h3>
          <p>IITPL Road</p>
          <p>Whitefield, Bangalore</p>
          <p>Karnataka, PIN 505766</p>
          <p className="email-id">rawatamit8285@gmail.com</p>
          <h4>+91-76484848849</h4>
        </div>
        <div className="col">
          <h3>Services</h3>
          <p>Consulting</p>
          <p>Training</p>
          <p>Support</p>
        </div>
        <div className="coll">
          <h3>Follow Us</h3>
          <div className="social-media">
            <FacebookIcon />
            <p>Facebook</p>
          </div>
          <div className="social-media">
            <TwitterIcon />
            <p>Twitter</p>
          </div>

          <div className="social-media">
            <LinkedInIcon />

            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
