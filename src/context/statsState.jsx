import { createContext, useState} from "react";


export const StatsContext = createContext();

const StatsState = (props) => {
    const [stats, setstats] = useState([])
    const [chartData, setchartData] = useState([]);
    const [poolData, setpoolData] = useState([])

    // TODO: GET STATS
    const getStats = async () => {
        const response = await fetch('https://api.blockchain.info/stats')
        const res = await response.json()
        setstats(Object.entries(res))
    }

    // TODO: POOL DATA
    const getPoolData = async (time='4') => {
        const response = await fetch(`https://api.blockchain.info/pools?timespan=${time}days`);
        const res = await response.json()
        setpoolData(Object.entries(res))
    }

    // TODO: GET CHART DATA
    const getChartData = async ( _time='weeks',timespan=1, rAvg=8) => {
        const response = await fetch('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json', { mode: 'no-cors'});
       console.log(response)
        const json = await response.text()
        console.log(json)
        // setchartData(Object.entries(res))
    }

    return (
        <StatsContext.Provider value={{ stats, poolData, getStats, getPoolData, getChartData, chartData }}>
            {props.children}
        </StatsContext.Provider>
    )
}

export default StatsState;