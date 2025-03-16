import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary routing components
import StockChartWithWatchlist from './components/stockChart';
import CommunityChat from './components/chat';
import BusinessInfo from './components/businessInfo';
import NewsSection from './components/newsSection';
import LandingPage from './pages/landing_page';
import NavBar from './common/NavBar';


import Home from './pages/home';
import News from './pages/news';
import Login from './components/login';
import Stocks from './pages/stocks';
import Crypto from './pages/crypto';

import { AlpacaProvider } from './providers/AlpachaProvider';
import './styles/styles.css';
import './styles/widget.css';

const App: React.FC = () => {
  console.log("APP.tsx refresh");
  return (
    <AlpacaProvider>

    <Router>
      <NavBar /> {/* This will render the navigation bar across all pages */}
    
    <div className = "stockwidget">
      <StockChartWithWatchlist/>
      <CommunityChat/>
      <NewsSection/>
      <BusinessInfo/>
  </div>
      <Routes> 
      
      <Route path="/" element={<LandingPage/>} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/stocks" element={<Stocks />} />  
      </Routes>
    </Router>
</AlpacaProvider>

  );
};

export default App;

