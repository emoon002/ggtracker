import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ({ fetchedData }) => {
    let display;
    if(fetchedData && fetchedData.status !== 0) {
        display = fetchedData.map((results) => {
            let {id, title, worth, thumbnail, image, description, instructions, open_giveaway_url, published_date, type, platforms, end_date, users, status, gamerpower_url, open_giveaway} = results;
            return (
                <Link style={{textDecoration: "none"}} to={`${id}`} key={id} className='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark'>
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={thumbnail} alt='thumbnail' className={`${styles.img} img-fluid`} />
                        <div className={`${styles.content} content`}>
                            <div className='fs-4 fw-bold mb-4'>{title}</div>
                            <div className=''>
                                <div className='fs-5'>Value: {worth}</div>
                                <div className='fs-6'>Type: {type}</div>
                                <div className="fs-6">Platforms: {platforms}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    } else {
        display = <div className='fs-2 text-center transparent-light fw-bold text-info'>{fetchedData.status_message} || No offers found! Check filter paramters and try again.</div>
    }

    return <>{display}</>
}

export default Cards