import React from 'react';
// import {useState} from 'react';
import {MdOutlineFastfood} from "react-icons/md";
import {TbClothesRack} from "react-icons/tb";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {Card} from './Card';
import './DonorDashboard.css'
// import Table from './DonorDonationHistory';
import Abc from './Chart';
const CardsData = [
    {
        title: "Food-Donation",
        color: {
            backGround:"#6c757d",
            boxShadow: "0px 10px 20px 0px 	#6c757d"
        },
        barValue: 30,
        value: 2590,
        png: MdOutlineFastfood,
        Series: [
            {
                name: "Food-Donation",
                data: [31, 40,50,100, 192, 65]

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
        value: 5000,
        png: TbClothesRack,
        Series: [
            {
                name: "Cloth-Donation",
                data: [31,40,50,100, 192, 65]

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
        value: 8000,
        png: RiMoneyDollarCircleFill,
        Series: [
            {
                name: "Fund-Donation",
                data: [31,40,50,100, 192, 65]

            },
        ],


    },
]
const Cards = () => {
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