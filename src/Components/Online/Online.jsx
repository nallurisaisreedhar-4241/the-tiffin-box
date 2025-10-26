import React from "react";
import "./online.css";
import delivery from '../assets/delivery.png'

const Online = () => {
  return (
    <section className="online-sec">
      <div className="online-wrap">
        <div className="copy">
          <p className="kicker">Online Order</p>
          <h2 className="title">
            Fresh South Indian flavors delivered!
          </h2>

          <p className="desc">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order
            online for a quick and easy delivery straight to your doorstep. Our
            dishes are prepared fresh and delivered fast, ensuring a delicious
            experience every time.
          </p>

          <button className="cta">
            Order Online <span className="chev">›</span>
          </button>
        </div>

        <div className="art">
          {/* Outline vector: single-path line drawing */}
          <svg
            className="scooter"
            viewBox="0 0 800 420"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              id="line"
              d="M80 360 C140 390,220 395,300 360
                 C330 345,345 330,360 300
                 C370 280,380 260,400 250
                 C420 240,450 240,470 250
                 C500 265,510 280,520 300
                 L560 300
                 C600 300,640 300,660 320
                 C680 340,690 360,700 360
                 M500 300 C470 280,450 250,450 220
                 C450 195,470 170,500 170
                 C530 170,550 195,550 220
                 C550 245,540 270,520 285
                 M525 210 L545 210
                 M505 242 L535 242
                 M600 265 L600 220
                 C600 200,630 195,660 210
                 C690 225,710 245,710 260
                 L710 300
                 M250 340 C240 320,230 290,230 260
                 C230 230,250 210,280 210
                 C300 210,315 225,320 240
                 M260 355 C260 330,280 310,305 310
                 C330 310,350 330,350 355
                 C350 380,330 400,305 400
                 C280 400,260 380,260 355
                 M630 355 C630 330,650 310,675 310
                 C700 310,720 330,720 355
                 C720 380,700 400,675 400
                 C650 400,630 380,630 355
                 M40 360 C140 380,240 405,340 408
                 C470 412,560 412,640 400
                 C710 390,760 380,800 368"
              fill="none"
            />
          </svg>

          {/* Food bowl badge */}
          <figure className="badge">
            <img src={delivery} alt="Bowl" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Online;
