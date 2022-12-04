import { useState, useEffect } from 'react'
import axios from 'axios';
import GlobalStyles from './styles/GlobalStyles';
import { MainContainer } from './styles/App';
import euatag from "./assets/eua.png"
import eurotag from "./assets/euro.png"



function App() {
  const [currencyValue, setcurrencyValue] = useState("")


  const getApiCurrencyValue = (() => {
    axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then
      ((respose) => {
        setcurrencyValue(respose.data)
      })
      .catch(() => {
        setcurrencyValue(respose.data)
      })
    console.log(currencyValue)
  })

  useEffect(() => {
    getApiCurrencyValue()
  }, [])

  if (currencyValue == "") {
    return (
      <h1>carregando moedas</h1>
    )
  } else {
    return (

      <MainContainer>
        <GlobalStyles />
      <div className="topContainer"> 
        <img src={euatag} alt="" />
        <h3>{currencyValue["USDBRL"]["code"]}</h3>
        <img src={eurotag} alt="" />
        <h3>{currencyValue["EURBRL"]["code"]}</h3>
        
      </div>

      <div className="CoinsContainer">
      <div className="CoinsValue">     
          
          <h3>${currencyValue["USDBRL"]["high"]}</h3>
      </div>
      
      <div className="CoinsValue">

          <h3>${currencyValue["EURBRL"]["high"]}</h3>
      </div>

      </div>



      </MainContainer>
    )
  }


}

export default App
