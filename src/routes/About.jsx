import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/Main/MainButton';

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        gap={7}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
        }}
      >
        <MainButton
          buttonName="동아리 소개"
          onClick={() => navigate('/introduction')}
        ></MainButton>
        <MainButton
          buttonName="동아리 부스"
          onClick={() => navigate('/booth')}
        ></MainButton>
        <MainButton
          pageCurrent
          buttonName="ABOUT"
          onClick={() => navigate('/about')}
        ></MainButton>
      </Box>
    </>
  );
};

export default About;
