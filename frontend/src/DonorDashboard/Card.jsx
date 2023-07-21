// import React, { useState } from 'react';
// // import { AnimateSharedLayout } from 'framer-motion';
// import { motion, LayoutGroup} from "framer-motion"; 
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import "./Card.css"
// import Chart from "react-apexcharts";
// import {FaTimes} from 'react-icons/fa';
// export const Card = (props) => {
//   const [expanded, setExpanded]=useState(false);

//   return (
//     <>
//     <LayoutGroup>
//     {
//      expanded? (
//       <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
//      )
//      :
//      <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
//     }

//   </LayoutGroup>
//   </>
//   )
// }


// function CompactCard({param, setExpanded})
// {
//   const Png= param.png;
//   return (
//     <motion.div className='CompactCard'
//     style={{
//       background: param.color.backGround,
//       boxShadow: param.color.boxShadow,
//     }
//     }
//     onClick={setExpanded}
//     layoutId='expandableCard'
//     >
//       <div className='radialBar'>
//         <CircularProgressbar
//         value={param.barValue}
//         text={ `${param.barValue}% `}
//         />
//         <span>{param.title}</span>

      
//       </div>
//       <div className='details'>
//           <Png/>
//           <span> {param.value}</span>
//           <span> Last 24 hours</span>
//           </div>
//     </motion.div>
//   )
// }

// //Expanded Card
//  function ExpandedCard({param, setExpanded}){
//   const data={
//     options: {
//       chart:{
//         type: "area",
//         height: "auto"
//       },
//       dropShadow:{
//         enable: false,
//         enabledOnSeries: undefined,
//         top: 0,
//         left: 0,
//         blur: 3,
//         color: "#000",
//         opacity: 0.35,
//       },
//       fill: {
//         color: ["#fff"],
//         type: "gradient",
//       },
//       dataLabels:{
//         enable: false,
//       },
//       stroke:{
//         curve: "smooth",
//         color: ["white"],
//       },
//       tooltip:{
//         x:{
//           format:"dd//MM/yy HH:nn"
//         }
//       },
//       grid:{
//         show: true,
//       },
//       xaxis:{
//         type: "datetime",
//         categories:[
//           "2018-09-19T00:00:00:000Z",
//           "2018-09-19T01:30:00:000Z",
//           "2018-09-19T02:30:00:000Z",
//           "2018-09-19T03:30:00:000Z",
//           "2018-09-19T04:30:00:000Z",
//           "2018-09-19T05:30:00:000Z",
//           "2018-09-19T06:30:00:000Z"
//         ],
//       }
//     },
//   }
//     return(
//       <motion.div className='ExpandedCard'
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//         layoutId='expandableCard'
//       >
//         <div style={{alignSelf:"flex-end", cursor:"pointer", color:"white"}}>
//           <FaTimes onClick={setExpanded}
          
          
//           />
//         </div>
//         <span>{param.title}</span>
//         <div className="chartContainer">
//          <Chart series={param.series} type='area' options={data.options}/>
         
//         </div>
//         <span> Last 24 hours</span>

//       </motion.div>
//     )
//  }

import React from 'react';
import { Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { IconContext } from 'react-icons';
import { FaUser, FaHandHoldingHeart, FaUsers } from 'react-icons/fa';


const useStyles = makeStyles({
  card: {
    border: 'none',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    borderRadius: '10px',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h2': {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '29px',
      margin: 0,
    },
    '& p': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      margin: 0,
    },
  },
  icon: {
    fontSize: '48px',
    marginRight: '30px',
    color: '#6C63FF',
  },
});

const StatisticalCard = ({ title, number, icon, donations}) => {
  const classes = useStyles();

  let iconComponent;
  switch (icon) {
    case 'users':
      iconComponent = <FaUsers className={classes.icon} />;
      break;
    case 'donors':
      iconComponent = <FaHandHoldingHeart className={classes.icon} />;
      break;
    case 'ngos':
      iconComponent = <FaUser className={classes.icon} />;
      break;
    default:
      iconComponent = null;
      break;
  }

  return (
    <Card className={classes.card}>
      <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        <h2>{title}</h2>
        <h3>{number}</h3>
        <h3>{donations}</h3>
      
      <IconContext.Provider value={{ size: '48px', color: '#ffc451', cursor:'pointer' }}>
        {iconComponent}
      </IconContext.Provider>
      </div>
    </Card>
  );
};

export default StatisticalCard;
