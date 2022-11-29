import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [currencyValue, setcurrencyValue] = useState("")


  const getApiCurrencyValue = (()  => {
    axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then
     ((respose) => { 
       setcurrencyValue(respose.data)
     })
     .catch(()=>{
      setcurrencyValue(respose.data)
     })
     console.log(currencyValue)
 })

  useEffect(() => {
    getApiCurrencyValue()
  }, [])

  if(currencyValue==""){
    return(
      <h1>carregando moedas</h1>
    )
  }else{
    return (
      <div className="App">
        <h3>{currencyValue["USDBRL"] ["code"]}</h3>
        <h3>{currencyValue["USDBRL"] ["high"]}</h3>
      </div>
    )
  }


}

export default App
