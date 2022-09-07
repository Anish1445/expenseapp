import React from 'react'
import './Chart.css'
import Chartbar from '../Chartbar/Chartbar';

const Chart = (props) => {
    const dataPointValues = props.data.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  
    return (
      <div className="chart">
      {props.data.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart