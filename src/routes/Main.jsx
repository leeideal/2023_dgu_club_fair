import React from 'react';
import { Box } from '@mui/material';
import Navigation from '../components/Nav/Navigation';

const Main = () => {
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
      </Box>
    </>
  );
};

export default Main;
