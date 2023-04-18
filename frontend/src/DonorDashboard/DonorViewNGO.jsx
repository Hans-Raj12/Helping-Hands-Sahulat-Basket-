import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './DonorViewNGO.css'
function createData(NGOName, ContactNmber, LocatedCity, EnrolledFamiles, EmailAddress) {
  return { NGOName, ContactNmber, LocatedCity, EnrolledFamiles, EmailAddress};
}

const rows = [
  createData('Feed the Poors',  92312107439,  'Karachi', 24, 'feedthepoors@gmail.com'),
  createData('Rizq', 4236610041, ' Lahore', 1000, 'Info@sharerizq.com'),
  createData('Akhuwat', 2628930, 'Karachi', 2400, 'contact@peekaboo.guru'),
  
];

export default function BasicTable() {
  return (
    <div className='table'>
        <h1>View NGOS</h1>
    <TableContainer component={Paper}
        style={{
             boxShadow: "0px 13px 20px 0px #80808029",
             
        }}
    
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NGO Name</TableCell>
            <TableCell align="left">Conatct Number</TableCell>
            <TableCell align="left">City&nbsp;</TableCell>
            <TableCell align="left">No: Familes Enrolled&nbsp;</TableCell>
            <TableCell align="left">Email Address&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.NGOName}
              </TableCell>
              <TableCell align="left">{row.ContactNmber}</TableCell>
              <TableCell align="left">{row.LocatedCity}</TableCell>
              <TableCell align="left">{row.EnrolledFamiles}</TableCell>
              <TableCell align="left">{row.EmailAddress}</TableCell>
              <TableCell align="left" className='Details'>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}