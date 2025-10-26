import React from 'react'
import '../Menu/Menu.css'
import menu from '../assets/menu.png'

const Menu = () => {
  return (
    <section className="menu-sec">
      <div className="menu-wrap">
        <p className="menu-kicker">Featured Menu</p>
        <h3 className="menu-head">
          DISCOVER OUR MOST<br />
          POPULAR DISHES
        </h3>

        <div className="menu-stage">
          {/* Background vector outline behind center plate */}
          <svg
            className="menu-outline"
            viewBox="0 0 620 769"
            aria-hidden="true"
          >
            {/* suitcase handle + stacked text blocks as outlines */}
            <rect x="96" y="16" width="428" height="72" rx="36" fill="none" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="8"/>
            <rect x="56" y="96" width="508" height="160" rx="12" fill="none" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="8"/>
            <rect x="56" y="272" width="508" height="180" rx="12" fill="none" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="8"/>
            <rect x="56" y="468" width="508" height="180" rx="12" fill="none" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="8"/>
            {/* “the tiffin box.” as blocky paths substitute */}
            <text x="96" y="196" fill="none" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="10" fontFamily="Plus Jakarta Sans, system-ui" fontWeight="800" fontSize="120">the</text>
            <text x="96" y="372" fill="none" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="10" fontFamily="Plus Jakarta Sans, system-ui" fontWeight="800" fontSize="120">tiffin</text>
            <text x="96" y="568" fill="none" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="10" fontFamily="Plus Jakarta Sans, system-ui" fontWeight="800" fontSize="120">box.</text>
          </svg>

          {/* Left card */}
          <figure className="dish dish-left">
            <div className="plate">
              <img src={menu} alt="Chicken Chettinad" /> <figcaption>
              <span>CHICKEN CHETTINAD</span>
              <em>₹ 9.99</em>
            </figcaption>
            </div>
           
          </figure>

          {/* Center card */}
          <figure className="dish dish-center">
            <div className="plate">
              <img src={menu} alt="Chicken Chettinad" /> <figcaption>
              <span>CHICKEN CHETTINAD</span>
              <em>₹ 9.99</em>
            </figcaption>
            </div>
           
          </figure>

          {/* Right card */}
          <figure className="dish dish-right">
            <div className="plate">
              <img src={menu} alt="Chicken Chettinad" /> <figcaption>
              <span>CHICKEN CHETTINAD</span>
              <em>₹ 9.99</em>
            </figcaption>
            </div>
           
          </figure>
        </div>

        <button className="menu-cta" type="button">
          Explore Full Menu
          <span className="chev">›</span>
        </button>
      </div>
    </section>
  )
}

export default Menu
