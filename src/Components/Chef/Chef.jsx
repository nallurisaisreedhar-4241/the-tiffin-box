// src/components/Chef.jsx
import React from 'react'
import './Chef.css'
import chef from '../assets/chef.png'
import spoon from '../assets/spoon.png'
import background from '../assets/background.png'

const Chef = () => {
  return (
    <section className="chef-section">
      <img src={background} alt="" className="chef-bg" aria-hidden="true" />
      <img src={spoon} alt="" className="chef-spoon" />

      <div className="chef-header">
        <span className="chef-kicker">CHEF</span>
        <h2 className="chef-title">OUR BRAND CHEF</h2>
      </div>

      <div className="chef-card no-border">
        {/* left: image with overlaid signature at bottom */}
        <div className="chef-photo-wrap with-sign">
          <img src={chef} alt="Chef portrait" className="chef-photo" />
          
        </div><span className="chef-sign">Chef </span>
          <span className="chef-sign2">Jomon</span>

        {/* right: text */}
        <div className="chef-copy">
          <h3 className="chef-name">CHEF JOMON</h3>
          <p className="chef-role">senior chef at tiffin box</p>

          <p className="chef-text">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order online
            for quick delivery straight to your doorstep. Our dishes are prepared
            fresh and delivered fast. 
          </p>

          <p className="chef-text">
            Explore classics and chef specials crafted with care for homestyle
            taste and restaurant precision, delivered conveniently.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Chef
