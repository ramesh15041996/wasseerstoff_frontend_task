import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./css/chart.css";
const options = {
  chart: {
    height: 350,
    type: 'bubble',
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: 'Bubble1',
    data: [
      [20, 50, 15],
      [30, 40, 10],
      [21, 55, 15],
      [30, 40, 10],
      [20, 50, 15],
      [30, 40, 10],
      [20, 50, 15],
      [30, 40, 10],
      [40, 35, 20]
    ]
  }],
  xaxis: {
    tickAmount: 10,
    labels: {
      formatter: function (val) {
        return parseFloat(val).toFixed(1)
      }
    }
  },
  yaxis: {
    tickAmount: 7
  }
};

class Mychart extends Component {
  render() {
    return (
      
      <ReactApexChart className="chart" options={options} series={options.series} type="bubble" height={350}  width={300}/>
      
    );
  }
}

export default Mychart;
