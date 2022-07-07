import { Card, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'

export default function AboutUs() {
  return (
    <Container component ="main" maxWidth='md'>
      <CssBaseline />
        <Typography component="h2" variant="h4" color="secondary" align="center" sx={{mt:10}}>ABOUT US</Typography>

        <Grid container spacing={1} >
          
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{maxWidth:350}}>
          
              <CardMedia
                component="img"
                height="350"

                image="https://fightworxtaunton.co.uk/wp-content/uploads/2017/01/Sonny-300x300.jpg"
                alt="coach"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                  Santiago Johnes
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{maxWidth:350}}>
          
              <CardMedia
                component="img"
                height="350"

                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXm6cOj2Jm0Nj5RnHAWwk3OdLNujutk9jw4wDuUim3akk2cVjAQIDFovW_JYk6lyU62jo&usqp=CAU"
                alt="coach"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                  Jon Jones
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{maxWidth:350}}>
          
              <CardMedia
                component="img"
                height="350"

                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KXpPI8fAWcO4mJHmWi7bS4PWe_JEqQHL_A&usqp=CAU"
                alt="coach"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                  Mick Nilson
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          
        </Grid>
    </Container>
  )
}
