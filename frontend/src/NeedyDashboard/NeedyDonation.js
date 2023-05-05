import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './NeedyDonation.css';
function createData(DonorName, DonationType, Amount, Date, DonorEmail) {
  return { DonorName, DonationType, Amount, Date, DonorEmail};
}

const rows = [
  createData('Kashish',  "Food",  "4.5 pounds", "24:04:2023", 'kashish@gmail.com'),
  createData('Hans',  "Money",  "15000", "08:03:2023", 'hans@gmail.com'),
  createData('Prem',  "Cloths",  "4 dresses", "24:04:2023", 'prem@gmail.com'),
  
];

export default function DonationNeedy() {
  return (
    <div className='needy-tableNeedy'>
        <h2 style={{marginTop:'20px'}}>View Donation History</h2>
        <TableContainer component={Paper}
            style={{
                boxShadow: "0px 13px 20px 0px #80808029",
                
            }}
        
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell>Donor Name</TableCell>
                <TableCell align="left">Donation Type</TableCell>
                <TableCell align="left">Amount/Quantity&nbsp;</TableCell>
                <TableCell align="left">Date&nbsp;</TableCell>
                <TableCell align="left">Donor Email-Address&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.DonorName}
                  </TableCell>
                  <TableCell align="left">{row.DonationType}</TableCell>
                  <TableCell align="left">{row.Amount}</TableCell>
                  <TableCell align="left">{row.Date}</TableCell>
                  <TableCell align="left">{row.DonorEmail}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
    </div>
  );
}