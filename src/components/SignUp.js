import React from 'react'
import Grid from '@mui/material/Grid'
import { Avatar, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Box from '@mui/material/Box'; 
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const theme = createTheme();

export default function SignUp() {
  return (
    <div>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth='xs' sx={{mb:10}}>
                <CssBaseline />
                <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
                >
                    <Avatar sx={{
                            m: 1, bgcolor: 'secondary.main'
                            }}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant='h5'>
                            Sign Up 
                        </Typography>

                    <Grid container spacing={2}>
                        <Box component="form" noValidate sx={{mt:3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete='give-name'
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label = "First Name"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete='last-name'
                                    name="lastName"
                                    required 
                                    fullWidth 
                                    id="lastName"
                                    label="Last Name"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete='email'
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField 
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    label="Password"
                                    id="password"
                                    autoComplete='new-password'
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="I want to receive inspiration, marketing promotions and updates via email." />
                                </Grid>
                            </Grid>

                            <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx = {{mt: 3, mb: 2}}>
                                Sign Up
                            </Button>

                            <Grid item>
                                <Link 
                                to="/SignIn"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    </div>
            
  )
}