import React from 'react'
import FilterBTN from '../FilterBTN';

const Platform = ({ setPlatform }) => {
    let platforms = ['pc', 'steam', 'epic-games-store', 'ubisoft', 'gog', 'itchio', 'ps4', 'ps5', 'xbox-one', 'xbox-series-xs', 'switch', 'android', 'ios', 'vr', 'battlenet', 'origin', 'drm-free', 'xbox-360'];
    
    return (
        <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Platforms
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body d-flex flex-wrap gap-3">
                    {platforms.map((items, index) => (
                        <FilterBTN task={setPlatform} key={index} name='platform' index={index} items={items} />
                    ))}
                    </div>
                </div>
        </div>
    )
}

export default Platform