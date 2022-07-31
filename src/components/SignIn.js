import React, { useState } from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Avatar, Container, CssBaseline, Box, Typography, TextField, Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
import {Link} from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   export default function SignIn({ setToken }) {
    const theme = createTheme();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(password,email);
        const token = await loginUser({
            email,
            password
          });
          
          console.log(token,"token");
          setToken(token);
    }

  return (
    <div> 
        <ThemeProvider theme={theme}>
            <Container component ="main" maxWidth="xs" sx={{mb:10}}>
                <CssBaseline /> 
                <Box 
                    sx= {{
                    marginTop : 8, 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}>

                    <Avatar sx={{
                        m: 1, bgcolor: 'secondary.main'
                        }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant='h5'>
                        Sign In 
                    </Typography>

                    <Box component="form"  noValidate sx={{mt: 1}} onSubmit={(e) => handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={ (e) => setEmail(e.target.value)}
                                    autoFocus>
                                    
                                </TextField>

                            </Grid>

                            <Grid item xs={12}>
                                    
                                <TextField
                                required
                                fullWidth
                                name="password"
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={ (e) => setPassword(e.target.value)}
                                autoFocus>
                                </TextField>

                            </Grid>
                            
                            <Grid item xs={12}>
                                <FormControlLabel
                                control={<Checkbox value="remember" color="secondary" />}
                                label ="Remember me" />
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2}}
                                    >
                                    Sign in 
                                </Button>
                            </Grid>

                            <Grid item>
                                <Link to="/SignUp">
                                    {"Don't have an account ? Sign up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    </div>
  )
}

