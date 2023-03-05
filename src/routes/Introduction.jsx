import React, { useState } from 'react';
import { BoothCardContainer } from '../components/Introduction/styles';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../components/Introduction/CategoryFilter';
import BoothCard from '../components/Introduction/BoothCard';

import { Box } from '@mui/material';

import Navigation from '../components/Nav/Navigation';
import styled from 'styled-components';
const CTAButton = styled.button`
  background-color: #FFD98E;
  color: #8D5500;
  border: none;
  border-radius: 50px;
  padding: 16px 200px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1200px) {
    font-size: 12px;
    padding: 14px 50px;
}
`;


const Introduction = () => {
  
  
  const handleOnClick = () => {
    window.open('https://dgu-club-fair.netlify.app/', '_blank');

  }

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
      <CTAButton onClick={handleOnClick}>
      동아리 추천 테스트 하러 가기
      </CTAButton>
    </>
  );
};

export default Introduction;
