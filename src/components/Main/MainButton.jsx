import styled from 'styled-components';
import React from 'react';
import NavHover from '../../assets/images/NavHover.png';
import { theme } from '../../theme';

const NavButton = styled.button`
  width: auto;
  height: 50px;
  font-family: 'insungitCutelivelyjisu';
  font-size: 0.7em;
  font-weight: 500;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  transition: border-bottom 2s;
  &:hover {
    border-bottom: 1px solid ${theme.pointColor};
    border-radius: 5px;
  }
`;

const HoverButton = styled.button`
  width: auto;
  height: 50px;
  font-family: 'insungitCutelivelyjisu';
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  background-image: url(${NavHover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const MainButton = ({ pageCurrent, onClick, buttonName }) => {
  return (
    <>
      {pageCurrent ? (
        <HoverButton onClick={onClick}>{buttonName}</HoverButton>
      ) : (
        <NavButton onClick={onClick}>{buttonName}</NavButton>
      )}
    </>
  );
};

export default MainButton;
