import { useState, useEffect } from 'react'
import axios from 'axios';
import { MainContainer } from './styles/App';
import { CoinContainer } from './styles/App';

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

        <CoinContainer>
          <h3>{currencyValue["USDBRL"]["code"]}</h3>
          <h3>{currencyValue["USDBRL"]["high"]}</h3>
        </CoinContainer>
        <CoinContainer>
          <h3>{currencyValue["EURBRL"]["code"]}</h3>
          <h3>{currencyValue["EURBRL"]["high"]}</h3>
        </CoinContainer>

      </MainContainer>
    )
  }


}

export default App
