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

const StatisticalCard = ({ title, number, icon }) => {
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
      
      <IconContext.Provider value={{ size: '48px', color: '#ffc451', cursor:'pointer' }}>
        {iconComponent}
      </IconContext.Provider>
      </div>
    </Card>
  );
};

export default StatisticalCard;
