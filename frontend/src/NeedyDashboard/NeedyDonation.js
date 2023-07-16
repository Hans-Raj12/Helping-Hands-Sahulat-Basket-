import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../context/AuthContext';
// import './NGODonations.css'
import './NeedyDonation.css'
export default function BasicTable() {
  let [rows, setRows] = useState([])
  const [recipient_email, setRecipientEmail] = useState('')
  // const [flag, setFlag] = useState(0)

  const {credentials} = useContext(AuthContext)
  useEffect(()=>{
    // setRecipientEmail(credentials?.user?.email)
      fetch('/needy-donations',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({recipient_email:credentials?.user?.email})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setRows(data)
        console.log(rows)
      })
      .catch(error => console.error(error));
    },[])


    const handleAccept = async (row) => {
      console.log("id: ",row._id)
      


      const response = await fetch(`/donations-update`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:row._id}),
      })
      const data = await response.json()
      if(response.ok){
        const newRows = rows.filter(r => r.id !== row.id);
        setRows(newRows);
        console.log('user side',data)

          fetch('/donation-history', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...data, email:credentials?.user?.email})
        })
        .then(response => response.json())
        .then(data => alert('Donation history added:', data))
        .catch(error => console.error(error));





      }else{
        console.log('Donation not updated')
      }

      fetch('/needy-donations',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({recipient_email:credentials?.user?.email})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setRows(data)
        console.log(rows)
      })
      .catch(error => console.error(error));

      
      fetch('/needy-donations',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({recipient_email:credentials?.user?.email})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setRows(data)
        console.log(rows)
      })
      .catch(error => console.error(error));

    }  
    const handleReject = async (row) => {
      console.log(row._id)
      const response = await fetch(`/donations/${row._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        const newRows = rows.filter(r => r.id !== row.id);
        setRows(newRows);
        console.log('Donation record deleted');
      } else {
        console.log('Failed to delete donation record');
      }
      fetch('/needy-donations',{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },  
        body:JSON.stringify({recipient_email:credentials?.user?.email})
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setRows(data)
        console.log(rows)
      })
      .catch(error => console.error(error));
    };
    
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
            <TableCell align="left">Donor Email&nbsp;</TableCell>
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
              <TableCell align="left">{row.donation_type === "food" ? `${row.food_quantity} (${row.food_type})` :row.donation_type === 'money'?`Rs. ${row.amount}` :`${row.cloth_quantity} ( ${row.cloth_quality}, ${row.cloth_type} )`}</TableCell>
              <TableCell align="left">{row.donation_date}</TableCell>
              <TableCell align="left" className='Details' onClick={()=>handleAccept(row)}>Accept</TableCell>
              <TableCell align="left" className='Details' onClick={()=>handleReject(row)}>Reject</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}