import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './DonorProfile.css';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { color } from 'framer-motion';
function createData(DonorName, ContactNmber, LocatedCity, EmailAddress, donation) {
  return { DonorName, ContactNmber, LocatedCity, EmailAddress, donation};
}

// const rows = [
//   createData('Kashish',  +923036828592,  'Karachi', 'kashish618@gmail.com',7),
//   createData('Rashid', +924236610041, ' Lahore','rashid12@gmail.com',3),
//   createData('Hammad', +92672628930, 'Karachi', 'hello@gmail.com', 1),
  
// ];

export default function BasicTable() {

  const [rows,setRows] = useState([])

  useEffect(()=>{
  
    fetch('/donor-profiles')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setRows(data)
    })
    .catch(error => console.error(error));
  },[])


  return (
    <>
   
    <div className='table' style={{margin:'1rem'}}>
    <h1>View Donors</h1>
    <TableContainer component={Paper}
        style={{
             boxShadow: "0px 13px 20px 0px #80808029",
             
        }}
    
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Donor Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Contact Number&nbsp;</TableCell>
            <TableCell align="left">CNIC&nbsp;</TableCell>
            <TableCell align="left">Address&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.cnic}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              {/* <TableCell align="left" className='Details'>
                <Button style={{background:'red', color:'white'}}>Report</Button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
