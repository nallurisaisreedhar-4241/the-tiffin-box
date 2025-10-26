import React from "react";
import '../Dinein/Dinein.css';
import booktabel from "../assets/booktabel.png";

const Dinein = () => {
  return (
    <section className="dinein-sec">
      <div className="dinein-wrap">
        <figure className="dinein-media">
          <img src={booktabel} alt="Book a Table" className="dinein-image" />
        </figure>

        <div className="dinein-copy">
          <p className="kicker">Book Table</p>
          <h2 className="title">
            Planning a meal at the Tiffin Box?
          </h2>
          <p className="desc">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order
            online for a quick and easy delivery straight to your doorstep. Our
            dishes are prepared fresh and delivered fast, ensuring a delicious
            experience every time.
          </p>

          <button className="cta">
            Book Table <span className="chev">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dinein;
