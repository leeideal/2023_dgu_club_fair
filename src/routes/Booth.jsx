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
    color: #ffa800;
    background-color: #fff2d9;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const SelectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 3px solid #ffd98e;
  border-radius: 50px;
`;

const SelectButton = styled.button`
  width: 49%;
  height: 90%;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #603900;
  cursor: pointer;
  font-family: 'insungitCutelivelyjisu';
  &:hover {
    background-color: #ffd98e;
    border-radius: 50px;
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
                }}
              >
                Fri
                <br />
                10
              </Typography>
            </DateSection>
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
            <SelectSection>
              <SelectButton>동아리 부스</SelectButton>
              <SelectButton>공연 타임테이블</SelectButton>
            </SelectSection>
          </Grid>
          <Grid item xs={12} md={7} sx={{}}>
            지도 이미지
          </Grid>
          <Grid item xs={12} md={5} sx={{}}>
            동아리 리스트
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Booth;
