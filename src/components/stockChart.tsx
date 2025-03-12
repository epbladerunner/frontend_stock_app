import React, { useState,useEffect } from 'react';
import {FetchSymbolServices, getMarketData} from '../api/Services'
 


interface MarketData{
    dailyBar: {
      close: number,
      high: number ,
      low: number ,
      numberoftrades: number,
      openPrice: number ,
      Timestramp: string ,
      Volume: number,
      VolumeWeighted: number,
    },
    latestQuote: {
      AskPrice: number,
      AskSize: number,
      AskExchange:string,
      BidPrice: number,
      BidSize: number,
      BidExchange: string,
      Conditions:conditions[],
      TimeStamp: string,
      Tape: string,
    },
    latestTrade: {
      Conditions: conditions[],
      Trade_id: number,
      Price: number,
      Size: number,
      Timestamp: string,
      Exchange: string,
      Tape: string,
    },
    minuteBar: {
      ClosePrice: number,
      HighPrice: number,
      LowPrice: number,
      NumberOfTrades: number,
      OpenPrice: number,
      Timestamp: string,
      Volume: number,
      VolumeWeightedAveragePrice: number,
    },
    prevDailyBar: {
      ClosePrice: number,
      HighPrice: number,
      LowPrice: number,
      NumberOfTrades: number,
      OpenPrice: number,
      TimeStamp: string,
      Volume: number,
      VolumeWeightedAveragePrice: number,
    },
    symbol: string,
  }
  interface conditions{
    condition: string,
  }
const StockChart: React.FC = () => {

    const [stockData, setStockData] = useState<MarketData | null>();
    const [symbol, setSymbol] = useState<string| null >();

    const  DataTest = async() => {

        const marketData:MarketData = await getMarketData();
       
        setStockData(marketData);
        setSymbol(marketData.symbol)
    
    
     console.log('fetchedSymbol', marketData);
        }



    return (
        <div className="stock-chart-watchlist">
            <div className="watchlist">
                <button onClick={() => DataTest()}>Fetch Symbol</button>
            </div>
            <div className="stock-chart">
                <h2>Selected Symbol: {symbol ? symbol : 'No symbol selected'}</h2> 
                {stockData ? (
                    <div>
                        <p>Stock Info: {JSON.stringify(stockData, null, 2)}</p>
                      
                    </div>
                ) : (
                    <p>Loading stock data...</p>
                )}

                
            </div>
        </div>
    );
};

export default StockChart;