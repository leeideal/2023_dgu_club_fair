import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <p>3D modeling test 후 반영 예정(임시)</p>
        <br />
        <Button variant="contained" onClick={() => navigate('/about')}>
          ABOUT
        </Button>
        <br />
        <Button variant="contained" onClick={() => navigate('/booth')}>
          Booth
        </Button>
        <br />
        <Button variant="contained" onClick={() => navigate('/introduction')}>
          Introduction
        </Button>
      </Box>
    </>
  );
};

export default Main;
