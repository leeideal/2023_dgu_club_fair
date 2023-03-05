import React, { useContext, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material/';
import MainButton from '../components/Main/MainButton';
import { useNavigate } from 'react-router-dom';
import ClubListComponent from '../components/Booth/ClubListComponent';
import styled from 'styled-components';
import { theme } from '../theme';
import Logo from '../assets/images/Logo.png';
import MapCurrent from '../components/Booth/MapCurrent';
import { LinkContext } from '../context/LinkContext';
import { testingData10, testingData9 } from '../components/Dummy/SampleData';
import TimeTable from '../components/Booth/TimeTable';
import { LogoButton, SelectSection } from '../components/Booth/BoothStyled';

// Props Styled-----------------------------------------------------------
const DateSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.dateCurrent ? '#ffa800' : 'black')};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${theme.pointColor};
    background-color: ${theme.secondaryColor};
  }
`;

const SelectButton = styled.button`
  width: 49%;
  height: 90%;
  background-color: ${(props) =>
    props.toggleCurrent ? theme.secondaryColor : 'transparent'};
  border: none;
  border-radius: 50px;
  font-size: 16px;
  color: ${theme.pointColor};
  cursor: pointer;
  font-family: 'insungitCutelivelyjisu';
  transition: 0.2s;
  &:hover {
    background-color: ${theme.primaryColor};
  }
`;

// Dummy Data-------------------------------------------------------------
const clubList9 = [
  testingData9?.map((club) => (
    <ClubListComponent key={club.id} id={club.id} name={club.name} />
  )),
];
const clubList10 = [
  testingData10?.map((club) => (
    <ClubListComponent key={club.id} id={club.id} name={club.name} />
  )),
];

const Booth = () => {
  // Hooks 관리-----------------------------------------------------------
  const navigate = useNavigate();
  const [dateCurrent, setDateCurrent] = useState(true);
  const [toggle, setToggle] = useState(true);
  const { idParams } = useContext(LinkContext);

  return (
    <>
      <Container component="main">
        <Grid
          container
          sx={{
            fontFamily: 'insungitCutelivelyjisu',
            justifyContent: 'space-around',
          }}
        >
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
              minHeight: '5vh',
            }}
          >
            <DateSection
              dateCurrent={dateCurrent}
              onClick={() => setDateCurrent(!dateCurrent)}
            >
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
            <DateSection
              dateCurrent={!dateCurrent}
              onClick={() => setDateCurrent(!dateCurrent)}
            >
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
              minHeight: '13vh',
            }}
          >
            <SelectSection>
              <SelectButton
                onClick={() => setToggle(!toggle)}
                toggleCurrent={toggle}
              >
                동아리 부스
              </SelectButton>
              <SelectButton
                onClick={() => setToggle(!toggle)}
                toggleCurrent={!toggle}
              >
                공연 타임테이블
              </SelectButton>
            </SelectSection>
          </Grid>
          {toggle ? (
            <Grid item xs={12} md={6}>
              <MapCurrent idParams={idParams} />
            </Grid>
          ) : (
            ''
          )}
          {toggle ? (
            <Grid
              item
              xs={12}
              md={4.5}
              sx={{
                margin: 4,
                height: '60vh',
                overflowY: 'auto',
                scrollbarColor: 'red',
                '&:-webkitScrollbar': {
                  width: '8px',
                  height: '8px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.4)',
                },
                '&:-webkitScrollbarThumb': {
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '6px',
                },
              }}
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
              <Grid item sx={{ position: 'relative', height: '100%' }}>
                {dateCurrent ? [...clubList9] : [...clubList10]}
              </Grid>
            </Grid>
          ) : (
            ''
          )}
          {!toggle ? (
            <Grid item xs={12}>
              <TimeTable dateCurrent={dateCurrent}></TimeTable>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Booth;
