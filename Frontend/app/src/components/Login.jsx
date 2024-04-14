import { Typography,TextField, Grid, InputLabel, FormControl, Input, InputAdornment, Button, TableContainer, TableRow, TableCell,Paper,Table, Card, CardContent} from '@mui/material'
import img from './images/loginback.jpg'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AccountCircle } from '@mui/icons-material'

 

export const Login = () => {

  
    const background={
        backgroundImage:`url(${img})`,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'50px',
    }
  

  return (
    <div style={background}>
      <Typography variant='h1' color={'whitesmoke'}>Registration</Typography><br /><br />
      
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
       <TableCell> <TextField label="Email"  variant="filled" name='email' color="success" focused/></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Name:</TableCell>
       <TableCell>  <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
        name='name'
         
          
          color='success' focused
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Number:</TableCell>
       <TableCell>  <TextField
          id="standard-number"
          label="Number"
          type="number"
          name='number'
         
         
          color='success' focused
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          /></TableCell>
        </TableRow>
        
        <TableRow>
        <TableCell>Password:</TableCell>
       <TableCell> <TextField
          id="standard-password-input"
          label="Password"
          type="password"
         name='password'
          
          
          autoComplete="current-password"
          variant="standard"
          color='success' focused
        /> </TableCell>
        </TableRow>
    
        <TableRow>
          <TableCell><Button variant="text"><Link to={'/sign'}>Already have a account ?</Link></Button></TableCell>
          

       <TableCell> <Button variant="contained"  color='success'>Submit</Button></TableCell>
        </TableRow>
    
        </Table>

</TableContainer>
      

</CardContent>
      </Card>

      
      </Grid>
      
    </div>
  )
}