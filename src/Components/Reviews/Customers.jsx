
import React from 'react'
import '../Customers/Customers.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import map from '../assets/map.png'
import community1 from '../assets/community1.png'
import community2 from '../assets/community2.png'
import community3 from '../assets/community3.png'
import community4 from '../assets/community4.png'



const DATA = [
  {
    id: 1,
    name: 'Anna Mathew',
    time: 'one day ago',
    avatar: img1,
    text:
      'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back.',
    rating: 5
  },
  {
    id: 2,
    name: 'Gerrin Tom',
    time: 'one day ago',
    avatar: img2,
    text:
      'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming.',
    rating: 5
  },
  {
    id: 3,
    name: 'Mery Elza',
    time: 'one day ago',
    avatar: img3,
    text:
      'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We booked private dining for our team.',
    rating: 5
  },
  {
    id: 4,
    name: 'Mery Elza',
    time: 'one day ago',
    avatar: img4,
    text:
      'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We booked private dining for our family.',
    rating: 5
  }
]

const StarRow = ({ rating = 5 }) => (
  <div className="stars" aria-label={`${rating} out of 5`}>
    {'★★★★★'.slice(0, rating)}
  </div>
)

const Customers = () => {
  return (
    <section className="cust-wrap">
      {/* Testimonials */}
      <section className="cust-section">
        <div className="cust-head">
          <span className="cust-kicker">TESTIMONIAL</span>
          <h2 className="cust-title">WHAT OUR<br/>CUSTOMERS SAYS</h2>
        </div>

        <div className="cust-grid">
          {DATA.map(item => (
            <article className="cust-card" key={item.id}>
              <StarRow rating={item.rating} />
              <p className="cust-text">{item.text}</p>
              <div className="cust-divider" />
              <div className="cust-meta">
                <img src={item.avatar} alt={item.name} className="cust-avatar" />
                <div className="cust-meta-text">
                  <p className="cust-name">{item.name}</p>
                  <p className="cust-time">{item.time}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Locations appended BELOW customers */}
      <section className="loc-section in-customers">
        <div className="loc-inner">
          <div className="loc-copy">
            <span className="loc-kicker">OUR LOCATIONS</span>
            <h2 className="loc-title">
              FIND US<br/>
              AT THESE<br/>
              CONVENIENT<br/>
              LOCATIONS
            </h2>

            <button className="loc-btn" type="button" aria-label="Open our store locations">
              Our Store
              <span className="loc-chevron" aria-hidden="true" />
            </button>
          </div>

          <div className="loc-map-wrap">
            <div className="loc-map-ring" />
            <img src={map} alt="Store locations on the map" className="loc-map" />
            <span className="loc-pin" style={{ left: '64%', top: '46%' }} />
            <span className="loc-pin" style={{ left: '53%', top: '70%' }} />
            <div className="loc-tip" style={{ left: '66%', top: '38%' }}>
              <p className="loc-tip-name">TIFFIN BOX</p>
              <p className="loc-tip-addr">ALLERTON RD.,<br/>LIVERPOOL L25 7RE</p>
              <button className="loc-tip-btn" type="button">GET DIRECTION</button>
            </div>
          </div>
        </div>
      </section>
       {/* Community gallery */}
      <section className="comm-section">
        <div className="comm-head">
          <span className="comm-kicker">INSTAGRAM</span>
          <div className="comm-frame">
            <h2 className="comm-title">JOIN OUR<br/>COMMUNITY</h2>
          </div>
        </div>

        <div className="comm-grid">
          {[community1, community2, community3, community4].map((src, i) => (
            <figure className="comm-item" key={i}>
              <img src={src} alt={`Community ${i + 1}`} />
            </figure>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Customers
