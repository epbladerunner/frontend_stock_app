import react from "react";
import StockChartWithWatchlist from './stockChart';
import CommunityChat from './chat';
import BusinessInfo from './businessInfo';
import NewsSection from './newsSection';
import LandingPage from './landing_page';

export function IntermedPage(){

    return (
        <div className="sideBar">
          <LandingPage />
          
          <main>
            <StockChartWithWatchlist />
            <CommunityChat />
            <BusinessInfo />
            <NewsSection />
          </main>
        </div>
      
      );
}

export default IntermedPage;