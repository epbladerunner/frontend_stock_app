import axios from 'axios';




export const FetchSymbolServices = async (): Promise<string> => {
    const response: any = await axios.get('http://localhost:3000/api/symbol/AAPL');
  
    // Just returning the symbol from the response
    const getSymbol = response.data.symbol;
  
    console.log('Fetched Symbol:', getSymbol);
  
    return (getSymbol);
  };



