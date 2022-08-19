import { createContext, useState} from "react";


export const StatsContext = createContext();

const StatsState = (props) => {
    const [stats, setstats] = useState({})
    const [poolData, setpoolData] = useState({})

    // TODO: GET STATS
    const getStats = async () => {
        const response = await fetch('https://api.blockchain.info/stats')
        const res = await response.json()
        setstats(Object.entries(res))
        console.log(Object.entries(res))
    }

    // TODO: POOL DATA
    const getPoolData = async(time='4days') => {
        const response = await fetch(`https://api.blockchain.info/pools?timespan=${time}`);
        const res = await response.json()
        setpoolData(Object.entries(res))
    }
    return (
        <StatsContext.Provider value={{ stats, poolData , getStats , getPoolData }}>
            {props.children}
        </StatsContext.Provider>
    )
}

export default StatsState;