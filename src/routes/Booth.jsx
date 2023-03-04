import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material/';
import styled from 'styled-components';
import MainButton from '../components/Main/MainButton';

const Booth = () => {
  return (
    <>
      <Container component="main">
        <Grid container sx={{ border: '1px solid black' }}>
          <Grid
            item
            xs={12}
            sx={{
              border: '1px solid black',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MainButton buttonName="동아리 소개"></MainButton>
            <MainButton buttonName="동아리 부스"></MainButton>
            <MainButton buttonName="ABOUT"></MainButton>
          </Grid>
          <Grid item xs={12} sx={{ border: '1px solid black' }}>
            2
          </Grid>
          <Grid item xs={12} sx={{ border: '1px solid black' }}>
            3
          </Grid>
          <Grid item xs={12} md={7} sx={{ border: '1px solid black' }}>
            4
          </Grid>
          <Grid item xs={12} md={5} sx={{ border: '1px solid black' }}>
            5
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Booth;
