import { Card, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'

export default function AboutUs() {
  return (
    <Container component ="main" maxWidth='md'>

      <CssBaseline />
        <Typography component="h2" variant="h4" color="secondary" align="center" sx={{mt:10}}>WILD GEESE Martial Arts</Typography>
        
        <Grid container spacing={1} >
          <Grid item >
            <Typography align="center">
              Wild Geese is first and foremost about the will to train, to strive, to work.
              All our instructors are highly skilled practitioners of their respective arts.
            </Typography>
            
            <br/>

            <Typography align="center">
              It’s about being willing to put ego aside and learn.
              It’s not about collecting accolades, although our instructors and students have plenty, it’s about collecting experience, knowledge, scars and camaraderie. 
            </Typography>
            
            <br />
            
            <Typography align="center">
              Each has studied, trained and competed at the highest level and have all trained up students that have done the same.
            </Typography>
            
            <br />

            <Typography align="center">
              The highest level of instructor is one who creates students better than he is.
              Ours have done so and will continue to do so.
            </Typography>
          </Grid>
          
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
                The founding member of Wild Geese Martial Arts. Since taking up martial arts back in 1985 he has trained in several martial styles, most notably Muay Thai.
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
                Started his Muay Thai training in 1990. He continued to train up the ranks until college.
                He eventually returned to training, as a way of relieving the stress of his hectic job. 
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
                  Practices what he preaches which is reflected in his impressive achievements in Brazilian Jiu Jitsu. He is a fully qualified nutrition coach with a passion for food.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          
        </Grid>
    </Container>
  )
}
