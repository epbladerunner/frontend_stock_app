
import React from 'react';
import './landing_page.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* <nav className="navbar">
        <div className="navbar-brand">StockInfoApp</div>
        <ul className="navbar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login" className="login-btn">Login</a></li>
          <li><a href="#signup" className="signup-btn">Sign Up</a></li>
        </ul>
      </nav> */}

      <header className="hero-section">
        <div className="hero-content">
          <h1>Your Ultimate Stock Information Hub</h1>
          <p>Stay ahead with real-time stock news, insights, and community discussions.</p>
          <a href="#signup" className="cta-btn">Get Started</a>
        </div>
        <div className="hero-image">
        </div>
      </header>

      <section id="features" className="features-section">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Stocks & Crypto</h3>
            <p>Real-time data and analysis for stocks and cryptocurrencies.</p>
          </div>
          <div className="feature-card">
            <h3>Company News</h3>
            <p>Latest news and updates from top companies.</p>
          </div>
          <div className="feature-card">
            <h3>Historical Data</h3>
            <p>Access to historical stock and crypto data.</p>
          </div>
          <div className="feature-card">
            <h3>Congress Tracker</h3>
            <p>Track congressional activities impacting the market.</p>
          </div>
          <div className="feature-card">
            <h3>Buy/Sell/Hold Meter</h3>
            <p>Insights on when to buy, sell, or hold your investments.</p>
          </div>
          <div className="feature-card">
            <h3>Community Forum</h3>
            <p>Engage with a community of investors and traders.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <nav className="footer-nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social-links">
        </div>
        <p>&copy; 2023 StockInfoApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
