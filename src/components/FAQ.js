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
          <Typography>Do I need equipment for my training?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          <Typography>
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
          <Typography>
            You need to have above 10 years old. 
          </Typography>
        </AccordionDetails>

        

      </Accordion>
    </Box>
    </Container>
  );
}
