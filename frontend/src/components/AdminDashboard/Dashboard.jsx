import React from 'react'
import './Dashboard.css'
import StaticalCard from './components/Cards'
import { Container, Row, Col } from 'react-bootstrap';
import NGOList from './components/NGOList'
import DonorList from './components/DonorList'
import NeedyList from './components/NeedyList';


const Dashboard = () => {
    const numDonors = 100;
  const numNgos = 10;
  const numNeedy = 50;
    return (
        <div className='dashboard-container'>
            <h1>Admin Dashboard</h1>
            <Container>
                <Row>
                <Col md={4}>
                <StaticalCard title="Registered Donors" number={numDonors} icon="donors" />
                </Col>
                <Col md={4}>
                <StaticalCard title="Registered NGOs" number={numNgos} icon="ngos" />
                </Col>
                <Col md={4}>
                <StaticalCard title="Needy People" number={numNeedy} icon="users" />
                </Col>
                </Row>

                <NGOList/>
                <DonorList/>
                <NeedyList/>
            </Container>

        </div>
     
    );
    
}


export default Dashboard