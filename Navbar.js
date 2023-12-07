import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{marginRight:'16px'}}>Home</Typography>
        <Typography variant="h6" style={{marginRight:'16px'}}>About Us</Typography>
        <Typography variant="h6" style={{marginRight:'16px'}}>Contact</Typography>
        <Typography variant="h6" style={{marginRight:'16px'}}>menu</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;