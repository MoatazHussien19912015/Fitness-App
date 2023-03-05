import React from 'react';
import Logo from '../assets/dumbbell.jpg';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
const Navbar = () => {
  return (
    <Stack direction='row'  /* sx={{gap: {xs: '40px', sm: '122px'}, mt: {xs: '20px', sm: '32px'}, px: '20px', justifyContent: 'none'}} */>
        <Link to='/'>
            <img src={Logo} alt='logo' style={{width: '48px', height: '48px', margin: '20px'}} />
        </Link>
        <Stack direction='row' gap='20px' fontSize='24px' alignItems={'center'}>
            <Link to='' style={{textDecoration: 'none', color: '#3A1212'}}>Home</Link>
            <a href='#exercises' style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
        </Stack>

    </Stack>
  )
}

export default Navbar;