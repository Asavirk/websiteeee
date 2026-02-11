import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-text">
        <h1>
          Remove the <br />
          <span>background</span> from <br />images for free.
        </h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          possimus nobis, reiciendis, nisi industry.
        </p>

        <input type="file" id="upload1" hidden />
        <label htmlFor="upload1">
          <img src={assets.upload_btn_icon} alt="upload icon" />
          <h2>Upload your image</h2>
        </label>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image">
        <img
          src={assets.header_img}
          alt="header image"
          className="header-img"
        />
      </div>

    </section>
  )
}

export default Header
