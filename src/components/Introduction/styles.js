import styled from 'styled-components';

export const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;

export const CategoryBtn = styled.button`
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.active ? '#603900' : '#D0AF91')};
  &:active {
    background-color: transparent;
    color: #603900;
  }
  font-weight: 600;
  padding-left: 0px;
  &:nth-child(-n + 8) {
    border-right: 1.3px solid #d0af91;
  }
`;
