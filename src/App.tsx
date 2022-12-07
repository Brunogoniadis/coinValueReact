import { useState, useEffect } from 'react'
import axios from 'axios';
import GlobalStyles from './styles/GlobalStyles';
import { MainContainer } from './styles/App';
import { BackgroundScreen } from './styles/App';
import { BackgroundStatic } from './styles/App';


BackgroundStatic
interface IValue {
    EURBRL:{
      ask:string
      bid:string
      code:string
      high:string
      name:string
    },
    USDBRL:{
      ask:string
      bid:string
      code:string
      high:string
      name:string
    }
}

function App() {
  const [currencyValue, setcurrencyValue] = useState<IValue>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getApiCurrencyValue(){
      axios.get("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then
      ((respose) => {
        
        setcurrencyValue(respose.data)

      })
      .catch(() => {
        console.log("error")
      })
    }
    getApiCurrencyValue()
    setLoaded(true)
  }, [])

  return (
    <BackgroundStatic>

    <MainContainer>
      <GlobalStyles />
      {loaded ? 
        <>
          <div className="topContainer"> 
            <div className="titleContainer">
              <img src={"/eua.png"} alt="" />
              <h3>{currencyValue?.USDBRL.code}</h3>
            </div>
            <div className="titleContainer">
              <img src={"/euro.png"} alt="" />
              <h3>{currencyValue?.EURBRL.code}</h3>
            </div>
            <h3></h3>
          </div>

          <div className="CoinsContainer">

            <div className="CoinsValue">
                
                <h3>${currencyValue?.USDBRL.ask.slice(-6,4)}</h3>
            </div>

            <div className="CoinsValue">

                <h3>{currencyValue?.EURBRL.ask.slice(-6,4)}€</h3>
            </div>
              
          </div>
          <a className='FooterDescription' href="https://github.com/Brunogoniadis/"target="_blank" rel="noopener noreferrer">Criado por Bruno Goniadis</a>

      </>
    :
      <>
        <div className="topContainer">
          </div>
          <h3>Carregando valores de moedas</h3>
      </>
    }
    </MainContainer>
     <BackgroundScreen></BackgroundScreen>

    </BackgroundStatic>
  ) 
}


export default App