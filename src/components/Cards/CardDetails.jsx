import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    let {id} = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {title, worth, image, description, instructions, open_giveaway_url, published_date, type, platforms, end_date, users, status} = fetchedData;
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
          'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
        }
      };
    let API_URL = 'https://gamerpower.p.rapidapi.com/api/giveaways';

    useEffect(() => {

        (async function(){
          let data = await fetch(API_URL, options).then(res => res.json()).catch(err => console.log(err));
          data = data.find(result => result.id === Number(id));
          updateFetchedData(data);
        })()
      })

  return (
    <div className='details-container d-flex justify-content-center'>
        <div className="d-flex flex-column gap-3">
            <h1 className="text-center fw-bold text-warning transparent m-3 p-2">{title}</h1>
            <img src={image} alt={title} className="img-fluid full-img" />
            <div className="content">
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Value: </span>{worth}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Description: </span>{description}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Instructions: </span>{instructions}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Type: </span>{type}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Platforms: </span>{platforms}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Published: </span>{published_date}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Status: </span>{status}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Giveaway Ends: </span>{end_date}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Users: </span>{users}</div>
                </div>
                <div className="">
                    <div className=""><span className='fw-bold text-warning'>Link: </span><a href={open_giveaway_url} className='link'>{open_giveaway_url}</a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetails