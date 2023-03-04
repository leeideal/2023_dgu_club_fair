import styled from 'styled-components';
import { theme } from '../../theme';

export const SelectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 3px solid ${theme.primaryColor};
  border-radius: 50px;
`;

export const ImageSection = styled.img`
  width: 100%;
`;

export const LogoButton = styled.img`
  width: 50px;
  cursor: pointer;
`;
