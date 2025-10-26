import React from 'react'
import '../About/About.css'
import aboutimage from '../assets/aboutimage.png'

const About = () => {
  return (
    <section className="about">
      <div className="about-wrap container">
        <div className="about-image">
          <img src={aboutimage} alt="Team at The Tiffin Box" />
        </div>

        <div className="about-panel">
          <div className="about-body">
            <p className="about-kicker">About Us</p>

            <h2 className="about-title">
              EXPERIENCE<br />
              AUTHENTIC<br />
              SOUTH INDIAN<br />
              FLAVORS AT THE<br />
              TIFFIN BOX
            </h2>

            <button className="about-cta" type="button">
              Know More
              <span className="chev" aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
