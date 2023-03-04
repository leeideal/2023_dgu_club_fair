import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material/';
import styled from 'styled-components';
import MainButton from '../components/Main/MainButton';
import { useNavigate } from 'react-router-dom';

const DateSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  &:hover {
    background-color: #fff2d9;
    border-radius: 50%;
  }
`;

const Booth = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container component="main">
        <Grid container sx={{}}>
          <Grid
            item
            xs={12}
            gap={7}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '10vh',
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
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '10vh',
            }}
          >
            <DateSection>
              <Typography
                sx={{
                  fontFamily: 'insungitCutelivelyjisu',
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#FFA800',
                  },
                }}
              >
                Thu
                <br />9
              </Typography>
            </DateSection>
            <DateSection>
              <Typography
                sx={{
                  fontFamily: 'insungitCutelivelyjisu',
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#FFA800',
                  },
                }}
              >
                Fri
                <br />
                10
              </Typography>
            </DateSection>
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
