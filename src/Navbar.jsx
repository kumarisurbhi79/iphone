import React from 'react';
import './Navbar.css';
import applelogo from './logo.png'
import video from './video.mp4'
import design from './girl.avif'
import chip from './nasta.avif'
import camera from './hart.jpg'

const Navbar = () => {
  const menuItems = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={applelogo} alt="Apple Logo"/>
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="icons">
        <span>🔍</span>
        <span>👜</span>
      </div>
    </nav>
    <div className="nav-buttons">
     <button>Overview</button>
     <button>Switch to iPhone</button>
     <button>Tech Specs</button>
    </div>
    <div className='phone'>
   <h1>iphone 17 Pro</h1>
   <p>Titanium. So strong. So light. So Pro.</p>
    </div>
    <div className='but'>
      <button id="blue">Buy</button>
      <button id="black">Learn more</button>
    </div>
    <div className='video-section'>
      <video
      id='video'
      src={video}
     autoPlay
      loop
      muted
     playsInline
     className='hero-video'
     />
    </div>
    <div className='par'>
      <p>Four stunning finishes.</p>
    </div>
    <div className='color-options'>
        <div className='color'>
          <div className='circle' style={{ backgroundColor: '#D8D3C5' }}></div>
          <p>Natural Titanium</p>
        </div>
        <div className='color'>
          <div className='circle' style={{ backgroundColor: '#9FB5C5' }}></div>
          <p>Blue Titanium</p>
        </div>
        <div className='color'>
          <div className='circle' style={{ backgroundColor: '#E5E4E2' }}></div>
          <p>White Titanium</p>
        </div>
        <div className='color'>
          <div className='circle' style={{ backgroundColor: '#2F2F2F' }}></div>
          <p>Black Titanium</p>
        </div>
      </div>
      <div className='imgs'>
        <div className='card'>
          <img src={design} alt="Titanium design"/>
          <h1><strong>Titanium design</strong></h1>
          <p><strong>Aerospace‑grade titanium for an incredibly light Pro</strong></p>
        </div>
        <div className='card'>
          <img src={chip} alt="A17 Pro girl"/>
          <h1><strong>A17 Pro girl</strong></h1>
            <p><strong>Next‑level GPU for immersive gaming and pro workflows.</strong></p>
        </div>
        <div className='card'>
          <img src={camera} alt="Pro camera system"/>
          <h1><strong>Pro camera system</strong></h1>
          <p><strong>7 pro lenses in your pocket. Capture incredible detail.</strong></p>
        </div>
      </div>
      <div className='chip-section'>
        <div className='chip-text'>
          <h2>A17 Pro. Game-changing chip.<br />Groundbreaking performance.</h2>
          <p>
             Custom-designed GPU delivers our biggest graphics redesign ever.
      Enjoy console-style gaming and next-level efficiency.
      </p>
      <div className='chip-buttons'>
        <button className='blue-btn'>Learn more</button>
        <button className='black-btn'>View tech specs</button>
      </div>
        </div>
        <div className='chip-image'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbHc8CZ4-SMZLvsS0PRRWA8LORC4W2f_jIA&s" alt="A17 pro chip"/>
        </div>
      </div>

<div className="spec-boxes">
      
      <div className="spec-box">
        <p className="title">Display</p>
        <h2>6.1" / 6.7"</h2>
      </div>

      <div className="spec-box">
        <p className="title">Chip</p>
        <h2>A17 Pro</h2>
      </div>

      <div className="spec-box">
        <p className="title">Camera</p>
        <h2>48MP main</h2>
      </div>

      <div className="spec-box">
        <p className="title">USB-C</p>
        <h2>USB 3 speeds</h2>
      </div>

    </div>




       <footer className="footer">

      <p className="footer-note">
        This is an educational, UI-only replica for interview/assignment purposes.
        Replace imagery and typography to match the official Apple iPhone page for pixel-perfect parity.
      </p>

      <div className="footer-columns">

        <div className="column">
          <h4>Column 1</h4>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>

        <div className="column">
          <h4>Column 2</h4>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>

        <div className="column">
          <h4>Column 3</h4>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>

        <div className="column">
          <h4>Column 4</h4>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>

        <div className="column">
          <h4>Column 5</h4>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Not Apple Inc.</p>

        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>

    </footer>
    </>

  );
};

export default Navbar;

