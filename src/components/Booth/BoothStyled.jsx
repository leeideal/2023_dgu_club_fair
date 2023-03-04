import styled from 'styled-components';
import { theme } from '../../theme';

export const DateSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #ffa800;
    background-color: ${theme.secondaryColor};
    border-radius: 50%;
  }
`;

export const SelectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 3px solid ${theme.primaryColor};
  border-radius: 50px;
`;

export const SelectButton = styled.button`
  width: 49%;
  height: 90%;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: ${theme.pointColor};
  cursor: pointer;
  font-family: 'insungitCutelivelyjisu';
  transition: 0.2s;
  &:hover {
    background-color: ${theme.primaryColor};
    border-radius: 50px;
  }
`;

export const ImageSection = styled.img`
  width: 100%;
`;
