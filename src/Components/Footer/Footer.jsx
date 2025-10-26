// src/components/Footer.jsx
import React from 'react'
import '../Footer/Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img src={logo} alt="The Tiffin Box Logo" className="footer-logo" />

        <div className="footer-head">
          <h2 className="footer-title">SUBSCRIBE TO</h2>
          <h3 className="footer-subtitle">OUR NEWSLETTER</h3>
        </div>

        <form className="footer-form" onSubmit={(e)=>e.preventDefault()} aria-label="Newsletter subscription">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            placeholder="EMAIL ADDRESS"
            required
            className="footer-input"
            aria-required="true"
          />
          <button type="submit" className="footer-btn">
            Subscribe
            <span className="chev" aria-hidden="true" />
          </button>
        </form>

        <address className="footer-contact">
          <p className="contact-title">CONTACT U</p>
          <p>0151 245 1500</p>
          <p>INFO@TIFFINBOX.CO.UK</p>
          <p>ALLERTON RD, LIVERPOOL L25 7RE</p>
        </address>
      </div>

      <nav className="footer-bottom" aria-label="Footer">
        <a href="#menu">MENU</a>
        <span className="dot" aria-hidden="true" />
        <a href="#order">ORDER ONLINE</a>
        <span className="dot" aria-hidden="true" />
        <a href="#book">BOOK A TABLE</a>
        <span className="dot" aria-hidden="true" />
        <a href="#about">ABOUT US</a>
        <span className="dot" aria-hidden="true" />
        <a href="#contact">CONTACT U</a>
      </nav>
    </footer>
  )
}

export default Footer
