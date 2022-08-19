import React from 'react'
import { Academy, NavbarC, Footer, Home, Exchange, Trades, Services } from './components'
import ExchangeState from './context/exchangeState'
import StatsState from './context/statsState'
import {
    Routes,
    Route
} from 'react-router-dom'
import './App.css'

import { useLocation } from 'react-router-dom';


const App = () => {

  const location = useLocation();
  return (
    <div >
        <NavbarC />
{/* CREATE ROUTES for the web pages to all the routes on the sites */}
        {/* ROUTE:! */}
        <ExchangeState>
          <StatsState>

        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/academy' element={<Academy/>} />
            <Route exact path='/exchange' element={<Exchange />} />
            <Route exact path='/stats' element={<Trades />} />
        </Routes>
          </StatsState>
      </ExchangeState>
      
        {(location.pathname !== '/academy' && location.pathname !== '/') && <Services />}
      {(location.pathname !== '/' ) && <Footer />}
    </div>
  )
}

export default App
