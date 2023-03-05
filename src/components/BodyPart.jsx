import { Stack } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
//import Icon from './../assets/icons/gym.png';
import { useSelector } from 'react-redux';
import { setBodyPart } from '../store/actions/exerciseActions';
import * as x from './../assets/index';
const BodyPart = ({item}) => {
  const dispatch = useDispatch();
  const bodyPart = useSelector(state=>state.exercisesReducer.bodyPart);
  const handleBodyPart = () => {
    dispatch(setBodyPart(item));
    const divElement = document.getElementById('exercises');
      divElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Stack alignItems='center' justifyContent='center' className='bodyPart-card' 
    sx={{borderTop: bodyPart === item?'4px solid red':'',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '280px',
    cursor: 'pointer',
    gap: '48px'}} onClick={handleBodyPart}>
      <img src={x[item.replace(' ', '')]} alt='dumbbell' style={{width: '100px', height: '100px'}} />
      {item}
    </Stack>
  )
}

export default BodyPart;