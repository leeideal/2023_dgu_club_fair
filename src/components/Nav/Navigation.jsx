import { Grid } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoButton } from '../Booth/BoothStyled';
import MainButton from '../Main/MainButton';
import Logo from '../../assets/images/Logo.png';

const Navigation = () => {
  const navigate = useNavigate();
  const pageCurrent = useLocation();

  return (
    <>
      <Grid
        item
        xs={12}
        gap={4}
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
          pageCurrent={pageCurrent.pathname}
          location="/introduction"
          buttonName="동아리 소개"
          onClick={() => navigate('/introduction')}
        ></MainButton>
        <MainButton
          pageCurrent={pageCurrent.pathname}
          location="/booth"
          buttonName="동아리 부스"
          onClick={() => navigate('/booth')}
        ></MainButton>
        <MainButton
          pageCurrent={pageCurrent.pathname}
          location="/about"
          buttonName="ABOUT"
          onClick={() => navigate('/about')}
        ></MainButton>
      </Grid>
    </>
  );
};

export default Navigation;
