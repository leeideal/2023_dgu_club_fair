import React from 'react';
import styled from 'styled-components';

const ClubPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClubImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

const ClubTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const ClubDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ClubPage = ({club}) => {
  return (
    <ClubPageWrapper>
        
      <ClubImage src={club.main_image} alt="Club Image" />
      <ClubTitle>{club.title}</ClubTitle>
      <ClubDescription>

      </ClubDescription>
      {/* Add more components here for additional information */}
    </ClubPageWrapper>
  );
};

export default ClubPage;