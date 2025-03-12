import axios from 'axios';




export const FetchSymbolServices = async (): Promise<string> => {
    const response: any = await axios.get('http://localhost:3000/api/symbol/AAPL');
  
    // Just returning the symbol from the response
    const getSymbol = response.data.symbol;
  
    console.log('Fetched Symbol:', getSymbol);
  
    return (getSymbol);
  };
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
  export const getMarketData = async (): Promise<MarketData>  => {
    console.log("you made it here");
    const response:any = await axios.get(`http://localhost:3000/api/mapped/TSLA/snapshot`);
    
    const marketData = response.data;
    console.log("response",response.data)

    return marketData;
 
  }



