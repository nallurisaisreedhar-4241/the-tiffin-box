import React from 'react';
import './App.css';
import logo from '../src/Components/assets/logo.png';
import homefood from '../src/Components/assets/homefood.png';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { RiFacebookCircleLine } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { BiLogoTwitter } from 'react-icons/bi';

const Home = () => {
  return (
    <div className="home">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="menu">
          <MenuRoundedIcon />
        </div>
        <button className="btn">View Menu</button>
      </nav>
      
      {/* Hero Section */}
      <div className="hero">
        
        {/* Left Content */}
        <div className="hero-left">
          <div className="logo">
            <img src={logo} alt="TiffinBox Logo" />
          </div>
          <div className="content">
            <h1>
              Authentic<br />
              South Indian Cuisine
            </h1>
            <button className="btn2">Order Now</button>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="imagesection">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="homeimage">
                <img src={homefood} alt="dish" />
              </div>
            </div>
          </div>

          {/* Social Media Rail */}
          <div className="social-rail" aria-label="social links">
            <a
              className="social-btn fb"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookCircleLine />
            </a>
            <a
              className="social-btn ig"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </a>
            <a
              className="social-btn tw"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoTwitter />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
