import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Button } from '@mui/material';
import RightArrowIcon from '@mui/icons-material/NavigateNext';
import LeftArrowIcon from '@mui/icons-material/NavigateBefore';
import BodyPart from './BodyPart';
import { useSelector } from 'react-redux';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Button onClick={() => scrollPrev()} >
       <LeftArrowIcon/>
      </Button>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Button onClick={() => scrollNext()} >
        <RightArrowIcon />
      </Button>
    );
  };
const HorizontalScrollbar = ({data, isBodyPart}) => {
   /*  const bodyPart = useSelector(state=>state.exercisesReducer.bodyPart); */
  return (
    <Box sx={{width: {lg: '1500px', md: '900px', xs: '400px'}}}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id}
          m="0 40px"
        >
            {/* <BodyPart item={item}  bodyPart={bodyPart} /> */}
          {isBodyPart?<BodyPart item={item} /* setBodyPart={setBodyPart} bodyPart={bodyPart} */ />:
          <ExerciseCard exercise={item} />}
        </Box>
      ))}
    </ScrollMenu>
    </Box>
  )
}

export default HorizontalScrollbar;