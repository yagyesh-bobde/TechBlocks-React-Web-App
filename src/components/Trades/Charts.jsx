import React, { useState , useEffect, useContext } from 'react'
import { StatsContext } from '../../context/statsState';

const Charts = () => {
    const { getChartData, chartData } = useContext(StatsContext);
    const [formData, setformData] = useState({
        _time: '',
        timespan : 5,
        rAvg : 8
    });

    useEffect(() => {
        getChartData()
    }, []);
    console.log(chartData)
  return (
    <div className='container'>
        <div className="row">
              <h1>
                  <u>Visualizing BlockChain<br/>Transactions</u>
              </h1>
        </div>
        {/* TODO: ADDING THE BITCOIN CHARTS */}
        
        {/* <div className="row m-auto">
            <div className="row chart_tools">

            </div>
            <div className="row">

            </div>
        </div> */}
    </div>
  )
}

export default Charts
