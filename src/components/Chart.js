import React from 'react';
import { Line } from 'react-chartjs-2';
import { getChartData } from '../functions';

export function Chart ({ active }) {
  const chartData = getChartData(active.when, active.pricePeriod);
  const options = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
  

  };
  return (<div className='chart-line'>
    <Line data={chartData} options={options}/>
  </div>);
}