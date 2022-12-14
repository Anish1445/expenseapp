import React from 'react'
import './Filter.css'

const Filter = (props) => {
    
    // const [year,setExpenseYear]=useState()
    const selectDataPerYear=(event)=>{

        props.onChangeFilter(event.target.value)
    }
  return (
    <div>

       <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectDataPerYear} className="dropdown">
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default Filter