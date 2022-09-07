import React from 'react'
import './Chartbar.css'

const Chartbar = (props) => {
    let barFillHeight = '0%';
  // console.log("nsifnvi",props.value,props.maxValue)
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100).toString() + '%';
        console.log(barFillHeight);
    }
  
    return (
      <div>
        <div className='chart_bar'>
          <div className='chart_bar_inner'>
              <div className='chart_bar_fill' style={{height: barFillHeight}}></div>
          </div>
          <div className='chart_label'>{props.label}</div>
      </div>
      </div>
    )
}

export default Chartbar