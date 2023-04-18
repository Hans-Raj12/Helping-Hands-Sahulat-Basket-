import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import './Charts.css';
class Donot extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [44, 55, 13, 43, 22],
          options: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        
        };
      }

    

      render() {
        return (
          <>
           
    <div className='donut'>
    <h1 className='heading2'>Fundraising Projects</h1>
      
<Chart options={this.state.options} series={this.state.series} type="pie" width={500}/>
</div>
</>

        );
      }
    }


export default Donot;