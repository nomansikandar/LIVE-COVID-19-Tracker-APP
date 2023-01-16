import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);
    const [time, setTime] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const actualData = await res.json();
            setData(actualData.AN.total);
            setTime(actualData.AN.meta)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <div className='componentDiv'>
            <div className='headingDiv'>
                <h1>🔴 LIVE </h1>

                <h2> COVID-19 Tracker</h2>
            </div>
            <div className='mainDiv'>
                <div className='card'>
                    <h2><span className='span'>Our</span> Country</h2>
                    <h1>Pakistan</h1>

                </div>
                <div className='card'>
                    <h2><span className='span'>Total</span> Confirmed</h2>
                    <h1>{data.confirmed}</h1>
                </div>
                <div className='card'>
                    <h2><span className='span'>Total</span> Deceased</h2>
                    <h1>{data.deceased}</h1>

                </div>
                <div className='card'>
                    <h2><span className='span'>Total</span> Recovered</h2>
                    <h1>{data.recovered}</h1>

                </div>
                <div className='card'>
                    <h2><span className='span'>Total</span> Tested</h2>
                    <h1>{data.tested}</h1>

                </div>
                <div className='card'>
                    <h2><span className='span'>Last</span> Updated</h2>
                    <h1>{time.last_updated}</h1>
                </div>
            </div>
        </div>
    )
}

export default Covid