import React from 'react';
import HamburgerMenu from './components/hamburgerMenu';
import StockChartWithWatchlist from './components/stockChart';
import CommunityChat from './components/chat';
import BusinessInfo from './components/businessInfo';
import NewsSection from './components/newsSection';
import LandingPage from './components/landing_page';
import StockPage from './pages/Stocks'


const App: React.FC = () => {
  return (
    <div className="sideBar">
      <LandingPage />
      <HamburgerMenu />
      <main>
        <StockPage/>
        <StockChartWithWatchlist />
        <CommunityChat />
        <BusinessInfo />
        <NewsSection />
      </main>
    </div>
    // <LandingPage/>
  );
};

export default App;
