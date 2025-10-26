import React from "react";
import "./Specialties.css";
import tiffinbox from "../assets/tiffinbox.png";

const Specialties = () => {
  return (
    <section className="spec-sec">
      <div className="spec-head">
        <p className="kicker">Why Tiffin Box</p>
        <h2 className="title">Our Specialties</h2>
      </div>

      <div className="spec-layout">
        {/* Left column (3 points) */}
        <ul className="spec-col left">
          <li>
            <h3>Authentic South Indian Cuisine</h3>
            <p>Our dishes are prepared using traditional recipes to bring you the true flavors of South India.</p>
          </li>
          <li>
            <h3>Expert Chefs</h3>
            <p>Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.</p>
          </li>
          <li>
            <h3>Fresh, Quality Ingredients</h3>
            <p>We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.</p>
          </li>
        </ul>

        {/* Center circle stage */}
        <div className="spec-stage">
          <div className="spec-disc">
            {/* center badge */}
            <button className="spec-badge">
              <span className="dot" /> Our Specialties
            </button>
          </div>

          {/* Framed image box (exact size/coords) */}
          <div className="spec-box">
            <img src={tiffinbox} alt="Tiffin Box" className="spec-image" />
          </div>
        </div>

        {/* Right column (3 points) */}
        <ul className="spec-col right">
          <li>
            <h3>Comfortable Dining Experience</h3>
            <p>Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.</p>
          </li>
          <li>
            <h3>Health‑Conscious Options</h3>
            <p>From vegetarian to gluten‑free dishes, we provide healthy options without compromising on flavor.</p>
          </li>
          <li>
            <h3>Seamless Online Ordering & Delivery</h3>
            <p>Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Specialties;
