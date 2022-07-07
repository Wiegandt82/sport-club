import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(time, monday, tuesday,wednesday, thursday, friday, saturday) {
  return { time, monday, tuesday,wednesday, thursday, friday, saturday };
}

const rows = [
  createData('7:00am - 8.30am', 'Muay Thai', 'Jiu Jitsu', 'Muay Thai', 'Jiu Jitsu', 'Muay Thai', 'Jiu Jitsu'),
  createData('12:00am - 13.30am', 'Jiu Jitsu', 'Jiu Jitsu', 'Jiu Jitsu', 'Muay Thai', 'Muay Thai', 'Muay Thai'),
  createData('17:00am - 18.30am', 'Muay Thai', 'Muay Thai', 'Jiu Jitsu', 'Jiu Jitsu','Muay Thai', '-'),
  createData('19:00am - 20.30am', 'Muay Thai', 'Muay Thai', 'Jiu Jitsu', 'Jiu Jitsu','Muay Thai', '-'),
  createData('21:00am - 22.30am', 'Muay Thai', 'Jiu Jitsu', 'Muay Thai', 'Jiu Jitsu', 'Muay Thai', '-'),
];

export default function CustomizedTables() {
  return (
    <Container  component ="main" maxWidth="md" minWidth="xs">
      <TableContainer component={Paper} >
        <Table sx={{minWidth: 100, mt:8 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Time</StyledTableCell>
              <StyledTableCell align="center">Monday</StyledTableCell>
              <StyledTableCell align="center">Tuesday</StyledTableCell>
              <StyledTableCell align="center">Wednesday</StyledTableCell>
              <StyledTableCell align="center">Thursday</StyledTableCell>
              <StyledTableCell align="center">Friday</StyledTableCell>
              <StyledTableCell align="center">Saturday</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.time}</StyledTableCell>
                <StyledTableCell align="center">{row.monday}</StyledTableCell>
                <StyledTableCell align="center">{row.tuesday}</StyledTableCell>
                <StyledTableCell align="center">{row.wednesday}</StyledTableCell>
                <StyledTableCell align="center">{row.thursday}</StyledTableCell>
                <StyledTableCell align="center">{row.friday}</StyledTableCell>
                <StyledTableCell align="center">{row.saturday}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container 
        justifyContent="center"
        spacing={2}
        marginTop={5}>
          
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
      </Grid>
    </Container>
  );
}
