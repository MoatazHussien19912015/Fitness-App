import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './../components/Loader';
const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: '50px', xs: '20px' } }} p='20px'>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, textAlign: 'center' }} fontWeight={700} color='#000' mb='33px'>
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent='center' flexWrap='wrap' alignItems='center'>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <Box
            key={index}
            
          >
            <Link to={`https://www.youtube.com/watch?v=${item.id.videoId}`}
              target='_blank'><img style={{ borderRadius: '5px', border: '3px solid black' }} src={item.snippet.thumbnails.default.url} alt={item.snippet.title} /></Link>
            <Box>
              <Typography sx={{ fontSize: { lg: '20px', xs: '16px' } }} fontWeight={600} color='#000'>
                {item.snippet.title}
              </Typography>
              <Link style={{textDecoration: 'none'}} to={`https://www.youtube.com/channel/${item.snippet.channelId}`}
                target='_blank'><Typography fontSize='14px' color='#000' >
                  {item.snippet.channelTitle}
                </Typography></Link>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos;