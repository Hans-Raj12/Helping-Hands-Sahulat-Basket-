import React from 'react';
// import {useState} from 'react';
import { useEffect, useState, useContext, useMemo } from 'react';

import {MdOutlineFastfood} from "react-icons/md";
import {TbClothesRack} from "react-icons/tb";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {Card} from './Card';
import StatisticalCard from './Card';
import './DonorDashboard.css'
// import Table from './DonorDonationHistory';
import Abc from './Chart';
import { AuthContext } from '../context/AuthContext';

const Cards = () => {

    const [foodDonations, setFoodDonations] = useState(0)
    const [clothDonations, setClothDonations] = useState(0)
    const [fundDonations, setFundDonations] = useState(0)


    let [rows, setRows] = useState([])
    const {credentials} = useContext(AuthContext)

    useEffect(() => {
        //get the donations from donation history in NGOs donation history
        fetch('/donor-donations-cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: credentials?.user?.email }),
        })
          .then((response) => response.json())
          .then((data) => {
            setRows(data);
          })
          .catch((error) => console.error(error));

      }, [credentials]);

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
        <div className='donor-dashboard'>
             <h2>Donor Dashboard</h2>
            <div className='Cards'>
                    
                    <StatisticalCard title="Food Donation" icon='donors' donations={foodDonations}/>

                    
                    <StatisticalCard title="Cloth Donation" icon='donors' donations={clothDonations}/>
                    <StatisticalCard title="Fund Donation" icon='donors' donations={fundDonations}/>

                    
                    
                
            </div>

            <Abc/>
      </div>
    )
  }
  
  export default Cards;