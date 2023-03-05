import { Button, Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const ExerciseCard = ({exercise}) => {
  return (
    <Box sx={{textDecoration: 'inherit'}} component={Link} className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' style={{minWidth: '200px', maxWidth: '100%', height: 'auto'}} height='auto' />
        <Stack direction='row' justifyContent='center' gap='10px'>
         
          <Button variant='contained'   sx={{borderRadius: '10px', backgroundColor: 'red', fontWeight: 'bold', paddingTop: '10px'}} >{exercise.bodyPart}</Button>
          <Button variant='contained'   sx={{borderRadius: '10px', backgroundColor: 'red', fontWeight: 'bold', paddingTop: '10px'}}>{exercise.target}</Button>
        </Stack>
        <Typography ml='20px' fontWeight='bold' color='#000' mt='10px' pb='10px' textTransform='capitalize' fontSize='24px'>{exercise.name}</Typography>
    </Box>
  )
}

export default ExerciseCard;