import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material/';
import styled from 'styled-components';
import MainButton from '../components/Main/MainButton';
import { useNavigate } from 'react-router-dom';
import ClubListComponent from '../components/Booth/ClubListComponent';

const DateSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #ffa800;
    background-color: #fff2d9;
    border-radius: 50%;
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
  transition: 0.2s;
  &:hover {
    background-color: #ffd98e;
    border-radius: 50px;
  }
`;

const clubData = [
  {
    id: 1,
    name: '멋쟁이사자처럼',
  },
  {
    id: 2,
    name: '동그라미',
  },
  {
    id: 3,
    name: '아리랑',
  },
  {
    id: 4,
    name: '페인터즈',
  },
  {
    id: 5,
    name: 'E.L.F',
  },
  {
    id: 6,
    name: '음샘',
  },
  {
    id: 7,
    name: '디콕',
  },
  {
    id: 8,
    name: '명궁',
  },
  {
    id: 9,
    name: '동굴탐험연구회',
  },
  {
    id: 10,
    name: '수중탐험연구회',
  },
  {
    id: 11,
    name: 'LAE',
  },
  {
    id: 12,
    name: '목멱성',
  },
  {
    id: 13,
    name: '한글학교 하람',
  },
  {
    id: 14,
    name: 'FC 엘레펜테',
  },
  {
    id: 15,
    name: '만화얼',
  },
];

const clubList = [
  clubData?.map((club) => (
    <ClubListComponent key={club.id} id={club.id} name={club.name} />
  )),
];

const Booth = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container component="main">
        <Grid container sx={{ fontFamily: 'insungitCutelivelyjisu' }}>
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
          <Grid item xs={12} md={6.5} sx={{ border: '1px solid black' }}>
            지도 이미지
          </Grid>
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{ border: '1px solid black', minHeight: '60vh' }}
          >
            <Grid
              item
              sx={{
                display: 'flex',
                position: 'relative',
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  left: '1%',
                  fontFamily: 'insungitCutelivelyjisu',
                }}
              >
                부스번호
              </Typography>
              <Typography
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%)',
                  fontFamily: 'insungitCutelivelyjisu',
                }}
              >
                동아리 명
              </Typography>
            </Grid>
            <br />
            <br />
            <Grid
              item
              sx={{ position: 'relative', height: '100%', overflowY: 'auto' }}
            >
              {[...clubList]}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Booth;
