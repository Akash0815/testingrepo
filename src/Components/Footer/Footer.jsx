import React from "react";

import "./Footer.css";
import Logo from "../Image/epiclogo.svg";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div class="footer">
        <div class="logo">
          <img src={Logo} alt="" />
        </div>
        <div class="copyright">2023 EPIC WORLD. All Rights Reserved.</div>
        <div class="social-icons">
          <a href="#" title="Facebook">
            <CiFacebook />
          </a>
          <a href="#" title="Instagram">
            <FaInstagram />
          </a>
          <a href="#" title="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
