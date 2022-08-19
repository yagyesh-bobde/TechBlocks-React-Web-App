
import React, { createContext,useState } from 'react'

export const exchangeContext = createContext();

const ExchangeState = (props) => {
    const [rates, setrates] = useState([]);
    const [value, setvalue] = useState(0);
    const [currencies, setcurrencies] = useState(['USD','AUD','BRL','CAD','CHF','CLP','CNY',"DKK", "EUR", "GBP"]);
    
    // TODO: API CALL TO GET RATES
    const getRates = async () => {
        const response = await fetch('https://blockchain.info/ticker');
        const json = await response.json()
        setrates(Object.entries(json))
    }


    // TODO: API CALL FOR CONVERSION
        // Returns the value in BTC
    const getConversion = async ( currency='USD', value='1000') => {
        const response = await fetch(`https://blockchain.info/tobtc?currency=${currency}&value=${value}`);
        const json = await response.json()
        setvalue(json)
    }

    return(
        <exchangeContext.Provider value={{ rates, getRates, getConversion, value, currencies }} >
            {props.children}
        </exchangeContext.Provider>
    )
}

export default ExchangeState;