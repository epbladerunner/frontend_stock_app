import React from 'react';
import HamburgerMenu from './components/hamburgerMenu';
import StockChartWithWatchlist from './components/stockChart';
import CommunityChat from './components/chat';
import BusinessInfo from './components/businessInfo';
import NewsSection from './components/newsSection';
import LandingPage from './components/landing_page';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <LandingPage />
      <HamburgerMenu />
      <main>
        <StockChartWithWatchlist />
        <CommunityChat />
        <BusinessInfo />
        <NewsSection />
      </main>
    </div>
  );
};

export default App;
