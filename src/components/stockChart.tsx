import React, { useState } from 'react';
 
const StockChart: React.FC = () => {
    const [selectedStock, setSelectedStock] = useState('APPL'); 

    const handleStockClick = (stock: string) => {
        setSelectedStock(stock); 
    }; 

    return (
        <div className="stock-chart-watchlist">
            <div className="watchlist">
                <button onClick={() => handleStockClick('AAPL')}>AAPL</button>
                <button onClick={() => handleStockClick('TSLA')}>TSLA</button>
                <button onClick={() => handleStockClick('BTC-USD')}>BTC-USD</button>
            </div>
            <div className="stock-chart">
                <h2> Stock Prices: {selectedStock}</h2>
            <div>Chart for {selectedStock} goes here</div>    
            </div>
        </div>
    );
};

export default StockChart;