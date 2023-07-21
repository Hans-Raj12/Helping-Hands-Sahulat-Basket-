import * as React from 'react';
import Table from '@mui/material/Table';
import { useEffect, useState, useContext } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../context/AuthContext';
import './DonorDonationHistory.css'
// function createData(NeedyName,Location, type, Date, Ammount) {
//   return { NeedyName,Location,type,Date,Ammount };
// }

// const rows = [
//   createData('Feed the Poors',  92312107439,  'Karachi', 24, 'feedthepoors@gmail.com'),
//   createData('Rizq', 4236610041, ' Lahore', 1000, 'Info@sharerizq.com'),
//   createData('Akhuwat', 2628930, 'Karachi', 2400, 'contact@peekaboo.guru'),
  
// ];

export default function BasicTable() {

  let [rows, setRows] = useState([])

  const {credentials} = useContext(AuthContext)

  useEffect(()=>{
  
    //get the donations from donation history in NGOs donation history
      fetch('/donor-donations',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:credentials?.user?.email})
      })
      .then(response => response.json())
      .then(data => {
        setRows(data)
      })
      .catch(error => console.error(error));
    },[])



  return (
    <div className='table'>
        <h2>Donation history</h2>
    <TableContainer component={Paper}
        style={{
             boxShadow: "0px 13px 20px 0px #80808029",
             
        }}
    
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Recipient Name</TableCell>
            <TableCell align="left">Recipient Type</TableCell>
            <TableCell align="left">Recipient Email&nbsp;</TableCell>
            {/* <TableCell align="left">Donation Type&nbsp;</TableCell> */}
            <TableCell align="left">Quantity&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            >
              <TableCell component="th" scope="row">
                {row.recipient_name}
              </TableCell>
              {/* <TableCell align="left">{row.recipient_type}</TableCell> */}
              <TableCell align="left">{ row.recipient_email}</TableCell>
              <TableCell align="left">{row.donation_type}</TableCell>
              <TableCell align="left">{row.donation_type==='food'?row.food_quantity:row.donation_type==='cloth'? `${row.cloth_quantity} ( ${row.cloth_quality} )`:row.amount}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}