import React from 'react'
import { assets } from '../assets/assets'
import './Result.css'

const Result = () => {
  return (
    <div>
          <div className="navbar">
            <img className="logo" src={assets.logo} alt="logo" />
            <button>
              Get Started
              <img src={assets.arrow_icon} alt="arrow" />
            </button>

          </div>









<div className="result-section">
  {/* Original */}
  <div className="image-box">
    <p className="label">Original</p>
    <img src={assets.image_w_bg} alt="Original" />
  </div>

  {/* Background Removed */}
  <div className="image-box white">
    <p className="label">Background Removed</p>
    <img src={assets.image_wo_bg} alt="Removed" />

    <div className="btn-group">
      <button className="btn secondary">Try another image</button>
      <a
        href={assets.image_wo_bg}
        download
        className="btn primary"
      >
        Download image
      </a>
    </div>
  </div>
</div>
















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
    </div>
  )
}

export default Result
