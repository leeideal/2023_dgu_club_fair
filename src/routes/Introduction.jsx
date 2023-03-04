import React, { useState } from 'react';
import { BoothCardContainer } from '../components/Introduction/styles';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../components/Introduction/CategoryFilter';
import BoothCard from '../components/Introduction/BoothCard';
import MainButton from '../components/Main/MainButton';
import { Box } from '@mui/material';

const Introduction = () => {
  const navigate = useNavigate();
  const [booth, setBooth] = useState([
    {
      id: 1,
      title: '멋쟁이사자처럼',
      introduction: '#코딩 #창업',
      type: 1,
      likeCnt: 100,
      images: [
        {
          id: 1,
          originFileName: '멋사.jpg',
          serverFileName: '6fb151081add763ec08da678a9578eff',
          storedFilePath: 'https://han.gl/pYMEv',
        },
      ],
    },
  ]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
      <BoothCardContainer>
        {booth.map((boo) => {
          return (
            <BoothCard
              key={boo.id}
              boothId={boo.id}
              title={boo.title}
              intro={boo.introduction}
              likeCnt={boo.likeCnt}
              boothImage={boo.images[0]}
              type={boo.type}
            />
          );
        })}
      </BoothCardContainer>
    </>
  );
};

export default Introduction;
