import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import './Bgslider.css';

const ImageSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle mouse/touch movement
  const handleMove = (clientX) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos)); // clamp between 0 and 100
    setSliderPosition(pos);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="bgslider-container">
      <h1>Before & After Slider</h1>
      <div
        className="image-wrapper"
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <img
          src={assets.image_w_bg}
          alt="With Background"
          className="image"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />
        <img
          src={assets.image_wo_bg}
          alt="Without Background"
          className="image"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />
        <div className="slider-handle" style={{ left: `${sliderPosition}%` }} />
      </div>
    </div>
  );
};

export default ImageSlider;

