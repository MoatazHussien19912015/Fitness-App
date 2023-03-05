import React from 'react';
import { Stack, Button } from '@mui/material';
import HeroImage from './../assets/kari-pearce2.jpg';
const HeroBanner = () => {
  return (
    <Stack justifyContent='flex-end' sx={{marginTop: '20px', backgroundImage:  `url(${HeroImage})`, backgroundPosition: 'center', backgroundSize: '100% 100%', height: '1000px', backgroundRepeat: 'no-repeat', }} position='relative' p='20px'>
        <Button  variant='contained' href='#exercises' sx={{backgroundColor: '#FF2625', padding: '15px', width: '300px'}}>Explore Exercieses</Button>
        {/* <img src={HeroImage} alt='banner' className='hero-banner-img' /> */}
    </Stack>
  )
}

export default HeroBanner;