import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import MainButton from '../components/Main/MainButton';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          height: '100vh',
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
          buttonName="ABOUT"
          onClick={() => navigate('/about')}
        ></MainButton>
      </Box>
    </>
  );
};

export default Main;
