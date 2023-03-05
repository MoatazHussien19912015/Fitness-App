import { Typography, Box, Stack, Pagination } from '@mui/material';
import React, {useState, useEffect} from 'react';
import ExerciseCard from './ExerciseCard';
import { useSelector, useDispatch } from 'react-redux';
import { getExercises } from '../store/actions/exerciseActions';
const Exercises = () => { 
  const exercises = useSelector(state=>state.exercisesReducer.exercises);
  const bodyPart = useSelector(state=>state.exercisesReducer.bodyPart);
  const searchTerm = useSelector(state=>state.exercisesReducer.searchTerm);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = '9';
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.length?exercises.slice(indexOfFirstExercise, indexOfLastExercise):[];
  const paginate = (e, value) => { e.preventDefault();
    setCurrentPage(value);
    const divElement = document.getElementById('exercises');
    divElement.scrollIntoView({ behavior: 'smooth' });
    //window.scrollTo({top: '1500', behavior: 'smooth'});
  };

  useEffect(() => {
    if(bodyPart)dispatch(getExercises());
  }, [bodyPart]);
  
  return (
    <Box id='exercises' 
    sx={{mt: {lg: '100px'}}}
    mt='50px'
    p='20px'>
      <Typography variant='h3' mb='40px'>Showing Results</Typography>
      <Stack direction='row' sx={{gap: {xs: '20px', lg: '50px'}}} justifyContent='center' flexWrap='wrap'>
      {currentExercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise}></ExerciseCard>
      ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9&& 
          <Pagination color='primary' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)} size='large'
          page={currentPage} onChange={paginate}>
          </Pagination>}
      </Stack>

    </Box>
  )
}

export default Exercises;