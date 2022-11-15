import React, { useState, useEffect } from 'react'

const ActiveGiveaways = () => {

    let [fetchedData, setFetchedData] = useState([]);
    const API_URL = 'https://www.gamerpower.com/api/worth';
    let {active_giveaways_number, worth_estimation_usd} = fetchedData;

    useEffect( () => {
        (async () => {
            let data = await fetch(API_URL).then(res => res.json()).catch(err => console.log(err));
            setFetchedData(data);
        })()
    })

    return (
        <div className='col-lg-3 col-12 mt-4 transparent-light active-giveaways text-center'>
            <h5 className='fs-3 fw-bold text-primary'>Active Giveaways</h5>
            <div className='fs-4 fw-bold text-success'>Giveaways: {active_giveaways_number}</div>
            <div className='fs-4 fw-bold text-success'>Value: ${worth_estimation_usd}</div>
        </div>
    )
}

export default ActiveGiveaways