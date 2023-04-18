import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './DonorDonationHistory.css'
function createData(NeedyName,Location, type, Date, Ammount) {
  return { NeedyName,Location,type,Date,Ammount };
}

const rows = [
  createData('Feed the Poors',  92312107439,  'Karachi', 24, 'feedthepoors@gmail.com'),
  createData('Rizq', 4236610041, ' Lahore', 1000, 'Info@sharerizq.com'),
  createData('Akhuwat', 2628930, 'Karachi', 2400, 'contact@peekaboo.guru'),
  
];

export default function BasicTable() {
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
            <TableCell>Needy Name</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Location&nbsp;</TableCell>
            <TableCell align="left">Date&nbsp;</TableCell>
            <TableCell align="left">Ammount&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.NeedyName}
              </TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.Location}</TableCell>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">{row.Ammount}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}