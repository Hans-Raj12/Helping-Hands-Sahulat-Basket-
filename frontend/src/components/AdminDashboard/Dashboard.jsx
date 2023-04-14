import React from 'react'
import './Dashboard.css'
import StaticalCard from './components/Cards'
import { Container, Row, Col } from 'react-bootstrap';
const Dashboard = () => {
    const numDonors = 100;
  const numNgos = 10;
  const numNeedy = 50;
    return (
        <div className='dashboard-container'>
            <Container>
<Row>
<Col md={4}>
<StaticalCard title="Registered Donors" number={250} icon="donors" />
</Col>
<Col md={4}>
<StaticalCard title="Registered NGOs" number={50} icon="ngos" />
</Col>
<Col md={4}>
<StaticalCard title="Needy People" number={100} icon="users" />
</Col>
</Row>
</Container>
        </div>
    )
}
export default Dashboard