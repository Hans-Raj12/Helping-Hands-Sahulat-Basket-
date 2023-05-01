import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './NGODonations.css'
function createData(DonorName, DonorEmail, DonationType, Quantity, DonationsDate) {
  return { DonorName, DonorEmail, DonationType, Quantity, DonationsDate};
}

// const rows = [
//   createData('Kashi',  'kashi@gmail.com',  'food', '100', '2023-04-30T18:48:11.227+00:00'),
//   createData('Raj',  'raj@gmail.com',  'cloth', '100', '2023-04-10T18:48:11.227+00:00'),
//   createData('Sakshi',  'sakshi@gmail.com',  'money', '200', '2023-04-30T18:48:11.227+00:00'),
//   createData('Sagar',  'sagar@gmail.com',  'food', '100', '2023-04-30T18:48:11.227+00:00'),
  
// ];



export default function BasicTable() {
  const [rows, setRows] = useState([])

  useEffect(()=>{
  
      fetch('/ngo-donations')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setRows(data)
        console.log(rows)
      })
      .catch(error => console.error(error));
    },[])
    

  return (
    <div className='table'>
        <h1>View Donations</h1>
    <TableContainer component={Paper}
        style={{
             boxShadow: "0px 13px 20px 0px #80808029",
             
        }}
    
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Donor Name</TableCell>
            <TableCell align="left">Donor Email</TableCell>
            <TableCell align="left">DonationType&nbsp;</TableCell>
            <TableCell align="left">Quantity/Amount&nbsp;</TableCell>
            <TableCell align="left">DonatinonDate&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.donor_name}
              </TableCell>
              <TableCell align="left">{row.donor_email}</TableCell>
              <TableCell align="left">{row.donation_type}</TableCell>
              <TableCell align="left">{row.donation_type === "food" ? row.food_quantity : row.cloth_quantity}</TableCell>
              <TableCell align="left">{row.donation_date}</TableCell>
              <TableCell align="left" className='Details'>Accept</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}