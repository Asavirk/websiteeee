import React from 'react'
import { assets } from '../assets/assets'
import './Buycredit.css'

const plans = [
  {
    id: "Basic",
    desc: "Perfect for beginners",
    price: 5,
    credits: 50
  },
  {
    id: "Advance",
    desc: "Best for professionals",
    price: 12,
    credits: 150
  },
  {
    id: "Business",
    desc: "For teams & companies",
    price: 25,
    credits: 500
  }
]

const Buycredit = () => {
  return (
    <div className="buy-container">


      {/* Top badge */}
      <div className="plans-badge">Our Plans</div>

      <h1>Choose the plan that’s right for you</h1>

      <div className="plans-wrapper">
        {plans.map((item, index) => (
          <div className="plan-card" key={index}>
            <h2>{item.id}</h2>
            <p className="desc">{item.desc}</p>

            <p className="price">
                <img src={assets.logo_icon}alt="" />
              <span>${item.price}</span> / {item.credits} credits
            </p>

            <button className="purchase-btn">Purchase</button>
          </div>
        ))}
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

export default Buycredit
