import { Button, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, {useState, useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchExercises } from '../store/actions/exerciseActions';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {
    const exercises = useSelector(state=>state.exercisesReducer.exercises);
    const bodyParts = useSelector(state=>state.exercisesReducer.bodyParts);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
  const handleSearch = async () => {
    if(search) {
      dispatch(searchExercises(search));
    }
   
  };
  return (
    <Stack justifyContent='center' alignItems='center' mt='35px' p='20px' >
      <Typography fontWeight={700} textAlign='center' mb='50px' sx={{fontSize: {lg: '44px', xs: '30px'}}}>Awesome Exercise You <br /> Should Know</Typography>
      <Box position='relative' mb='72px'>
        <TextField sx={{input: {fontWeight: '700',  border: 'none', borderRadius: '4px'}, backgroundColor: 'white', borderRadius: '40px', 
        width: {xs: '350px', lg: '800px'}, }}
         height='76px' value={search} placeholder='Search Exercises' type='text' onChange={(e)=>setSearch(e.target.value.toLowerCase())} />
         <Button className='search-btn' sx={{backgroundColor: '#FF2625', color: '#FFF', marginLeft: '5px', textTransform: 'none', width: {lg: '175px', xs: '80px'},
        fontSize: {lg: '20px', xs: '14px'}, height: '56px', position: 'absolute', right: '0'}}
        onClick={handleSearch}>Search</Button>
      </Box>
      <Box sx={{position: 'relative', padding: '20px', width: '100'}}>
        <HorizontalScrollbar data={bodyParts}  isBodyPart />
      </Box>
    </Stack>
  )
}

export default SearchExercises;