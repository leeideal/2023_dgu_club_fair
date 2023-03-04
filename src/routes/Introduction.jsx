import React, { useState } from 'react';
import { BoothCardContainer } from '../components/Introduction/styles';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../components/Introduction/CategoryFilter';
import BoothCard from '../components/Introduction/BoothCard';
import MainButton from '../components/Main/MainButton';
import { Box } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { LogoButton } from '../components/Booth/BoothStyled';

const Introduction = () => {
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
        <LogoButton
          src={Logo}
          onClick={() => {
            navigate('/');
          }}
        />
        <MainButton
          pageCurrent
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
      <CategoryFilter />
    </>
  );
};

export default Introduction;
