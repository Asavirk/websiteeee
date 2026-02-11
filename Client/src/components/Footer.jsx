import React from 'react';
import { assets } from '../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Left: Logo */}
        <div className="footer-left">
          <img src={assets.logo} alt="Bg Removal Logo" />
        </div>

        {/* Center: Copyright */}
        <div className="footer-center">
          <p>Copyright © GreatStack.dev | All rights reserved.</p>
        </div>

        {/* Right: Social Icons */}
        <div className="footer-right">
          <img src={assets.twitter_icon} alt="Twitter" />
          <img src={assets.google_plus_icon} alt="Google" />
          <img src={assets.facebook_icon} alt="Facebook" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
