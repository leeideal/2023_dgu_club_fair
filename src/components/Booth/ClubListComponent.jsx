import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListSection = styled.section`
  width: 90%;
  height: 40px;
  border: 1px solid #f4eee8;
  border-radius: 50px;
  position: relative;
`;

const IdSection = styled.span`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-5%, -50%);
`;

const NameSection = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ClubListComponent = ({ id, name }) => {
  return (
    <>
      {/* <Link to={`/clublist/${id}`} state={{ id, name }}> */}
      <ListSection>
        <IdSection>{id}</IdSection>
        <NameSection>{name}</NameSection>
      </ListSection>
      {/* </Link> */}
    </>
  );
};

export default ClubListComponent;
