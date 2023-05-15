import React from 'react';
// import {useState} from 'react';
import { useEffect, useState, useContext, useMemo } from 'react';

import {MdOutlineFastfood} from "react-icons/md";
import {TbClothesRack} from "react-icons/tb";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {Card} from './Card';
import './DonorDashboard.css'
// import Table from './DonorDonationHistory';
import Abc from './Chart';
import { AuthContext } from '../context/AuthContext';

const Cards = () => {

    const [foodDonations, setFoodDonations] = useState(0)
    const [clothDonations, setClothDonations] = useState(0)
    const [fundDonations, setFundDonations] = useState(0)

    const [foodDonationsArray, setFoodDonationsArray] = useState([])
    const [clothDonationsArray, setClothDonationsArray] = useState([])
    const [fundDonationsArray, setFundDonationsArray] = useState([])

    

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
            
            let foodDonationsTotal = 0;
            let clothDonationsTotal = 0;
            let fundDonationsTotal = 0;
            const foodDonations_Array = [];
            const clothDonations_Array = [];
            const fundDonations_Array = [];
    
            rows.forEach((row) => {
              if (row.donation_type === 'food') {
                foodDonationsTotal += +row?.food_quantity;
                foodDonations_Array.push(+row?.food_quantity);
              } else if (row.donation_type === 'cloth') {
                clothDonationsTotal += +row?.cloth_quantity;
                clothDonations_Array.push(+row?.cloth_quantity);
              } else if (row.donation_type === 'money') {
                fundDonationsTotal += +row?.amount;
                fundDonations_Array.push(+row?.amount);
              }
            });
    
            setFoodDonations(foodDonations + foodDonationsTotal);
            setClothDonations(clothDonations + clothDonationsTotal);
            setFundDonations(fundDonations + fundDonationsTotal);
            setFoodDonationsArray([...foodDonationsArray, ...foodDonations_Array]);
            setClothDonationsArray([...clothDonationsArray, ...clothDonations_Array]);
            setFundDonationsArray([...fundDonationsArray, ...fundDonations_Array]);
          })
          .catch((error) => console.error(error));
      }, []);

      const CardsData = useMemo(() => {
        return [
        {
            title: "Food-Donation",
            color: {
                backGround:"#6c757d",
                boxShadow: "0px 10px 20px 0px 	#6c757d"
            },
            barValue: 30,
            value: foodDonations,
            png: MdOutlineFastfood,
            Series: [
                {
                    name: "Food-Donation",
                    data: foodDonationsArray
    
                },
            ],
    
    
        },
        {
            title: "Cloth-Donation",
            color: {
                backGround: "	#605B56",
                boxShadow: "0px 10px 20px 0px 	#605B56"
            },
            barValue: 50,
            value: clothDonations,
            png: TbClothesRack,
            Series: [
                {
                    name: "Cloth-Donation",
                    data: clothDonationsArray
    
                },
            ],
    
    
        },
        {
            title: "Fund-Donation",
            color: {
                backGround: "#837A75",
                boxShadow: "0px 10px 20px 0px #837A75"
            },
            barValue: 70,
            value: fundDonations,
            png: RiMoneyDollarCircleFill,
            Series: [
                {
                    name: "Fund-Donation",
                    data: fundDonationsArray
    
                },
            ],
    
    
        },
    ]}, [foodDonations, clothDonations, fundDonations, foodDonationsArray, clothDonationsArray, fundDonationsArray])
    return (
        <div className='donor-dashboard'>
             <h2>Donor Dashboard</h2>
            <div className='Cards'>
                {
                    CardsData.map((card,id)=>{
                        return (
                            <div className='parentContainer'>
                                <Card
                                title={card.title}
                                color={card.color}
                                barValue={card.barValue}
                                value={card.value}
                                png={card.png}
                                series={card.Series }
                                />
                            </div>
                        )
                    })
                }
                
            </div>

            <Abc/>
      </div>
    )
  }
  
  export default Cards;