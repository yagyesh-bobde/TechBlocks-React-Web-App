import React, { useContext, useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { StatsContext } from '../../context/statsState'

const Trades = () => {

  const { stats, poolData , getStats , getPoolData } = useContext(StatsContext);
  const [time, settime] = useState(4)
  
  useEffect(() => {
    getStats()
    poolData()
  }, [])
  
  return (
    <div className='container'>
      <div className="row text-center">
        <h1>
          <u>Visualizing Block Chain <br/>Transactions</u> 
        </h1>
      </div>

      <div className="row">

        {/* TODO : SHOW BLOCK CHAIN STATS */}
        <div className="col-md-6 col-sm-12 stats">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: '50%'}}>Stat</th>
              <th style={{ width: '50%'}}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        </div>
        {/* TODO: SHOW POOL DATA */}
        {/* <div className="col-6 col-sm-12 stats">

        </div> */}
      </div>

      {/* TODO: ADD BLOCKCHAIN CHARTS */}
      <div className="row">

      </div>

    </div>
  )
}

export default Trades
