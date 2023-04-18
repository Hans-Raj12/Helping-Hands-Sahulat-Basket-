import React from 'react'
import { useState } from 'react';
import "./CreatePost.css"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const CreatePost = () => {
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
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [document, setDocument] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
        console.log({
            name,
            number,
            address,
            description,
            document
        });
    };
    return (
        <div className='ngo-post'>
            <h1 className='heading'>Create Fundraising Post</h1>
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
                            label="Name"
                            variant="outlined" />

                        <TextField
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            value={number}
                            onChange={(event) => setNumber(event.target.value)} />

                        <TextField
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)} />

                        <TextField
                            id="outlined-multiline-flexible"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            label="Description"
                            multiline
                            maxRows={10}
                        />

                        <Stack direction="row" alignItems="center" spacing={2}>
                        <label className='document'>Upload Document:</label>

                        <ThemeProvider theme={theme}>
                            <Button  variant="contained" component="label" color="primary">
                                Upload
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                            </ThemeProvider>
                        </Stack>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary">
                                Submit
                            </Button>
                        </ThemeProvider>

                    </Box>

                </form>
            </div>
        </div >
    )
}

export default CreatePost

