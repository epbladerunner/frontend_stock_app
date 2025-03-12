import react, { useEffect, useState } from "react"
import { useSubscription } from "../hooks/useSubscription"
import { useInitSubscription } from "../hooks/initSubscribe";

const Stocks:React.FC = () =>{

    // useInitSubscription();


const [someTickers, setSomeTickers] = useState(['']);
const{lastJsonMessage, readyState} = useSubscription(someTickers);
const [click,setClick] = useState<boolean>(false);


const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTickers = event.target.value.split(',').map(ticker => ticker.trim());
    setSomeTickers(newTickers);
    console.log(newTickers);
  };

 




    return(
        <div>


          <div className="">
                <h2>Selected Symbol: {someTickers ? someTickers : 'No symbol selected'}</h2> 
                {lastJsonMessage ? (
                    <div>
                        <p>Stock Info: {JSON.stringify(lastJsonMessage, null, 2)}</p>
                      
                    </div>
                ) : (
                    <p>Loading stock data...</p>
                )}

                
            </div>
           
        </div>
      );

}
export default Stocks;