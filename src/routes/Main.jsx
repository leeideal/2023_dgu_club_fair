import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Nav/Navigation';

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
        <Navigation />
        <button onClick={() => navigate('/submit')}>데이터 넣으러가기</button>
      </Box>
    </>
  );
};

export default Main;
