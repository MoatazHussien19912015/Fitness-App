import React from 'react';
import BodyPartImage from '../assets/body-part.jpeg';
import TargetImage from '../assets/taget.jpeg';
import EquipmentImage from '../assets/equipment.jpg';
import { Stack, Typography, Button } from '@mui/material';
const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      title: 'Body Part',
      name: bodyPart,
    },
    {
      title: 'Target',
      name: target,
    },
    {
      title: 'Equipment',
      name: equipment,
    },
  ];
  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item, i) => (
          <Stack key={i} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '20px', padding: '20px'/*  width: '100px', height: '100px' */ }}> {item.title}
              {/* <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} /> */}
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}

        </Stack>
    </Stack>
  )
}

export default Detail;