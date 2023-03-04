import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
  const navigate = useNavigate();
  const mapCurrent = (mapSection) => {};
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
