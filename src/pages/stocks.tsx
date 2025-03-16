// import react, { useEffect, useState } from "react"
// import { useSubscription } from "../hooks/useSubscription"
// import { AlpacaProvider, useAlpaca } from "../providers/AlpachaProvider"

// const Stocks:React.FC = () =>{
 
//   console.log("stocks refresh")
//   useEffect(() => {
//     console.log('Stocks component re-rendered');
//   });

// const[hook, setHook] = useState(false);
// // const [someTickers, setSomeTickers] = useState(['']);

// const [click,setClick] = useState<boolean>(false);


//     const{lastJsonMessage, readyState, isAuthed, tickers, setTickers} = useAlpaca();

//     console.log("jason from stock page",lastJsonMessage);
// setTickers(["NFLXS"]);

//     return(
//         <div>


//           <div className="">
//                 <h2></h2> 
                
//                     <div>
//                         {/* <p>Stock Info: {JSON.stringify(lastJsonMessage, null, 2)}</p> */}
                      
                  
      
//                     <p></p>
               

//                   </div>
//             </div>
           
//         </div>
//       );

// }
// export default Stocks;

import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";  // Importing useQuery from react-query
import { useAlpaca } from "../providers/AlpachaProvider"; // Assuming useAlpaca is your custom hook

const Stocks: React.FC = () => {
  console.log("stocks refresh");

  // Track whether the query has already been triggered
  const [hasInitialized, setHasInitialized] = useState(false);
  const [input, setInput] = useState('');
 
  const { lastJsonMessage, readyState, isAuthed, tickers, setTickers } = useAlpaca();

  // Set tickers only once when `hasInitialized` is false
  useEffect(() => {
    if (!hasInitialized) {
      setTickers([]);
      setHasInitialized(true);
      console.log("useEffect triggerd,ticker is",tickers);
    }
  }, [hasInitialized, setTickers]);

  // Use the useQuery hook to fetch data only once
  const { data, error, isLoading } = useQuery(
    "alpachaQuery",  // Unique key for the query
    () => {
      console.log("useQuery triggered with this msg", lastJsonMessage);
    
      return isAuthed;
    },
    {
      
      enabled: !hasInitialized,  // Prevent the query from running more than once
      refetchOnWindowFocus: false, // Prevent refetching when window refocuses
      staleTime: Infinity, // Keep the data fresh indefinitely
    }
  );

  useEffect(() => {
    console.log("Received JSON message:", lastJsonMessage);
  }, [lastJsonMessage]);

 
  if (isLoading){
     return <div>Loading...</div>;
    }
  if (error){
    return <div>Error occurred</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Split the input by spaces or commas (you can customize the split logic)
    const tickersArray = input.split(/\s*,\s*/); // Splits by comma (handles spaces too)
    const cleanedTickers = tickersArray.map(ticker => ticker.toUpperCase());
    const uniqueTickers = [...new Set(cleanedTickers)];
console.log("tickers",tickers,"setTickers",setTickers,"uniqueTickers",uniqueTickers)
    setTickers(uniqueTickers);
 
  };



  return (
    <div>
      <h2>Stocks</h2>
      <p>Stock Info: {JSON.stringify(lastJsonMessage, null, 2)}</p>
      <p>Status: {readyState === 1 ? "Ready" : "Not ready"}</p>
      <p>Authentication: {isAuthed ? "Authenticated" : "Not authenticated"}</p>


<div>
<form onSubmit={handleSubmit}>
  <label>
    Enter Ticker(s):
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      placeholder="Enter tickers (e.g., BTC, ETH)"
    />
  </label>
  <button type="submit">Submit</button>
</form>

<div>
  <h3>Tickers Array:</h3>
  <pre>{JSON.stringify(tickers, null, 2)}</pre>
</div>
</div>
</div>

  );
};

export default Stocks;
