import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Pricing() {
  return (
    <Container sx={{mb:10}}>
      <Grid container 
        justifyContent="center"
        spacing={1}
        marginTop={8}>
          
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{maxWidth:330}}>
            <CardMedia
              component="img"
              height="350"
              image="https://londonfightfactory.com/wp-content/uploads/2021/01/Muay-Thai-Boxing-Class-Sparring-Partner-Work.jpg"
              alt="coach"
            />

            <CardContent>
              <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              textAlign={'center'}
              >
                Single Training
              </Typography>

              <Typography 
              variant="h6" 
              color="text.secondary" 
              textAlign={'center'}
              style={{ color: '#ff0000'}}
              >
                15 Euro
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{maxWidth:330}}>
            <CardMedia
              component="img"
              height="350"
              image="https://youjiujitsu.com/wp-content/uploads/2019/05/15525975332_8379ec7aa9_b.jpg"
              alt="BJJ training"
              />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                Monthly Subscription
              </Typography>

              <Typography 
              variant="h6" 
              color="text.secondary" 
              textAlign={'center'}
              style={{ color: '#ff0000'}}
              >
                100 Euro
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container 
        justifyContent="center"
        spacing={1}
        marginTop={2}>
          
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{maxWidth:330}}>
            <CardMedia
              component="img"
              height="350"
              image="https://www.tigermuaythai.com/wp-core/wp-content/uploads/2016/03/tmt-class-muay-thai-intermediate-01.jpg"
              alt="Muay Thai training"
              />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                Yearly Subscription
              </Typography>

              <Typography 
              variant="h6" 
              color="text.secondary" 
              textAlign={'center'}
              style={{ color: '#ff0000'}}
              >
                1000 Euro
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{maxWidth:330}}>
            <CardMedia
              component="img"
              height="350"
              image="https://cdn.onefc.com/wp-content/uploads/2019/06/Petchmorakot-AAA_8563.jpg"
              alt="individual training"
              />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                Individual Session
              </Typography>

              <Typography 
              variant="h6" 
              color="text.secondary" 
              textAlign={'center'}
              style={{ color: '#ff0000'}}
              >
                50 Euro
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
