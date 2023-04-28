import React from 'react'
import Chart from 'react-apexcharts'
import './Chart.css'
import image from "../assets/DonorImages/analytics.jpg"
class Abc extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Humanity',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Donation',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
    <div className='chart-data'>
      <h2>Donation Analytics</h2>
      <Chart options={this.state.options} series={this.state.series} type="area" height={350} /> 
    </div>
    <div className='image'>
        <img src={image} width={450} height={450}/>
    </div>    

  </div>


      );
    }
  }
  export default Abc;