import React, { useState } from 'react';
import { BoothCardContainer } from '../components/Introduction/styles';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../components/Introduction/CategoryFilter';
import BoothCard from '../components/Introduction/BoothCard';

import { Box } from '@mui/material';

import Navigation from '../components/Nav/Navigation';

const Introduction = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
        }}
      >
        <Navigation />
      </Box>
      <CategoryFilter />
    </>
  );
};

export default Introduction;
