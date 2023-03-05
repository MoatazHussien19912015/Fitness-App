import React, {useEffect, useState} from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import { useSelector, useDispatch } from 'react-redux';
import { getAllExercises, searchExercises } from '../store/actions/exerciseActions';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const HomePage = () => {
  
  return (
    <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
    </Box>
  )
}

export default HomePage;