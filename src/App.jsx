import React from 'react'
import { NavbarC, Footer, Home, Exchange, Trades, Services } from './components'
import ExchangeState from './context/exchangeState'
import {
    Routes,
    Route
} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useLocation } from 'react-router-dom';


const App = () => {

  const location = useLocation();
  return (
    <div style={{ overflowY: `${(location.pathname === '/')? 'hidden !important': 'auto'}`}}>
        <NavbarC />
{/* CREATE ROUTES for the web pages to all the routes on the sites */}
        {/* ROUTE:! */}
        <ExchangeState>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/exchange' element={<Exchange />} />
            <Route exact path='/trades' element={<Trades />} />
        </Routes>
      </ExchangeState>
        <Services />
        <Footer />
    </div>
  )
}

export default App
