import React, { useState } from 'react';
// import { AnimateSharedLayout } from 'framer-motion';
import { motion, LayoutGroup} from "framer-motion"; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Card.css"
import Chart from "react-apexcharts";
import {FaTimes} from 'react-icons/fa';
export const Card = (props) => {
  const [expanded, setExpanded]=useState(false);

  return (
    <>
    <LayoutGroup>
    {
     expanded? (
      <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
     )
     :
     <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
    }

  </LayoutGroup>
  </>
  )
}


function CompactCard({param, setExpanded})
{
  const Png= param.png;
  return (
    <motion.div className='CompactCard'
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
    }
    }
    onClick={setExpanded}
    layoutId='expandableCard'
    >
      <div className='radialBar'>
        <CircularProgressbar
        value={param.barValue}
        text={ `${param.barValue}% `}
        />
        <span>{param.title}</span>

      
      </div>
      <div className='details'>
          <Png/>
          <span> ${param.value}</span>
          <span> Last 24 hours</span>
          </div>
    </motion.div>
  )
}

//Expanded Card
 function ExpandedCard({param, setExpanded}){
  const data={
    options: {
      chart:{
        type: "area",
        height: "auto"
      },
      dropShadow:{
        enable: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        color: ["#fff"],
        type: "gradient",
      },
      dataLabels:{
        enable: false,
      },
      stroke:{
        curve: "smooth",
        color: ["white"],
      },
      tooltip:{
        x:{
          format:"dd//MM/yy HH:nn"
        }
      },
      grid:{
        show: true,
      },
      xaxis:{
        type: "datetime",
        categories:[
          "2018-09-19T00:00:00:000Z",
          "2018-09-19T01:30:00:000Z",
          "2018-09-19T02:30:00:000Z",
          "2018-09-19T03:30:00:000Z",
          "2018-09-19T04:30:00:000Z",
          "2018-09-19T05:30:00:000Z",
          "2018-09-19T06:30:00:000Z"
        ],
      }
    },
  }
    return(
      <motion.div className='ExpandedCard'
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
        layoutId='expandableCard'
      >
        <div style={{alignSelf:"flex-end", cursor:"pointer", color:"white"}}>
          <FaTimes onClick={setExpanded}
          
          
          />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
         <Chart series={param.series} type='area' options={data.options}/>
         
        </div>
        <span> Last 24 hours</span>

      </motion.div>
    )
 }