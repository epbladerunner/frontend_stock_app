import React, { useState } from 'react';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button onClick={toggleMenu} className="menu-toggle">
            ☰
            </button>
            {isOpen && (
                <nav className="menu-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Stocks</a></li>
                        <li><a href="/">Crypto</a></li>
                        <li><a href="/">News</a></li>
                        <li><a href="/">Community</a></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu; 
