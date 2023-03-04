import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const ClubPageWrapper = styled.div`
margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const ClubImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
  
`;

const ClubTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color:#513102;
`;

const ClubDescription = styled.div`
    white-space: pre-wrap;
`;

const ClubHastag = styled.p`
    font-size: 1em;
    color: #FF9B9B;
    
`

const ClubHeader = styled.div`
    
`
const Logo = styled.img`
    width: 20%;
    border-radius: 50%;
    margin-right:15px;
`
const ClubLocation = styled.div`
    margin-top: 30px;
    color: #AA9887;
    font-size:12px;
`

const Location = styled.p`
margin: 10px;
    
`

const DetailDesTitle = styled.div`
    margin-top: 20px;
    font-size: 13px;
    text-align: left;
    color:#603900;
    border: 1px solid #F4EEE4;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 8px 15px;
`
const DetailDesBody = styled.p`
    margin: 13px;
    color:#714709;
    font-size: 12px;
    line-height: 130%;
`
const ClubPage = ({club}) => {
    console.log(club)

    
  return (
    <ClubPageWrapper>
      <ClubImage src={club.main_image} alt="Club Image" />
      
      
      <ClubHeader>
        <div style={{ display: "flex", alignItems: "center" }}>
            <Logo src={club.logo}/>
            <div>
                <ClubTitle>{club.title}</ClubTitle>
                <ClubHastag>{club.hashtag}</ClubHastag>
            </div>
        </div>
        <ClubLocation>
            <Location>동아리방 위치 : {club.roomLocation}</Location>
            <Location>동아리박람회 위치 : {club.boothLocation}</Location>
        </ClubLocation>
      </ClubHeader>

      <ClubDescription>
        <DetailDesTitle>소개글</DetailDesTitle>
        <DetailDesBody>{club.introduce}</DetailDesBody>
        

        <DetailDesTitle>활동안내</DetailDesTitle>
        <DetailDesBody>{club.activity}</DetailDesBody>

        <DetailDesTitle>동아리 부스 안내</DetailDesTitle>
        <DetailDesBody>{club.boothLocation}</DetailDesBody>

        <DetailDesTitle>인스타그램 및 문의</DetailDesTitle>
        <DetailDesBody>📞 : {club.inquiry[0]}</DetailDesBody>
        <DetailDesBody>{club.inquiry[0]}</DetailDesBody>
        <FontAwesomeIcon icon={faCoffee} />

      </ClubDescription>
      {/* Add more components here for additional information */}
    </ClubPageWrapper>
  );
};

export default ClubPage;