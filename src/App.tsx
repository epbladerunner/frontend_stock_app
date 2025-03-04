import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary routing components
import StockChartWithWatchlist from './components/stockChart';
import CommunityChat from './components/chat';
import BusinessInfo from './components/businessInfo';
import NewsSection from './components/newsSection';
import LandingPage from './components/landing_page';
import NavBar from './common/NavBar';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar /> {/* This will render the navigation bar across all pages */}
      
      <Routes> 
        {/* Define your Routes here */}
        <Route path="/landing_page" element={<LandingPage />} /> {/* Default route */}
        <Route path="/businessInfo" element={<BusinessInfo />} />
        <Route path="/chat" element={<CommunityChat />} />
        <Route path="/newsSection" element={<NewsSection />} />
        <Route path="/stockChart" element={<StockChartWithWatchlist />} />
      </Routes>
    </Router>
  );
};

export default App;

