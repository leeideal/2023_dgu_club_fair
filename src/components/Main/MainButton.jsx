import styled from 'styled-components';
import React from 'react';
import ButtonHover from '../../assets/images/buttonHover.png';

const NavButton = styled.button`
  width: auto;
  height: 50px;
  font-family: 'insungitCutelivelyjisu';
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  &:hover {
    background-image: url(${ButtonHover});
  }
`;

const MainButton = ({ onClick, buttonName }) => {
  return (
    <>
      <NavButton onClick={onClick}>{buttonName}</NavButton>
    </>
  );
};

export default MainButton;
