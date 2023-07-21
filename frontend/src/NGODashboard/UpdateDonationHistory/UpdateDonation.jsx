import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../../context/AuthContext';
import './UpdateDonation.css'


function createData(DonorName, DonorEmail, DonationType, Quantity, DonationsDate) {
  return { DonorName, DonorEmail, DonationType, Quantity, DonationsDate};
}


export default function BasicTable() {
  let [rows, setRows] = useState([])

  const {credentials} = useContext(AuthContext)

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

console.log(rows)
  return (
    <div className='table'>
        <h1>Donations History 0f {credentials?.user?.name}</h1>
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
            {rows.filter((row) => row.email === credentials?.user?.email).map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.donor_name}
                </TableCell>
                <TableCell align="left">{row.donor_email}</TableCell>
                <TableCell align="left">{row.donation_type}</TableCell>
                <TableCell align="left">{row.donation_quantity}</TableCell>
                <TableCell align="left">{row.donation_date}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}