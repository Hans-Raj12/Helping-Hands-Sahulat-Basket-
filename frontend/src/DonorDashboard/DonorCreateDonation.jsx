import React from 'react'
import { useState } from 'react';
import "./DonorCreateDonation.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const DonorCreateDonation = () => {
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

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [to, setto] = useState('');
    const [type, settype] = useState('');
    const [quantity, setquantity] = useState('');
    const [description, setDescription] = useState('');
    const handleChange=(event)=>{
        settype(event.target.value);
        setto(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
           
        console.log({
            name,
            number,
            to,
            description,
            type,
            quantity
           
        });
    };
    return (
        <div>
            <h1 className='heading'>Create Donation Post</h1>
            <div className="createPost">
                <form onSubmit={handleSubmit}>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '110%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            label="Donor Name"
                            variant="outlined" />

                        <TextField
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            value={number}
                            onChange={(event) => setNumber(event.target.value)} />

                        <InputLabel id="outlined-basic">To</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={to}
                            label="To"
                            variant='outlined'
                            onChange={handleChange}
                            >
                            <MenuItem value={"needy"}>Needy person</MenuItem>
                            <MenuItem value={"NGO"}>NGO</MenuItem>
                            </Select>
                            <InputLabel id="outlined-basic">Type of Donation</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            variant='outlined'
                            onChange={handleChange}
                            >
                            <MenuItem value={"food"}>Food Donation</MenuItem>
                            <MenuItem value={"Cloth"}>Clothes Donation</MenuItem>
                            <MenuItem value={"Fund"}>Fund/Money Donation</MenuItem>
                            </Select>
                            
                        <TextField
                            id="outlined-multiline-flexible"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            label="Description"
                            multiline
                            maxRows={10}
                        />
                        
                        <TextField
                            id="outlined-basic"
                            value={quantity}
                            onChange={(event) => setquantity(event.target.value)}
                            label="Quantity"
                            variant="outlined"
                        />
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                Post
                            </Button>
                        </ThemeProvider>

                    </Box>

                </form>
            </div>
        </div >
    )
}

export default DonorCreateDonation;

