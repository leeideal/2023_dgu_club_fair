import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

export const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
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

// 카드 컴포넌트
export const BoothCardContainer = styled.div`
  margin: 50px 400px;
  @media (max-width: 1200px) {
    text-align: center;
    margin: 20px auto;
    margin-left: 50px;
  }
`;

const Container = styled.button`
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #f8f0e4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(25% - 20px);
  margin-right: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:last-child {
    margin-right: 0;
  }
  transition: '0.5s all';
  @media (max-width: 1200px) {
    width: 40%;
    margin-right: 10px;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #513102;
`;

const Text = styled.p`
  font-size: 10px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 20px;
  color: #ccbbaa;
`;

const Image = styled.img`
  float: right;
  text-align: right;
  border-radius: 50%;
  width: 50%;
`;

const Card = ({ title, text, boothId, boothImage, onClick }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/booth/${title}`);
  }

  return (
    <Container onClick={handleClick} className="fadeIn">
      <Title>{title}</Title>
      <Text>{text}</Text>

      <Image>{boothImage}</Image>
      <Image src="https://velog.velcdn.com/images/seochan99/post/ced80216-dbfa-4084-9543-1c73c85bb289/image.png"></Image>
    </Container>
  );
};

export default Card;
