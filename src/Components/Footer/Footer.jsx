import React from "react";
import "./Footer.css";
import Logo from "../Image/epiclogo.svg";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div className="logo">
            <img src={Logo} alt="Epic World Logo" />
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} EPIC WORLD. All Rights Reserved.
          </div>
          <div className="social-icons">
            <a href="#" title="Facebook" aria-label="Facebook">
              <CiFacebook />
            </a>
            <a href="#" title="Instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" title="Twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
