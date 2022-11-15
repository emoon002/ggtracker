import React from 'react'
import Filter from './Category/Filter';
import Platform from './Category/Platform';
import Type from './Category/Type';

const Filters = ({ setPlatform, setType, setFilter }) => {

    let clear = () => {
        setPlatform('');
        setType(''); 
        setFilter('');
        window.location.reload(false);
      }

    return (
        <div className='col-lg-3 col-12 mb-5'>
            <div className='text-center fw-bold transparent text-warning fs-2 mb-2 p-2'>Filters</div>
            <div onClick={clear} style={{cursor: 'pointer'}} className='text-center text-danger text-decoration-underline transparent fw-bold fs-5 mb-4 p-2'>Clear Filters
            </div>
        <div className="accordion" id="accordionExample">
            <Platform setPlatform={setPlatform} />
            <Type setType={setType} />
            <Filter setFilter={setFilter} />
        </div>
        </div>
    )
}

export default Filters