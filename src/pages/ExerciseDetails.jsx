import { Box } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import axios from 'axios';
/* import {exercisesOptions, fetchData, youtubeOptions} from './../utils/fetchData'; */
const ExerciseDetails = () => {
  const {id} = useParams();
  const exerciseData = useSelector(state=>state.exercisesReducer.exercises.find(item=>item.id == id));
  const exercises = useSelector(state=>state.exercisesReducer.exercises);
  //const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const targetMuscleExercises = useSelector(state=>state.exercisesReducer.exercises.filter(item=>item.target==exerciseData.target).slice(0, 10));
  const equipmentExercises = useSelector(state=>state.exercisesReducer.exercises.filter(item=>item.equipment==exerciseData.equipment).slice(0, 10));
  
  useEffect(() => {
    const fetchExercisesData = async () => {

      const exerciseVideosData = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${exerciseData.name} exercise&key=${process.env.REACT_APP_YOUTUBE_KEY}&part=snippet`);
      
      setExerciseVideos(exerciseVideosData.data.items);
    
    };

    fetchExercisesData();
  }, [id]);
  if (!exerciseData) return <div>No Data</div>;
  
  return (
    <Box sx={{ mt: { lg: '60px', xs: '30px' } }}>
      <Detail exerciseDetail={exerciseData} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseData.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails;