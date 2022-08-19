import React, { useContext, useEffect } from 'react'
import { StatsContext } from '../../context/statsState'
import '../css/Trades.css'
import Stats from '../Trades/Stats'

const Trades = () => {

  const {  getStats , getPoolData } = useContext(StatsContext);
  
  useEffect(() => {
    getStats()
    getPoolData()
  }, [])
  
  return (
    <div className='exchange_page_parent'>
      <div className="exchange_page_form">
        <h1>
          <u>Block Chain Statistics <br />&<br/>Transactions</u> 
        </h1>
      </div>
      <div className="container">
        <Stats />
        </div>

        {/* TODO: ADD BLOCKCHAIN CHARTS */}
        {/* <div className="row text-center">
          <Charts />
        </div> */}
    </div>
  )
}

export default Trades
