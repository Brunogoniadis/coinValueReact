import { useState, useEffect } from 'react'
import axios from 'axios';
import GlobalStyles from './styles/GlobalStyles';
import { MainContainer } from './styles/App';
import euatag from "./assets/eua.png"
import eurotag from "./assets/euro.png"


interface IValue {

  ask:number
  bid:number
  code:string;
  high:string
  name:string
}



function App() {




  const [currencyValue, setcurrencyValue] = useState<IValue[]>([ ]);


  const getApiCurrencyValue = (() => {
    axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then
      ((respose) => {
        setcurrencyValue(respose.data)
        console.log(respose.data)
      })
      .catch(() => {
        console.log("error")
      })
    console.log(currencyValue)
  })

  useEffect(() => {
    getApiCurrencyValue()
  }, [])


  try {
    return (

      <MainContainer>
        <GlobalStyles />
      <div className="topContainer"> 
        <img src={euatag} alt="" />
        <h3>{currencyValue["USDBRL"]["code"]}</h3>
        <img src={eurotag} alt="" />
        
        <h3>{currencyValue["EURBRL"]["code"]}</h3>
        <h3></h3>
      </div>

      <div className="CoinsContainer">
      <div className="CoinsValue">     
          
          <h3>${currencyValue["USDBRL"]["high"]}</h3>
      </div>
      
      <div className="CoinsValue">

          <h3>{currencyValue["EURBRL"]["high"]}€</h3>
      </div>

      </div>



      </MainContainer>
    )
  } catch (error) {
    return (
      <MainContainer>
        <div className="topContainer">
        </div>
          <h3>Carregando valores de moedas</h3>
      </MainContainer>
      
    )
  }


}

export default App
