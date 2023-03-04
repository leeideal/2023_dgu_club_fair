import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material/';
import styled from 'styled-components';
import MainButton from '../components/Main/MainButton';
import { useNavigate } from 'react-router-dom';

const Booth = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container component="main">
        <Grid container sx={{}}>
          <Grid
            item
            xs={12}
            sx={{
              border: '1px solid black',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MainButton
              buttonName="동아리 소개"
              onClick={() => navigate('/introduction')}
            ></MainButton>
            <MainButton
              pageCurrent
              buttonName="동아리 부스"
              onClick={() => navigate('/booth')}
            ></MainButton>
            <MainButton
              buttonName="ABOUT"
              onClick={() => navigate('/about')}
            ></MainButton>
          </Grid>
          <Grid item xs={12} sx={{}}>
            2
          </Grid>
          <Grid item xs={12} sx={{}}>
            3
          </Grid>
          <Grid item xs={12} md={7} sx={{}}>
            4
          </Grid>
          <Grid item xs={12} md={5} sx={{}}>
            5
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Booth;
