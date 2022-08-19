import React from 'react'
import Rates from '../exchange/Rates'
import CalForm from '../exchange/CalForm'

const Exchange = () => {

  return (
    <div className='exchange_page_parent'>
      <div className="exchange_page_form">
        <h1>
          <u>Currency To BitCoin Calculator</u> 
        </h1>
        <span style={{ fontWeight: '700'}}>Calculate currency exchange for BitCoin using real time live exchange rates.</span>
      </div>
      <div className="exchange_form_div">
        <CalForm />
      </div>
      <div className='rates_div'>
        <h1>
          Real Time Exchange Rates
        </h1>
        <Rates/>
      </div>
    </div>
  )
}

export default Exchange
