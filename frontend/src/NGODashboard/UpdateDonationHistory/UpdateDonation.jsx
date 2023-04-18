import React from 'react'
import { useState } from 'react';
import "./UpdateDonation.css"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const UpdateDonation = () => {
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: 'rgb(43, 85, 110)',
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });

    const [donor, setDonor] = useState('');
    const [needy, setNeedy] = useState('');
    const [quantity, setQuantity] = useState('');
    const [donationType, setDonationType] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
        console.log({
            donor,
            needy,
            quantity,
            donationType,
            mobileNumber,
            address
        });
    };
    return (
        <div>
            <h1 className='heading'>Update Donation History</h1>
            <div className="updateDonation">
                <form onSubmit={handleSubmit}>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            value={donor}
                            onChange={(event) => setDonor(event.target.value)}
                            label="From (Donor)"
                            variant="outlined" />

                        <TextField
                            id="outlined-basic"
                            label="To (Needy)"
                            variant="outlined"
                            value={needy}
                            onChange={(event) => setNeedy(event.target.value)} />

                        <TextField
                            id="outlined-basic"
                            label="Number"
                            variant="outlined"
                            value={mobileNumber}
                            onChange={(event) => setMobileNumber(event.target.value)} />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Donation Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={donationType}
                                label="Donation Type"
                                onChange={(event) => setDonationType(event.target.value)}
                            >
                                <MenuItem value={1} >Goods</MenuItem>
                                <MenuItem value={2} >Money</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="outlined-basic"
                            label="Quantity"
                            variant="outlined"
                            value={mobileNumber}
                            onChange={(event) => setQuantity(event.target.value)} />

                        <TextField
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)} />

                        <ThemeProvider theme={theme}>
                            <Button  variant="contained" color="primary" >
                                Submit
                            </Button>
                        </ThemeProvider>

                    </Box>

                </form>
            </div>
        </div >
    )
}

export default UpdateDonation;

