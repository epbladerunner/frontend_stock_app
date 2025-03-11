import React, { useState,useEffect } from 'react';
import {FetchSymbolServices} from '../api/Services'
 
const StockChart: React.FC = () => {

    const [stockData, setStockData] = useState<any>(null);
    const [symbol, setSymbol] = useState<string | null>(null);

    const  SymbolTest = async() => {
    const fetchedSymbol = await FetchSymbolServices();
    setSymbol(fetchedSymbol);
    setStockData(fetchedSymbol)
    console.log('symbol', Symbol);
    }



    return (
        <div className="stock-chart-watchlist">
            <div className="watchlist">
                <button onClick={() => SymbolTest()}>Fetch Symbol</button>
            </div>
            <div className="stock-chart">
                <h2>Selected Symbol: {symbol ? symbol : 'No symbol selected'}</h2> {/* Display symbol */}
                {stockData ? (
                    <div>
                        <p>Stock Info: {JSON.stringify(stockData, null, 2)}</p>
                        <div>Chart for {symbol} goes here</div>
                    </div>
                ) : (
                    <p>Loading stock data...</p>
                )}
            </div>
        </div>
    );
};

export default StockChart;