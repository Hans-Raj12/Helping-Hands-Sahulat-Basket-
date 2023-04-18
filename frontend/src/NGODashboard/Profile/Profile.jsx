import React from 'react'
import "./Profile.css";
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Profile = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log({
      name,
      number,
      address,

    });
  };

  return (
    <div>
      <h1 className='heading'>Profile</h1>
      <div className="profile">
        <form onSubmit={handleSubmit}>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >

            <img style={{width:'30%'}} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="User Avatar" />
            <div className='row' style={{width:'60%'}}>
              <div className='col-md-6'>
                <label style={{fontWeight:'bold', float:'left', gap: '1px'}}>Name</label>
                <p style={{fontWeight:'bold', float:'right', gap: '1px'}}>Need of poors</p>
              </div>
              <br></br>
              <div className='col-md-6'>
                <label style={{fontWeight:'bold', float:'left', gap: '1rem'}}>Email</label>
                <p style={{fontWeight:'bold', float:'right', gap: '1rem'}}>need123@gmail.com</p>
              </div>
              <br></br>
              <div className='col-md-6'>
                <label style={{fontWeight:'bold', float:'left', gap: '1rem'}}>Contact Number</label>
                <p style={{fontWeight:'bold', float:'right', gap: '1rem'}}>03323456789</p>
              </div>
              <br></br>
              <div className='col-md-6'>
                <label style={{fontWeight:'bold', float:'left', gap: '1rem'}}>City</label>
                <p style={{fontWeight:'bold', float:'right', gap: '1rem'}}>Lahore</p>
              </div>
              <br></br>
             

            </div>
           
          </Box>
        </form>
      </div>
    </div>
  )
}

export default Profile
