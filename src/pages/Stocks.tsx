import react from 'react';
import {useState} from 'react'

const  StockPage: React.FC = () =>{

    const [selectedStock, setSelectedStock] = useState('');
 
    const handleStockClick = (stock:string)=>{
        setSelectedStock(stock)}

        return(
            <div>
            <button onClick = {()=>handleStockClick('')}>Stock</button>
     </div>   )
    

}

export default StockPage;