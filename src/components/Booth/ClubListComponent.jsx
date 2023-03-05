import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { LinkContext } from '../../context/LinkContext';

const ListSection = styled.section`
  width: 100%;
  height: 40px;
  border: 1px solid #f4eee8;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #ffeded;
  }
`;

const IdSection = styled.span`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-5%, -50%);
  background-color: #fff2d9;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameSection = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ClubListComponent = ({ id, name }) => {
  const { setIdParams } = useContext(LinkContext);
  return (
    <>
      <ListSection
        onClick={() => {
          setIdParams(id);
        }}
      >
        <IdSection>{id}</IdSection>
        <NameSection>{name}</NameSection>
      </ListSection>
    </>
  );
};

export default ClubListComponent;
