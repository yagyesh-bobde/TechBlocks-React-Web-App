import React, { useEffect , useContext } from 'react'
import { Spinner , Table } from 'react-bootstrap';
import { exchangeContext } from '../../context/exchangeState'

const Rates = ( ) => {
  const { getRates, rates } = useContext(exchangeContext);
    useEffect(() => {
        getRates()
        // eslint-disable-next-line
    }, []);

  return (
    <div className='rates_page'>
      
    <div className="container">
       
        {(rates === {}) && <div className='spinner_custom'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>}

        {
        (rates !== {}) &&

            <Table striped bordered responsive hover variant='dark' style={{}}>
              <thead>
                <tr>
                  <th >Currency</th>
                  <th >15m</th>
                  <th >Last</th>
                  <th>Buy/Sell</th>
                </tr>
              </thead>
              <tbody>
                {rates.map(rate => {
                  return (
                    <tr key={rate[0]}>
                      <td width="20%">{rate[0]}</td>
                      <td width="40%">{rate[1]['15m']}</td>
                      <td width="20%">{rate[1]['last']}</td>
                      <td width="20%" style={{ color: 'rgba(0,250,0,.5)', fontWeight: '700', display: 'flex', alignItems: 'center' }}> 
                      <i style={{ color: ''}} className="fa-solid fa-arrow-trend-up"></i> {rate[1]['buy']}
                      </td>
                      <td width="20%" style={{ color: 'rgba(250,00,0,.5)', fontWeight: '700', display: 'flex', alignItems: 'center' }}> 
                        <i style={{ color: '' }} className="fa-solid fa-arrow-trend-down"></i> {rate[1]['sell']}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>}

    </div>
      
    </div>
  )
}

export default Rates
