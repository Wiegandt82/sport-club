import { Button, Container, Grid, TextField } from '@mui/material'
import React, { useState }  from 'react'

export default function ContactUs() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const handleForm = (e) => {

        e.preventDefault(); 

        console.log("Form submitted:  ");
        console.log({name, email, subject, message});
    }
  return (
    <Container maxWidth='md' sx={{ mt:12 }} >
        <form onValidate onSubmit={handleForm}>
            <TextField
                label='Full Name'
                name='name'
                fullWidth
                required
                sx={{ mt:2 }}
                onCHange={(e) => {setName(e.target.value); console.log(name)}}
                >
            </TextField>

            <TextField
                label='Email'
                name='email'
                fullWidth
                required
                sx={{ mt:2 }}
                onCHange={(e) => {setEmail(e.target.value); console.log(email)}}
                >
            </TextField>

            <TextField 
                label='Subject' 
                name='subject' 
                required
                fullWidth
                sx={{ mt:2 }}
                onChange={(e) => setSubject(e.target.value)}
                >
            </TextField>

            <TextField 
                label='Message' 
                name='message' 
                fullWidth 
                required
                multiline 
                rows={6}
                sx={{ mt:2 }}
                onChange={(e) => setMessage(e.target.value)}
                >
            </TextField>  
                 
            <Grid container spacing={2}>
                <Grid item>
                    <Button 
                    type='submit'
                    variant = 'contained'
                    sx={{ mt:2 }}
                    >
                        Submit
                    </Button>
                </Grid>
                
                <Grid item>
                    <Button 
                    type='reset'
                    sx={{ mt:2 }}
                    variant = 'contained'
                    >
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>
  )
}
