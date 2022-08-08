import React,{useState,useEffect} from 'react';  
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [coins,setCoins] = useState([]);
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data)
     
    }).catch(error =>{
      alert('Hold On, You made a mistake !!')
    })
  })

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' placeholder='Search' classNane='coin-input'></input>
        </form>
      </div>
    </div>
  );
}

export default App;
