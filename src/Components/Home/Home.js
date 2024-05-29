import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate developer and an enthusiastic learner.</p>
        </div>
        <div className="home-image">
          <img src="/PortfolioImage.jpg" alt="Portfolio" />
        </div>
      </div>
    </section>
  );
}

export default Home;



