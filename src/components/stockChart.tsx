import React, { useState } from 'react';
import {FetchSymbolServices} from '../api/Services'
 
const StockChart: React.FC = () => {
    const [selectedStock, setSelectedStock] = useState('APPL'); 

    const handleStockClick = (stock: string) => {
        setSelectedStock(stock); 
    };

    const  SymbolTest = () => {

const Symbol = FetchSymbolServices()
 console.log('symbol', Symbol);
    }

    return (
        <div className="stock-chart-watchlist">
            <div className="watchlist">
                <button onClick={() => handleStockClick('AAPL')}>AAPL</button>
                <button onClick={() => handleStockClick('TSLA')}>TSLA</button>
                <button onClick={() => handleStockClick('BTC-USD')}>BTC-USD</button>

                <button onClick={() => SymbolTest()}>push to do something</button>
            </div>
            <div className="stock-chart">
                <h2> Stock Prices: {selectedStock}</h2>
            <div>Chart for {selectedStock} goes here</div>    
            </div>
        </div>
    );
};

export default StockChart;