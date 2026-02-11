import React from 'react';
import { assets } from '../assets/assets';
import './Upload.css';

const Upload = () => {
  return (
    <div className="upload-container">
      {/* Heading */}
      <h1>See the magic. Try now</h1>

      {/* Hidden file input */}
      <input type="file" id="upload2" className="upload-input" />

      {/* Label styled as button */}
      <label htmlFor="upload2" className="upload-btn">
        <img src={assets.upload_btn_icon} alt="upload icon" />
        <span>Upload your image</span>
      </label>
    </div>
  );
};

export default Upload;
