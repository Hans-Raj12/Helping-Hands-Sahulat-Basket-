import React,{useEffect, useState} from 'react'
import './Dashboard.css'
import StaticalCard from './components/Cards'
import { Container, Row, Col } from 'react-bootstrap';
import NGOList from './components/NGOList'
import DonorList from './components/DonorList'
import NeedyList from './components/NeedyList';
import RightsReservedFooter from '../RightsReservedFooter';

const Dashboard = () => {


    const [numOfDonors, setNumOfDonors] = useState(0);
    const [numOfNGOs, setNumOfNGOs] = useState(0);
    const [numOfNeedy, setNumOfNeedy] = useState(0);

  useEffect(() => {
        fetch(`/needy`, {
        method: "GET"
        })
      .then(response => response.json())
      .then(data => {
        setNumOfNeedy(data.length);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`/donors`, {
    method: "GET"
    })
  .then(response => response.json())
  .then(data => {
    setNumOfDonors(data.length);
  })
  .catch(error => console.error(error));
}, []);

useEffect(() => {
    fetch(`/ngos`, {
    method: "GET"
    })
  .then(response => response.json())
  .then(data => {
    setNumOfNGOs(data.length);
  })
  .catch(error => console.error(error));
}, []);

    return (
        <div className='dashboard-container'>
            <h1>Admin Dashboard</h1>
            <Container>
                <Row>
                <Col md={4} >
                <StaticalCard title="Registered Donors" number={numOfDonors} icon="donors" />
                </Col>
                <Col md={4}>
                <StaticalCard title="Registered NGOs" number={numOfNGOs} icon="ngos" />
                </Col>
                <Col md={4}>
                <StaticalCard title="Needy People" number={numOfNeedy} icon="users" />
                </Col>
                </Row>

                <NGOList/>
                <DonorList/>
                <NeedyList/>
            </Container>
            {/* <RightsReservedFooter/> */}

        </div>
     
    );
    
}


export default Dashboard