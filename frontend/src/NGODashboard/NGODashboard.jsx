import React from 'react';
import Slider from "../assets/NGOImages/slide1.jpg"
import "./NGODashboard.css"
import Donot from './Chart'
import { Container, Col, Row } from 'react-bootstrap';
import StaticalCard from './components/Card';

const NGODashboard = () => {

    const Circle = ({ title, value }) => (
      <div className="circle">
        <div className="circle-border"/>
        <div className="circle-content">
          <div className="circle-title">{title}</div>
          <div className="circle-value">{value}</div>
        </div>
      </div>
    );

    return (
        <>
        <div className='ngo-dashboard'>
          <h1 >Dashboard</h1>
          {/* <div className="dashboard">
            <Circle title="Food" value="$10,000" />
            <Circle title="Clothes" value="$7,500" />
            <Circle title="Fundraising Amount" value="$15,000"/>  
         </div> */}
        {/* <div>
          <div><img src={Slider}/></div>
          <div> <Donot/></div>
        </div> */}
        <Container>
                <Row>
                <Col md={4}>
                <StaticalCard title="Food" number={'$10,000'} icon="donors" />
                </Col>
                <Col md={4}>
                <StaticalCard title="Clothes" number={'$10,000'} icon="ngos" />
                </Col>
                <Col md={4}>
                <StaticalCard title="Fundraising" number={'$10,000'} icon="users" />
                </Col>
                </Row>
        </Container>
        </div>

        
      </>
    );
};

export default NGODashboard;