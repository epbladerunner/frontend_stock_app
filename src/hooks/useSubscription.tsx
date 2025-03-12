import useWebsocket, {ReadyState} from 'react-use-websocket'

import {useEffect} from 'react'


export const useSubscription =(ticker:string[]) => {
   
 
const url = 'wss://stream.data.alpaca.markets/v2/iex';

const {sendJsonMessage, lastJsonMessage, readyState} = useWebsocket(url, {

    share: false,
    shouldReconnect: ()=>true,
})

const tickers = Array.isArray(ticker) ? ticker : [ticker] ;

useEffect(()=>{
    if (readyState === ReadyState.OPEN){
        sendJsonMessage({
            "action": "subscribe",
           " trades": ["AAPL"]      })
    }
}, [readyState, ticker, sendJsonMessage])

console.log(lastJsonMessage);
    return {lastJsonMessage, readyState}



}




