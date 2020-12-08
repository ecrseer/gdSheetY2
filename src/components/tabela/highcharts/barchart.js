import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Totais'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };
  const SplineChart = ({dados}) => {
      let newoptions = options;
      let arr = dados.meuArray.map(
        row=>row[4]);

      useEffect(()=>{
        newoptions.series = [{data: arr
        }]
      },[dados])
    return(
    <div>
      <HighchartsReact highcharts={Highcharts} options={newoptions} />      
      <h1>{newoptions.series[0].data}</h1>
    </div>
  )};
  export default SplineChart;