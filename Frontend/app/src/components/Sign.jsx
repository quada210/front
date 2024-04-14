import React, { useState } from 'react'
import img from './images/sign.jpg'
import { Card, CardContent, Grid, Table, TableContainer, TableRow, Typography,TextField, Button, Paper, TableCell } from '@mui/material'
import { Link } from 'react-router-dom'
export const Sign = () => {
 
    const background={
        backgroundImage:`url(${img})`,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'50px',
    }
  
  return (
    <div style={background}>
              <Typography variant='h1' color={'blue'}>Sign-in</Typography><br /><br />
              <Grid
               container
 
               justifyContent="center"
               alignItems="center"
             >
                <Card>
                    <CardContent>
                        <TableContainer component={Paper} >
                            <Table sx={{minWidth:1}}  aria-label="simple table" >
                               <TableRow>
                               <TableCell>Email:</TableCell>
       <TableCell> <TextField label="Email" variant="filled" color="success" focused /></TableCell>
                               </TableRow>
                               <TableRow>
        <TableCell>Password:</TableCell>
       <TableCell> <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          color='success' focused
          autoComplete="current-password"
          variant="standard"
        /> </TableCell>
        </TableRow>
        
        <TableRow>
          <TableCell><Button variant="text"><Link to={'/log'}>Registration ?</Link></Button></TableCell>
          

       <TableCell> <Button variant="contained" color='success'>Submit</Button></TableCell>
        </TableRow>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>

                </Grid>
    </div>

  )}
