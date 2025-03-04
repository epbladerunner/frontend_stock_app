import React, { useState } from 'react';
import {Outlet,Link} from 'react-router-dom'
// import StockChart from './stockChart';
// import CommunityChat from './chat';
// import BusinessInfo from './businessInfo';
// import NewsSection from './newsSection';
// import LandingPage from './landing_page';
// import{Nav} from '../common/Nav'

// import {  Route, Routes} from 'react-router-dom';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            {/* <button onClick={toggleMenu} className="menu-toggle">
            ☰
            </button>
            {isOpen && ( */}
         <div>
            <nav>
                    <ul>
                    <li><Link to="/BussinessInfo">BussinessInfo</Link></li>
                    <li><Link to="/chat">Chat</Link></li> 
                    <li><Link to="/LandingPage">LandingPage</Link></li>
                    <li><Link to="/NewsSection">NewsSection</Link></li>    
                    <li><Link to="/StockChart">StockChart</Link></li>     
                    </ul>
            </nav>
                <Outlet/>
         </div> 
                     
         </div>
    );
};

export default HamburgerMenu; 
