import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';

export default function FAQ() {
  return (
    <Container component ="main" maxWidth='md'>

    <Box sx={{mt:10}}>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What are the benefits of trainings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={'Merriweather'} >
            Positive effects from sport activity are weight lost, personal development and improvement in mental health.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do I need equipment for my training?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            We recommend to bring your own training equipment, but if you do not have it we can provide all equipment needed.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I mix Muay Thai and Jiu Jitsu trainings?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            You can attend all trainings. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What age you need to be to start trainings in your club?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            You need to have above 10 years old. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Can I start trainings out of shape?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            There is never a bad time to start training. Our professional coaches will make sure to adjust training for your needs. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Should I have a meal before training?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            Avoid eating 2 hours before training. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Should I bring water?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            We recommend to bring your own water, as you will need to rehydrate yourself after training. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography >Are there separate groups for man and females?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            Nope man and females train on the same sessions. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>What if I get injured?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            As in every activity injuries happen. We have best facilities and coaches which will help you to avoid and if it happens we will assist you. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Why personal training?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontFamily={'Merriweather'}>
            A personal trainer can support you with personalized training to reach your fitness and technique goals. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Container>
  );
}
