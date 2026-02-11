import React from 'react';
import { assets } from '../assets/assets';
import './Testtimonial.css';

const Testimonials = () => {
  const testimonialData = [
    {
      text: "This background remover saved me so much time. The results are clean and professional. Highly recommended!",
      name: "Kayli Donald",
      role: "Web Developer",
      img: assets.image_w_bg
    },
    {
      text: "Amazing quality and very easy to use. I use it daily for my design projects and it never disappoints.",
      name: "Juliya Jackson",
      role: "UI Designer",
      img: assets.image_wo_bg
    },
  ];

  return (
    <div className="testimonial-container">
      <h2>Customer Testimonials</h2>

      <div className="testimonial-cards">
        {testimonialData.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p>{t.text}</p>
            <div className="user">
              <img src={t.img} alt={t.name} />
              <div className="user-info">
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
