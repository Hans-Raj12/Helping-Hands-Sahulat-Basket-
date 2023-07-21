import React,{useContext, useState, useEffect} from 'react';
import "./NGODashboard.css"
import { Container, Col, Row } from 'react-bootstrap';
import StaticalCard from './components/Card';
import { AuthContext } from '../context/AuthContext';
import NGODashboardImage from '../assets/NGOImages/ngo-dashboard.png'

const NGODashboard = () => {

  const { credentials } = useContext(AuthContext)

    // const Circle = ({ title, value }) => (
    //   <div className="circle">
    //     <div className="circle-border"/>
    //     <div className="circle-content">
    //       <div className="circle-title">{title}</div>
    //       <div className="circle-value">{value}</div>
    //     </div>
    //   </div>
    // );

    
    const [foodDonations, setFoodDonations] = useState(0)
    const [clothDonations, setClothDonations] = useState(0)
    const [fundDonations, setFundDonations] = useState(0)


    let [rows, setRows] = useState([])


  useEffect(()=>{
  
    //get the donations from donation history in NGOs donation history
      fetch('/updated-donations-history',{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({recipient_email:credentials?.user?.email})
      })
      .then(response => response.json())
      .then(data => {
        setRows(data)
      })
      .catch(error => console.error(error));
    },[rows])

      useEffect(() => {
        // Count the number of donations based on the data fetched
        let foodCount = 0;
        let clothCount = 0;
        let fundCount = 0;
    
        rows.forEach((row) => {
          if (row.donation_type === 'food') {
            foodCount++;
          } else if (row.donation_type === 'cloth') {
            clothCount++;
          } else if (row.donation_type === 'money') {
            fundCount++;
          }
        });
    
        // Update the state after processing the counts
        setFoodDonations(foodCount);
        setClothDonations(clothCount);
        setFundDonations(fundCount);

        console.log('food',foodDonations)
        console.log('cloth',clothDonations)
        console.log('money',fundDonations)
      }, [rows]);


    return (
        <>
        <div className='ngo-dashboard'>
          <h1>{credentials ? credentials?.user?.name : "NGO Dashboard"}</h1>
         
        <Container>
                <Row>
                  <Col md={4}>
                  <StaticalCard title="Food Donations" number={foodDonations} icon="donors" />
                  </Col>
                  <Col md={4}>
                  <StaticalCard title="Cloth Donations" number={clothDonations} icon="donors" />
                  </Col>
                  <Col md={4}>
                  <StaticalCard title="Fund Donations" number={fundDonations} icon="donors" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src={NGODashboardImage}/>
                  </Col>
                </Row>
        </Container>
        </div>

        
      </>
    );
};

export default NGODashboard;