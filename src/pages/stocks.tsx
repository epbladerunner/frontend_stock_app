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

  // Destructure your Alpaca provider data
  const { lastJsonMessage, readyState, isAuthed, tickers, setTickers } = useAlpaca();

  // Set tickers only once when `hasInitialized` is false
  useEffect(() => {
    if (!hasInitialized) {
      setTickers(["SPY"]);
      setHasInitialized(true);
      console.log("useEffect triggerd,ticker is",tickers);
    }
  }, [hasInitialized, setTickers]);

  // Use the useQuery hook to fetch data only once
  const { data, error, isLoading } = useQuery(
    "alpachaQuery",  // Unique key for the query
    () => {
      console.log("useQuery triggered with this msg", lastJsonMessage);
      // This is your custom hook which will now only run once
      return lastJsonMessage;
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

  // Handling loading and error states for useQuery
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <h2>Stocks</h2>
      <p>Stock Info: {JSON.stringify(lastJsonMessage, null, 2)}</p>
      <p>Status: {readyState === 1 ? "Ready" : "Not ready"}</p>
      <p>Authentication: {isAuthed ? "Authenticated" : "Not authenticated"}</p>
    </div>
  );
};

export default Stocks;
