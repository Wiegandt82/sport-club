import React from 'react';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';

export default function LandingPage() {
  return (
    <Container component ="main" maxWidth="xs">
        <CssBaseline />
            <Grid container>
                <Grid item lg={12}>
                <Typography component="h2" variant="h3" color="secondary" align="center" sx={{mt:10}}>
                    WILD GEESE Martial Arts 
                </Typography>

                </Grid>
            </Grid>
    </Container>
  )
}
