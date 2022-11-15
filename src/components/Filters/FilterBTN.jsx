import React from 'react'

const FilterBTN = ({name, index, task, items}) => {
  return (
    <div>
      <style jsx>
        {`
          .form-check-input:checked + label{
            background-color: purple;
            color: white;
          }
          
          input[type='radio']{
            display: none;
          }
        `}
      </style>
        <div className="form-check">
            <input onClick={() => {task(items)}} className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
            <label className="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
        </div>
    </div>
  )
}

export default FilterBTN