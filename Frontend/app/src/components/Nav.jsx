import { AppBar, Button, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <AppBar position='static' style={{backgroundColor:'black'}} >
            <Toolbar >
              
                <Typography variant='h4' color='Success'>MERCATO</Typography>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                <Button variant="text"><Link to={'/home'} style={{color :'white'}}>Home </Link> </Button>
                <Button variant="outlined" style={{marginLeft:"auto"}}><Link to={'/log'} style={{color :'white'}}>Registration</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="outlined" ><Link to={'/sign'} style={{color :'white'}}>Sign_in</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}
