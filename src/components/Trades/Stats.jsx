import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { StatsContext } from '../../context/statsState'

const Stats = () => {
    const { stats, poolData, getStats, getPoolData } = useContext(StatsContext);

  return (
      <div className="row p-4">
          {/* TODO : SHOW BLOCK CHAIN STATS */}
          <div className="col-md-6 col-sm-12 stats">
              <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th style={{ width: '50%' }}>Block Chain Stats</th>
                          <th style={{ width: '50%' }}>Value</th>
                      </tr>
                  </thead>
                  <tbody>
                      {(stats.length !== 0) &&
                          <>
                              {stats.map(stat => {
                                  return (
                                      <tr key={stat}>
                                          <td>{stat[0]}</td>
                                          <td>{stat[1]}</td>
                                      </tr>)
                              })
                              }
                          </>}
                  </tbody>
              </Table>
          </div>
          {/* TODO: SHOW POOL DATA */}
          <div className="col-md-6 col-sm-12 stats">
              <Table striped bordered hover variant='dark'>
                  <thead>
                      <tr>
                          <th >Pool Data</th>
                          <th >Value</th>
                      </tr>
                  </thead>
                  <tbody>
                      {(stats.length !== 0) &&
                          <>
                              {stats.map(stat => {
                                  return (
                                      <tr key={stat}>
                                          <td>{stat[0]}</td>
                                          <td>{stat[1]}</td>
                                      </tr>)
                              })
                              }
                          </>}
                  </tbody>
              </Table>
          </div>
        </div>
  )
}

export default Stats
