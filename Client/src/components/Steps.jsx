import React from 'react';
import { assets } from '../assets/assets';
import './Steps.css';

const Steps = () => {
  const testimonials = [
    {
      text: "This is a demo text, will replace it later.",
      name: "Upload image",
      role: "",
      img: assets.upload_icon
    },
    {
      text: "This is a demo text, will replace it later.",
      name: "Download image",
      role: "",
      img: assets.download_icon
    },
    {
      text: "This is a demo text, will replace it later.",
      name: "Get result",
      role: "",
      img: assets.remove_bg_icon // <-- make sure you have this in your assets
    }
  ];

  return (
    <div className="steps-container">
      <h1>Steps to remove background<br/>image in seconds</h1>

      <section className="testimonials">
        <h2></h2>

        <div className="testimonial-cards">
          {testimonials.map((t, i) => (
            <div className="card" key={i}>
              <p>{t.text}</p>
              <div className="user">
                <img src={t.img} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Steps;
