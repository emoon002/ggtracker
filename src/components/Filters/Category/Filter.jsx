import React from 'react'
import FilterBTN from '../FilterBTN';

const Filter = ({ setFilter }) => {
    let filters = ['date', 'value', 'popularity'];
    
    return (
        <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Sort
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body d-flex flex-wrap gap-3">
                    {filters.map((items, index) => (
                        <FilterBTN task={setFilter} key={index} name='sort' index={index} items={items} />
                    ))}
                    </div>
                </div>
        </div>
    )
}

export default Filter